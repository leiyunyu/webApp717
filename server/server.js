let express = require('express');
let queryApi = require('./quertApi');
let bodyparser = require('body-parser');
let jwt = require('jsonwebtoken');
let fs = require('fs');
let app = express();
app.use(bodyparser.json())
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Content-Type', 'application/json');
    next();
})

// 获取首页的加载图片
app.post('/mall/index/getGoodsChannel',function(req,res){
    queryApi('/mall/index/getGoodsChannel',req.body,"POST").then(data=>{
        res.end(data);
    })
})
// 注册
app.post('/user/user_register', (req,res) => {
    let user = fs.readFileSync('./data/user.json', {encoding: 'utf-8'})
    console.log(req.body);
    user = JSON.parse(user);
    user.list.push(req.body);
    fs.writeFileSync('./data/user.json', JSON.stringify(user))
    let obj = {
        "code": 1,
        "msg": "SUCCESS"
    }
    res.end(JSON.stringify(obj));
})

//登录
app.post('/user/user_login', (req, res) => {
    let user = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'));
    let token, response, flag = false;
    user.list.forEach((item) => {
        if(item.tele == req.body.tele){
            flag = true;
            if(item.password == req.body.password) {
                token = jwt.sign(req.body, 'leiyun', {expiresIn: 30*30});
                response = {
                    "code": 1,
                    "token": token,
                    "msg": "SUCCESS"
                };
            }else{
                response = {
                    "code": 2,
                    "error": 'error',
                    "msg": "密码错误"
                }
            }  
        }
    });
    if(!flag){
        response = {
            "code": 3,
            "error": 'error',
            "msg": "此用户不存在"
        }
    }
    res.end(JSON.stringify(response));
})
app.post('/admin/classify', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json:charset=utf-8"
    });
    let file =req.body;
    let fileJson = JSON.parse(fs.readFileSync('./data/shoplist.json',{encoding:'utf-8'}));
    res.end(JSON.stringify({code:1, data:fileJson[file.id]}))
});

// 获取城市数据
app.post('/home/address', (req, res) => {
    let list = require('./data/cityList.json');
    res.end(JSON.stringify(list));
})
// 保存地址信息
app.post('/add_addresss', (req, res) => {
    let address = JSON.parse(fs.readFileSync('./data/address.json'));
    console.log(req.body);
    address.list.forEach((v, k) => {
        if(req.body.id == v.id){
            return;
        }
    })
    address.list.push(req.body)
    fs.writeFileSync('./data/address.json', JSON.stringify(address));
    res.end('1')
})
// 删除数据
app.post('/del_addresss', (req, res) => {
    let address = JSON.parse(fs.readFileSync('./data/address.json', 'utf-8'));
    let userlist = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8')).list;
    let flag = ''
    jwt.verify(req.body.token, 'leiyun', (errs, decoded) => {
        if (errs) {
            flag = 'jwt expired';
        } else {
            console.log(decoded)
            userlist.forEach((item, index) => {
                if(item.tele == decoded.tele){
                    if(item.authorization == 'master'){
                        address.list.forEach((v, i) => {
                            if (v.id === req.body.id) {
                                address.list.splice(i, 1);
                            }
                        });
                        fs.writeFileSync('./data/address.json', JSON.stringify(address));
                        flag = 'success';
                    }else{
                        flag = 'err'
                    }
                }
            })
        }
    })
    res.end(JSON.stringify(flag));
})
// 编辑数据
app.post('/address_change', (req, res) => {
    console.log(req.body)
    res.end('1')
})

app.listen('3000',function(){
    console.log('server listen 3000')
})
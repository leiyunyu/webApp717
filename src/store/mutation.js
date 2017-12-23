export default {
    update_cart (state, data) {
        let flag = true; // id相
        state.cart_list = state.cart_list.map(v =>{
            if(v.id == data.id) {
                ++v.count;
                flag=false
            }
            return v;
        });
        if (flag) {
            state.cart_list.push(data);
        }            
    },
    add_user (state, data) {
        state.user = data
    },
    changeChecked (state, data) {
        state.cart_list.map(v => {
            if(v.id == data.id){
                v.checkbox = !v.checkbox;
            }
        })
        let flag = true
        state.cart_list.forEach(v => {
            if(!v.checkbox){
                flag = false;
                state.checkbox = false
            }
        })
        if(flag){
            state.checkbox = true
        }
    },
    checkAll (state, data) {
        state.checkbox = !state.checkbox;
        state.cart_list.map(v => {
            v.checkbox = state.checkbox
        })
    },
    change_num(state, data) {
        state.cart_list.count = data.count
    },
    total_price (state, data) {
        let sum = 0;
        state.cart_list.forEach((v, k) => {
            if(v.checkbox) {
                sum += v.price*v.count;
            }
        })
        state.total_p = sum;
    },
    add_address (state, data) {
        state.address.push(data);
        console.log(state.address)
    },
    upload_tele (state, data) {
        state.tele = data;
        console.log(state.tele)
    }   
}
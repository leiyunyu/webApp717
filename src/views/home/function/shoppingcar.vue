<template>
    <div class="shoppingcar">
        <header class="header">
            <a href="#"></a><a href="#">购物车</a><button>编辑</button>
        </header>
        <section class="sections">
            <div class="shopping">
                <aside class="aside1" v-if="cart_list.length==0">
                    <h3>购物车空空如也</h3>
                    <router-link to="/home/shouye">去逛逛</router-link> 
                </aside>
                <aside class="aside2">
                    
                    <cart-item v-for="(x,i) in cart_list" :key="x.id" :data="x"></cart-item>
					<div class="total-price">
                        <p><span class="bgsa" :class="{'' : isA, 'bgss': isA}" @click="toggle">√</span><span>全选</span>
                        <p><span> 总价：{{this.$store.state.total_p.toFixed(2)}} </span><span>结算</span></p>
                    </div>
                </aside>
            </div>
            <h3>热门推荐</h3>
            <div class="upload">
                <my-upload v-for="(v, k) in imgData" :key="k" :imgdata="v"></my-upload>
            </div>
        </section>
    </div>
</template>

<script>
import myUpload from "../../../components/upload/upload.vue";
import cartItem from "../../../components/cartItem.vue";
export default {
  name: "myShoppingcar",
  data() {
    return {
      imgData: [],
      channelId: 2
    };
  },
  components: {
    myUpload,
    "cart-item": cartItem
  },
  created() {
    this.queryGoodsList();
  },
  computed: {
    cart_list() {
      return this.$store.state.cart_list;
    },
    isA: {
        get: function () {
          return this.$store.state.checkbox
        },
        set: function (newValue) {
          return this.$store.state.checkbox
        }
    }
  },
  methods: {
    toggle: function() {
        this.isA=!this.isA
        this.$store.commit('checkAll',{
            checkbox:!this.$store.state.checkbox
        })
    },
    queryGoodsList: function() {
      this.$http.post("/mall/index/getGoodsChannel", {
          channel_id: this.channelId
        })
        .then(res => {
          let data = JSON.parse(JSON.stringify(res.data));
          this.imgData = this.imgData.concat(res.data.data.data);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.shoppingcar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0 0.2rem;
    box-sizing: border-box;
    button {
      background: #fff;
      border: 0;
      outline: 0;
      font-size: 0.34rem;
    }
    a {
      &:nth-child(1) {
        width: 0.9rem;
      }
      &:nth-child(2) {
        font-size: 0.36rem;
      }
    }
  }
  .sections {
    flex: 1;
    overflow-y: scroll;
    h3 {
      margin-top: 0.18rem;
      font-weight: 400;
      text-align: center;
      line-height: 1rem;
      font-size: 0.32rem;
      background: #fff;
    }
    .shopping {
      width: 100%;
      height: auto;
      background: #fff;
      .aside1 {
        width: 100%;
        height: 4rem;
        background: #fff;
        border-radius: 0.1rem;
        h3 {
          line-height: 2.5rem;
        }
        a {
          width: 2rem;
          text-align: center;
          height: 0.5rem;
          display: block;
          border: 1px solid #f00;
          border-radius: 0.1rem;
          margin: 0 auto;
        }
      }
    }
  }
}
.upload {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.aside2 {
  width: 100%;
  overflow: auto;
  flex: 1;
  .total-price{
      width: 100%;
      height: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      bottom: 1.2rem;
      background: #fff;
      left: 0; 
        .bgsa {
            display: inline-block;
            position: absolute;
            left: 0.2rem;
            top: .3rem;
            width: 0.48rem;
            height: 0.48rem;
            border-radius: 50%;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 0.48rem;
            color:#fff;
            input {
            vertical-align: middle;
            font-size: 100%;
            outline: none;
            font-family: "Microsoft YaHei";
            border-radius: 0;
            }
        }
        .bgss {
            background: #f00;
            border: none;
        } 
      span:nth-child(2){
          margin-left: 1rem;
      }
      p{
          &:nth-child(2){
            span{
                &:nth-child(2){
                    display: inline-block;
                    width: 1.5rem;
                    height: 1.2rem;
                    text-align: center;
                    line-height: 1.2rem;
                    background: orange;
                    color:#fff;
                }
            }
        }
      }
  }
}
</style>

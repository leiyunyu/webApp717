<template>
  <div class="assortment">
    <div class="header">
      <my-header></my-header>
    </div>
    <div class="section02">
      <ul class="menu">
        <li v-for="(v, k) in menuData" :key="k" :class="{'bgli':ind === k}" @click="changeBgc(k)">
          <input type="hidden" :value="v.value">
          <span>{{v.text}}</span>
        </li>
      </ul>
      <div class="container" ref="conbox">
        <div class="goods_li">
          <dl v-for="(x,i) in rightList" :key="i">
            <dt>
              <img :src="'http://www.lb717.com' + x.cate_icon" alt="">
            </dt>
            <dd>{{x.cate_name}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "../../../components/header/header.vue";
import menuData from "../../../Mock/data/menu.js";
export default {
  name: "myAssortment",
  data() {
    return {
      menuData,
      ind: 0,
      rightList: []
    };
  },
  mounted () {
    this.changeBgc(0)
  },
  methods: {
    changeBgc: function(index) {
      this.ind = index;
      this.$loading.show(this.$refs.conbox)
      this.$http
        .post("/admin/classify", {
          id: this.ind + 1
        })
        .then(res => {
          this.$loading.hide()
          this.rightList = res.data.data;
        });
    }
  },
  components: {
    myHeader
  }
};
</script>

<style scoped lang="scss">
.assortment {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
    .header_div {
      width: 100%;
      .hd {
        a {
          input {
            border-radius: 0.2rem !important;
          }
        }
      }
    }
  }
  .section02 {
    flex: 1;
    display: flex;
    .menu {
      width: 2.2rem;
      height: 100%;
      background: #eee;
      li {
        height: 1.1rem;
        text-align: center;
        line-height: 1.1rem;
      }
      .bgli {
        color: #f00;
        background: #fff;
        text-align: center;
        border-right: none;
        border-left: 2px solid #f00;
      }
    }
    .container {
      flex: 1;
      margin-left: 0.1rem;
      background: #cff;
      .goods_li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        dl {
          width: 32%;
          height: auto;
          margin-bottom: 0.16rem;
          margin-right: 1.3%;
          dt {
            width: 100%;
            height: auto;
            img {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>

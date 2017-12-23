<template>
    <div class="mine">
        <header class="header">
            <a href="#">设置</a><a href="#">我的商城</a><a href="#"></a>
        </header>
        <section class="section">
            <div class="name">{{this.$store.state.tele.tele}}</div>
            <h2>我的店铺</h2>
            <div class="goods">
                <dl v-for="(v, k) in list" :key="k">
                    <dt><i :class="v.class"></i></dt>
                    <dd>{{v.name}}</dd>
                </dl>
            </div>
            <div class="form">
                <p><span>我的社区</span><i class="icon iconfont icon-youjiantou-01"></i></p>
                <p><span>账户余额</span><i class="icon iconfont icon-youjiantou-01"></i></p>
                <p @click="router_to"><span>地址管理</span><i class="icon iconfont icon-youjiantou-01"></i></p>
            </div>
        </section>
        <router-view></router-view>
    </div>
</template>

<script>
import jwt from "jsonwebtoken";
import { getCookie } from "../../../until/until.js";
import {setcookie} from '../../../until/until.js';
export default {
  name: "myMine",
  data() {
    return {
      list: [
        {
          class: "icon iconfont icon-fangdajing",
          name: "待付款"
        },
        {
          class: "icon iconfont icon-dianzan",
          name: "待发货"
        },
        {
          class: "icon iconfont icon-erji",
          name: "待收货"
        },
        {
          class: "icon iconfont icon-shezhi1",
          name: "售后"
        },
        {
          class: "icon iconfont icon-shoucang1",
          name: "我的订单"
        }
      ]
    };
  },
  methods: {
    router_to() {
      this.$router.push("/home/mine/position");
    }
  },
  created() {
	// city = URLDecoder.decode(cookie.getValue(), "utf-8");
	// escape(string)
    console.log(getCookie(escape('token')));
  }
};
</script>

<style scoped lang="scss">
.mine {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0 0.12rem;
    box-sizing: border-box;
    a {
      color: #333;
      &:nth-child(3) {
        width: 1rem;
      }
    }
  }
  .section {
    .name {
      width: 100%;
      height: 2rem;
      background: darkorange;
      text-align: center;
      line-height: 2rem;
      color: #fff;
      font-size: 0.4rem;
    }
    h2 {
      font-weight: 400;
      background: #fff;
      width: 100%;
      height: 1rem;
      font-size: 0.34rem;
      line-height: 1rem;
      text-indent: 1em;
    }
    .goods {
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      margin-top: 0.15rem;
      dl {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        dt {
          .icon {
            font-size: 0.4rem;
          }
        }
      }
    }
    .form {
      width: 100%;
      height: 2.4rem;
      background: #fff;
      margin-top: 0.15rem;
      p {
        display: block;
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.15rem;
        box-sizing: border-box;
        input {
          border: 0;
          outline: 0;
          font-size: 0.34rem;
        }
      }
    }
  }
}
</style>

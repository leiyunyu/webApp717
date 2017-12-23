<template>
  <dl class="dl">
        <span class="bgsa" :class="{'' : isA, 'bgss': isA}" @click="toggle">√</span>
        <b class="bgsb"><span class="cancel" @click="cancel()">-</span><span class="num">{{data.count}}</span><span class="add" @click="add()">+</span></b>
        <a href="/mobile/goods/index.html?goods_id=4777&amp;from_uid=79405">
            <dt><img :src="data.url" alt=""></dt>
            <dd>
                <p>{{data.goods_name}}</p>
                <p><b class="bgb"></b><span class="count">{{data.count}}</span></p>
                <p><b class="bgb2"><span class="counts">{{data.price}}</span></b></p>

            </dd>
        </a>
    </dl>
</template>
<script>
export default {
  computed: {
    isA: {
        get: function () {
          return this.data.checkbox;
        },
        set: function (newValue) {
          return this.data.checkbox;
        }
    }
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    toggle: function() {
      this.isA=!this.isA
      this.$store.commit('changeChecked',{
        id:this.data.id,
        checkbox:!this.data.checkbox
      })
      this.$store.commit('total_price', {
        price: this.data.price,
        count: this.data.count
      })
    },
    add () {
        this.$store.commit('change_num',{
            count:++this.data.count
        })
        this.$store.commit('total_price', {
        price: this.data.price,
        count: this.data.count
      })
    },
    cancel (){
        if(this.data.count > 0){
            this.$store.commit('change_num',{
              count:--this.data.count
          })
        }
        this.$store.commit('total_price', {
        price: this.data.price,
        count: this.data.count
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.dl {
  width: 100%;
  height: 2.6rem;
  background: #fff;
  margin-bottom: 0.2rem;
  position: relative;
  .bgsa {
    display: inline-block;
    position: absolute;
    left: 0.2rem;
    top: 1.06rem;
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
  .bgsb {
    position: absolute;
    display: inline-block;
    width: 2rem;
    height: 0.6rem;
    top: 1.4rem;
    right: 0.3rem;
    font-weight: 300;
    line-height: auto;
    border: 1px solid #d8d8d8;
    border-radius: 2px;
    display: -webkit-flex;
    span {
      &:nth-child(1),&:nth-child(3) {
        width: 30%;
        color: #333333;
        font-size: 0.5rem;
        border-right: 1px solid #d8d8d8;
      }
      &:nth-child(2) {
        font-size: 0.36rem;
        width: 40%;
        color: #333333;
        line-height: 0.62rem;
        border-right: 1px solid #d8d8d8;
      }
    }
  }
  dt {
    width: 2rem;
    margin-top: 0.32rem;
    float: left;
    height: 2rem;
    margin-left: 1rem;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
    }
  }
  dd {
    font-size: 0.26rem;
    margin-top: 0.32rem;
    float: left;
    margin-left: 0.2rem;
    .counts {
      font-size: 0.3rem;
      margin-left: 2px;
      color: #fc4141;
      font-weight: bold;
    }
    p {
      &:nth-child(1) {
        width: 4.2rem;
        padding-top: 1rem;
        padding-top: 0.3rem;
        height: 0.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: auto;
        font-size: 0.3rem;
        color: #666666;
      }
      &:nth-child(2) {
        position: absolute;
        bottom: 0.85rem;
      }
      &:nth-child(3) {
        position: absolute;
        bottom: 0.46rem;
      }
    }
  }
}
</style>


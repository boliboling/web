<template>
<div>
    <div class="app-head">
      <div class="app-head-inner">
       <!--  <img src="./assets/logo.png"> -->
      <div class="head-nav">
        <ul class="nav-list">
          <li @click="showDialog('isShowLogin')">登录</li>
          <li class="nav-pile">|</li>
          <li>注册</li>
          <li class="nav-pile">|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
    </div>
    <div class="app-content">
   <keep-alive>
   <router-view></router-view>
   </keep-alive>
    </div>
    <div class="app-foot">
      <p>© 2016 fishenal MIT</p>
    </div>
    <dialog :is-show="isShowLogin" @on-close="hideDialog('isShowLogin')"></dialog>
  </div>
</template>
<script>
import dialog from './components/base/dialog'
export default {
  components: {
    dialog
  },
  data () {
    return {
      isShowAbout: false,
      isShowLogin: false,
      isShowReg: false
    }
  },
  methods: {
    showDialog (param) {
      this[param] = true
    },
    hideDialog (param) {
      this[param] = false
    }
  }
}
</script>
<style scoped>
.app-head{
  background: #363636;
  color:#b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner{
  width: 1200px;
  margin:0 auto;
}
.head-nav{
  float: right;
}
.head-nav ul{
  overflow: hidden;
}
ul{
  list-style: none;
}
.head-nav li{
  cursor: pointer;
  float:left;
}
.nav-pile{
  padding:0 10px;
}
.app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
}
</style>

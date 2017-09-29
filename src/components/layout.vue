<template>
<div>
    <div class="app-head">
      <div class="app-head-inner">
        <img src="../assets/logo.png">
      </div>
      <div class="head-nav">
        <ul class="nav-list">
          <li>登录</li>
          <li class="nav-pile">|</li>
          <li>注册</li>
          <li class="nav-pile">|</li>
          <li>关于</li>
        </ul>
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
    <my-dialog></my-dialog>
  </div>
</template>
<script>
import MyDialog from './base/dialog'
export default {
  components: {
    MyDialog
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>

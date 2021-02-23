<template>
  <div>
    <div class="border">
      <div style="text-align: center; margin-top: 20px; margin-bottom: 20px; font-size: 20px; color: grey">登录</div>
      <div style="display: flex; justify-content: space-around; margin-bottom: 20px">
        <div style="height: 45px; line-height: 45px; font-size: 18px">账号</div>
        <div style="width: 200px">
          <el-input v-model="account" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div style="display: flex; justify-content: space-around ">
        <div style="height: 45px; line-height: 45px; font-size: 18px">密码</div>
        <div style="width: 200px">
          <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        </div>
      </div>
      <div style="text-align: center; margin-top: 30px">
        <el-button type="primary" size="medium" @click="handleLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.is-selected {
  color: #1989fa;
}
.border {
  width: 400px;
  height: 300px;
  border: solid 2px rgb(220, 220, 220);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: auto;
  margin-top: 300px;
  border-radius: 2px;
}
</style>

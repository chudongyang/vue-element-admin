<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginModel" :rules="loginRules">
      <h3 class="login-title">系统登录</h3>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginModel.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="loginModel.password" :type="passwordType"></el-input>
        <span class="show-password" @click="togglePasswordType">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"></svg-icon>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="bindLogin">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    // 必须在el-form-item组件上加上prop属性，校验规则才能生效
    const validatorUsername = (rule, value, callback) => { // 定义用户名的验证规则
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号格式不正确'))
      }
      callback()
    }
    const validatorPassword = (rule, value, callback) => { // 定义密码的验证规则
      if (!value) {
        return callback(new Error('密码不能为空'))
      }
      if (value.length < 6) {
        return callback(new Error('密码不能低于6位'))
      }
      callback()
    }
    return {
      loginModel: { // 表单数据对象
        username: '',
        password: ''
      },
      loginRules: { // 表单验证规则
        username: [{ required: true, trigger: 'blur', validator: validatorUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatorPassword }]
      },
      passwordType: 'password' // 密码输入框的类型
    }
  },
  created () {
  },
  methods: {
    togglePasswordType() { // 切换密码框的type类型，并改变图标的显示
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        console.log(1111111);
        this.passwordType = 'password'
      }
    },
    bindLogin() { // 点击登录

    }
  }
}
</script>
<style lang='stylus'>
  .login-container{
    position: relative;
    height: 100%;
    width: 100%;
    background: #2d3a4b;
    overflow: hidden;
    .login-form{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      display: flex;
      flex-direction: column;
      padding: 0 35px;
      width: 520px;
      box-sizing: border-box;
      .login-title{
        margin-bottom: 40px;
        font-size: 26px;
        color: #eee;
        font-weight: bold;
        text-align: center;
      }
      .el-form-item{
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
        &:last-child{
          border: none;
          background: transparent;
        }
        .el-form-item__content{
          display: flex;
          align-items: center;
          .svg-container{
            padding: 0 16px;
            color: #889aa4;
          }
          .el-input__inner{
            border: 0px;
            padding: 12px 5px 12px 0;
            height: 45px;
            line-height: 45px;
            color: #fff;
            caret-color: #fff;
            background: transparent;
            border-radius: 0px;
          }
          .el-button{
            width: 100%;
          }
          .show-password{
            padding: 0 15px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>

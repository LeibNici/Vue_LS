<template>
  <div>
    <el-form ref="loginForm"
             v-loading="loading"
             :model="loginForm"
             class="loginContainer"
             :rules="formRules">
      <h3 class="loginTitle">系统登陆</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" v-model="loginForm.code" placeholder="点击图片更换验证码"
                  style="width: 250px;margin-right: 5px"></el-input>
        <img :src="captchaUrl" @click="getCode">
      </el-form-item>
      <el-checkbox v-model="loginForm.checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitLogin('loginForm')">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
import {getCaptcha, myLogin} from "../../api/login";

export default {
  name: "Login",
  mounted() {
    this.getCode();
  },
  data() {
    return {
      captchaUrl: '/captcha',
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      checked: true,
      formRules: {
        username: [{
          required: true, message: '请输入用户名', trigger: 'blur'
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }],
        code: [{
          required: true, message: '请输入验证码', trigger: 'blur'
        }]
      },
      loading: false
    }
  },
  methods: {
    submitLogin(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            myLogin(loginForm.username, loginForm.password).then(res => {
              this.loading = false;
              const token = res.data.token;
              window.sessionStorage.setItem('tokenStr', token);
              this.$router.replace('/home');
            }, 2000)
          })

        } else {
          this.$message.error('请输入所有字段');
          return false;
        }
      })
    },
    getCode() {
      getCaptcha().then(res => {
        this.captchaUrl = "data:image/gif;base64," + res.img;
      });
    }
  }
}
</script>

<style>

.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #b6b6b1;
}

.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
}

.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}

.el-form-item__content {
  display: flex;
  align-items: center;
}
</style>
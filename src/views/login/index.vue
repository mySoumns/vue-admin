<template>
  <div class="login-wrap">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" />
      </el-form-item>
      <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
    </el-form>

    <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { postLogin } from "@/api/login";
import { saveString} from "@/utils/index";
import { getMenu } from "@/api/menu";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      },

      // 对话框显示和隐藏
      dialogVisible: false
    };
  },
  created() {
    getMenu().then(res => {
            if (
              res.status === 200 &&
              res.data != null &&
              res.data.length > 0
            ) {
              console.log(res)
            }
          });
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate(valid => {
        if (valid) {
          postLogin({
            username: this.form.username,
            password: this.form.password
          }).then(res => {
            if (res.data.status === 1) {
                console.log(res)
              // 登录成功
              // console.log(res.data.token)
              saveString("token",res.data.token);
              // this.$router.replace({ path: this.$route.query.redirect });
              window.location.href = this.$route.query.redirect
              // this.$router.push({ path: '/form' });
            }
          });
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
}
.login-box {
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  width: 420px;
  height: 300px;
  margin: 0 auto;
  padding: 35px 35px 35px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
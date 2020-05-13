<template>
    <div id="login">
      <div class="title">
        <img src="../assets/image/logo.png" width="128px" alt="">
        <span>煤矿信息化综合监控系统平台 | 欢迎登录</span>
      </div>
      <div class="box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
            <el-input v-model="form.userName" type="text" placeholder="用户名"/>
            <img class="icon" src="../assets/image/username.png" alt="">
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.passWord" type="password" placeholder="密码"></el-input>
            <img class="icon" src="../assets/image/password.png" alt="">
          </el-form-item>
          <el-form-item class="code">
            <el-input v-model="form.code" type="text" placeholder="验证码"></el-input>
            <img class="icon" src="../assets/image/yzm.png" width="18px" alt="">
            <div class="imgCode"><img :src="imgCode" alt="" width="100%" height="100%" @click="getCode"></div>
            <div class="clear"></div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="msg">
          <!--<img src="../assets/image/zy.png" width="24px" alt="">-->
          注：请保管好您的账户名及密码，最好定期修改密码。</p>
      </div>
      <div class="footer">
        <p>未经允许，禁止转载、抄袭、镜像</p>
        <p>版权所有 © 山西鑫博泰自动化科技有限公司 2019 保留一切权利</p>
        </p>

      </div>
    </div>
</template>


<script type="text/ecmascript-6">
  import {getCodeImg} from '@/api/login'
    export default{
        components: {},
        data(){
            return {
              form:{
                userName:'',
                passWord:'',
                code:''
              },
              imgCode:''
            }
        },
        created(){
          this.getCode()
        },
        methods: {
          getCode(){
            getCodeImg('').then(response =>{
              this.imgCode = "data:image/gif;base64,"+ response.data.img;
            })
          }
        }
    }

</script>
<style>
  #login{
    width: 100%;
    background: url("../assets/image/bigbg.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .title{
    width: 70%;
    padding: 20px 0;
    margin: auto;
  }
  .title span{
    font-size: 22px;
    font-weight: 700;
    padding-left: 20px;
  }
  .box{
    width: 360px;
    height: 340px;
    position: absolute;
    top: 25%;
    right: 10%;
    background: url("../assets/image/loginBox.png") no-repeat;
    background-size: 100% 100%;
  }
  #login .el-form{
    padding-top: 12%;
  }
  #login .el-form-item__content{
    margin-left: 10%!important;
  }
  #login .el-input{
    width: 90%;
  }
  #login .el-input__inner{
    background: inherit;
    padding-left: 16%;
    border: 1px solid #5a6888;
  }
  #login .code .el-input__inner{
    padding-left: 30%;
  }
  #login .el-form-item__label{
    color: #fff;
  }
  #login .code .el-input{
    width:46%;
    float: left;
  }
  #login .el-form-item{
    position: relative;
  }
  #login .icon{
    position: absolute;
    left: 10px;
    top: 10px;
  }
  #login .imgCode{
    width: 40%;
    height: 38px;
    float: right;
    border: 1px solid #5a6888;
    margin-right: 10%;
    border-radius: 4px;
  }
  #login .el-button--primary{
    width: 90%;
    font-weight: 700;
  }
  #login .msg{
    padding: 4px;
    text-align: center;
  }
  #login .footer{
    width: 100%;
    position: fixed;
    bottom: 20px;
    text-align: center;
    margin: auto;
  }
  #login .footer p{
    padding: 4px;
  }

</style>

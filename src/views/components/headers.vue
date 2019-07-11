<template>
  <div class="head flex">
    <div class="head-left ">
      <router-link to="/" class="logo"><img src="../../assets/public/logo.png" alt="" class="logo"></router-link>
      <div class="city">
        <el-button class="cityactive" :class="{ active: showcity=='c1' }" @click="citychang()">
          <span>{{citycontss}}</span>
        </el-button>
        <div style="position: absolute;background: #fff;box-shadow: 0px 5px 5px 0 rgba(81, 91, 96, 0.3);z-index: 999;">
          <el-collapse-transition>
            <div v-show="show3" style="padding: 10px 16px;">
              <div class="transition-box">
                <p class="city-tit">选择城市 </p>
                <!--:to="{path:'homelist',query: { ids:citys.cityId}} v-for="(citys ,index) in activecity"@click="sesId(activecity.city_id)""-->
                <p> <span @click="sesId(item.city_id , item.city )" v-for="(item , index) in activecity"> {{item.city}}  </span>
                </p>
              </div>
            </div>
          </el-collapse-transition>
        </div>
      </div>
    </div>
    <div class="head-right flex">
      <div class="nav-box">

        <router-link exact tag="a" :key="index" v-for="(nav, index) in navList" :to="{path:nav.paths }">
          {{nav.name}}
        </router-link>
      </div>
      <div v-if="!loginbtn">
        <a class="delesec" @click="delesec()">退出登录</a>
      </div>
      <div class="loginbox flex" v-if="loginbtn">
        <a class="login" @click="loginbtns()">登录</a><a class="register" @click="loginbtns()">注册</a>
      </div>

      <el-dialog title="登录注册" :visible.sync="dialogFormVisible" class="loginboxss" width="25%">
        <el-form status-icon :rules="rules2" ref="dynamicValidateForm">
          <div class="demo-input-suffix">
            <el-form-item prop="pass" class="span">
              <el-input v-model="tell" placeholder="您的联系方式"></el-input>
            </el-form-item>
          </div>
          <div class="input tell flex">
            <el-input v-model="yzm" placeholder="验证码" class="yzmboxss"></el-input>
            <!--                        <el-button plain @click="getyzm">获取验证码</el-button>-->
            <el-button v-show="msgError==60" slot="append" @click="getyzm" style="width: 129px;">获取验证码
            </el-button>
            <el-button v-show="msgError!=60" slot="append" disabled style="margin: 0;    width: 129px;">
              {{msgError}}秒后重新获取
            </el-button>
            <!--                        <img slot="append" alt="验证码" id="code" style="cursor: pointer" src="/validate"-->
            <!--                             @click="getCode"/>-->
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" class="logingoto" @click="logins()">确 定</el-button>
        </div>
      </el-dialog>
    </div>


    <!--        <template>-->
    <!--            <el-button type="text" >点击打开 Message Box</el-button>-->
    <!--        </template>-->

  </div>
</template>

<script>
  export default {
    name: "headers",
    data() {
      var validatePass = (rule, value, callback) => {
        if (!this.tell) {
          return callback(new Error('手机号不能为空'));
        } else if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.tell)) {
          callback('手机号格式不正确');
        } else {
          callback();
        }
      };
      return {
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ]
        },
        activess: 0,
        loginbtn: true,
        dialogFormVisible: false,
        showmessage: true,
        inlinemessage: true,
        statusicon: true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '0px',
        tell: "",
        yzm: "",
        msgError: 60,
        value1: false,
        show3: false,
        showcity: "c2",
        citycontss: "",
        cityidss: "",
        activecity: [],
        activecitys: "",
        activecitysname: "",
        logindisplay: sessionStorage.getItem("SkyUserId"),
        navList: [
          {name: "我要找房", paths: "/homelist"},
          {name: "委托找房", paths: "/Entrust"},
          {name: "投放房源", paths: "/Housingsupply"},
          {name: "楼市咨询", paths: "/newcont"},
          {name: "地图找房", paths: "/mapbox"},
        ]
      }
    },
    mounted() {
      this.cityget()
      if(sessionStorage.getItem("SkyUserId")){this.loginbtn=false}
      if(this.$route.path=="/collection"){
        if(sessionStorage.getItem("SkyUserId")== ""||sessionStorage.getItem("SkyUserId")== "null"||sessionStorage.getItem("SkyUserId")== null){
          this.$message({
            message: '请先登录',
            type: 'warning',
            duration:1000
          });
          this.loginbtns()
       }
      }
    },

    methods: {
      getyzm() {
        // msgError
        // alert(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.tell))
        // return false
        if (/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.tell)) {
          this.$axios.post("entrustsee/getmasge.action", {
            phone_number: this.tell,
          })
            .then(res => {
              console.log(res.data.code);

             // if (res.data.code == 0) {
                let timer = setInterval(() => {
                  this.msgError = this.msgError - 1
                  if (this.msgError == 0) {
                    clearInterval(timer)
                    this.msgError = 60
                  }
                }, 1000)
                this.success(res.msg)
            //  }
            })
            .catch(error => {
              console.log(error)
            })

        } else {
          this.$message({
            message: '请输入正确的手机号和图文验证码',
            type: 'warning',
            duration:1000
          });

        }


      },

      cityget(idscity) {
        this.$axios.post("main/homePageCity.action", {})
          .then(res => {
            this.activecity = res.data.data
            if (sessionStorage.getItem("Skycityid") == "undefined" || sessionStorage.getItem("Skycityid") == "" || sessionStorage.getItem("Skycityid") == null) {
              sessionStorage.setItem("Skycityid", this.activecity[0].city_id);
              this.cityidss = sessionStorage.getItem("Skycityid")
              sessionStorage.setItem("Skycitycont", this.activecity[0].city);
              this.citycontss = sessionStorage.getItem("Skycitycont")
            } else {
              this.citycontss = sessionStorage.getItem("Skycitycont")
            }
          })
          .catch(error => {
            console.log(error)
          })

      },
      logins() {
        this.$axios.post("client/insert.action", {
          phones: this.tell,
          validate: this.yzm,

        })
          .then(res => {
            console.log(res);
            this.dialogFormVisible = true
            if (res.data.code == 0) {
              this.loginbtn = false
              this.dialogFormVisible = false
              this.$message({
                message: '恭喜你,登录注册成功',
                type: 'success',
                duration:1000
              });
              sessionStorage.setItem("Skytell", this.tell);
              sessionStorage.setItem("SkyUserId", res.data.data);


              this.tell = null
              this.yzm = ""
            } else if (res.data.code == 2) {
              this.$message.error('验证码错误或超时');
            }

          })
          .catch(error => {
            console.log(error)
          })

      },
      loginbtns() {
        this.dialogFormVisible = true
      },
      delesec() {
        this.$confirm('确认退出', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         // sessionStorage.removeItem('SkyUserId')
          sessionStorage.removeItem("Skytell");
          sessionStorage.removeItem("SkyUserId");
          this.loginbtn = true
          this.$message({
            type: 'success',
            message: '退出成功!',
            duration:1000
          });
        }).catch(() => {

        });

      },

      sesId(idss, cont) {
        this.citycontss = cont
        sessionStorage.setItem("Skycityid", idss);
        sessionStorage.setItem("Skycitycont", cont);
        let Urlnum = this.$route.path
        //alert()
        // console.log(123)
        // console.log()
        if(this.$route.query.id){
          this.$router.push({path: `${this.$route.path}?id=yxhf&date=${(new Date()).valueOf()}`})
        }else{
          this.$router.push({path: `${this.$route.path}?date=${(new Date()).valueOf()}`})}

        this.show3 = !this.show3
        this.getactivecity(cont)
      },
      getactivecity(index) {
        //sessionStorage.setItem("Skycity", this.activecity[index].cityId);

       // this.activecitys = sessionStorage.getItem("Skycity")

      },
      citychang() {

        this.show3 = !this.show3
        if (this.showcity == "c1") {
          this.showcity = "c2"
        } else {
          this.showcity = "c1"
        }
      },
      toggleType(type) {
        this.type = type;
        this.active = type
      }
    }
  }
</script>

<style scoped="">
  .transition-box p {
    cursor: pointer
  }

  .transition-box a {
    cursor: pointer
  }

  .loginbox {
    cursor: pointer
  }

  .delesec {
    color: #1ead69;
    line-height: 72px;
    cursor: pointer
  }

  .logingoto {
    width: 100%;
    background-color: #1ead69
  }

  .logingoto .el-button--primary:focus, .el-button--primary:hover {
    background-color: #1ead69
  }

  .loginboxss .dialog-footer .el-button:hover {
    color: #fff;
  }

  .loginboxss .dialog-footer .el-button:focus {
    background-color: #1ead69;
  }

  .yzmboxss {
    width: calc(100% - 129px)
  }

  .loginboxss {
    width: 100%;
    margin: 0 auto;

  }

  .nav-box .router-link-active {
    color: #1EAD69;
  }

  .head {
    height: 70px;
    background-color: #31363a;
    padding: 0 40px;
    box-sizing: border-box;
    position: relative
  }

  .head .logo {
    display: inline-block;
    line-height: 70px;
    margin-right: 15px
  }

  .head .logo img {
    vertical-align: middle
  }

  .head .head-left .el-button {
    background: transparent;
    border: none;
    padding: 7px 10px;
    font-size: 14px;
    border-radius: 2px;
  }

  .head .head-left .el-button i {
    font-size: 12px;
    color: #b6b6b6
  }

  .cityactive {
    color: #fff
  }

  .city-tit {
    color: #b6b6b6;
    font-size: 12px;
  }

  .transition-box a {
    display: inline-block;
    font-size: 12px;
    margin-right: 20px;
    line-height: 20px;
    margin-top: 7px;
    transition: all .4s
  }

  .transition-box a:hover {
    color: #1ead69
  }

  .el-button:hover {
    color: #1ead69
  }

  .el-button:focus {
    color: #fff
  }

  .el-button:focus, .el-button:active {
    background-color: #fff
  }

  .head .head-left .city {
    display: inline-block;
  }

  .cityactive {
    transition: all .4s
  }

  .cityactive.active {
    background-color: #fff !important;
    color: #333;
  }

  .head-right {
    width: 55%
  }

  .nav-box a {
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    display: inline-block;
    margin-right: 35px;
    transition: all .4s
  }

  .nav-box a:hover {
    color: #1ead69;
  }

  .loginbox {
    width: 130px;
    height: 30px;
    border: 1px solid #1ead69;
    border-radius: 50px;
    margin-top: 17px;
    overflow: hidden
  }

  .loginbox .login {
    color: #1ead69;
    display: block;
    width: 50%;
    border-right: 1px solid #1ead69;
    box-sizing: border-box;
    text-align: center;
    line-height: 30px
  }

  .loginbox .register {
    background: #1ead69;
    display: block;
    width: 50%;
    border-right: 1px solid #1ead69;
    box-sizing: border-box;
    text-align: center;
    line-height: 30px;
    color: #fff
  }
</style>

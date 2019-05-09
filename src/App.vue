<template>
  <div id="app">
  <headers/>

  <router-view/>

  <footers/>
  </div>
</template>

<script>
import headers from"./views/components/headers"
import footers from"./views/components/footers"
// import HelloWorld from './components/HelloWorld.vue'

export default {
  activated: function() {
    this.getCase()
  },
  name: 'app',
    methods: {
     formatData(now) {
          var date = new Date(now);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var month = month < 10 ? "0" + month : month;
          var day = day < 10 ? "0" + day : day;
          return year + '-' + month + '-' + day;
        },
    getHrefParam(key) { /*获取地址栏参数*/
      let s = window.location.href;
      let reg = new RegExp(key + "=\\w+");
      let rs = reg.exec(s);
      if (rs === null || rs === undefined) {
        return "";
      } else {
        return rs[0].split("=")[1];
      }
    },},
  components: {
    headers,
    footers,
    // HelloWorld
  }
}

</script>

<style>
@charset "UTF-8";
/*
***重置样式***
*/
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,pre,hr,table,th,td,form,input,button,textarea{margin:0;padding:0;}
header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
table{border-collapse:collapse;border-spacing:0;}
img,iframe{border:0;}
i,em{font-style:normal;}
li,ul,ol{list-style:none;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
textarea{overflow:auto;resize:none;}
label{cursor:default;}
button,input[type="button"], input[type="submit"]{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
a,a:hover,a:active{color:#333;text-decoration:none;}
input,textarea,button{ background:none;  border:none; outline:none; font-family:"Microsoft YaHei", Helvetica, Arial, sans-serif; font-size:12px; }
/*select{-webkit-appearance:none; appearance:none;}*/

/*
***全局公共样式***
*/
html {  font-size: 62.5%;}
body{font-size: 14px; font-size: 1.4rem;  color: #333;  margin: 0 auto;  font-family: 'Microsoft YaHei',Helvetica,Arial,sans-serif;  -webkit-tap-highlight-color: transparent;}
/*浮动*/
.fl ,.lt {  float: left;  }
.fr ,.rt {  float: right;  }
/*清除浮动*/
.clearfix:after{content:"";display:block;clear:both;}
.clearfix{zoom:1;}
.clear {clear:both;}
.flex{display: flex;display:-webkit-flex;justify-content: space-between;flex-wrap: wrap}
/*placeholder 颜色*/
:-moz-placeholder { color: #666; }
::-moz-placeholder { color: #666;}
input:-ms-input-placeholder{ color: #666;}
input::-webkit-input-placeholder{ color: #666;}

/****主体宽度****/
.wrap{width:1200px;margin: 0 auto;}

.banner>img{display: block;width: 100%}


.titleAll{margin-top: 68px}
.titleAll h1{font-size: 28px;font-weight:400;text-align: center;}
.titleAll .Line{width: 84px;height: 2px;background: #31363a;margin: 0 auto;position: relative;margin-top: 26px}
.titleAll .Line span{width:34px;height:4px;background: #1ead69;position: absolute;top: -1px;left: 50%;margin-left: -17px}
.titleAll .tit2{text-align: center;font-size:16px;margin-top: 18px;letter-spacing:30px;margin-left:35px;}

.footer{background-color: #31363a;color: #fff;padding: 80px 115px 100px}
.footer .left{width: calc(50% - 222px)}
.left-bot{margin-top: 60px}
.left-bot p{margin-bottom: 24px}
.footer .center{width: 444px;text-align: center;border-left: 1px solid #919191;border-right: 1px solid #919191;box-sizing: border-box}
.footer .center .tell{font-size:28px;}
.footer .center .data{font-size: 18px;margin: 20px 0}
.footer .right{width: calc(50% - 222px);padding-left: 45px;box-sizing: border-box}
.fot-rita{margin-top:80px;width: 400px;margin-left: 80px}
.footer .right a{color: #fff;display: inline-block;margin-bottom: 24px;padding: 0 10px;border-right: 1px solid #919496;transition: all .4s}
.footer .right a:hover{color: #1ead69}
.footer .right>p{font-size: 20px;font-weight: bold}
.footer .right a:nth-child(4){border-right: none}
.footer .right a:last-child{border-right:none}
@media(max-width:1219px){
    .wrap{width: 90%;}
}


@media(max-width:767px){
    .wrap{width: 96%;}
}
</style>

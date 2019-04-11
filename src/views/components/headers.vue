<template>
    <div class="head flex">
    <div class="head-left ">
        <router-link to="/" class="logo"><img src="../../assets/public/logo.png" alt="" class="logo"> </router-link>
        <div class="city">
        <el-button class="cityactive" :class="{ active: showcity=='c1' }" @click="citychang()">石家庄</el-button>
        <div style="position: absolute;background: #fff;box-shadow: 0px 5px 5px 0 rgba(81, 91, 96, 0.3);z-index: 999;">
            <el-collapse-transition>
                <div v-show="show3" style="padding: 10px 16px;">
                <div class="transition-box">
                    <p class="city-tit">选择城市</p>
                    <p><a href="">石家庄</a><a href="">保定</a><a href="">衡水</a><a href="">西安</a></p>
                </div>
                </div>
            </el-collapse-transition>
        </div>
    </div>
    </div>
    <div class="head-right flex">
        <div class="nav-box"> 
            <router-link tag="a" :key="index" v-for="(nav, index) in navList" :to="{path:nav.paths}" >{{nav.name}}</router-link>                               
        </div>
        <div class="loginbox flex">
        <a href="" class="login">登录</a><a href="" class="register">注册</a>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name:"headers",
    data(){
        return{
               show3: false,
               showcity:"c2",

               navList:[
                        {name:"我要找房",paths:"/details"},
                        {name:"委托找房",paths:"/details1"},
                        {name:"投放房源",paths:"/details2"},
                        {name:"楼市咨询",paths:"/details3"},
                        {name:"地图找房",paths:"/details4"},
                        ]
        }
    },
    methods: {
           citychang(){
               this.show3 = !this.show3
               if(this.showcity=="c1"){
                   this.showcity="c2"
                   }else{
                       this.showcity="c1"  
                   }
           },
           toggleType(type){
               this.type=type;
               this.active=type
           }
         }
}
</script>
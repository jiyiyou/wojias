<template>
<div class="seachbox  ">
	<div class="wrap flex" >
<div class="seach-class flex">
    <div class="as" @click="sxf()">
    <router-link exact tag="a" :to="{path:'/homelist'}">
        <img src="../../assets/public/ico1.png" alt="">普通办公
    </router-link></div>
        <div class="as" @click="sxf()">
    <router-link exact tag="a" :to="{path:'/homelist',query: { id:'yxhf'}}">
        <img src="../../assets/public/ico3.png" alt="">优选好房
    </router-link></div>
    <div class="as">
        <router-link exact tag="a" :to="{path:'/collection',query: { id:'yxhf'}}">
           <i class="el-icon-star-on"></i> 我的收藏
        </router-link></div>
        </div>
 <div class="seach">
        <el-input placeholder="区域/商圈/写字楼名称" v-model="inputSeach" class="input-with-select inputss">
        <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <p class="seachlist"><a href="">品牌公寓 </a><a href="">热租房源</a><a href="">个人房源</a><a href="">阳光主卧</a></p>
       </div>
       </div>
</div>
</template>
<script>
export default {
    name:"seach",
    data(){
        return{
inputSeach:""
        }
    },
    methods:{
        sxf(){
            location.replace(location)
        }

    }
}
</script>
<style scoped>
	.seachbox{height: 100px;padding-top: 40px;box-sizing: border-box;box-shadow: 3px 3px 5px 0 rgba(81, 91, 96, 0.3);}
	.seach-class a{font-size: 20px;color: #8f8e8e;display: inline-block;margin-right: 35px;}
	.seach-class a:hover{color:#209159 ;}
	.seach-class a img{display: inline-block;margin-right: 10px;}
	.seach{width: 50%;position: relative;top: -18px;}
    .as i{color: #1ead69}
	.seachlist a{display: inline-block;;margin-right: 20px;color: #b2b2b2;margin-top: 10px;}
	.seachlist a:hover{color:#209159 ;}
</style>
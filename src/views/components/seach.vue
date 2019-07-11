<template>
<div class="seachbox  ">
	<div class="wrap flex" >
<div class="seach-class flex">
    <div class="as" @click="sxf(1)" :class="{active:asa==1}">

        <img src="../../assets/public/ico1.png" alt="">普通办公
   </div>
        <div class="as" @click="sxf(2)" :class="{active:asa==2}">

        <img src="../../assets/public/ico3.png" alt="">优选好房
    </div>
    <div class="as"   @click="sxf(3)">

           <i class="el-icon-star-on"></i> 我的收藏
        </div>
        </div>
 <div class="seach">
        <el-input placeholder="区域/商圈/写字楼名称" v-model="inputSeach" class="input-with-select inputss">
        <el-button slot="append" icon="el-icon-search" @click="seachs"></el-button>
        </el-input>

        <p class="seachlist">  <router-link exact tag="a" :to="{path:'/homelist'}">  普通办公 </router-link>

          <router-link exact tag="a" :to="{path:'/homelist',query: { id:'yxhf'}}"> 优选好房 </router-link>

          <router-link exact tag="a" :to="{path:'/collection',query: { id:'yxhf'}}"> 我的收藏 </router-link></p>
       </div>
       </div>
</div>
</template>
<script>
export default {
    name:"seach",
    data(){
        return{
          inputSeach:"",
          asa:1
        }
    },
    methods:{
      seachs(){
        this.$router.push({path:'/seachList' , query: {seachs:this.inputSeach}})
      },
        sxf(num){
        if(num==1){
          this.$router.push({path:'/homelist' })
          this.asa=true
        }
          if(num==2){
            this.$router.push({path:'/homelist', query: { id:'yxhf'} })
            this.asa=false
          }
          if(num==3){
            // this.asa=""
            // if(sessionStorage.getItem("SkyUserId")== ""){
            //
            // }

            this.$router.push({path:'/collection', query: { id:'yxhf'} })
          }
          //  location.replace(location)
        }

    },
  mounted() {

      if(this.$route.path!="/homelist"){
        this.asa=""
      }
    if(this.$route.query.id&&this.$route.path=="/homelist"){
      this.asa=2
    }

  },
}
</script>
<style></style>
<style scoped>
  .as.active {color:#209159}
  .router-link-exact-active.router-link-active{color:#209159}
	.seachbox{height: 100px;padding-top: 40px;box-sizing: border-box;box-shadow: 3px 3px 5px 0 rgba(81, 91, 96, 0.3);}
	.seach-class {font-size: 20px;color: #8f8e8e;display: inline-block;margin-right: 35px;}
	/*.seach-class:hover{color:#209159 ;}*/
	.seach-class img{display: inline-block;margin-right: 10px;}
	.seach{width: 50%;position: relative;top: -18px;}
  .as{display:inline-block;width:180px;cursor: pointer;}
    .as i{color: #1ead69}
	.seachlist a{display: inline-block;;margin-right: 20px;color: #b2b2b2;margin-top: 10px;}
	.seachlist a:hover{color:#209159 ;}
</style>

<template>
    <div>
<!--        <seach/>-->
<div class="wrap">
    <div class="navbox">
        <p class="nav" :class="{active : active == 0}" @click="changnav(0)">普通办公</p>
        <p class="nav" :class="{active : active == 1}" @click="changnav(1)">优选好房</p>
    </div>
    <div class="flex" v-show="active==0">
      <p class="err" v-show="showssa">暂无数据</p>
<!--    <div class="list lists" v-for="(item ,index ) in publis">-->
        <div  v-for="(item ,index ) in publis" class="list lists">
        <p class="no" @click="nostar(item.id,1)">取消收藏</p>
        <div class="img">
            <img :src="item.house_picture" alt="">
        </div>
        <router-link :to="{path:'buildingdetails',query: { id: item.houses_new_id}}" tag="div"  class="cont">
            <h1 class="name">{{item.mansion_name}}</h1>
            <p class="money">{{item.money}}{{item.money_unit}}</p>
            <p class="map">[{{item.region_cityname}} - {{item.region_name}}]</p>
        </router-link>
        </div>
<!--    </div>-->
     <div class="list "></div>
     <div class="list "></div>
     <div class="list "></div>
    </div>
    <div class="flex" v-show="active==1">
      <p class="err" v-show="showss">暂无数据</p>
        <div  v-for="(item ,index ) in  goodss" class="list lists">
<!--        <div class="list lists" v-for="(item ,index ) in goodss">-->
            <p class="no" @click="nostar(item.id,2)">取消收藏</p>
            <div class="img">
                <img :src="item.house_picture" alt="">
            </div>
            <router-link  class="cont" :to="{path:'details',query: { id: item.houses_new_id}}" tag="div">
                <h1 class="name">{{item.work_name}}</h1>
                <p class="money">{{item.money}}{{item.money_unit}}</p>
                <p class="map">[{{item.region_cityname}} - {{item.region_name}}]</p>
            </router-link >
<!--        </div>-->
        </div>
        <div class="list "></div>
        <div class="list "></div>
        <div class="list "></div>
    </div>
</div>
    </div>

</template>

<script>

    export default {
        name: "Collection",
        data(){
            return{
              showss:false,
			  showssa:false,
                active:0,
                publis:[],
                goodss:[]
            }
        },
        methods:{
            changnav(ids){
                this.active=ids
            },
            nostar(idss , num){
			
			  this.$confirm('确认取消收藏', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
       
                this.$axios.post("attention/deleteByPrimaryKey.action", {
                    id:idss
                    // houses_new_id:

                })
                    .then(res => {
                        console.log(res);
                        this.publi()
                        this.goods()
                        if(res.code==1){
                            this.active=0
                        }

                    })
          this.$message({
            type: 'success',
            message: '取消收藏成功!'
          });
		  if(num==1){
		    this.publi()
		  }
		  if(num==2){
		      this.goods()
		  }
        }).catch(() => {

        });
			
              
            },
            publi(){

                this.$axios.post("attention/selectScend.action", {
                    user_phone:sessionStorage.getItem("Skytell"),
                    type:1
                    // houses_new_id:
                })
                    .then(res => {
                        console.log(res);
                        if(res.data.code==0){

                            this.publis=res.data.data.data
                            console.log(this.publis)
                            for(let j=0;j<this.publis.length;j++){
                                //alert(this.likelist[j].money_unit)
                                if(this.publis[j].money_unit=="1"){
                                    this.publis[j].money_unit="元/月"
                                }
                                if(this.publis[j].money_unit=="2"){
                                    //alert(this.likelist[j].money_unit)
                                    this.publis[j].money_unit="元/㎡/天"
                                }
                                if(this.publis[j].money_unit=="3"){
                                    this.publis[j].money_unit="元/年"
                                }
                                if(this.publis[j].money_unit=="4"){
                                    this.publis[j].money_unit="元/㎡/月"
                                }
                                if(this.publis[j].money_unit=="5"){
                                    this.publis[j].money_unit="元/㎡"
                                }
                                if(this.publis[j].money_unit=="6"){
                                    this.publis[j].money_unit="万元"
                                }
                            }


                        }
                        if(res.data.code==-1){
                         //   alert("暂无数据")
                          this.publis=[]
                          this.showssa=true
                        }
						 if(res.data.code==0){
                         //   alert("暂无数据")
                          this.showssa=false
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            goods(){

                this.$axios.post("attention/selectThird.action", {
                    user_phone:sessionStorage.getItem("Skytell"),
                    type:2
                    // houses_new_id:
                })
                    .then(res => {
                        console.log(res);
                        if(res.data.code==0){

                            this.goodss=res.data.data.data
                            console.log(123);
                            console.log(this.goodss);
                            for(let i=0;i<this.goodss.length;i++){

                                if(this.goodss[i].money_unit=="1"){

                                    this.goodss[i].money_unit="元/月"
                                }
                                if(this.goodss[i].money_unit=="2"){
                                   // alert(1)

                                    this.goodss[i].money_unit="元/㎡/天"
                                   // alert(this.goodss[i].money_unit)
                                }
                                if(this.goodss[i].money_unit=="3"){
                                    this.goodss[i].money_unit="元/年"
                                }
                                if(this.goodss[i].money_unit=="4"){
                                    this.goodss[i].money_unit="元/㎡/月"
                                }
                                if(this.goodss[i].money_unit=="5"){
                                    this.goodss[i].money_unit="元/㎡"
                                }
                                if(this.goodss[i].money_unit=="6"){
                                    this.goodss[i].money_unit="万元"
                                }
                            }
                        }
                        if(res.data.code==-1){
                          //  alert("暂无数据")
                          this.goodss=[]
                          this.showss=true
                        }
						   if(res.data.code==0){
                          //  alert("暂无数据")
                          this.showss=false
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        },
        mounted() {
            this.publi()
            this.goods()
        },
        components: {
            // seach
        }
    }
</script>

<style scoped>
  .list{cursor: pointer;}
  .err{
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 50px;
    color: #6f7170;
  }
    .list{width: 24%;position: relative;margin-bottom: 20px;transition: all .4s;padding: 10px;box-sizing: border-box }
    .list.lists{width: 24%;position: relative;margin-bottom: 20px;transition: all .4s;padding: 10px;box-sizing: border-box }
.list.lists .img{height: 200px; overflow: hidden;}
.list.lists .img img{width: 100%;display: block}
.list.lists:hover{transform: translate3d(0, -3px, 0);
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.15);}

    .list.lists .no{position: absolute;width:85px;height:35px;line-height:35px;color: #fff;text-align: center;right:10px;top:10px;background: rgba(0,0,0,0.5);cursor: pointer;z-index: 999}
.nav{display: inline-block;    padding:10px 40px; position: relative;cursor: pointer;transition: all .4s;border-bottom:2px solid transparent;}
.nav:hover{color: #1EAD69}
.nav.active{border-bottom:2px solid #1EAD69;  color: #1EAD69;}
.navbox{margin: 20px 0;}
</style>

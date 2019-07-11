<template>
  <div class="home">
    <div class="banner">
      <div class="seach">
<!--        <div class=" inputss">-->
<!--          <el-input v-model="inputSeachs" placeholder="区域/商圈/写字楼名称"></el-input>-->
<!--          -->
<!--        </div>-->
               <el-input placeholder="区域/商圈/写字楼名称" v-model="inputSeach" class="input-with-select inputss">
        <el-button slot="append" icon="el-icon-search " class="btntop" @click="seachs"></el-button>
               </el-input>
        <p class="seach-class flex">
          <router-link exact tag="a" :to="{path:'/homelist'}">
            <img src="../assets/public/ico1.png" alt="">普通办公
          </router-link>

          <router-link exact tag="a" :to="{path:'/homelist',query: { id:'yxhf'}}">
            <img src="../assets/public/ico3.png" alt="">优选好房
          </router-link>

          <router-link exact tag="a" :to="{path:'/collection',query: { id:'yxhf'}}">
            <img src="../assets/public/ico3.png" alt="">我的收藏
          </router-link>
        </p>
      </div>
      <img src="../assets/index/banner.png" alt="">
    </div>

    <div class="titleAll">
      <h1>热门商圈</h1>
      <p><span></span></p>
    </div>

    <div class="section1 wrap flex">
      <div class="sec1-list">
        <div class="imgbox"><img :src="sec1box[0]?sec1box[0].img:''" alt="">
          <div class="Mask"><p>{{sec1box[0]?sec1box[0].introduce:""}}</p></div>
        </div>
        <div class="Line"><img src="../assets/index/sec1ico1.png" alt="">
          <p>{{sec1box[0]?sec1box[0].name:""}}</p></div>
      </div>
      <div class="sec1-list">
        <div class="imgbox"><img :src="sec1box[1]?sec1box[1].img:''" alt="">
          <div class="Mask"><p>{{sec1box[1]?sec1box[1].introduce:""}}</p></div>
        </div>
        <div class="Line"><img src="../assets/index/sec1ico2.png" alt="">
          <p>{{sec1box[1]?sec1box[1].name:""}}</p></div>
      </div>
      <div class="sec1-list">
        <div class="imgbox"><img :src="sec1box[2]?sec1box[2].img:''" alt="">
          <div class="Mask"><p>{{sec1box[2]?sec1box[2].introduce:""}}</p></div>
        </div>
        <div class="Line"><img src="../assets/index/sec1ico3.png" alt="">
          <p>{{sec1box[2]?sec1box[2].name:""}}</p></div>
      </div>
    </div>

    <div class="section2">
      <img src="../assets/index/sec2.png" alt="">
      <p><span>喔家房产提家房产提供全供全方位服务喔家房产</span><span>喔家房产提供全方位家家房产提供全房产提供全服务喔家房产提供服务</span></p>
    </div>

    <div class="titleAll">
      <h1>共享办公</h1>
      <p class="Line"><span></span></p>
      <p class="tit2">提供全方位服务</p>
    </div>

    <div class="section3 wrap flex">
      <router-link :to="{path:'buildingdetails',query: { id: item.building_id}}" tag="div" class="sec3-list"
                   v-for="(item,index) in sec2box" v-show="index<6">
        <a href="">
          <div class="img-box"><img :src="item.img||''" alt=""></div>
          <div class="cont">
            <p class="name">{{item.name}}</p>
            <p class="introduce">{{item.introduce}}</p>
            <p class="map"><img src="../assets/index/map.png" alt="">{{item.building?item.building.region_shname:""}}-{{item.building?item.building.region_cityname:""}}-{{item.building?item.building.region_name:""}}
            </p>
          </div>
        </a>
      </router-link>
      <div class="sec3-list sec3-listlast">
        <a href="">
          <div class="img-box"><img src="../assets/index/sec3.png" alt="">
            <div class="zz">
              <div><p class="add">+</p> <span>查看更多房源</span></div>
            </div>
          </div>
          <div class="cont">
            <p class="name">1000+任你挑选 <img src="../assets/index/sec4more.png" alt=""></p>
          </div>
        </a>
      </div>
    </div>

    <div class="section4">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in sec3box">
          <router-link exact tag="div" class="swiperbox" :to="{path:'/details',query: { id: item.building_id}}">
            <!--            <div class="swiperbox">-->
            <img :src="item.img||''" alt="">
            <div class="cont">
              <p class="name">{{item.name}}</p>
              <div class="flex">
               <p><span class="money" >{{item.housesNew?item.housesNew.money:""}}</span>{{item.housesNew?item.housesNew.money_unit:""}}</p>
                <!--                       <p class="map"><img src="../assets/index/map.png" alt="">{{item.building.region_shname}}-{{item.building.region_cityname}}-{{item.building.region_name}}</p>-->
              </div>
            </div>

            <!--            </div>-->
          </router-link>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>


    </div>

    <div class="titleAll">
      <h1>新闻资讯</h1>
      <p class="Line"><span></span></p>
      <p class="tit2">最新行业动态</p>
    </div>
    <div class="section5 wrap flex">
      <div class="sec5-left">
        <img :src="newbox.jour_pic" alt="">
      </div>
      <div class="sec5-right">
        <router-link exact tag="a" :to="{path:'/news',query: { id: newbox.id}}">
          <h1>{{newbox.title}}<span>NEW</span></h1>
          <p class="newClass">最新资讯</p>
          <p class="newCont">{{newbox.content}}</p>
        </router-link>
        <router-link exact tag="a" class="more" :to="{path:'/news',query: { id: newbox.id}}"><img
                src="../assets/index/more2.png" alt=""></router-link>
      </div>
    </div>

    <div class="section6 wrap flex">
      <div class="sec6-box">
        <h1>行业风云
          <router-link exact tag="a" class="more" :to="{path:'/new',query: { id:1}}"> MORE</router-link>
        </h1>
        <router-link exact tag="a" :key="index" v-for=" (item , index) in newbox.industry" class="sec6-list flex"
                     :to="{path:'/news',query: { id: item.id}}"><p><i></i>{{item.title}}</p><span class="data">{{formatData(item.time)}}</span>
        </router-link>
      </div>
      <div class="sec6-box">
        <h1>行业风云
          <router-link exact tag="a" class="more" :to="{path:'/new',query: { id:2}}"> MORE</router-link>
        </h1>
        <router-link exact tag="a" :key="index" v-for=" (item , index) in newbox.strategy" class="sec6-list flex"
                     :to="{path:'/news',query: { id: item.id}}"><p><i></i>{{item.title}}</p><span class="data">{{formatData(item.time)}}</span>
        </router-link>
      </div>
    </div>

    <div class="section7 wrap">
      <router-link exact tag="a" :to="{path:'/Entrust'}" >
        <img src="../assets/index/sec7.png" alt="">
      </router-link>

    </div>

<!--    <div class="section8 wrap">-->
<!--      <div class="sec8nav-box flex">-->
<!--        <p class="sec8nav" :class="{ active: type==1 }" @click="toggleType(1)">我们的实力 <span></span></p>-->
<!--        <p class="sec8nav" :class="{ active: type==2 }" @click="toggleType(2)">我们的承诺 <span></span></p>-->
<!--        <p class="sec8nav" :class="{ active: type==3 }" @click="toggleType(3)">我们的优势 <span></span></p>-->
<!--      </div>-->
<!--      <div class="sec8cont-box">-->
<!--        <div class="sec8coont flex" v-if="type==1">-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>1全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="sec8coont flex" v-if="type==2">-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>2全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="sec8coont flex" v-if="type==3">-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>3全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--          <div class="sec8cont-list">-->
<!--            <img src="../assets/index/sec8.png" alt="">-->
<!--            <h1>全程免拥</h1>-->
<!--            <p>看房全程免除拥金</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        inputSeachs: '',
        value1: false,
        show3: false,
        showcity: "c2",
        inputSeach: "",
        type: 1,
        active:1,
        sec1box: [],
        sec2box: [],
        sec3box: [],
        newbox: [],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    methods: {
      seachs(){
        this.$router.push({path:'/seachList' , query: {seachs:this.inputSeach}})
      },
      formatData(now) {
        var date = new Date(now);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var month = month < 10 ? "0" + month : month;
        var day = day < 10 ? "0" + day : day;
        return year + '-' + month + '-' + day;
      },
      indexcont(ids) {
        this.$axios.post("main/homePageRecommended.action", {
          cityId: sessionStorage.getItem("Skycityid"),
          type: ids
        })
          .then(res => {
            console.log(res)
            if (ids == 1) {
              this.sec1box = res.data.data

            }
            if (ids == 2) {
              this.sec2box = res.data.data
            }
            if (ids == 3) {
              this.sec3box = res.data.data

              for (let j = 0; j < this.sec3box.length; j++) {

                if(this.sec3box[j].housesNew.money_unit){
                if (this.sec3box[j].housesNew.money_unit == "1") {
                  this.sec3box[j].housesNew.money_unit = "元/月"
                }
                if (this.sec3box[j].housesNew.money_unit == "2") {
                  this.sec3box[j].housesNew.money_unit = "元/㎡/天"
                }
                if (this.sec3box[j].housesNew.money_unit == "3") {
                  this.sec3box[j].housesNew.money_unit = "元/年"
                }
                if (this.sec3box[j].housesNew.money_unit == "4") {
                  this.likelist[j].money_unit = "元/㎡/月"
                }
                if (this.sec3box[j].housesNew.money_unit == "5") {
                  this.sec3box[j].housesNew.money_unit = "元/㎡"
                }
                if (this.sec3box[j].housesNew.money_unit == "6") {
                  this.sec3box[j].housesNew.money_unit = "万元"
                }
              }
              }
            }
            // this.citynum = res.data.data
          })
          .catch(error => {
            console.log(error)
          })


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
      },
      newboxs() {
        this.$axios.post("main/homePageNew.action", {
          // demand: this.formcont.Entrust,
          // user_name: this.formcont.username,
          // phone_number: this.formcont.tell
        })
          .then(res => {
            this.newbox = res.data.data
          })
          .catch(error => {
            console.log(error)
          })
      },
    },
    mounted() {
      setTimeout(() => {
        this.indexcont(1)
        this.indexcont(2)
        this.indexcont(3)
      }, 1000)

      this.newboxs()
    },
    components: {}
  }
</script>

<style scoped>
  .seach .el-input-group__append .btntop {
    color: #fff !important;
  }

  .banner {
    position: relative
  }

  .seach {
    position: absolute;
    width: 40%;
    top: 45%;
    left: 30%
  }

  .inputss {
    border: none
  }

  .banner .el-input-group__append, .el-input-group__prepend {
    border: 1px solid #1ead69;
    border-radius: 4px;
  }

  .banner .el-input-group__append button.el-button {
    background-color: #1ead69;
    border-color: #1ead69
  }

  .banner .el-icon-search {
    color: #fff
  }

  .banner .seach-class {
    width: 40%;
    margin: 0 auto;
    color: #fff;
    margin-top: 15px
  }

  .banner .seach-class a {
    color: #fff;
    transition: all .4s
  }

  .banner .seach-class a:hover {
    color: #1ead69
  }

  .banner .seach-class img {
    vertical-align: middle;
    display: inline-block;
    margin-right: 5px
  }

  .section1 {
    margin-top: 160px
  }

  .sec1-list {
    width: calc(100% / 3);
  }

  .sec1-list .imgbox {
    position: relative;
  }

  .sec1-list .imgbox img {
    display: block;
    width: 100%;
    height:500px
  }

  .sec1-list .imgbox:hover .Mask {
    opacity: 1;
    transform: scale(1, 1)
  }

  .sec1-list .imgbox .Mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: rgba(30, 173, 105, .5);
    opacity: 0;
    transition: all .4s;
    cursor: pointer;
    transform: scale(0, 0)
  }

  .sec1-list .imgbox .Mask p {
    width: 70%;
    margin: 0 auto;
    color: #fff;
    line-height: 2;
    margin-top: 10%;
  }

  .sec1-list:nth-child(2) .imgbox {
    margin-top: -70px
  }

  .Line {
    text-align: center
  }

  .Line p {
    position: relative;
    top: -20px;
    left: 60px
  }

  .sec1-list:nth-child(2) .Line p {
    left: 40px
  }

  .section2 {
    position: relative;
    margin-top: 60px
  }

  .section2 img {
    display: block;
    width: 100%
  }

  .section2 p {
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 20px
  }

  .section2 p span {
    display: block;
    text-align: center;
    color: #fff;
    line-height: 2
  }

  .section3 {
    margin-top: 70px
  }

  .section3 .sec3-list .img-box img {
    display: block;
    width: 100%;
    transition: all .4s;
    height: 285px;
  }

  .section3 .sec3-list .img-box {
    overflow: hidden;
    transition: all .4s;
    position: relative
  }

  .section3 .sec3-list {
    transition: all .4s;
    border: 1px solid #b7bebd;
    box-sizing: border-box;
    margin-bottom: 30px;
    width: 32.5%;
  }

  .section3 .sec3-list:hover {
    box-shadow: 0 5px 8px rgba(0, 0, 0, .3);
    transform: translate3d(0, -3px, 0);
  }

  .section3 .sec3-list:hover .img-box img {
    transform: scale(1.1);
  }

  .section3 .sec3-list .cont {
    padding: 10px;
    box-sizing: border-box
  }

  .section3 .sec3-list .cont .name {
    line-height: 24px;
    font-size: 16px;
    transition: all .4s
  }

  .section3 .sec3-list .cont .name:hover {
    color: #1ead69
  }

  .section3 .sec3-list .cont .introduce {
    margin-top: 10px;
    color: #999;
    word-break:break-all;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;
  }

  .section3 .sec3-list .cont .map {
    text-align: right;
    color: #8c8fa7;
    margin-top:10px
  }

  .section3 .sec3-list .cont .map img {
    margin-right: 3px;
    display: inline-block;
  }

  .sec3-list.sec3-listlast .zz {
    display: flex;
    align-items: center;
    justify-content: center
  }

  .sec3-list.sec3-listlast .zz span {
    display: block;
    font-size: 20px;
    color: #fff;
    margin-top: 30px
  }

  .section3 .sec3-listlast .cont {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px
  }

  .sec3-list.sec3-listlast .img-box .zz {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(30, 173, 105, 1)
  }

  .sec3-list.sec3-listlast .add {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid #fff;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    color: #fff;
  }


  .section4 {
    margin-top: 70px
  }

  .swiperbox {
    position: relative
  }

  .swiperbox > img {
    display: block;
    width: 100%;
    height: 400px;
  }

  .swiperbox .cont {
    position: absolute;
    bottom: 0;
    padding-left: 30px;
    width: calc(100% - 30px);
    background: rgba(0, 0, 0, .4);
    text-align: left;
    transition: all .4s;
    cursor: pointer
  }

  .swiperbox .cont:hover {
    position: absolute;
    bottom: 0;
    padding-left: 70px;
    width: calc(100% - 70px);
    background: rgba(0, 0, 0, .4);
    text-align: left
  }

  .swiperbox .cont .name {
    font-size: 20px;
    color: #fff;
    margin-top: 18px;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .swiperbox .cont:hover .name {
    margin-bottom: 15px
  }

  .money {
    font-size: 28px;
    color: #1ead69;
    margin-right: 15px
  }

  .swiperbox .cont:hover .flex {
    transform: scale(1, 1);
    height: auto;
    transition: all .4s
  }

  .swiperbox .cont .flex {
    color: #fff;
    font-size: 14px;
    margin-bottom: 15px;
    display: block;
    transform: scale(1, 0);
    height: 0;
    transition: all .4s
  }

  .swiperbox .flex p {
    display: inline-block
  }

  .section4 .map {
    padding-top: 15px;
    margin-left: 20px
  }

  .section4 .swiper-pagination-bullet {
    margin: 0 3px
  }

  .section4 .swiper-pagination {
    width: 150px;
    left: 50%;
    position: absolute;
    margin-left: -75px;
  }

  .section4 .swiper-pagination-bullet-active {
    background: #1ead69;
    width: 20px;
    border-radius: 7px;
    margin-top: 20px;
  }


  .section5 {
    margin-top: 70px
  }

  .sec5-left {
    width: 40%
  }

  .sec5-left img {
    display: block;
    width: 100%;
    height: 300px;
  }

  .sec5-right {
    width: 50%
  }

  .sec5-right h1 {
    font-size: 30px;
    font-weight: 400;
    transition: all .4s
  }

  .sec5-right h1:hover {
    color: #1ead69
  }

  .sec5-right h1 span {
    display: inline-block;
    width: 43px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #1ead69;
    line-height: 20px;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    margin-left: 40px;
    margin-top: -10px
  }

  .sec5-right .newCont {
    font-size: 18px;
    line-height: 2;
    transition: all .4s;
    word-break:break-all;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;
  }

  .sec5-right .newCont:hover {
    color: #1ead69
  }

  .sec5-right .newClass {
    margin: 30px 0 50px 0;
    color: #1ead69
  }

  .sec5-right .more {
    margin-top: 20px;
    display: block
  }

  .section6 {
    margin-top: 80px
  }

  .sec6-box {
    width: 45%
  }

  .sec6-box h1 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 30px
  }

  .sec6-box h1 a {
    color: #afb1c1;
    font-size: 12px;
    float: right;
    transition: all .4s
  }

  .sec6-box h1 a:hover {
    color: #1ead69
  }

  .sec6-list i {
    width: 5px;
    height: 5px;
    background-color: #000;
    border-radius: 100%;
    display: inline-block;
    margin-right: 10px;
    position: relative;
    top: -4px;
  }

  .sec6-list {
    font-size: 16px;
    color: #666666;
    margin-bottom: 14px
  }

  .sec6-list:hover p {
    color: #1ead69
  }

  .sec6-list p {
    width: calc(100% - 90px);
    transition: all .4s;
  }

  .sec6-list .data {
    float: right
  }

  .section7 img {
    display: block;
    width: 100%;
    margin-top: 60px
  }

  .section8 {
    margin-top: 70px;
    margin-bottom: 120px
  }

  .sec8nav {
    cursor: pointer;
    position: relative;
    width: calc(100% / 3);
    height: 58px;
    line-height: 58px;
    text-align: center;
    font-size: 22px;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    box-sizing: border-box
  }

  .sec8nav.active {
    background-color: #1ead69;
    color: #fff;
    font-size: 22px;
    border: 1px solid #1ead69;
  }

  .sec8nav span {
    display: none;
    border: 22px solid #1ead69;
    border-bottom: 22px solid transparent;
    border-left: 22px solid transparent;
    border-right: 22px solid transparent;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -30px
  }

  .sec8nav.active span {
    display: block
  }

  .sec8cont-list {
    width: 24%;
    border: 1px solid #e5e5e5;
    padding: 30px;
    box-sizing: border-box;
    margin-top: 30px
  }

  .sec8cont-list img {
    float: left;
    margin-right: 20px;
    vertical-align: middle;
    margin-top: 10px;
  }

  .sec8cont-list h1 {
    font-size: 20px;
    margin-bottom: 12px
  }

  .sec8cont-list p {
    font-size: 16px
  }
</style>


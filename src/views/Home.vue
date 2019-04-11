<template>
  <div class="home">
    <div class="banner">
      <div class="seach">
        <el-input placeholder="区域/商圈/写字楼名称" v-model="inputSeach" class="input-with-select inputss">
        <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <p class="seach-class flex">                  
            <a href=""><img src="../assets/public/ico1.png" alt="">普通办公</a>
            <a href=""><img src="../assets/public/ico2.png" alt="">共享办公</a>
            <a href=""><img src="../assets/public/ico3.png" alt="">创意园区</a>
        </p>
    </div>
    <img src="../assets/index/banner.png" alt="">
</div>

<div class="titleAll">
    <h1>办公类型  热门商圈</h1>
    <p><span></span></p>
</div>

<div class="section1 wrap flex">
<div class="sec1-list">
    <div class="imgbox"><img src="../assets/index/sec11.png" alt="">
        <div class="Mask"><p>新百广场新百广场新百广场新百广场新百广场新百广场新百广场新百广场新百广场新百广场新百广场新百广场新百广场新百广场新百广场</p></div>
    </div>
    <div class="Line"><img src="../assets/index/sec1ico1.png" alt=""><p>新百广场</p></div>   
</div>
<div class="sec1-list">
    <div class="imgbox"><img src="../assets/index/sec12.png" alt=""><div class="Mask"></div></div>
    <div class="Line"><img src="../assets/index/sec1ico2.png" alt=""><p>万达广场</p></div>
</div>
<div class="sec1-list">
    <div class="imgbox"><img src="../assets/index/sec13.png" alt=""><div class="Mask"></div></div>
    <div class="Line"><img src="../assets/index/sec1ico3.png" alt=""><p>中储广场</p></div>
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
    <div class="sec3-list">
        <a href="">
        <div class="img-box"><img src="../assets/index/sec3.png" alt=""></div>        
        <div class="cont">
            <p class="name">财富大厦</p>
            <p class="introduce">长安区高性价比物业</p>
            <p class="map"><img src="../assets/index/map.png" alt="">长安区-广安路</p>
        </div>
        </a>
    </div>
    <div class="sec3-list">
            <a href="">
            <div class="img-box"><img src="../assets/index/sec3.png" alt=""></div>        
            <div class="cont">
                <p class="name">财富大厦</p>
                <p class="introduce">长安区高性价比物业</p>
                <p class="map"><img src="../assets/index/map.png" alt="">长安区-广安路</p>
            </div>
            </a>
        </div>
        <div class="sec3-list">
                <a href="">
                <div class="img-box"><img src="../assets/index/sec3.png" alt=""></div>        
                <div class="cont">
                    <p class="name">财富大厦</p>
                    <p class="introduce">长安区高性价比物业</p>
                    <p class="map"><img src="../assets/index/map.png" alt="">长安区-广安路</p>
                </div>
                </a>
            </div>
            <div class="sec3-list">
                    <a href="">
                    <div class="img-box"><img src="../assets/index/sec3.png" alt=""></div>        
                    <div class="cont">
                        <p class="name">财富大厦</p>
                        <p class="introduce">长安区高性价比物业</p>
                        <p class="map"><img src="../assets/index/map.png" alt="">长安区-广安路</p>
                    </div>
                    </a>
                </div>
                <div class="sec3-list">
                        <a href="">
                        <div class="img-box"><img src="../assets/index/sec3.png" alt=""></div>        
                        <div class="cont">
                            <p class="name">财富大厦</p>
                            <p class="introduce">长安区高性价比物业</p>
                            <p class="map"><img src="../assets/index/map.png" alt="">长安区-广安路</p>
                        </div>
                        </a>
                    </div>
                    <div class="sec3-list sec3-listlast">
                            <a href="">
                            <div class="img-box"><img src="../assets/index/sec3.png" alt=""><div class="zz"><div><p class="add">+</p> <span>查看更多房源</span></div></div></div>        
                            <div class="cont">
                                <p class="name">1000+任你挑选 <img src="../assets/index/sec4more.png" alt=""></p>                         
                            </div>
                            </a>
                        </div>
</div>

<div class="section4">
<swiper :options="swiperOption">
        <swiper-slide>
            <div class="swiperbox">
                <img src="../assets/index/sec4.png" alt="">
                <div class="cont">
                    <p class="name">易得（恋日国际）创新中心</p>
                    <div class="flex">
                        <p><span class="money">1280</span>元/㎡/月</p> 
                        <p class="map"><img src="../assets/index/map.png" alt=""> 长安 - 北二环</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiperbox">
                <img src="../assets/index/sec4.png" alt="">
                <div class="cont">
                    <p class="name">易得（恋日国际）创新中心</p>
                    <div class="flex">
                        <p><span class="money">1280</span>元/㎡/月</p> 
                        <p class="map"><img src="../assets/index/map.png" alt=""> 长安 - 北二环</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiperbox">
                <img src="../assets/index/sec4.png" alt="">
                <div class="cont">
                    <p class="name">易得（恋日国际）创新中心</p>
                    <div class="flex">
                        <p><span class="money">1280</span>元/㎡/月</p> 
                        <p class="map"><img src="../assets/index/map.png" alt=""> 长安 - 北二环</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
    
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
    <img src="../assets/index/sec5.png" alt="">
</div>
<div class="sec5-right">
    <a href="">
    <h1>SOHO中国公开租赁平台上线<span>NEW</span></h1>
    <p class="newClass">最新资讯</p>
    <p class="newCont">继SOHO中国今年先后牵手中国电信、华为、北京移动全面接入5G设备开启办公楼5G时代之后，3月20日，SOHO中国在望京SOHO举行公开...</p>
    </a>
    <a href="" class="more"><img src="../assets/index/more2.png" alt=""></a>
</div>
</div>

<div class="section6 wrap flex">
    <div class="sec6-box">
       <h1>行业风云 <a class="more">MORE</a></h1>
       <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a> 
       <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a>
       <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a>
       <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a>
       <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a>
    </div>
    <div class="sec6-box">
        <h1>找房攻略 <a class="more">MORE</a></h1>
        <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a> 
        <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a>
        <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a>
        <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a>
        <a href="" class="sec6-list flex"><p><i></i>多重政策利好相继释放 环京或逢置业佳期</p><span class="data">2019/04/01</span></a>
    </div>
</div>

<div class="section7 wrap">
    <a href=""><img src="../assets/index/sec7.png" alt=""></a>    
</div>

<div class="section8 wrap">
    <div class="sec8nav-box flex">
        <p class="sec8nav" :class="{ active: type=='sl' }" @click="toggleType('sl')">我们的实力 <span></span></p>
        <p class="sec8nav" :class="{ active: type=='cn' }" @click="toggleType('cn')">我们的承诺 <span></span></p>
        <p class="sec8nav" :class="{ active: type=='ys' }" @click="toggleType('ys')">我们的优势 <span></span></p>
    </div>
    <div class="sec8cont-box">
        <div class="sec8coont flex" v-if="active=='sl'">
            <div class="sec8cont-list">
                <img src="../assets/index/sec8.png" alt="">
                <h1>1全程免拥</h1>
                <p>看房全程免除拥金</p>
            </div>
            <div class="sec8cont-list">
                    <img src="../assets/index/sec8.png" alt="">
                    <h1>全程免拥</h1>
                    <p>看房全程免除拥金</p>
                </div>
                <div class="sec8cont-list">
                        <img src="../assets/index/sec8.png" alt="">
                        <h1>全程免拥</h1>
                        <p>看房全程免除拥金</p>
                    </div>
                    <div class="sec8cont-list">
                            <img src="../assets/index/sec8.png" alt="">
                            <h1>全程免拥</h1>
                            <p>看房全程免除拥金</p>
                        </div>
        </div>
        <div class="sec8coont flex" v-if="active=='cn'">  
                <div class="sec8cont-list">
                <img src="../assets/index/sec8.png" alt="">
                <h1>2全程免拥</h1>
                <p>看房全程免除拥金</p>
            </div>
            <div class="sec8cont-list">
                    <img src="../assets/index/sec8.png" alt="">
                    <h1>全程免拥</h1>
                    <p>看房全程免除拥金</p>
                </div>
                <div class="sec8cont-list">
                        <img src="../assets/index/sec8.png" alt="">
                        <h1>全程免拥</h1>
                        <p>看房全程免除拥金</p>
                    </div>
                    <div class="sec8cont-list">
                            <img src="../assets/index/sec8.png" alt="">
                            <h1>全程免拥</h1>
                            <p>看房全程免除拥金</p>
                        </div></div>
        <div class="sec8coont flex" v-if="active=='ys'">
                <div class="sec8cont-list">
                        <img src="../assets/index/sec8.png" alt="">
                        <h1>3全程免拥</h1>
                        <p>看房全程免除拥金</p>
                    </div>
                    <div class="sec8cont-list">
                            <img src="../assets/index/sec8.png" alt="">
                            <h1>全程免拥</h1>
                            <p>看房全程免除拥金</p>
                        </div>
                        <div class="sec8cont-list">
                                <img src="../assets/index/sec8.png" alt="">
                                <h1>全程免拥</h1>
                                <p>看房全程免除拥金</p>
                            </div>
                            <div class="sec8cont-list">
                                    <img src="../assets/index/sec8.png" alt="">
                                    <h1>全程免拥</h1>
                                    <p>看房全程免除拥金</p>
                                </div>
        </div>
    </div>
</div>


  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
           return {
               show3: false,
               showcity:"c2",
               inputSeach:"",
               type:"sl",
               active:"sl",
               swiperOption: {
          slidesPerView: 3,
          spaceBetween:0,
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
         },
         mounted() {
   
         },
  components: {
  }
}
</script>

<style scoped>
.banner{position: relative}
.seach{position: absolute;width:40%;top:45%;left:30%}
.inputss{border:none}
.banner .el-input-group__append, .el-input-group__prepend{border: 1px solid #1ead69;border-radius: 4px;}
.banner .el-input-group__append button.el-button{background-color: #1ead69;border-color:#1ead69}
.banner .el-icon-search{color: #fff}
.banner .seach-class{width:40%;margin: 0 auto;color: #fff;margin-top: 15px}
.banner .seach-class a{color: #fff;transition: all .4s}
.banner .seach-class a:hover{color:#1ead69 }
.banner .seach-class img{vertical-align: middle;display: inline-block;margin-right: 5px}
.section1{margin-top:160px}
.sec1-list{width: calc(100% / 3);}
.sec1-list .imgbox{position: relative;}
.sec1-list .imgbox img{display: block;width: 100%}
.sec1-list .imgbox:hover .Mask{opacity: 1;transform: scale(1,1)}
.sec1-list .imgbox .Mask{position: absolute;top: 0;bottom: 0;left: 0;right: 0;z-index: 2;background: rgba(30, 173, 105, .5);opacity: 0;transition: all .4s;cursor: pointer;transform: scale(0,0)}
.sec1-list .imgbox .Mask p{width: 70%;margin: 0 auto;color: #fff;line-height:2;margin-top: 50%;}
.sec1-list:nth-child(2) .imgbox{margin-top: -70px}
.Line{text-align: center}
.Line p{position: relative;top: -20px;left:60px}
.sec1-list:nth-child(2) .Line p{left: 40px}
.section2 {position: relative;margin-top: 60px}
.section2 img{display: block;width: 100%}
.section2 p{position: absolute;top: 0;width: 100%;margin-top:20px}
.section2 p span{display: block;text-align: center;color: #fff;line-height: 2}

.section3{margin-top:70px}
.section3 .sec3-list .img-box img{display: block;width: 100%;transition: all .4s}
.section3 .sec3-list .img-box {overflow: hidden;transition: all .4s;position: relative}
.section3 .sec3-list{transition: all .4s;border: 1px solid #b7bebd;box-sizing: border-box;margin-bottom: 30px;}
.section3 .sec3-list:hover{box-shadow: 0 5px 8px rgba(0,0,0,.3);transform: translate3d(0, -3px, 0);}
.section3 .sec3-list:hover .img-box img{transform: scale(1.1);}
.section3 .sec3-list .cont{padding: 10px;box-sizing: border-box}
.section3 .sec3-list .cont .name{line-height: 24px;font-size: 16px;transition: all .4s} 
.section3 .sec3-list .cont .name:hover{color: #1ead69}
.section3 .sec3-list .cont .introduce{margin-top: 10px;color: #999}
.section3 .sec3-list .cont .map{text-align: right;color: #8c8fa7}
.section3 .sec3-list .cont .map img{margin-right: 3px;display: inline-block;}
.sec3-list.sec3-listlast .zz{display: flex; align-items:center;justify-content:center}
.sec3-list.sec3-listlast .zz span{display: block;font-size: 20px;color: #fff;margin-top: 30px}
.section3 .sec3-listlast .cont{display: flex; align-items:center;justify-content:center;padding-top: 30px}
.sec3-list.sec3-listlast .img-box .zz{position: absolute;top: 0 ;bottom: 0 ;left: 0 ;right: 0;background: rgba(30, 173, 105, 1)} 
.sec3-list.sec3-listlast .add{margin: 0 auto;width: 50px;height: 50px;border-radius: 100%;border: 2px solid #fff;text-align: center;line-height: 50px;font-size: 30px;color: #fff;}


.section4{margin-top: 70px}
.swiperbox{position: relative}
.swiperbox>img{display: block;width: 100%}
.swiperbox .cont{position: absolute;bottom: 0;padding-left:30px;width: calc(100% - 30px);background: rgba(0,0,0,.4);text-align: left;transition: all .4s;cursor: pointer}
.swiperbox .cont:hover{position: absolute;bottom: 0;padding-left: 70px;width: calc(100% - 70px);background: rgba(0,0,0,.4);text-align: left}
.swiperbox .cont .name{font-size: 20px;color: #fff;margin-top: 18px;word-break:break-all;overflow: hidden;display: -webkit-box;-webkit-line-clamp:1;-webkit-box-orient: vertical;}
.swiperbox .cont:hover .name{margin-bottom: 15px}
.money{font-size: 28px;color: #1ead69;margin-right: 15px}
.swiperbox .cont:hover .flex{transform: scale(1,1);height: auto;transition: all .4s}
.swiperbox .cont .flex{color: #fff;font-size: 14px;margin-bottom: 15px;display: block;transform: scale(1,0);height: 0;transition: all .4s}
.swiperbox .flex p{display: inline-block}
.section4 .map{padding-top:15px;margin-left: 20px}
.section4 .swiper-pagination-bullet{margin: 0 3px }
.section4 .swiper-pagination {width: 150px; left: 50%;position: absolute; margin-left: -75px;}
.section4 .swiper-pagination-bullet-active{background: #1ead69;width: 20px;border-radius: 7px;margin-top: 20px;}



.section5{margin-top: 70px}
.sec5-left{width: 40%}
.sec5-left img{display: block;width: 100%}
.sec5-right{width:50%}
.sec5-right h1{font-size: 30px;font-weight: 400;transition: all .4s}
.sec5-right h1:hover{color: #1ead69}
.sec5-right h1 span{display: inline-block;width: 43px;height: 20px;line-height: 20px;text-align: center;background: #1ead69;line-height: 20px;color: #fff;font-size:12px;border-radius:4px;margin-left: 40px;margin-top: -10px }
.sec5-right .newCont{font-size: 18px;line-height: 2;transition: all .4s}
.sec5-right .newCont:hover{color: #1ead69}
.sec5-right .newClass{margin: 30px 0 50px 0;color: #1ead69}
.sec5-right .more{margin-top: 20px;display: block}

.section6{margin-top:80px}
.sec6-box{width: 45%}
.sec6-box h1{font-size: 22px;font-weight: 400;margin-bottom: 30px}
.sec6-box h1 a{color: #afb1c1;font-size: 12px;float: right;transition: all .4s}
.sec6-box h1 a:hover{color: #1ead69}
.sec6-list i{width: 5px;height:5px;background-color: #000;border-radius: 100%;display: inline-block;margin-right: 10px;position: relative;top: -4px;}
.sec6-list{font-size: 16px;color: #666666;margin-bottom: 14px}
.sec6-list:hover p{color: #1ead69}
.sec6-list p{width: calc(100% - 90px);transition: all .4s;}
.sec6-list .data{float: right}

.section7 img{display: block;width: 100%;margin-top: 60px}

.section8{margin-top: 70px;margin-bottom: 120px}
.sec8nav{cursor: pointer; position: relative;width: calc(100% / 3);height: 58px;line-height: 58px;text-align: center;font-size: 22px;background-color: #f5f5f5;border: 1px solid #e5e5e5;box-sizing: border-box}
.sec8nav.active{background-color: #1ead69;color: #fff;font-size: 22px;border: 1px solid #1ead69;}
.sec8nav span{display: none;border: 22px solid #1ead69;border-bottom:22px solid transparent;border-left:22px solid transparent;border-right:22px solid transparent;position: absolute;top:100%;left: 50%;margin-left: -30px}
.sec8nav.active span{display: block}
.sec8cont-list{width: 24%;border: 1px solid #e5e5e5;padding: 30px ;box-sizing: border-box;margin-top: 30px}
.sec8cont-list img{float: left;margin-right: 20px;vertical-align: middle;margin-top: 10px;}
.sec8cont-list h1{font-size: 20px;margin-bottom: 12px}
.sec8cont-list p{font-size:16px}
</style>


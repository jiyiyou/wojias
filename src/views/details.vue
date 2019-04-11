<template>
  <div>
    <div class="section1">
    <div class="Housename flex wrap">
        <h1 class="name">城乡林肯荣京国融力宝兴盛国锐好景易居两居</h1>
        <p class="right"><span><i class="el-icon-star-on"></i>收藏</span><span><i class="el-icon-share"></i>分享</span></p>
    </div>  
    <div class="housecont flex wrap">
        <div class="left">
        <swiper :options="swiperOption">
        <swiper-slide><img src="../assets/details/swip.png" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/details/swip.png" alt=""></swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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
        </div>
        <div class="right">
            <div class="housecont-box">
                <h1 class="money">17005<span class="Company">元/月</span><span class="all">（17元/m²/天）</span></h1>
                <div class="houseconts flex">
                    <p class="houseconts-list">
                        <span class="top">69.47m<sup>2</sup></span>
                        <span>建筑面积</span>                                       
                    </p>
                    <p class="houseconts-list">
                        <span class="top">2室1厅</span>
                        <span>高楼层/共16层</span>
                    </p>
                    <p class="houseconts-list">
                        <span class="top">精装修</span>
                        <span>装修程度</span>
                    </p>
                </div>
                <div class="housecontmapbox">
                    <p><span>地址</span>长安 - 北二环-常年路</p>
                    <p><span>楼盘</span>汇景DF</p>
                </div>
            </div>
            <div class="Agent">
                <div class="Agent-top">
                    <img src="image/details/user.png" alt="">
                    <h1>李佳奇</h1>
                    <p>我维护此房源，清楚本房特色</p>
                    <div class="clear"></div>
                </div>
                <div class="Agenttell">
                    <span>免费咨询：</span>
                    400-125-1256
                </div>
            </div>   
        </div>
    </div>
  </div>        
  <div class="section2 wrap flex">
      <div class="left">
          <div class="sec1 sec">
              <h1 class="tit">基本信息</h1>
              <div class="li flex">                            
                  <p class="li-left"><span>最早可租</span>随时可租</p>
                  <p class="li-left"><span>最短租期</span>12月</p>

                           
                    <p class="li-left"><span>面积信息</span>面积69.47㎡，使用率约80%</p>
                    <p class="li-left"><span>交易产权</span>商品房</p>

                          
                    <p class="li-left"><span>建筑结构</span>砖混结构</p>
                    <p class="li-left"><span>房屋用途</span>办公</p>

                          
                    <p class="li-left"><span>配备电梯</span>有</p>
                    <p class="li-left"><span>房屋年限</span>满五年</p>

                           
                    <p class="li-left"><span>供暖方式</span>集中供暖</p>
                    <p class="li-left"><span>抵押信息</span>暂无信息</p>
                </div>
                <p class="Remarks">*注：房源所示“房屋用途、交易权限、建筑结构”仅供参考，购房请以房本信息为准。</p>
          </div>
          <div class="sec2 sec">
              <h1 class="tit">楼盘信息</h1>
              <div class="sec2box flex">
                  <div class="img"><img src="image/details/sec2.png" alt=""></div>                  
                  <div class="sec2box-cont">
                      <p class="name">汇景DF</p>                
                       <div class="li">                            
                        <p class="li-box"><span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</span>长安 - 北二环-常年路</p>
                       </div>
                       <div class="li flex">     
                        <p class="li-box"><span>在租房源</span>420个</p>                       
                        </div>
                        <div class="li flex">    
                        <p class="li-box"><span>总&nbsp;&nbsp;楼&nbsp;&nbsp;层</span>28层</p>                           
                        </div>
                        <div class="li flex">  
                        <div class="li-box li-boxlast flex"><span>入驻企业</span><p>建设银行、中教国际教育交流中心、金吉列移民培训、金杜律师事务所、欧姆龙、诺华制药、果乐网、中银律师、韩国SK</p></div>                           
                        </div>
                  </div>
              </div>
          </div>
          <div class="sec3 sec">
              <h1 class="tit">本房源特色</h1>
              <div class="li flex">                            
                <div class="li-box li-boxlast flex"><span>核心卖点</span><p>此房是满五唯一的房子，正规两后室，业主诚心出售，靠谱卖</p></div>   
                <div class="li-box li-boxlast flex"><span>税费解析</span><p>此房是业主继承过来的，但是房本已经满五年，且为家庭名下唯一住房，不用缴纳增值税和个人所得</p></div>                        
                <div class="li-box li-boxlast flex"><span>交通出行</span><p>公交站有广安大厦站和棉四小区站，距地铁站（博物院站）571米（来源于百度地图），交通十分方便</p></div>   
                <div class="li-box li-boxlast flex"><span>周边配套</span><p>近广安大街地下购物一条街，集购物娱乐于一体；距离博物院站571米（来源于百度地图）；距北国先</p></div>                         
            </div>
          </div>
          <div class="sec4 sec">

        <baidu-map class="map"  center="北京" >
    <bm-view style="width: 100%; height:100px; flex: 1"></bm-view>

  </baidu-map>
          </div>
      </div>
      <div class="right">
          <div class="sec1">
              <div class="tit">
                  <img src="../assets/details/look.png" alt="">
                  <span>预约看房</span>
              </div>
              <p class="stit">该大厦近30天共有8人预约看房</p>
              <div class="input"><el-input v-model="tell" placeholder="手机号码"></el-input></div>
              <div class="input tell flex"><el-input v-model="yzm" placeholder="验证码"></el-input><el-button plain>获取验证码</el-button></div>
              <div class="input success"><el-button type="success">立即预约</el-button></div>
          </div>
          <div class="sec2">
              <div class="tit">
                  <img src="../assets/details/xi.png" alt="">
                  <span>猜你喜欢</span>
              </div>
              <div class="sec2listbox">
                  <div class="sec2list">
                     
                      <img src="../assets/details/rtsec2.png" alt="">
                      <div class="cont">
                      <p class="name">易得（恋日国际）创新中心</p>
                      <div class="flex"><p><i class="el-icon-location-outline"></i>长安 - 北二环</p><p><span>1280</span>元/m²/天</p></div>
                      
                      </div>
                  </div>  
              </div>
          </div>
      </div>
  </div>
</div>   
</template>

<script>
export default {
    name:"detailss",
    data(){
        return{
            tell:"",
            yzm:"",
            center: {lng: 114.465636, lat:38.083229},
            zoom: 3,
             swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
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
    created(){
    this.$axios("http://api.map.baidu.com/place/v2/search?",{
      params:{
        query:美食,
        region:北京,
        output:"json",
        ak:"pdte5B83N8xwZnARmKqMZiF7Cu8b15YX"
      }
    })
      .then(res=>{
        //this.newData = res.data.result.data,
        console.log(res);
      })
      .catch(error=>{
        console.log(error)
      })
  },
    // mounted:{
      
    // },
    methods:{
       encodeURI(urls){
        var urlget =encodeURI(encodeURI(urls))       
        return urlget
        
       } 
       
    //  handler ({BMap, map}) {
    //   console.log(BMap, map)
    //   this.center.lng = 116.404
    //   this.center.lat = 39.915
    //   this.zoom = 15
    // }
    },
    components: {
       
        },
}
</script>

<style scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
.section1 .Housename .name{font-size: 24px}
.section1 .Housename .right{font-size: 14px;cursor: pointer}
.section1 .Housename .right i{display: inline-block;margin-left: 38px;margin-right: 6px;color:#a9a9a9 }

.section1 .housecont{margin-top: 30px}
.section1 .housecont .left{width: 63.3%}
.section1 .housecont .right{width:calc(36.7% - 50px) }
.section1 .swiper-slide img{display: block;width: 100%}
.section1 .housecont-box .money{font-size: 40px;color: #1ead69}
.section1 .housecont-box .Company{font-size: 14px;color: #1ead69;margin-left: 14px;font-weight: 300}
.section1 .housecont-box .all{font-size: 14px;color: #666;margin-left: 20px;font-weight: 300}
.section1 .houseconts-list {text-align: center;color: #999;margin-top: 50px}
.section1 .houseconts-list .top{font-size: 20px;font-weight: bold;display: block;margin-bottom: 10px;color: #000}
.section1 .housecontmapbox{margin-top: 50px}
.section1 .housecontmapbox p{margin-bottom: 18px;font-size: 14px;margin-left: 5px}
.section1 .housecontmapbox p span{color: #999;display: inline-block;margin-right: 30px}
.section1 .Agent{margin-top: 45px}
.section1 .Agent-top img{float: left;margin-right: 10px;margin-top: 4px;}
.section1 .Agent-top h1{font-size: 22px}
.section1 .Agent-top p{font-size: 14px;color: #999;margin-top: 10px}
.section1 .Agenttell{width: 255px;height: 48px;line-height: 48px;text-align: center;background-color: #1ead69;font-size: 20px;font-weight: bold;color: #fff;margin-top: 18px}
.section1 .Agenttell span{font-size: 14px;font-weight: 300;position: relative;top: -2px;color: #fff}


.section2{margin-top: 55px}
.section2 .sec{margin-bottom: 30px;border-bottom: 1px solid #eee;padding-bottom: 30px}
.section2 .left{width: 63.3%}
.section2 .right{width:calc(36.7% - 50px) }
.section2 .left .tit{font-size: 18px;font-weight: 400;margin-bottom: 26px}
.section2 .left .sec1 .li{margin-bottom: 18px}
.section2 .left .sec1 .li .li-left{font-size: 14px;width: 50%;margin-bottom: 20px}
.section2 .left .sec1 .li .li-right{font-size: 14px;width: 50%}
.section2 .left .sec1 .li span{display: inline-block;margin-right: 38px;color: #999}
.section2 .left .sec1 .Remarks{font-size: 12px;color: #999}

.section2 .left .sec2box .img{display: block;width: 137px;height: 100%}
.section2 .left .sec2box .sec2box-cont{width: calc(100% - 167px)}
.section2 .left .sec2box .img img{display: block;width:100%;}
.section2 .left .sec2box-cont .name{font-size: 16px;font-weight: bold;margin-bottom: 24px}
.section2 .left .sec2box .li-box{margin-bottom: 18px}
.section2 .left .sec2box .li-box span{display: inline-block;margin-right: 38px;color: #999;width: 60px}
.section2 .left .sec2box .li-boxlast p{width: calc(100% - 98px);line-height: 2}
.section2 .left .sec3 .li-box{padding: 16px 0;border-bottom: 1px solid #eee}
.section2 .left .sec3 .li-box span{display: inline-block;margin-right: 38px;color: #999;width: 60px}
.section2 .left .sec3 .li-box p{width: calc(100% - 98px);line-height: 2}
.section2 .left .sec3.sec{border-bottom: none}


.section2 .right{width: 280px}
.section2 .right .tit{font-size: 16px;font-weight: bold;margin-bottom: 20px}
.section2 .right .tit img{display: inline-block;margin-right: 10px}
.section2 .right .input{width: 260px;margin-bottom: 10px}
.section2 .right .input.tell .el-input{width:calc(100% - 98px)}
.section2 .right .input.tell .el-input__inner{border-radius: 4px 0 0 4px}
.section2 .right .input.tell .el-button{border-radius: 0 4px 4px 0;padding: 12px 13px;}
.section2 .right .stit{margin: 30px 0 20px 0}
.section2 .right .input.success{margin-top: 30px}
.section2 .right .el-button--success {color: #FFF;background-color: #1ead69;border-color: #1ead69;width: 100%;}
.section2 .right .sec2{margin-top: 50px}
.sec2list {position: relative;margin-bottom: 30px}
.sec2list img{display: block;width: 100%}
.sec2list .cont{position: absolute;bottom: 0;color: #fff;padding: 10px; box-sizing: border-box;width: 100%}
.sec2list .cont .name{margin-bottom: 5px;font-size: 16px}
.sec2list .cont .flex{width: 100%}
.sec2list .cont .flex span{font-size: 18px ;color: #1ead69;display: inline-block;margin-right: 10px}
</style>

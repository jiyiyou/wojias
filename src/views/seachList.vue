<template>
  <div>
    <div class="wrap">
      <p class="err" v-show="showss">暂无数据</p>
      <ul class="house-list">
        <div>
          <template v-for="(item,index) in homeArr">

            <div class="house-cont">
              <div class="img"><img :src="item.mansion_picture" alt=""></div>
              <div class="info">
                <router-link :to="{path:'details',query: { id: index}}" tag="a" class="title">
                  {{item.mansion_name}}
                </router-link>
                <div class="position"><i class="el-icon-location-outline"></i><span style="margin: 0 20px 0 4px">{{item.region_shname}}-{{item.region_cityname}}-{{item.region_name}}</span>
                </div>
                <div class="person">近期有{{item.subscribeCount}}人预约</div>
                <div><span v-for="(items,indexs) in item.housesNews" class="spacebox">{{items.office_space}}m²</span>
                  <span class="spacebox">...</span></div>
              </div>
              <div class="price"><span class="num">{{item.housesNews[0].money}}</span>元/m²/天</div>
              <router-link :to="{path:'buildingdetails',query: { id:item.id}}" tag="a" class="goto">查看详情
              </router-link>
            </div>
          </template>
          <!--<el-pagination small layout="prev, pager, next" :total="50"> </el-pagination>-->
          <el-pagination
                  background
                  :page-size="10"
                  layout="prev, pager, next"
                  :total=total @current-change="changnum(currentPage)" :current-page.sync="currentPage">
          </el-pagination>
        </div>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "seachList",
    data(){
      return{
        showss:false,
        total:0,
        homeArr:[],
        currentPagea:1,
        housesNewArr: []
      }
    },
    methods:{
      changnum(num) {	this.getList(num)  },
      getList(num){
        this.$axios("building/listByBuilding.action",{
            params: {
              filter: 'cityId=' + sessionStorage.getItem("Skycityid") + '&record=' + this.$route.query.seachs,
              pageSize: 10,
              pageNum: num,
            }
        })
          .then(res => {
            this.total=res.data.data.total
            if(res.data.code == -1) {
              //alert("暂无数据")
              this.total=0
              this.showss=true
              this.homeArr = []
              return false
            }
            if(res.data.code == 0) {
              this.total=res.data.data.total
              this.showss=false
              this.homeArr = res.data.data.list
              for(let i = 0; i < this.homeArr.length; i++) {
                console.log(this.homeArr[i].money_unit)

                if(this.homeArr[i].fitment == 1) {
                  this.homeArr[i].fitment = "毛坯"
                }
                if(this.homeArr[i].fitment == 2) {
                  this.homeArr[i].fitment = "简装"
                }
                if(this.homeArr[i].fitment == 3) {
                  this.homeArr[i].fitment = "精装"
                }
                if(this.homeArr[i].fitment == 4) {
                  this.homeArr[i].fitment = "豪装"
                }
                if(this.homeArr[i].money_unit == 1) {
                  this.homeArr[i].money_unit = "元/月"
                }
                if(this.homeArr[i].money_unit == 2) {
                  this.homeArr[i].money_unit = "元/㎡/天"
                }
                if(this.homeArr[i].money_unit == 3) {
                  this.homeArr[i].money_unit = "元/年"
                }
                if(this.homeArr[i].money_unit == 4) {
                  this.homeArr[i].money_unit = "元/㎡/月"
                }
                if(this.homeArr[i].money_unit == 5) {
                  this.homeArr[i].money_unit = "元/㎡"
                }
                if(this.homeArr[i].money_unit == 6) {
                  this.homeArr[i].money_unit = "万元"
                }
                // console.log(this.housesNewArr[i].money_unit)
              }
              console.log(this.homeArr)
            }

          })

      }
    },
    mounted(){
      this.getList(1)
    }
  }
</script>

<style scoped>
  .el-pagination{text-align:center;margin:40px 0}
  .page{text-align:center;margin:40px}
  .wrap{margin:0 auto}
  .homelist >>> .el-pagination{text-align:center;margin:60px auto}
  .err{
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 50px;
    color: #6f7170;
  }
  .okbtn {
    display: inline-block;
    padding: 4px 6px;
    background: #1EAD69;
    color: #fff;
    line-height: 1;
    border-radius: 2px;
    margin-left: 10px;
  }

  .goto {
    width: 118px;
    transition: all .4s;
    height: 36px;
    background: #1EAD69;
    color: #fff;
    text-align: center;
    line-height: 36px;
    position: absolute;
    bottom: 35px;
    right: 30px;
    border-radius: 4px;
    opacity: 0;
  }

  .spacebox {
    display: inline-block;
    width: 72px;
    height: 30px;
    color: #666;
    border: 1px solid #f1f1f1;
    line-height: 27px;
    text-align: center;
    transition: all .4s;
    cursor: pointer;
  }

  .spacebox:hover {
    color: #1EAD69;
    border: 1px solid #1EAD69;
  }

  .inputseach {
    display: inline-block;
    height: 20px;
    border: 1px solid #aba5a5;
    width: 50px;
    margin: 0 5px;
    padding: 2px;
    box-sizing: border-box;
  }

  .container {
    width: 1200px;
    margin: 30px auto 0;
  }

  .search-term {
    line-height: 36px;
  }

  .search-term .title {
    min-width: 110px;
    font-size: 14px;
    color: #222222;
    font-weight: bold;
    text-align: center;
  }

  .search-term .term {
    display: flex;
    flex-wrap: wrap;
  }

  .search-term .term li {
    font-size: 12px;
    color: #4f4f4f;
    margin-right: 40px;
    cursor: pointer;
  }

  .search-term .term li.active {
    color: #1ead69;
  }

  .search-term .select li {
    font-size: 12px;
    color: #1ead69;
    border: 1px solid #1ead69;
    line-height: 22px;
    padding: 0 6px;
  }

  .search-term .cont {
    display: flex;
  }

  .house-list-main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }

  .house-list {
    width:100%;
  }

  .house-cont:hover .goto {
    opacity: 1;
  }

  .house-cont:hover {
    box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
  }

  .house-cont {
    transition: all .4s;
    position: relative;
    display: flex;
    border-bottom: 1px solid #f0ecec;
    padding: 20px;
    cursor: pointer;
  }

  .house-cont .img {
    margin-top: 20px;
    width: 250px;
    height: 180px;
    border-radius: 6px;
    overflow: hidden;
  }

  .house-cont .img:hover img {
    transform: scale(1.4);
  }

  .house-cont .img img {
    width: 100%;
    height: 100%;
    transition: all .2s;
  }

  .house-cont .info {
    margin: 0 20px;
    line-height: 50px;
    padding: 10px 0;
    width: 450px;
  }

  .house-cont .info .title {
    font-size: 20px;
    color: #151515;
  }

  .house-cont .info .position,
  .house-cont .info .person {
    font-size: 14px;
    color: #666;
  }

  .house-cont .price {
    width: 150px;
    font-size: 14px;
    color: #666;
    line-height: 180px;
    text-align: center;
  }

  .house-cont .price .num {
    font-size: 25px;
    color: #1ead69;
  }

  .aside {
    width: 260px;
    padding-top: 20px;
  }

  .aside-cont .title {
    font-size: 16px;
    color: #151515;
    margin: 8px 0 0 12px;
  }

  .aside-cont .bg {
    width: 260px;
    height: 170px;
    background: #f1f1f1 url("/static/images/find-house.png") bottom no-repeat;
    overflow: hidden;
  }

  .aside-cont .count {
    font-size: 14px;
    color: #666;
    text-align: center;
    line-height: 40px;
  }

  .aside-cont .count .num {
    font-size: 16px;
    color: #1ead69;
  }

  .aside-cont .img {
    width: 260px;
    height: 144px;
    background: #eee;
    margin-top: 12px;
  }

  .aside-cont .img img {
    width: 100%;
    height: 100%;
  }

  .aside-cont .info {
    font-size: 12px;
    color: #666666;
    text-align: center;
    line-height: 40px;
  }

  .aside-cont .btn {
    width: 260px;
    height: 50px;
    background: #1ead69;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
</style>

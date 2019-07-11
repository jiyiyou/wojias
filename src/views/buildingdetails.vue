<template>
    <div>
        <seach/>
        <div class="section1">
            <div class="Housename flex wrap">
                <h1 class="name">{{gethomebox.mansion_name}}</h1>
                <p class="right" @click="star()" v-if="active==0"><span><i class="el-icon-star-on"></i>收藏</span></p>
                <p class="right"  v-if="active==1"><span><i class="el-icon-star-on" style="color: #e4e82c"></i>收藏</span></p>
            </div>
            <div class="housecont flex wrap">
                <div class="left">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item, index) in gethomebox.photos"><img :src="item.photo"></swiper-slide>

                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="right">
                    <div class="housecont-box">
                        <h1 class="money">{{gethomebox.housesNews[0].money}}-{{gethomebox.housesNews[housesNewslgt].money}}<span class="Company">元/月</span></h1>
                        <div class="houseconts flex">
                            <p class="houseconts-list">
                                <span class="top">{{housesNewslgt+1}}个</span>
                                <span>在租房源</span>
                            </p>
                            <p class="houseconts-list">
                                <span class="top">{{gethomebox.housesNews[0].office_space}}-{{gethomebox.housesNews[housesNewslgt].office_space}}m²</span>
                                <span>可租面积</span>
                            </p>
                            <p class="houseconts-list">
                                <span class="top">精装修</span>
                                <span>装修程度</span>
                            </p>
                        </div>
                        <div class="housecontmapbox">
                            <p><span>地址</span>{{gethomebox.region_shname}} - {{gethomebox.region_cityname}} - {{gethomebox.region_name}}</p>
                            <p><span>楼盘</span>{{gethomebox.mansion_name}}</p>
                        </div>
                    </div>
                    <div class="Agent">
                        <div class="Agent-top">
                            <span class="jjrimg"><img :src="gethomebox.broker.picture" alt=""></span>
                            <div class="jjrbox">
                            <h1>{{gethomebox.broker.real_name}}</h1>
                            <p>我维护此房源，清楚本房特色</p>
                            </div>

                        </div>
                        <div class="Agenttell">
                            <span>免费咨询：</span>
                            {{gethomebox.broker.phonemunber}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section2 wrap flex">
            <div class="left">
                <h1 class="tit">楼盘信息</h1>
<!--                <div class="sec1 sec">-->
<!--                    <ul class="search-term">-->
<!--                        <li class="cont">-->
<!--                            <div class="title">面积：</div>-->
<!--                            <ul class="term">-->
<!--                                <li class="active">全部</li>-->
<!--                                <li>500-1000㎡（1）</li>-->
<!--                                <li>1000㎡以上（0）</li>-->
<!--                            </ul>-->
<!--                        </li>-->
<!--                        <li class="cont">-->
<!--                            <div class="title">价格：</div>-->
<!--                            <ul class="term">-->
<!--                                <li class="active">全部</li>-->
<!--                                <li>5-7元/㎡/天（3）</li>-->
<!--                                <li>7-9元/㎡/天（1）</li>-->
<!--                            </ul>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
                <div class="sec2 sec">
                    <template>
                        <el-table :data="tableData" align="center" style="width: 100%"
                                  :default-sort="{prop: 'm', order: 'descending'}">
                            <el-table-column prop="date" label="房源" sortable width="180" align="center">
                                <template scope="scope"><img :src="scope.row.date" alt="" class="table-img"/></template>
                            </el-table-column>
                            <el-table-column align="center" prop="m" label="面积" sortable width="140"></el-table-column>
                            <el-table-column align="center" prop="money" label="单价" sortable width="140"></el-table-column>
                            <el-table-column align="center" prop="Renovation" label="装修" sortable width="140"></el-table-column>
                            <el-table-column align="center" label="房源详情" width="120" prop="ids"  >
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row ,tableData)">查看详情</el-button>

                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
                <div class="sec3 sec">
                    <h1 class="tit">楼盘信息</h1>
                    <div class="sec2box flex">
                        <div class="img"><img :src="gethomebox.mansion_picture" alt=""></div>
                        <div class="sec2box-cont">
                            <p class="name">汇景DF</p>
                            <div class="li">
                                <p class="li-box"><span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</span>{{gethomebox.region_shname}} - {{gethomebox.region_cityname}} - {{gethomebox.region_name}}
                                </p>
                            </div>
                            <div class="li flex">
                                <p class="li-box"><span>在租房源</span>{{housesNewslgt+1}}个</p>
                            </div>

                            <div class="li flex">
                                <div class="li-box li-boxlast flex"><span>楼盘简介</span>
                                 {{gethomebox.intro}}</div>
                            </div>
                        </div>
<!--                        <p class="sec3p">-->
<!--                            方正大厦位于上海浦东区，新金桥路1122号，是一个集生态型、智能化、产权式为一体的办公楼。该大厦位于金桥地区，是一个集生态型、智能化、产权式为一体的办公楼。大厦24小时全天候热水供应，与星级酒店服务媲美，定点车-->
<!--                            将为企业出行提供十分的便利。18层以上均为精装修小户型办公房，面积合理，房型设计紧凑，总价充分掌控。</p>-->
                    </div>

                </div>
                <div class="sec4 sec"><h1 class="tit">本房源特色</h1>
                    <div class="maptitlistbox ">
                        <div class="maptitlist" @click="toggleActive(0)" :class="{active : active == 0}">
                            <p>地铁/公交站</p>
                            <span>约7个站点 </span>
                        </div>
                        <div class="maptitlist" @click="toggleActive(1)" :class="{active : active == 1}">
                            <p>餐厅</p>
                            <span>约7个站点 </span>
                        </div>
                        <div class="maptitlist" @click="toggleActive(2)" :class="{active : active == 2}">
                            <p>银行/ATM</p>
                            <span>约7个站点 </span>
                        </div>
                        <div class="maptitlist" @click="toggleActive(3)" :class="{active : active == 3}">
                            <p>酒店</p>
                            <span>约7个站点 </span>
                        </div>
                        <div class="maptitlist" @click="toggleActive(4)" :class="{active : active == 4}">
                            <p>超市</p>
                            <span>约7个站点 </span>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div id="allmap" style="width: 100%; height:500px; "></div>
                    <div class="maplistbox test test-1">
                        <div class="list" v-for="(mapico,indexs) in mapicoall">
                            <p class="p1"><span><img src="../assets/public/mapico.png"
                                                     alt=""/><i>{{indexs+1}}</i></span>{{mapico.name}}</p>
                            <p class="p2">{{mapico.address}}</p>
                        </div>
                    </div>

                    <!-- <baidu-map class="map" :center="center" :zoom="15">
                        <bm-view style="width: 100%; height:500px; "></bm-view>
                        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                        <template  v-for="(mapico,indexs) in mapicoall" >
                        <!-- <bm-marker :position="mapico.location"  :dragging="true"  @click="infoWindowOpen(indexs)" >
                        <bm-info-window  :show="show[indexs]" @close="infoWindowClose" @open="infoWindowOpen(indexs)">我爱北京天安门</bm-info-window>
                        </bm-marker>
                        </template>
                    </baidu-map>  -->

                </div>
            </div>
            <div class="right">
                <div class="sec1">
                    <div class="tit">
                        <img src="../assets/details/look.png" alt="">
                        <span>预约看房</span>
                    </div>
                    <p class="stit">该大厦近30天共有8人预约看房</p>
                    <el-form status-icon :rules="rules2" ref="dynamicValidateForm">
                        <div class="demo-input-suffix">
                            <el-form-item  prop="pass" class="span">
                                <el-input v-model="tell"  placeholder="您的联系方式"></el-input>
                            </el-form-item>
                        </div>
                        <div class="input tell flex">
                            <el-input v-model="yzm" placeholder="验证码"></el-input>
                            <!--                        <el-button plain @click="getyzm">获取验证码</el-button>-->
                            <el-button v-show="msgError=='60'" slot="append" @click="getyzm" style="width: 129px;">获取验证码</el-button>
                            <el-button v-show="msgError!='60'" slot="append" disabled style="margin: 0;    width: 129px;">{{msgError}}秒后重新获取</el-button>
                            <!--                        <img slot="append" alt="验证码" id="code" style="cursor: pointer" src="/validate"-->
                            <!--                             @click="getCode"/>-->
                        </div></el-form>
                    <div class="input success">
                        <el-button type="success" @click="geform()">立即预约</el-button>
                    </div>
                </div>
                <div class="sec2">
                    <div class="tit">
                        <img src="../assets/details/xi.png" alt="">
                        <span>猜你喜欢</span>
                    </div>
                    <div class="sec2listbox">
                        <router-link :to="{path:'details',query: { id: item.id}}" class="sec2list" v-for="(item , index) in likelist">

                            <img :src="item.house_picture" alt="">
                            <div class="cont">
                                <p class="name">{{item.work_name}}</p>
                                <div class=""><p><i class="el-icon-location-outline"></i>{{item.region_shname}} - {{item.region_cityname}} - {{item.region_name}}</p>
                                    <p><span>{{item.money}}</span>{{item.money_unit}}</p></div>

                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    let map = "";
    var sContent =
        "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" +
        "<img style='float:right;margin:4px' id='imgDemo' src='../img/tianAnMen.jpg' width='139' height='104' title='天安门'/>" +
        "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
        "</div>";
    //import BMap from 'BMap'
    import seach from "./components/seach"
    export default {

        name: "detailss",
        data() {
            var validatePass=(rule, value, callback) => { if (!this.tell) {
                return callback(new Error('手机号不能为空'));
            } else if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.tell)) {
                callback('手机号格式不正确');
            } else {
                callback();
            }
            };
            return {
                active:0,
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ]},
                lng:"",
                lat:"",

                housesNewslgt:0,
                gethomebox:[],
                show: false,
                tell: "",
                yzm: "",
                center: {lng: 116.234956, lat: 40.09937},
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
                },
                foodarr: "",
                Hotelarr: "",
                Bankarr: "",
                Restaurantarr: "",
                Supermarketarr: "",
                mapicoall: "",
                active: 0,
                tableData: [],
                likelist:[],
                msgError:60
            }
        },
        methods: {
            star(){
               if(sessionStorage.getItem("Skytell")==null){
                   this.$message({
                       message: '请先登录后再收藏',
                       type: 'warning'
                   });
                   return false
               }
                this.$axios.post("attention/insertSelective.action", {
                    user_phone:sessionStorage.getItem("Skytell"),
                    houses_new_id:this.gethomebox.id,
                    type:1
                    // houses_new_id:

                })
                    .then(res => {
                        console.log(res.data.code);
                        if(res.data.code==2){
                            this.active=1
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            getyzm() {
               // alert(this.tell)
                if (/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.tell)) {
                    this.$axios.post("entrustsee/getmasge.action", {
                        phone_number:this.tell,

                    })
                        .then(res => {
                            console.log(res.data.code);
                            if (res.data.code == 0) {
                                let timer = setInterval(() => {
                                    this.msgError = this.msgError - 1
                                    if (this.msgError == 0) {
                                        clearInterval(timer)
                                        this.msgError = 60
                                    }
                                }, 1000)
                                this.success(res.msg)
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })

                } else {
                    //this.error('请输入正确的手机号和图文验证码')
                }



            },
            geform() {
               // alert(this.$route.query.id)
                //return false
                this.$axios.post("entrustsee/insert.action", {
                    houses_new_id:this.$route.query.id,
                   // houses_new_id:this.gethomebox.building_id,
                    //broker_id:this.gethomebox.broker_id,
                    phone_number:this.tell,
                    validate:this.yzm,
                    type:2
                })
                    .then(res => {
                        console.log(res);
                        if(res.data.code==0){
                            this.$message({
                                message: '恭喜你，预约成功',
                                type: 'success'
                            });
                            this.tell=null
                            this.yzm=""
                        }else if(res.data.code==2){
                            this.$message.error('验证码错误或超时');
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })

            },
            getlik() {
                //alert(this.gethomebox.region_city_id)
                // alert(this.housesNewArr.region_city_id)
                this.$axios.post("housesNew/selectLike.action", {
                    region_city_id:this.gethomebox.region_city_id,
                    page:1,
                    limit:5,

                })
                    .then(res => {
                        if(res.data.data!="null"){
                            this.likelist=res.data.data
                        }

                        for(let j=0;j<this.likelist.length;j++){
                            //alert(this.likelist[j].money_unit)
                            if(this.likelist[j].money_unit=="1"){
                                this.likelist[j].money_unit="元/月"
                            }
                            if(this.likelist[j].money_unit=="2"){
                                //alert(this.likelist[j].money_unit)
                                this.likelist[j].money_unit="元/㎡/天"
                            }
                            if(this.likelist[j].money_unit=="3"){
                                this.likelist[j].money_unit="元/年"
                            }
                            if(this.likelist[j].money_unit=="4"){
                                this.likelist[j].money_unit="元/㎡/月"
                            }
                            if(this.likelist[j].money_unit=="5"){
                                this.likelist[j].money_unit="元/㎡"
                            }
                            if(this.likelist[j].money_unit=="6"){
                                this.likelist[j].money_unit="万元"
                            }
                        }
                        console.log(this.likelist);
                    })
                    .catch(error => {
                        console.log(error)
                    })

            },
            handleEdit(index, row ,ids) {
                // /alert(ids)
                // console.log(index)
                // console.log(ids[index].ids)
                //scope.$index, scope.row ,tableData[scope.$index]
                this.$router.push('/details?id='+ids[index].ids)
            },
            gethomeboxs() {
                //alert(this.$route.query.id)
                this.$axios.post("building/getBuildingById.action", {
                    BuildingId:this.$route.query.id,

                })
                    .then(res => {
                        console.log(111222555);
                        this.gethomebox=res.data.data
                        this.housesNewslgt=this.gethomebox.housesNews.length-1
                        for(let i=0 ;i<this.gethomebox.housesNews.length;i++){

                        if(this.gethomebox.housesNews[i].fitment==1){
                            this.gethomebox.housesNews[i].fitment="毛坯"
                        }
                        if(this.gethomebox.housesNews[i].fitment==2){
                            this.gethomebox.housesNews[i].fitment="简装"
                        }
                        if(this.gethomebox.housesNews[i].fitment==3){
                            this.gethomebox.housesNews[i].fitment="精装"
                        }
                        if(this.gethomebox.housesNews[i].fitment==4){
                            this.gethomebox.housesNews[i].fitment="豪装"
                        }
                        if(this.gethomebox.housesNews[i].money_unit==1){
                            this.gethomebox.housesNews[i].money_unit="元/月"
                        }
                        if(this.gethomebox.housesNews[i].money_unit==2){
                            this.gethomebox.housesNews[i].money_unit="元/㎡/天"
                        }
                        if(this.gethomebox.housesNews[i].money_unit==3){
                            this.gethomebox.housesNews[i].money_unit="元/年"
                        }
                        if(this.gethomebox.housesNews[i].money_unit==4){
                            this.gethomebox.housesNews[i].money_unit="元/㎡/月"
                        }
                        if(this.gethomebox.housesNews[i].money_unit==5){
                            this.gethomebox.housesNews[i].money_unit="元/㎡"
                        }
                        if(this.gethomebox.housesNews[i].money_unit==6){
                            this.gethomebox.housesNews[i].money_unit="万元"
                        }
                            this.tableData.push({
                                date:this.gethomebox.housesNews[i].house_picture,
                                m:this.gethomebox.housesNews[i].office_space+"㎡",
                                money:this.gethomebox.housesNews[i].money+this.gethomebox.housesNews[i].money_unit,
                                Renovation:this.gethomebox.housesNews[i].fitment,
                                ids:this.gethomebox.housesNews[i].id,

                            })
                            console.log(789789)
                            console.log(this.tableData)
                        }
                            // this.tableData[i].date=this.gethomebox.housesNews[i].house_picture
                            // this.tableData[i].m=this.gethomebox.housesNews[i].office_space+"㎡"
                            // this.tableData[i].money=this.gethomebox.housesNews[i].money+this.gethomebox.housesNews[i].money_unit
                            // this.tableData[i].Renovation=this.gethomebox.housesNews[i].fitment
                            this.getlik()

                            this.mapClass("美食", "北京", "foods")
                            this.mapClass("酒店", "北京", "Hotels")
                            this.mapClass("银行", "北京", "Banks")
                            this.mapClass("交通设施", "北京", "Restaurants")
                            this.mapClass("购物", "北京", "Supermarkets")
console.log(777777)
                            console.log(this.foodarr)
                            this.map(this.foodarr ,this.gethomebox.longitude,this.gethomebox.latitude)



                        console.log(res.data.data);
                    })
                    .catch(error => {
                        console.log(error)
                    })

            },
            map(arr,ji,we) {
                console.log(arr)
                console.log(999888)
                //alert(ji)
               // alert(we)
                map = new BMap.Map("allmap");
                map.enableScrollWheelZoom();
                map.centerAndZoom(new BMap.Point(ji,we), 16);
// 	var data_info = [[116.417854,39.921988,"地址：北京市东城区王府井大街88号乐天银泰百货八层"],
// 					 [116.406605,39.921585,"地址：北京市东城区东华门大街"],
// 					 [116.412222,39.912345,"地址：北京市东城区正义路甲5号"],
// [116.412222,39.912345,"地址：北京市东城区正义路甲5号"],[116.412222,39.912345,"地址：北京市东城区正义路甲5号"],
// [116.412222,39.912345,"地址：北京市东城区正义路甲5号"],[116.412222,39.912345,"地址：北京市东城区正义路甲5号"],
// [116.412222,39.912345,"地址：北京市东城区正义路甲5号"],[116.412222,39.912345,"地址：北京市东城区正义路甲5号"],
// [116.412222,39.912345,"地址：北京市东城区正义路甲5号"]
// 					];
                // var opts = {
                // 			width : 250,     // 信息窗口宽度
                // 			height: 80,     // 信息窗口高度
                // 			title : "" , // 信息窗口标题
                // 			enableMessage:true//设置允许信息窗发送短息
                // 		   };
                for (let i = 0; i < arr.length; i++) {
                    // console.log(arr.length)
                    console.log(arr[i].location.lng, arr[i].location.lat)
                    var marker = new BMap.Marker(new BMap.Point(arr[i].location.lng, arr[i].location.lat));  // 创建标注
                    var content = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>" + arr[i].name + "</h4>" +
                        "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>" + arr[i].address + "</p>" +
                        "</div>";
                    map.addOverlay(marker);
                    //   var sContent=
                    // 将标注添加到地图中
                    addClickHandler(content, marker);
                }

                function addClickHandler(content, marker) {
                    console.log(111)
                    console.log(marker)
                    marker.addEventListener("click", function (e) {
                            openInfo(content, e)
                        }
                    );
                }

                function openInfo(content, e) {
                    var p = e.target;
                    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                    //var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
                    var infoWindow = new BMap.InfoWindow(content);
                    map.openInfoWindow(infoWindow, point); //开启信息窗口

                }
            },
            formatter(row, column) {
                console.log(row.address)
                return row.address;
            },
            toggleActive(itemss) {
                if (itemss == 0) {
                    this.mapicoall = this.foodarr;
                    this.active = 0
                    this.map(this.mapicoall,this.gethomebox.longitude,+this.gethomebox.latitude)
                    return false
                }

                if (itemss == 1) {
                    this.mapicoall = this.Hotelarr;
                    this.map(this.mapicoall,this.gethomebox.longitude,+this.gethomebox.latitude)
                    this.active = 1
                    // alert(itemss)
                    return false
                }

                if (itemss == 2) {
                    this.mapicoall = this.Bankarr;
                    this.map(this.mapicoall,this.gethomebox.longitude,+this.gethomebox.latitude)
                    this.active = 2
                    return false
                }

                if (itemss == 3) {
                    this.mapicoall = this.Restaurantarr;
                    this.map(this.mapicoall,this.gethomebox.longitude,+this.gethomebox.latitude)
                    this.active = 3
                    return false
                }

                if (itemss == 4) {
                    this.mapicoall = this.Supermarketarr;
                    this.map(this.mapicoall,this.gethomebox.longitude,+this.gethomebox.latitude)
                    this.active = 4
                    return false
                }

            },
            mapClass(querys, regions, arr) {
                console.log(123456789)
                console.log()
                this.$axios("https://api.map.baidu.com/place/v2/search?", {
                    params: {
                        query: querys,
                        location:this.gethomebox.latitude+','+this.gethomebox.longitude,
                        radius:"5000",
                        //region: regions,
                        output: "json",
                        ak: "pdte5B83N8xwZnARmKqMZiF7Cu8b15YX"
                    }

                })
                    .then(res => {
                        console.log(res)
                        if (arr == "foods") {
                            this.foodarr = res.data.results
                            this.mapicoall = res.data.results
                            console.log(this.foodarr);
                            this.map(res.data.results,this.gethomebox.longitude,+this.gethomebox.latitude)
                            return false
                        }

                        if (arr == "Hotels") {
                            this.Hotelarr = res.data.results
                            // console.log( this.Hotelarr)
                            return false
                        }

                        if (arr == "Banks") {
                            this.Bankarr = res.data.results
                            //  console.log( this.Bankarr)
                            return false
                        }

                        if (arr == "Restaurants") {
                            this.Restaurantarr = res.data.results
                            //   console.log( this.Restaurantarr)
                            return false
                        }

                        if (arr == "Supermarkets") {
                            this.Supermarketarr = res.data.results
                            //   console.log( this.Supermarketarr)
                            return false
                        }



                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        mounted() {
this.gethomeboxs()

            // this.map()
        },
        components: {
            seach
        }
    }
</script>

<style scoped>
    .jjrimg{display: inline-block;width:75px;height:75px;border-radius: 100%;overflow: hidden;border: 1px solid transparent;}
    .jjrimg img{display: block;width: 100%}
    .jjrbox{display: inline-block;position: relative;top: -10px;left: 10px;}
    .section1{
        margin-top: 20px;
    }
    .sec2.sec.el-table th > .cell {
        text-align: center;
    }

    .bm-view {
        width: 100%;
        height: 300px;
    }

    .section1 .Housename .name {
        font-size: 24px
    }

    .section1 .Housename .right {
        font-size: 14px;
        cursor: pointer
    }

    .section1 .Housename .right i {
        display: inline-block;
        margin-left: 38px;
        margin-right: 6px;
        color: #a9a9a9
    }

    .section1 .housecont {
        margin-top: 30px
    }

    .section1 .housecont .left {
        width: 63.3%
    }

    .section1 .housecont .right {
        width: calc(36.7% - 50px)
    }

    .section1 .swiper-slide img {
        display: block;
        width: 100%;
        height: 500px;
    }

    .section1 .housecont-box .money {
        font-size: 40px;
        color: #1ead69
    }

    .section1 .housecont-box .Company {
        font-size: 14px;
        color: #1ead69;
        margin-left: 14px;
        font-weight: 300
    }

    .section1 .housecont-box .all {
        font-size: 14px;
        color: #666;
        margin-left: 20px;
        font-weight: 300
    }

    .section1 .houseconts-list {
        text-align: center;
        color: #999;
        margin-top: 50px
    }

    .section1 .houseconts-list .top {
        font-size: 20px;
        font-weight: bold;
        display: block;
        margin-bottom: 10px;
        color: #000
    }

    .section1 .housecontmapbox {
        margin-top: 50px
    }

    .section1 .housecontmapbox p {
        margin-bottom: 18px;
        font-size: 14px;
        margin-left: 5px
    }

    .section1 .housecontmapbox p span {
        color: #999;
        display: inline-block;
        margin-right: 30px
    }

    .section1 .Agent {
        margin-top: 45px
    }

    .section1 .Agent-top img {
        float: left;
        margin-right: 10px;
        margin-top: 4px;
    }

    .section1 .Agent-top h1 {
        font-size: 22px
    }

    .section1 .Agent-top p {
        font-size: 14px;
        color: #999;
        margin-top: 10px
    }

    .section1 .Agenttell {
        width: 255px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        background-color: #1ead69;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        margin-top: 18px
    }

    .section1 .Agenttell span {
        font-size: 14px;
        font-weight: 300;
        position: relative;
        top: -2px;
        color: #fff
    }


    .section2 {
        margin-top: 55px
    }

    .section2 .sec {
        margin-bottom: 30px;
        border-bottom: 1px solid #eee;
        padding-bottom: 30px
    }

    .section2 .left {
        width: 63.3%
    }

    .section2 .right {
        width: calc(36.7% - 50px)
    }

    .section2 .left .tit {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 26px
    }

    .term li.active {
        color: #1EAD69;
        margin-bottom: 20px;
    }

    .term li {
        display: inline-block;
        margin-right: 35px;
    }

    .search-term .title {
        display: inline-block;
        margin-right: 35px;
    }

    .search-term .term {
        display: inline-block;
        margin-right: 35px;
    }

    .table-img {
        width: 140px;
        height: 100px;
        display: block;
    }

    .section2 .left .sec2box .img {
        display: block;
        width: 137px;
        height: 100%
    }

    .section2 .left .sec2box .sec2box-cont {
        width: calc(100% - 167px)
    }

    .section2 .left .sec2box .img img {
        display: block;
        width: 100%;
    }

    .section2 .left .sec2box-cont .name {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 24px
    }

    .section2 .left .sec2box .li-box {
        margin-bottom: 18px
    }

    .section2 .left .sec2box .li-box span {
        display: inline-block;
        margin-right: 38px;
        color: #999;
        width: 60px
    }

    .section2 .left .sec2box .li-boxlast p {
        width: calc(100% - 98px);
        line-height: 2
    }

    .sec3p {
        text-indent: 2em;
        line-height: 1.8;
    }

    .maptitlist {
        cursor: pointer;
        position: relative;
    }

    .maplistbox .list {
        position: relative;
    }

    .maplistbox .list span {
        position: absolute;;
        top: 5px;
        left: -20px;
    }

    .maplistbox .list span i {
        position: absolute;;
        top: 0px;
        left: 4px;
        color: #fff;
    }

    .maptitlist.active {
        font-weight: bold;
    }

    .maptitlist span {
        color: #999;
        display: inline-block;;
        margin-top: 5px;
    }

    .maptitlist {
        display: inline-block;
        margin-right: 20px;
    }

    .maptitlist {
        float: left;;
        padding: 5px 10px;
        height: 50px
    }

    .sec4 {
        position: relative;
    }

    .test {
        width: 180px;
        height: 400px;
        overflow: auto;
        float: left;
        margin: 5px;
        border: none;
    }

    .test-1::-webkit-scrollbar { /*滚动条整体样式*/
        width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    .test-1::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #e2dfdf;
    }

    .test-1::-webkit-scrollbar-track { /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background: #EDEDED;
    }

    .maplistbox .list {
        margin-bottom: 20px;
    }

    .maplistbox {
        position: absolute;
        top: 120px;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 20px 0 20px 40px;;
    }

    .maplistbox .p2 {
        margin-top: 5px;
        color: #999;
        width: 150px;
        overflow: hidden;
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .section2 .right {
        width: 280px
    }

    .section2 .right .tit {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px
    }

    .section2 .right .tit img {
        display: inline-block;
        margin-right: 10px
    }

    .section2 .right .input {
        /*width: 260px;*/
        margin-bottom: 10px
    }

    .section2 .right .input.tell .el-input {
        width: calc(100% - 129px)
    }

    .section2 .right .input.tell .el-input__inner {
        border-radius: 4px 0 0 4px
    }

    .section2 .right .input.tell .el-button {
        border-radius: 0 4px 4px 0;
        padding: 12px 13px;
    }

    .section2 .right .stit {
        margin: 30px 0 20px 0
    }

    .section2 .right .input.success {
        margin-top: 30px
    }

    .section2 .right .el-button--success {
        color: #FFF;
        background-color: #1ead69;
        border-color: #1ead69;
        width: 100%;
    }

    .section2 .right .sec2 {
        margin-top: 50px
    }

    .sec2list {
        position: relative;
        margin-bottom: 30px
    }

    .sec2list img {
        display: block;
        width: 100%;
        height: 200px;
    }

    .sec2list .cont {
        position: absolute;
        bottom: 0;
        color: #fff;
        padding: 10px;
        box-sizing: border-box;
        width: 100%
    }

    .sec2list .cont .name {
        margin-bottom: 5px;
        font-size: 16px
    }

    .sec2list .cont .flex {
        width: 100%
    }

    .sec2list .cont .flex span {
        font-size: 18px;
        color: #1ead69;
        display: inline-block;
        margin-right: 10px
    }
</style>

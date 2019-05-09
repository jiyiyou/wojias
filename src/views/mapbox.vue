<template>
	<div class="main">
		<div id="allmap"></div>
		<!--<div class="cc" @click="mapseach('深圳')">{{message}}</div>-->
		<div class="flex flexss">
  <div class="list">
  <el-select v-model="value" placeholder="城市"  @change="getmap">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
  </div>
    <div class="list">
  <el-select v-model="mvalue" placeholder="面积" @change="getmap">
    <el-option v-for="item in m" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
  </div>
  <div class="list">
  <el-select v-model="moneyvalue" placeholder="价格" @change="getmap">
    <el-option v-for="item in money" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
  </div>
  <div class="list">
  <el-select v-model="fitmentvalue" placeholder="装修程度" @change="getmap">
    <el-option v-for="item in fitment" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
  </div>
</div>
	</div>

</template>


<script type="text/javascript">
	let map = "";
	let zoom = 15;
	export default {
		data() {
			return {
				message: 'Hello Vue.js!',
				inc: {},
				maparr: [],
				centlng:"",
				centlat:"",
				options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        m: [{
          value: '',
          label: '不限'
        },{
          value: '0-100',
          label: '0-100m²'
        }, {
          value: '100-200',
          label: '100-200m²'
        }, {
          value: '200-300',
          label: '200-300m²'
        }, {
          value: '300-400',
          label: '300-400m²'
        }, ],
        mvalue: '',
        mvalues:"",
        mvalueb:"",
        moneyvalue:"",
        moneyvalues:"",
        moneyvalueb:"",
          money: [{
          value: '',
          label: '不限'
        },{
          value: '0-3',
          label: '3元以下'
        }, {
          value: '3-4',
          label: '3-4元'
        }, {
          value: '4-5',
          label: '4-5元'
        }, {
          value: '5-7',
          label: '5-7元'
        }, ],
        fitmentvalue:"",
          fitment: [{
          value: '',
          label: '不限'
        },{
          value: '1',
          label: '毛坯'
        }, {
          value: '2',
          label: '简装'
        }, {
          value: '3',
          label: '精装'
        }, {
          value: '4',
          label: '豪装'
        }, ],

			}
		},
		methods: {
			getmap(){
				
			//alert(this.fitmentvalue)
				this.mvalues=this.mvalue.split("-")[0]
				this.mvalueb=this.mvalue.split("-")[1]
				this.moneyvalues=this.moneyvalue.split("-")[0]
				this.moneyvalueb=this.moneyvalue.split("-")[1]
				console.log(this.mvalues,this.moneyvalues,this.mvalueb,this.moneyvalueb)
				this.$axios.post("main/MapSelectBuilding.action", {
//              	'cityId=' +sessionStorage.getItem("Skycityid")+ '&startSpace=' + "" + '&startSpace=' + "" + '&endSpace=' + "" + '&startMoney=' + "" + '&endMoney=' + "" + '&fitment=' + ''
                  	cityId:sessionStorage.getItem("Skycityid"),
					regionId:"",
					startSpace:this.mvalues,
					endSpace:this.mvalueb,
					startMoney:this.moneyvalues,
					endMoney:this.moneyvalueb,
					fitment:this.fitmentvalue,
                })
                    .then(res => {
                        console.log(123333)
                        //this.citynum = res.data.data
                        console.log(res.data.data);
                        this.getcity(res.data.data,sessionStorage.getItem("Skycitycont"))
                        
                        //console.log(this.citynum)
                    })
                    .catch(error => {
                        console.log(error)
                    })

			//this.cityId()	
			},
			cityId() {

                this.$axios.post("main/MapSelectBuilding.action", {
//              	'cityId=' +sessionStorage.getItem("Skycityid")+ '&startSpace=' + "" + '&startSpace=' + "" + '&endSpace=' + "" + '&startMoney=' + "" + '&endMoney=' + "" + '&fitment=' + ''
                  	cityId:sessionStorage.getItem("Skycityid"),
					regionId:"",
					startSpace:"",
					endSpace:"",
					startMoney:"",
					endMoney:"",
					fitment:this.fitmentvalue,
                })
                    .then(res => {
                        console.log(123333)
                        //this.citynum = res.data.data
                        console.log(res.data.data);
                        this.getcity(res.data.data,sessionStorage.getItem("Skycitycont"))
                        
                        //console.log(this.citynum)
                    })
                    .catch(error => {
                        console.log(error)
                    })


            },
			map(arr,centlngs,centlats) {console.log(33333311)
				//alert(centlngs)
				//alert(120)
				// 百度地图API功能
				map = new BMap.Map("allmap");
				console.log(map)
				var point = new BMap.Point(centlats,centlngs);
				map.centerAndZoom(point, 12);
				map.enableScrollWheelZoom();
				//	var infoWindow = new BMap.InfoWindow(sContent);
				// 编写自定义函数,创建标注

				//	function addMarker(point) {
				function ComplexCustomOverlay(point, text, texts, mouseoverText, mouseoverTexts) {
					this._point = point;
					this._text = text;
					this._texts = texts;
					this._overText = mouseoverText;
					this._overTexts = mouseoverTexts;
					//this._div = div;
				}
				ComplexCustomOverlay.prototype = new BMap.Overlay();
				ComplexCustomOverlay.prototype.initialize = function(map) {
					this._map = map;
					var div = this._div = document.createElement("div");
					div.style.position = "absolute";
					div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
					div.style.backgroundColor = "#EE5D5B";
					
					div.style.color = "white";
					div.style.height = "30px";
					div.style.padding = "0 10px";
					div.style.lineHeight = "30px";
					div.style.whiteSpace = "nowrap";
					div.style.MozUserSelect = "none";
					div.style.fontSize = "14px"
					var span = this._span = document.createElement("span");
					var spans = this._spans = document.createElement("span");
					// var p = this.p = document.createElement("p");
					// p.style.backgroundColor = "#6BADCA";
					// p.style.border = "1px solid #6BADCA";
					// p.style.color = "black";
					// p.style.height = "60px";
					// p.style.width = "60px";
					// p.style.borderradius = "100%";
					// p.style.height = "30px";
					// p.style.top = "0px";
					div.appendChild(span);
					div.appendChild(spans);
					// div.appendChild(p);
					//p.appendChild(document.createTextNode(this._text));
					span.appendChild(document.createTextNode(this._text));
					spans.appendChild(document.createTextNode(this._texts));
					var that = this;

					var arrow = this._arrow = document.createElement("div");
					arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
					arrow.style.position = "absolute";
					arrow.style.width = "11px";
					arrow.style.height = "10px";
					arrow.style.top = "30px";
					arrow.style.left = "16px";
					arrow.style.overflow = "hidden";
//					var spans = this.spans = document.createElement("span");
//					div.style.backgroundColor = "#EE5D5B";
//					arrow.appendChild(spans);
					div.appendChild(arrow);

					div.onmouseover = function() {
						this.style.backgroundColor = "#6BADCA";
						this.style.borderColor = "#0000ff";
						this.getElementsByTagName("span")[0].innerHTML = that._overText;
						this.getElementsByTagName("span")[1].innerHTML = that._overTexts;
			
						this.getElementsByTagName("span")[1].style.margin = "0 0 0 5px";
						arrow.style.backgroundPosition = "0px -20px";
					}

					div.onmouseout = function() {
						this.style.backgroundColor = "#EE5D5B";
						this.style.borderColor = "#BC3B3A";
						this.getElementsByTagName("span")[0].innerHTML = that._text;
						this.getElementsByTagName("span")[1].innerHTML = "";
						arrow.style.backgroundPosition = "0px 0px";
					}

					map.getPanes().labelPane.appendChild(div);

					return div;
				}
				ComplexCustomOverlay.prototype.addEventListener = function(event,fun){
					this._div['on'+event] = fun;
				}
				ComplexCustomOverlay.prototype.draw = function() {
					var map = this._map;
					var pixel = map.pointToOverlayPixel(this._point);
					this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
					this._div.style.top = pixel.y - 30 + "px";
				}

				for(let i = 0; i < arr.length; i++) {
						console.log(123)
					
					console.log(arr[i].housesNews)
					
					var point =new BMap.Point(arr[i].longitude,arr[i].latitude);
					var tables=""
					for(let j=0;j<arr[i].housesNews.length;j++){
						tables =tables+"<div class='flex' style='margin-top: 10px;border-bottom: 1px solid #f1f1f1;'><p class='flexssa' style='width:25%;line-height: 50px;'>"+arr[i].housesNews[j].work_name+"</p>"+"<p class='flexssa' style='width:25%;line-height: 50px;'>"+arr[i].housesNews[j].office_space+"m²</p>"+"<p class='flexssa' style='width:25%;line-height: 50px;'>"+arr[i].housesNews[j].money+"元/m²/天</p><p class='flexssa' style='width:25%;line-height: 50px;'>"+"<img style='display: block;height: 50px;width: 100%;' src="+arr[i].mansion_picture+"></p></div>"
					}
					var content ="<h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+arr[i].mansion_name+"</h4>" +
					 "<img style='height:150px;width:500px' class='imgDemo' src="+arr[i].mansion_picture+" >"
							+tables
							"</div>";
					var myCompOverlay = new ComplexCustomOverlay(point, arr[i].mansion_name,"", arr[i].mansion_name+arr[i].region_name,arr[i].money+"元/m²/天");
					map.addOverlay(myCompOverlay);
					addClickHandler(content,myCompOverlay);

				}

				function addClickHandler(content,marker){
					marker.addEventListener('click',function(e){
						//alert(e);
						console.log(111)
						console.log(marker._point.lat)
						console.log(marker._point.lng)
						var pointss = new BMap.Point(marker._point.lng, marker._point.lat);
						openInfo(content,pointss)
					});


				}

				function openInfo(content,pointss){
					//var p = e.target;
					//var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
					//var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
					var infoWindow = new BMap.InfoWindow(content);
					map.openInfoWindow(infoWindow,pointss); //开启信息窗口
					document.getElementById('imgDemo').onload = function (){
						infoWindow.redraw(); }

				}
			},

			mapseach(data) {
				$.ajax({
					type: "get",
					url: "http://api.map.baidu.com/place/v2/search?",
					data: {
						query: "美食",
						region: data,
						output: "json",
						ak: "pdte5B83N8xwZnARmKqMZiF7Cu8b15YX"
					},
					dataType: "json",
					success: (res) => {
						this.maparr = res.results
						console.log(res.results)
						this.map(this.maparr)
						//this.map(res.results)
						//   for (var i = 0; i < this.maparr.length; i ++) {
						//    
						//     var bounds = map.getBounds();
						//      var sw = bounds.getSouthWest();
						//     var ne = bounds.getNorthEast();
						//     var point =  new BMap.Point(this.maparr[i].location)
						//     console.log(point)
						//     //var mapico={}
						//   // addMarker(point);
						// }
					}
				});

			},
			
			getcity(arrs,map){
//				http://api.map.baidu.com/geocoder/v2/?address=北京市海淀区上地十街10号&output=json&ak=您的ak&callback=showLocation //GET请求
				$.ajax({
					type: "get",
					url: "http://api.map.baidu.com/geocoder/v2/?",
					data: {
						address: map,						
						output: "json",
						ak: "pdte5B83N8xwZnARmKqMZiF7Cu8b15YX"
					},
					dataType: "json",
					success: (res) => {
						 console.log(99999)
						 this.centlng=res.result.location.lng
						 this.centlat=res.result.location.lat
						 this.map(arrs,res.result.location.lat,res.result.location.lng)
						console.log(res.result.location.lng)
						console.log(res.result.location.lat)
						//this.map(this.maparr)
						//this.map(res.results)
						//   for (var i = 0; i < this.maparr.length; i ++) {
						//    
						//     var bounds = map.getBounds();
						//      var sw = bounds.getSouthWest();
						//     var ne = bounds.getNorthEast();
						//     var point =  new BMap.Point(this.maparr[i].location)
						//     console.log(point)
						//     //var mapico={}
						//   // addMarker(point);
						// }
					}
				});
			},
		},
		mounted() {
			//  console.log(this.message)
//			this.mapseach("北京")
			this.cityId()
			//this.map()

		}
	}
	// 百度地图API功能
	/*	window.onload = function() {
			windowAddMouseWheel();

			function windowAddMouseWheel() {
				var scrollFunc = function(e) {
					e = e || window.event;
					if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
						if(e.wheelDelta > 0) { //当滑轮向上滚动时
							//  alert(map.getZoom());
							console.log(map.getZoom())
							zoom = map.getZoom()

						}
						if(e.wheelDelta < 0) { //当滑轮向下滚动时
							// alert(map.getZoom());
							console.log(map.getZoom())
							zoom = map.getZoom()
						}
					} else if(e.detail) { //Firefox滑轮事件
						if(e.detail > 0) { //当滑轮向上滚动时
							// alert(map.getZoom());
							console.log(map.getZoom())
							zoom = map.getZoom()
						}
						if(e.detail < 0) { //当滑轮向下滚动时
							// alert(map.getZoom());
							console.log(map.getZoom())
							zoom = map.getZoom()
						}
					}
				};
				//给页面绑定滑轮滚动事件
				if(document.addEventListener) {
					document.addEventListener('DOMMouseScroll', scrollFunc, false);
				}
				//滚动滑轮触发scrollFunc方法
				window.onmousewheel = document.onmousewheel = scrollFunc;
			}
		}*/
</script>

<style scoped>
.main{position: relative;}
.flex.flexss{position: absolute;top: 50px; width: 50%; text-align: center; margin-left: 25%;}
	#allmap {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		font-family: "微软雅黑";
	}

	.cc {
		position: absolute;
		top: 0
	}
	.BMap_bubble_content img{display: block;width:500px}
	.flex{margin-top: 10px;border-bottom: 1px solid #f1f1f1;}
.flexssa{width:25%;line-height: 50px;}
.flexssa img{display: block;height: 50px;width: 100%;}
</style>
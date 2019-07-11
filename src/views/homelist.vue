<template>
	<div class="homelist">
		<seach/>

		<div class="container">
			<ul class="search-term">
				<li class="cont">
					<div class="title">位置</div>
					<ul class="term">
						<li @click="changlist('123',0)" :class="{ active: activea }">不限</li>
						<li v-for="(term , index) in navalist" @click="changlist(index,1)" :class="{ active: term.active }">{{term.title}}
						</li>
					</ul>
				</li>
				<li class="cont">
					<div class="title">面积</div>
					<ul class="term">
						<li @click="oklists('','',0)" :class="{ active:  m[0].active }">不限</li>
						<li :class="{ active: m[1].active }" @click="oklists(0,100,1)">0-100m²</li>
						<li :class="{ active:  m[2].active }" @click="oklists(100,200,2)">100-200m²</li>
						<li :class="{ active:  m[3].active }" @click="oklists(200,300,3)">200-300m²</li>
						<li :class="{ active:  m[4].active }" @click="oklists(300,400,4)">300-400m²</li>
						<li class="inputbox"><input type="text" v-model="seachinput[0].numas" @keyup="numa(0)" class="inputseach" />- <input type="text" v-model="seachinput[1].numas" @keyup="numa(1)" class="inputseach" />m²
							<span @click="oklists(seachinput[0].numas,seachinput[1].numas)" class="okbtn">确定</span></li>
					</ul>
				</li>
				<li class="cont">
					<div class="title">单价</div>
					<ul class="term">
						<li @click="oklistjgs('','',0)" :class="{ active:  money[0].active }">不限</li>
						<li :class="{ active:  money[1].active }" @click="oklistjgs(0,3,1)">3元以下</li>
						<li :class="{ active:  money[2].active }" @click="oklistjgs(3,4,2)">3-4元</li>
						<li :class="{ active:  money[3].active }" @click="oklistjgs(4,5,3)">4-5元</li>
						<li :class="{ active:  money[4].active }" @click="oklistjgs(5,7,4)">5-7元</li>
						<li class="inputbox"><input type="text" v-model="seachinput[2].numas" @keyup="numa(2)" class="inputseach" />- <input type="text" v-model="seachinput[3].numas" @keyup="numa(3)" class="inputseach" />元
							<span @click="oklistjgs(seachinput[2].numas,seachinput[3].numas)" class="okbtn">确定</span>
						</li>
					</ul>
				</li>
				<!--<li class="cont">
                  <div class="title">装修</div>
                  <ul class="term">
                    <li class="active">不限</li>
                    <li>豪装</li>
                    <li>精装</li>
                    <li>简装</li>
                    <li>毛坯</li>
                  </ul>
                </li>-->
				<li class="cont">
					<div class="title"></div>
					<!--<ul class="select term">
                      <li>裕华区 x</li>
                      <li>100-300 x</li>
                    </ul>-->
				</li>
			</ul>
			<div class="house-list-main">
				<p class="err" v-show="showss">暂无数据</p>
				<ul class="house-list">
					<div v-if="this.homeArr.length!=0">
						<template v-for="(item,index) in homeArr">

							<div class="house-cont">
								<div class="img"><img :src="item.mansion_picture" alt=""></div>
								<div class="info">
<!--									<router-link :to="{path:'details',query: { id: index}}" tag="a" class="title">-->
									<a class="title">		{{item.mansion_name}}</a>
<!--									</router-link>-->
									<div class="position"><i class="el-icon-location-outline"></i><span style="margin: 0 20px 0 4px">{{item.region_shname}}-{{item.region_cityname}}-{{item.region_name}}</span>
									</div>
									<div class="person">近期有{{item.subscribeCount}}人预约</div>
									<div><span v-for="(items,indexs) in item.housesNews" class="spacebox" v-show="indexs<5">{{items.office_space}}m²</span>
										<span class="spacebox">...</span></div>
								</div>
								<div class="price"><span class="num">{{item.housesNews[0].money}}</span>元/m²/天</div>
								<router-link :to="{path:'buildingdetails',query: { id:item.id}}" tag="a" class="goto">查看详情
								</router-link>
							</div>
						</template>
						<!--<el-pagination small layout="prev, pager, next" :total="50"> </el-pagination>-->
						<el-pagination
										:page-size="10"
										background
										layout="prev, pager, next"
										:total=total @current-change="changnum(currentPagea)" :current-page.sync="currentPagea">
						</el-pagination>
					</div>
					<div v-if="this.housesNewArr.length!=0">
					<template v-for="(item,index) in housesNewArr">

						<div class="house-cont">
							<div class="img"><img :src="item.house_picture" alt=""></div>
							<div class="info">
<!--								<router-link :to="{path:'details',query: { id: index}}" tag="a" class="title">-->
								<a class="title">{{item.work_name}}</a>
<!--								</router-link>-->
								<div class="position"><span>所在楼层：{{item.location}}层</span>[{{item.office_space}}m² - {{item.fitment}}]
								</div>
								<div class="person">近期有{{item.subscribeCount}}人预约</div>
								<div><span v-for="(items,indexs) in item.housesNews" class="spacebox">{{items.office_space}}m²</span>
									<span class="spacebox">...</span></div>
							</div>
							<div class="price"><span class="num">{{item.money}}</span>{{item.money_unit}}</div>
							<router-link :to="{path:'details',query: { id: item.id}}" tag="a" class="goto">查看详情
							</router-link>
						</div>

					</template>


					<el-pagination 	background layout="prev, pager, next" :page-size="10"  :current-page.sync="currentPagea" :total=total @current-change="changnuma(currentPagea)"> </el-pagination>
					</div>
				</ul>
				<div class="aside">
					<div class="aside-cont">
						<div class="bg">
							<div class="title">
								<img src="/static/images/position-find.png" height="20" width="15" />
								<span>地图找房</span>
							</div>
						</div>
						<div class="count">石家庄<span class="num">{{citynum}}</span>套</div>
					</div>
					<div class="aside-cont">
						<div class="title">
							<img src="/static/images/bag.png" height="15" width="15" />
							<span>委托找房</span>
						</div>
						<div class="img"><img src="/static/images/person.png" alt=""></div>
						<div class="info">10分钟快速响应，已有2015256人提交申请</div>
						<router-link :to="{path:'Entrust'}" tag="div" class="btn">立即委托</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import seach from "./components/seach"
	// import HelloWorld from './components/HelloWorld.v
	export default {
		name: "homelist",
		data() {
			return {
				m:[{active:true},{active:false},{active:false},{active:false},{active:false},{active:false},{active:false}],
				money:[{active:true},{active:false},{active:false},{active:false},{active:false},{active:false},{active:false}],
				activec:true,
				activeb:true,
				activea:true,
				total:0,
				currentPage: 1,
				currentPagea: 1,
				showss:false,
				city: "",
				homeArr: [],
				seachinput: [{
						numas: null
					},
					{
						numas: null
					},
					{
						numas: null
					},
					{
						numas: null
					}
				],
				cityIds:sessionStorage.getItem("Skycityid"),
				navalist: [],
				mja: '',
				mjb: '',
				jga: '',
				jgb: '',
				wz:'',
				citynum: null,
				housesNewArr: [],
				httpss: "gc",
			}
		},

		methods: {
			changnum(num) {  this.getHomelist(this.wz,num,"no")   },
			changnuma(num) {	this.gethousesNewlist(this.wz,num,"no")  },
			numa(num) {
				let fix
				if(typeof this.seachinput[num].numas === "string") {
					fix = Number(this.seachinput[num].numas.replace(/\D/g, ''))
					this.seachinput[num].numas = fix
				}

			},
			changlist(num,nums) {

				if(num=="123"){
					this.navalist[0].active = !this.navalist[0].active
					this.activea=true
					if(this.httpss == 'gc') {
						this.getHomelist("",1)
					}
					if(this.httpss == 'yxhf') {
						this.gethousesNewlist("",1)
					}}
				else{
					this.activea=false
				for(let i = 0; i < this.navalist.length; i++) {
					this.navalist[i].active = false
				}
					if(num==0){
						this.navalist[0].active = !this.navalist[0].active
					}else{this.navalist[num].active = !this.navalist[num].active}

					if(this.httpss == 'gc') {
					//	alert(this.navalist[num].area_id)
						this.getHomelist(this.navalist[num].area_id,1)
					}
					if(this.httpss == 'yxhf') {
						this.gethousesNewlist(this.navalist[num].area_id,1)
					}
				}
				console.log(this.navalist)


			},

			//点击价格重载
			oklistjgs(num1, num2,nums) {
				for(let i=0;i<this.money.length;i++){
					this.money[i].active=false
				}
				this.money[nums].active=true

				this.jga = num1,
					this.jgb = num2
				console.log(this.wz, this.mja, this.mjb, this.jga, this.jgb, )
				console.log(num1)
				console.log(this.httpss)
				if(this.httpss == 'gc') {
					this.$axios("building/listBuildingByCondition.action", {
							params: {
								filter: 'cityId=' + this.cityIds + '&regionId=' + this.wz + '&startSpace=' + this.mja + '&endSpace=' + this.mja + '&startMoney=' + this.jga + '&endMoney=' + this.jgb + '&fitment=' + '',
								pageSize: 10,
								pageNum: 1,
							}
						})
						.then(res => {
							this.currentPagea=1
							this.total=res.data.data.total
							console.log(res)
							if(res.data.code == -1) {
							//	alert("暂无数据")
								this.showss=true
								this.homeArr = []
								return false
							}
							if(res.data.code == 0) {
								this.showss=false
								console.log(res.data.data.list);
								this.homeArr = res.data.data.list
							}

						})
						.catch(error => {
							console.log(error)
						})
				}
				if(this.httpss == 'yxhf') {
					//alert(123)
					this.gethousesNewlist(this.wz,1)
				}
			},
			//点击面积重载
			oklists(num1, num2,nums) {
				for(let i=0;i<this.m.length;i++){
					this.m[i].active=false
				}
				this.m[nums].active=true

				this.mja = num1,
					this.mjb = num2,
					console.log(this.wz, this.mja, this.mjb, this.jga, this.jgb, )
				//console.log(num1)
				// 	console.log(num2)
				if(this.httpss == 'gc') {
					this.$axios("building/listBuildingByCondition.action", {
							params: {
								filter: 'cityId=' + this.cityIds + '&regionId=' + this.wz + '&startSpace=' + this.mja + '&endSpace=' + this.mjb + '&startMoney=' + this.jga + '&endMoney=' + this.jgb + '&fitment=' + '',
								pageSize: 10,
								pageNum: 1,
							}
						})
						.then(res => {
							this.currentPagea=1
							this.total=res.data.data.total
							console.log(res)
							if(res.data.code == -1) {
								//alert("暂无数据")
								//	alert("暂无数据")
								this.showss=true
								this.homeArr = []
								return false
							}
							if(res.data.code == 0) {
								this.showss=false
								console.log(res.data.data.list);
								this.homeArr = res.data.data.list
							}

						})
						.catch(error => {
							console.log(error)
						})
				}
				if(this.httpss == 'yxhf') {
					this.gethousesNewlist(this.wz,1)
				}
			},

			cityId() {
				// alert(123)
				// alert(sessionStorage.getItem("Skycity"))

				this.$axios.post("building/listByHouseCount.action", {
						cityId: this.cityIds,
					})
					.then(res => {
						console.log(123333)
						this.citynum = res.data.data
						console.log(res.data.data);
						console.log(this.citynum)
					})
					.catch(error => {
						console.log(error)
					})

			},
			//位置初始值
			getnavalist() {
				this.$axios.post("region/listRegion.action", {
						pid: this.cityIds,
					})
					.then(res => {
						console.log(this.navalist = res.data.data);
						this.navalist = res.data.data
						for(let i = 0; i < this.navalist.length; i++) {
							this.navalist[i].active = false
						}
					})
					.catch(error => {
						console.log(error)
					})

			},
			//点击位置重载
			getHomelist(ids ,num ,no) {
				//alert(ids)
				this.wz = ids
				console.log(this.wz, this.mja, this.mjb, this.jga, this.jgb, )
				this.city = this.cityIds
				//console.log(sessionStorage.getItem("Skycity"))
				//alert(ids)
				this.$axios("building/listBuildingByCondition.action", {
						params: {
							filter: 'cityId=' + this.cityIds + '&regionId=' + this.wz + '&startSpace=' + "" + '&endSpace=' + "" + '&startMoney=' + "" + '&endMoney=' + "" + '&fitment=' + '',
							pageSize: 10,
							pageNum:num,
						}
					})
					.then(res => {
						// console.log(res)
						if(no!="no"){this.currentPagea=1}

						this.total=res.data.data.total
						if(res.data.code == -1) {
							//alert("暂无数据")
							this.showss=true
							this.homeArr = []
							return false
						}
						if(res.data.code == 0) {
							this.showss=false
							console.log(res.data.data.list);
							this.homeArr = res.data.data.list

						}

					})
					.catch(error => {
						console.log(error)
					})
			},
			//优选房源
			gethousesNewlist(ids,num,no) {
				this.wz = ids
				console.log(this.wz, this.mja, this.mjb, this.jga, this.jgb, )
				this.city = this.cityIds
				this.$axios("housesNew/listHousesNewByCondition.action", {
						params: {
							filter: 'cityId=' + this.cityIds + '&regionId=' + this.wz + '&startSpace=' + this.mja + '&endSpace=' + this.mjb + '&startMoney=' + this.jga + '&endMoney=' + this.jgb + '&fitment=' + '',
							pageSize: 10,
							pageNum: num,
						}
					})
					.then(res => {
						if(no!="no"){this.currentPagea=1}

						this.total=res.data.data.total

						if(res.data.code == -1) {
							//alert("暂无数据")
							this.showss=true
							this.housesNewArr = []
							return false
						}
						if(res.data.code == 0) {
							this.showss=false
							this.housesNewArr = res.data.data.list
							for(let i = 0; i < this.housesNewArr.length; i++) {
								console.log(this.housesNewArr[i].money_unit)

								if(this.housesNewArr[i].fitment == 1) {
									this.housesNewArr[i].fitment = "毛坯"
								}
								if(this.housesNewArr[i].fitment == 2) {
									this.housesNewArr[i].fitment = "简装"
								}
								if(this.housesNewArr[i].fitment == 3) {
									this.housesNewArr[i].fitment = "精装"
								}
								if(this.housesNewArr[i].fitment == 4) {
									this.housesNewArr[i].fitment = "豪装"
								}
								if(this.housesNewArr[i].money_unit == 1) {
									this.housesNewArr[i].money_unit = "元/月"
								}
								if(this.housesNewArr[i].money_unit == 2) {
									this.housesNewArr[i].money_unit = "元/㎡/天"
								}
								if(this.housesNewArr[i].money_unit == 3) {
									this.housesNewArr[i].money_unit = "元/年"
								}
								if(this.housesNewArr[i].money_unit == 4) {
									this.housesNewArr[i].money_unit = "元/㎡/月"
								}
								if(this.housesNewArr[i].money_unit == 5) {
									this.housesNewArr[i].money_unit = "元/㎡"
								}
								if(this.housesNewArr[i].money_unit == 6) {
									this.housesNewArr[i].money_unit = "万元"
								}
								// console.log(this.housesNewArr[i].money_unit)
							}
							console.log(this.housesNewArr)
						}

					})
					.catch(error => {
						console.log(error)
					})
			},

		},
		mounted() {
			if(this.$route.query.id == 'yxhf') {
				this.httpss = 'yxhf'
				this.gethousesNewlist('',1)

			} else {

				this.getHomelist('',1)

			}

			this.getnavalist()
			this.cityId()
		},

		components: {
			seach
		}
	}
</script>

<style scoped>
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
		width: 900px;
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

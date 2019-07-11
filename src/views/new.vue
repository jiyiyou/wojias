<template>
	<div class="new">

		<img src="../assets/public/newbg.png" alt="" class="bg">
		<div class="wrap">
			<div class="newbigbox">
				<div class="newbox">

					<div class="list flex" v-for="(item , indexa) in newArr">
						<router-link :to="{path:'/news',query: { ids: item.id}}" tag="div" class="flex">
							<div class="imgbox"><img src="../assets/public/newico.png" alt="">
								<div class="data">
									<p>{{item.times[2]}}</p><span>{{item.times[0]}}-{{item.times[1]}}</span>
								</div>
							</div>
							<div class="right">
								<p class="name">{{item.title}} </p>
								<p class="cont">{{item.content}}</p>
							</div>
						</router-link>
					</div>
					
				</div>

				<div class="next">
					<span><i class="el-icon-arrow-left"></i></span>

					<span><i class="el-icon-arrow-right"></i></span>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "new",
		data() {
			return {
				newArr: []
			}
		},
		mounted() {
			this.getnewclass()
			// this.getHrefParam(id)
			// console.log(this.$route.query.id)
		},

		methods: {
			formatData(now) {
				var date = new Date(now);
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				var month = month < 10 ? "0" + month : month;
				var day = day < 10 ? "0" + day : day;
				return year + '-' + month + '-' + day;
			},
			getnewclass(classs) {
				this.$axios.post("journalism/selectJour.action", {
						genre: this.$route.query.ids,
						page: 1,
						limit: 2
					})
					.then(res => {
						this.newArr = res.data.data
						for(let i = 0; i < this.newArr.length; i++) {

							this.newArr[i].times = this.formatData(this.newArr[i].time).split("-")
							console.log(this.newArr[i].times)
						}

						this.newArr
						console.log(this.newArr);
						//console.log(this.formatData(res.data.data.time));
					})
					.catch(error => {
						console.log(error)
					})

			},

		}
	}
</script>
<style scoped>
	.new img {
		display: block;
		width: 100%
	}
	
	.new {
		position: relative
	}
	
	.newbigbox {
		width: calc(50% - 300px);
		background-color: rgba(32, 145, 89, .5);
		height: 100%;
		position: absolute;
		left: 50%;
		top: 0;
		padding: 110px 20px 0;
		box-sizing: border-box
	}
	
	.newbox .imgbox {
		width: 100px
	}
	
	.newbox .imgbox img {
		display: block;
		width: 100%
	}
	
	.newbox .list {
		margin-bottom: 15px;
		cursor: pointer;
	}
	
	.right {
		margin-left: 20px;
		/*width: calc(100% - 110px)*/
	}
	
	.imgbox {
		position: relative
	}
	
	.imgbox .data {
		position: absolute;
		top: 0;
		text-align: center;
		width: 100%;
		padding-top: 18px
	}
	
	.imgbox .data p {
		font-size: 24px;
		font-weight: bold;
		color: #1ead69;
		margin-bottom: 10px
	}
	
	.imgbox .data span {
		font-size: 14px;
		color: #1ead69
	}
	
	.name {
		font-size: 18px;
		color: #fff;
		font-weight: bold;
		margin-top: 10px
	}
	
	.cont {
		font-size: 14px;
		color: #fff;
		margin-top: 16px
	}
	
	.next {
		position: relative;
		font-size: 24px;
		color: #fff;
		margin-left: 400px;
		top: 50px
	}
	
	.next span {
		display: inline-block;
		border: 1px solid #fff;
		border-radius: 100%;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		margin: 0 10px;
		transition: all .4s;
		cursor: pointer
	}
	
	.next span {
		display: inline-block;
		border: 1px solid #fff;
		border-radius: 100%;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		margin: 0 10px;
		transition: all .4s;
		cursor: pointer
	}
	
	.next span:hover {
		background-color: rgba(0, 0, 0, 0.5)
	}
</style>

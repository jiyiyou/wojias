<template>
	<div class="news">
		<img src="../assets/public/newbg.png" alt="" class="bg">
		<div class="wrap">
			<div class="newbigbox">
				<h1 class="tit">{{newArr.title}}</h1>
				<div class="stit">
					<p>发布时间：<span>{{newArr.time}}</span> </p>
					<p>浏览量：<span>152</span> </p>
				</div>
				<div class="cont">
					<p>{{newArr.content}}</p>
					<div class="num">
						<p @click="getnew(idtop.id)">上一篇：{{idtop.title}}</p>
						<p @click="getnew(idnext.id)">下一篇：{{idnext.title}}</p>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "news",
		data() {
			return {
				newArr: [],
				ids: this.$route.query.id,
				idtop: [],
				idnext: [],
			}
		},
		mounted() {
			this.getnew(this.ids)
		},

		methods: {
			clickbtn(){
				location. reload()
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
			topnew(topida) {console.log(1111)
				this.$axios.post("journalism/selectPrevious.action", {
						id:topida,
						genre: this.newArr.genre
					})
					.then(res => {
						if(res.data.code== 0) {
							this.idtop = res.data.data
						console.log(this.idtop.title)
						} else {
							this.idtop.title = "没有上一篇"
						}
					})
					.catch(error => {
						console.log(error)
					})

			},
			nextnew(nextida) {
				console.log(2221)
				this.$axios.post("journalism/selectNext.action", {
						id:nextida,
						genre: this.newArr.genre
					})
					.then(res => {
						console.log(res.data)
						if(res.data.code == 0) {
							this.idnext = res.data.data
							console.log(this.idnext.title)
						} else {
							this.idnext.title = "没有下一篇"
						}
					})
					.catch(error => {
						console.log(error)
					})

			},

			getnew(idss) {
				console.log(idss)
				console.log(333666999)
				this.$axios.post("journalism/selectByPrimaryKey.action", {
						id: idss,

					})
					.then(res => {
						this.newArr = res.data.data
						console.log(1112);
						console.log(this.newArr);
						this.newArr.time = this.formatData(this.newArr.time)
						this.nextnew(idss)
						this.topnew(idss)
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
	.news img {
		display: block;
		width: 100%
	}
	
	.news {
		position: relative;
		color: #fff
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
	
	.num {
		cursor: pointer;
		border-top: 1px solid #fff;
		margin-top: 50px;
		padding-top: 20px
	}
	
	.tit {
		font-size: 30px;
		margin-bottom: 25px
	}
	
	.stit p {
		display: inline-block;
		margin-right: 25px
	}
	
	.cont {
		border-top: 1px solid #fff;
		margin-top: 40px;
		padding-top: 20px
	}
	
	.cont p {
		line-height: 1.6
	}
</style>
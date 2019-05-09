<template>
    <div class="newscont">
        <div class="news">
            <img src="../assets/public/newbg.png" alt="" class="bg">
            <div class="wrap flex">
                <div class="left">
                    <div class="newcontbox flex" v-for="(item , index) in newArr" :class="{active : index == 0}">
                        <div class="imgbox"><img :src="item.jour_pic" alt=""></div>
                        <div class="newcont">
                            <router-link :to="{path:'news',query: { id: item.id}}" tag="a">
                                <p class="name">{{item.title}} </p>
                                <p class="cont">{{item.content}}</p>
                                <p class="data">{{formatData(item.time)}}</p>
                                <p class="more">查看详情</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="titbox">
                        <img src="../assets/public/mewico2.png" alt="">
                        <router-link :to="{path:'new',query: { id:1}}" tag="div" class="tit">
                            <h1 class="name">行业风云</h1>
                            <p class="sname">INDUSTRY STORM</p>
                        </router-link>
                        <p class="cont">
                            “去年北京地区公积金缴存、提取、贷款三大指标均出现上涨，其中利用公积金的个人住房贷款额更同比去年增长55.2%。来自北京住房公积金管理中心的《北京住房公积金2018年年度报告》发布了如上数据。</p>
                        <router-link :to="{path:'new',query: { id:1}}" tag="p" class="more">了解更多></router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="news news2">
            <img src="../assets/public/newbg.png" alt="" class="bg">
            <div class="wrap flex">

                <div class="right">
                    <div class="titbox">
                        <img src="../assets/public/mewico2.png" alt="">
                        <router-link :to="{path:'new',query: { id:2}}" tag="div" class="tit">
                            <h1 class="name">找房攻略</h1>
                            <p class="sname">INDUSTRY STORM</p>
                        </router-link>
                        <p class="cont">
                            “去年北京地区公积金缴存、提取、贷款三大指标均出现上涨，其中利用公积金的个人住房贷款额更同比去年增长55.2%。来自北京住房公积金管理中心的《北京住房公积金2018年年度报告》发布了如上数据。</p>
                        <router-link :to="{path:'new',query: { id:2}}" tag="p" class="more">了解更多></router-link>
                    </div>
                </div>
                <div class="left">
                    <div class="newcontbox flex" v-for="(itema , indexa) in newArra" :class="{active : indexa == 0}">
                        <div class="imgbox"><img :src="itema.jour_pic" alt=""></div>
                        <div class="newcont">
                            <router-link :to="{path:'news',query: { id: itema.id}}" tag="a">
                                <p class="name">{{itema.title}} </p>
                                <p class="cont">{{itema.content}}</p>
                                <p class="data">{{formatData(itema.time)}}</p>
                                <p class="more">查看详情</p>
                            </router-link>
                        </div>
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
                newArra: []
            }
        },
        mounted() {
            this.getnewclass()
            this.getnewclassa()
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
                    genre: 1,
                    page: 1,
                    limit: 2
                })
                    .then(res => {
                        this.newArr = res.data.data
                        console.log(this.newArr);
                        //console.log(this.formatData(res.data.data.time));
                    })
                    .catch(error => {
                        console.log(error)
                    })

            },
            getnewclassa(classs) {
                this.$axios.post("journalism/selectJour.action", {
                    genre: 2,
                    page: 1,
                    limit: 2
                })
                    .then(res => {
                        this.newArra = res.data.data
                        console.log(this.newArra);
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
.news2 .right .titbox {text-align: right}
.news2 .wrap .right .titbox .tit{left:0px;right: 30px}
.news2 .wrap .right{padding: 0 100px 0 0;}
    .wrap {
        position: relative;
        width: 80%;
        padding: 200px 0 350px
    }

    .news > img {
        display: block;
        width: 100%;
        position: absolute
    }

    .news {
        position: relative;
        overflow: hidden
    }

    .wrap .left {
        width: 55%
    }

    .wrap .right {
        width: 45%;
        color: #fff;
        padding: 0 0 0 100px;
        box-sizing: border-box
    }

    .newcontbox.active {
        background-color: #1ead69;
        color: #fff
    }

    .newcontbox {
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        cursor: pointer
    }

    .newcontbox:hover .imgbox img {
        transform: scale(1.1);
        transition: all .4s;
    }

    .newcontbox .imgbox {
        overflow: hidden;
        width: 315px;
        transition: all .4s;
        height: 198px;
    }

    .newcontbox img {
        width: 100%;
        display: block;
        transition: all .4s;
    }

    .newcontbox .newcont {
        width: calc(100% - 345px);
        margin-right: 15px
    }

    .newcontbox .newcont .name {
        font-size: 18px;
        margin: 30px 0 10px 0
    }

    .newcontbox .newcont .cont {
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .newcontbox .newcont .data {
        margin-top: 20px;
        text-align: right
    }

    .newcontbox .newcont .more {
        margin-top: 5px;
        text-align: right
    }

    .wrap .right .titbox {
        position: relative;
        margin-top: 30px;
        cursor: pointer;
    }

    .wrap .right .titbox .tit {
        position: absolute;
        top: 20px;
        left: 30px
    }

    .wrap .right .titbox .tit .name {
        font-size: 16px;
        margin-bottom: 5px;
        font-weight: 300
    }

    .wrap .right .titbox .tit .sname {
        font-size: 30px
    }

    .wrap .right .cont {
        margin-top: 60px;
        line-height: 3
    }

    .wrap .right .more {
        margin-top: 60px;
        display: inline-block;
        transition: all .4s;
        margin-left: 0;
    }

    .wrap .right .more:hover {
        color: #1EAD69;
        margin-left: 15px;
    }
</style>

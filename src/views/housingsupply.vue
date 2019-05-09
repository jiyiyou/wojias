<template>
    <div class="housingsupply">
        <img src="../assets/public/tf.png" alt="" class="bg">
        <div class="form-box">
            <el-form status-icon :rules="rules2" ref="formcont" v-model="formcont">
                <div class="demo-input-suffix ">
                    <!--<span>楼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;盘</span><el-input v-model="formcont.lp" placeholder="请输入楼盘名称"></el-input>-->
                    <el-form-item label="楼盘名称" prop="lps" class="span">
                        <el-input v-model="formcont.lp" placeholder="请输入楼盘名称"></el-input>
                    </el-form-item>
                </div>
                <div class="demo-input-suffix">
                    <!--<span> 房屋地址</span><el-cascader size="large" :options="options" v-model="formcont.selectedOptions" @change="addressChange"> </el-cascader>-->
                    <el-form-item label="房屋地址" prop="selected" class="span">
                        <el-cascader size="large" :options="options" v-model="formcont.selectedOptions"
                                     @change="addressChange"></el-cascader>
                    </el-form-item>
                </div>
                <div class="demo-input-suffix">
                    <!--<span> 详细地址</span><el-input  v-model="formcont.map" placeholder="请输入详细地址"></el-input>-->
                    <el-form-item label="详细地址" prop="map" class="span">
                        <el-input v-model="formcont.map" placeholder="请输入详细地址"></el-input>
                    </el-form-item>
                </div>
                <div class="demo-input-suffix flex flexs">
                    <!-- <span>期望售价</span> <el-input v-model="formcont.money" placeholder="您期望卖出的价格" class="qwsj"></el-input>-->
                    <el-form-item label="期望售价" prop="money" class="span span2">
                        <el-input v-model="formcont.money" placeholder="您期望卖出的价格" class="qwsj"></el-input>
                    </el-form-item>
                    <el-select v-model="value" placeholder="元/月" class="seleqw" @change="seleqw">
                        <el-option v-for="item in optionss" :key="item.value" :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="demo-input-suffix">
                    <!-- <span>出租面积</span> <el-input v-model="formcont.m" placeholder="请输入出租面积"></el-input>-->
                    <el-form-item label="出租面积" prop="m" class="span">
                        <el-input v-model="formcont.m" placeholder="请输入出租面积"></el-input>
                    </el-form-item>
                </div>
                <div class="demo-input-suffix">
                    <!--<span>称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;呼</span>  <el-input v-model="formcont.username" placeholder="我们应该如何称呼您"></el-input>-->
                    <el-form-item label="您的称呼" prop="namess" class="span">
                        <el-input v-model="formcont.username" placeholder="我们应该如何称呼您"></el-input>
                    </el-form-item>
                </div>
                <div class="demo-input-suffix">
                    <!--<span>手机号码</span> <el-input v-model="formcont.tell" placeholder="您的联系方式，方便我们及时于您联系"></el-input>-->
                    <el-form-item label="手机号码" prop="pass" class="span">
                        <el-input v-model="formcont.tell" placeholder="您的联系方式，方便我们及时于您联系"></el-input>
                    </el-form-item>
                </div>
                <el-button class="btn" @click="formbox()">提交房源</el-button>
            </el-form>
        </div>

    </div>
</template>
<script>
    import {regionData, CodeToText} from 'element-china-area-data'

    export default {
        name: "housingsupply",
        data() {
            var validatePass = (rule, value, callback) => {
                if (!this.formcont.tell) {
                    return callback(new Error('手机号不能为空'));
                } else if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.formcont.tell)) {
                    callback('手机号格式不正确');
                } else {
                    callback();
                }
            };
            var validatename = (rule, value, callback) => {
                if (!this.formcont.username) {
                    return callback(new Error('姓名不能为空'));
                } else {
                    callback();
                }
            };
            var validatelp = (rule, value, callback) => {
                console.log(this.formcont.lp)
                if (!this.formcont.lp) {
                    return callback(new Error('楼盘名称不能为空'));
                } else {
                    callback();
                }
            };
            var validateselected = (rule, value, callback) => {
                console.log(this.formcont.selectedOptions)
                if (!this.formcont.province) {
                    return callback(new Error('房屋地址不能为空'));
                } else {
                    callback();
                }
            };
            var validatemap = (rule, value, callback) => {
                if (!this.formcont.map) {
                    return callback(new Error('详细地址不能为空'));
                } else {
                    callback();
                }
            };
            var validatemoney = (rule, value, callback) => {
                if (!this.formcont.money) {
                    return callback(new Error('期望售价不能为空'));
                } else if (!/^[1-9]\d*$|^0$/.test(this.formcont.money)) {
                    return callback(new Error('请填入正确期望售价'));
                } else {
                    callback();
                }
            };
            var validatem = (rule, value, callback) => {
                if (!this.formcont.m) {
                    return callback(new Error('出租面积不能为空'));
                } else if (!/^[1-9]\d*$|^0$/.test(this.formcont.m)) {
                    return callback(new Error('请填入正确期望售价'));
                } else {
                    callback();
                }
            };
            return {

                value1: "",
                options: regionData,
                //selectedOptions: [],
                optionss: [{
                    value: '1',
                    label: '元/月'
                }, {
                    value: '2',
                    label: '元/㎡/天'
                }, {
                    value: '3',
                    label: '元/年 '
                }, {
                    value: '4',
                    label: '元/㎡/月'
                }, {
                    value: '5',
                    label: '元/㎡'
                }, {
                    value: '6',
                    label: '万元'
                }
                ],
                value: '',
                formcont: {
                    //unit:"元/月",
                    province: "",
                    city: "",
                    area: "",
                    provinceId: "",
                    cityId: "",
                    areaId: "",
                    lp: "",
                    selectedOptions: [],
                    map: "",
                    money: "",
                    seleqws: "1",
                    m: "",
                    username: "",
                    tell: ""
                },
                rules2: {
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    namess: [{
                        validator: validatename,
                        trigger: 'blur'
                    }],
                    lps: [{
                        validator: validatelp,
                        trigger: 'blur'
                    }],
                    selected: [{
                        validator: validateselected,
                        trigger: 'blur'
                    }],
                    map: [{
                        validator: validatemap,
                        trigger: 'blur'
                    }],
                    money: [{
                        validator: validatemoney,
                        trigger: 'blur'
                    }],
                    m: [{
                        validator: validatem,
                        trigger: 'blur'
                    }],
                },
            }
        },
        methods: {
            formbox() {
                //console.log(this.formcont.Entrust)
                if (this.formcont.lp == "" || this.formcont.map == "" || this.formcont.money == "" || this.formcont.seleqws == "" || this.formcont.username == "" || this.formcont.tell == "" || this.formcont.m == "") {
                    this.$notify.error({
                        title: '错误',
                        message: '请将信息补充完整在提交'
                    });

                }
                else{


                this.$axios.post("launch/insertFirst.action", {
                    houses_name: this.formcont.lp,
                    city_id: this.formcont.cityId,
                    city_name: this.formcont.city,
                    areas_id: this.formcont.areaId,
                    areas_name: this.formcont.area,
                    province_id: this.formcont.provinceId,
                    province_name: this.formcont.province,
                    detail: this.formcont.map,
                    expect_price: this.formcont.money,
                    price_unit: this.formcont.seleqws,
                    user_names: this.formcont.username,
                    user_number: this.formcont.tell,
                    office: this.formcont.m
                })
                    .then(res => {
                        console.log(res);
                        this.$refs.formcont.resetFields()
                        //this.$refs[dynamicValidateForm].resetFields();
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                          let timer = setInterval(() => {
                                   location.replace(location)
                                }, 1200)


                    })
                    .catch(error => {
                        console.log(error)
                    })
                }
            },

            seleqw(val) {
                this.formcont.seleqws = val
                //alert(this.seleqws)
            },
            addressChange(arr) {
                console.log(arr);
                console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]]);
                this.formcont.provinceId = arr[0];
                this.formcont.cityId = arr[1];
                this.formcont.areaId = arr[2];
                this.formcont.province = CodeToText[arr[0]];
                this.formcont.city = CodeToText[arr[1]];
                this.formcont.area = CodeToText[arr[2]]
            },

        }

    }
</script>
<style scoped>
    .flex.flexs {
        justify-content: flex-start
    }

    .span2 {
        width: calc(100% - 150px);
    }

    .housingsupply {
        position: relative
    }

    .bg {
        display: block;
        width: 100%
    }

    .form-box {
        position: absolute;
        top: 25%;
        left: 50%;
    }

    .form-box {
        width: 500px
    }

    .form-box span {
        font-size: 16px
    }

    .demo-input-suffix {
        margin-bottom: 10px
    }

    .demo-input-suffix span {
        display: inline-block;
        width: 100px
    }

    .el-input {
        width: calc(100% - 100px)
    }

    .el-input.qwsj {
        width: calc(100% - 68px);
    }

    .el-select.seleqw {
        width: 115px;
    }

    .form-box .el-input__inner {
        border: 1px solid #fff !important;
    }

    .el-input__inner {
        border: 1px solid #fff !important
    }

    .el-input--large {
        width: calc(100% - 100px)
    }

    .el-cascader.el-cascader--large {
        width: 400px
    }

    .el-input__inner:focus {
        border-color: #1ead69;
    }

    .el-input__inner:focus {
        border-color: #1ead69;
    }

    .btn {
        position: relative;
        top: 60px;
        left: -125px;
        width: 250px;
        height: 50px;
        color: #1ead69;
        border: 1px solid #1ead69;
    }
</style>
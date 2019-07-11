<template>
	<div class="Entrust">
		<img src="../assets/public/wt.png" alt="" class="bg">
		<div class="form-box">
			<el-form  status-icon :rules="rules2" >
			<div class="demo-input-suffix">
				<!--<span>需&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;求</span>
				<el-input v-model="formcont.Entrust" placeholder="对您想要的房子进行描述"></el-input>-->
				 <el-form-item label="需      求" prop="Entrustss" class="span">
				<el-input v-model="formcont.Entrust"  placeholder="对您想要的房子进行描述"></el-input>
				  </el-form-item>
			</div>
			<div class="demo-input-suffix">
				<!--<span>称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;呼</span>
				<el-input v-model="formcont.username" placeholder="我们应该如何称呼您"></el-input>-->
				 <el-form-item label="称     呼" prop="namess" class="span">
				<el-input v-model="formcont.username"  placeholder="我们应该如何称呼您"></el-input>
				  </el-form-item>
			</div>
			<div class="demo-input-suffix">
				  <el-form-item label="电      话" prop="pass" class="span">
				<el-input v-model="formcont.tell"  placeholder="您的联系方式，方便我们及时于您联系"></el-input>
				  </el-form-item>
			</div>
			<el-button class="btn" @click="formbox()">提交需求</el-button>
			</el-form>
		</div>

	</div>
</template>
<script>
		
	export default {
		name: "Entrust",
		data() {
			var validatePass=(rule, value, callback) => { if (!this.formcont.tell) {
                  return callback(new Error('手机号不能为空'));
                } else if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.formcont.tell)) {
                  callback('手机号格式不正确');
                } else {
                  callback();
                }
      };
      	var validatename=(rule, value, callback) => { if (!this.formcont.username) {
                  return callback(new Error('姓名不能为空'));
                }  else {
                  callback();
                }
      };
      	var validateEntrust=(rule, value, callback) => { if (!this.formcont.Entrust) {
                  return callback(new Error('需求不能为空'));
                }  else {
                  callback();
                }
      };
			return {	
				value1: "",
				formcont: {
					Entrust: "",
					username: "",
					tell: ""
				},
				rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          namess:[
            { validator: validatename, trigger: 'blur' }
          ],
          Entrustss:[
            { validator: validateEntrust, trigger: 'blur' }
          ],
       },
		
			}
		},
		methods: {
			formbox() {
				console.log(this.formcont.Entrust)
				if(this.formcont.Entrust==""||this.formcont.username==""||this.formcont.tell==""){
					this.$notify.error({
						title: '错误',
						message: '请将信息补充完整在提交'
					});
				}else{
				this.$axios.post("delegation/insert.action", {
					  city_id:sessionStorage.getItem("Skycityid"),
						demand: this.formcont.Entrust,
						user_name: this.formcont.username,
						phone_number: this.formcont.tell
					})
					.then(res => {
						console.log(res);
					 this.$message({
                            message: '提交成功',
                            type: 'success'
                        });

                          let timer = setInterval(() => {
																		this.formcont.Entrust="",
																		this.formcont.username="",
																		this.formcont.tell=""
                                }, 1200)

					})
					.catch(error => {
						console.log(error)
					})
			}
			}

		},
		created() {
			// http://www.wwtliu.com已经在main.js中定义了全局网址了/sxtstu/blueberrypai/login.php   ===  http://www.wwtliu.com/sxtstu/blueberrypai/login.php
		}

	}
</script>
<style scoped>
	.demo-input-suffix .el-form-item__error{left: 50px}
	.el-form-item__label{display: inline-block;;width: 80px;font-size: 16px}
	.housingsupply {
		position: relative
	}
	
	.bg {
		display: block;
		width: 100%
	}
	
	.form-box {
		position: absolute;
		top: 35%;
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
	
	.form-box .el-input__inner {
		border: 1px solid #fff!important;
	}
	
	.el-input__inner {
		border: 1px solid #fff!important
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
	
	.btn {
		position: relative;
		top: 80px;
		left: -125px;
		width: 250px;
		height: 50px;
		color: #1ead69;
		border: 1px solid #1ead69;
	}
</style>

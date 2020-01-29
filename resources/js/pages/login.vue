<template>
    <div>
        <!--============================ SLIDER AREA START ============================-->
      <section class="slider-area services-slider-area pb-50">
         <div class="sliderr">
            <div class="single-slide" style="background-image:url('assets/img/header/banner-1.jpg')">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-12">
                        <div class="slide-table">
                           <div class="slide-tablecell">
							  <h4>HARMONI</h4>                             
							  <h2> EVENTS <span>LOGIN</span> </h2>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
     <!--============================ SLIDER AREA END ============================--> 
     <!--============================ LOGIN AREA START ============================--> 
	 <section class="login-area pb-50">
		<div class="container">
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-6">
					<div class="login">
						<h3>Account Login</h3>
						<Form  :model="formItem" :label-width="60" class="event-login">
							<div class="form-group">
                                <label>Email</label>
                                <FormItem label="Email">
                                    <Input v-model="formItem.email" placeholder="Enter something..."></Input>
                                </FormItem>
							</div>
							<div class="form-group">
                                <label>Password</label>
                                <FormItem label="Password">
                                    <Input type="password" v-model="formItem.password" placeholder="Enter something..."></Input>
                                </FormItem>
							</div>	
							<FormItem>
                                <Button type="primary" @click="login" >Login</Button>
                            </FormItem>
						</Form>
					</div>
				</div>
				<div class="col-sm-3"></div>
			</div>
		</div>
	 </section>
     <!--============================ LOGIN AREA END ============================-->  
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user:{},
                formItem: {
                  email:'',
                  password:'',
                  
                }
            }
        },
        methods:{
            async login(){
                if(this.formItem.email=="" || this.formItem.password==''){
                    this.i("All frields are required!");
                    return;
                }
                const res = await this.callApi('post','login',this.formItem)
                if(res.status===200){
                  
                     this.$store.commit('setAuthuser', (res.data));
                    this.s("login successfull !")
                      // window.location = '/'

                    this.$router.push('/')
                
                }
                else if (res.status===422){
                    this.e(res.data.msg);
                }
                else {
                    this.swr();
                }
            },
        },
        created(){
            console.log(window.authUser)
            
            
        }
    }
</script>
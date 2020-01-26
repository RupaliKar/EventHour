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
							  <h2> event <span>REGISTER</span> </h2>
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
	 <section class="register-area  pb-50">
		<div class="container">
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-6">
					<div class="register">
						<h3>Account Register</h3>
						<Form :model="formItem" :label-width="60">
							<div class="form-group">
                                <p>First Name</p>
                                <FormItem label="Name">
                                     <input v-model="formItem.name" placeholder="Enter Your Name" type="text" class="form-control" id="exampleFormControlInput1" >
                                </FormItem>
							</div>
							<div class="form-group">
                                <p>Email</p>
                                <FormItem label="Email">
                                     <input v-model="formItem.email" placeholder="Enter Your email" type="email" class="form-control" id="exampleFormControlInput1" >
                                </FormItem>
							</div>
							<div class="form-group">
                                <p>Password</p>
                                <FormItem label="Password">
                                     <input v-model="formItem.password" placeholder="password" type="email" class="form-control" id="exampleFormControlInput1" >
                                </FormItem>
							</div>
							<div class="form-group">
                                <p>Confirm Password</p>
                                 <FormItem  label="Confirm Password">
                                     <input v-model="formItem.password_confirmation" placeholder="confirm password" type="email" class="form-control" id="exampleFormControlInput1" >
                                </FormItem>
							</div>	
							 <!-- <div class="form-group form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1">
								<label class="form-check-label" for="exampleCheck1">Check me out</label>
						    </div> -->
							<FormItem>
                                <Button type="primary" @click="registation" >Registration</Button>
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
                formItem: {
                  name:'',
                  email:'',
                  password:'',
                  password_confirmation:'',
                }
            }
        },
        methods:{
            async registation(){
            
                if(this.formItem.name=='' ) return this.i(" Name is required!");
                if(this.formItem.email=='' ) return this.i("Email is required!");
                if(this.formItem.password=='' ) return this.i("Password is required!");
                if(this.formItem.password_confirmation=='' ) return this.i("Password Confirmation is required!");
                if(this.password != this.password_confirmation){
                    this.i("The password confirmation does not match.");
                    return;
                }
                const res = await this.callApi('post',"registration",this.formItem)
                if(res.status===201){
                    this.s("registration Successfull ! Please Login.");
                    this.$router.push('/')
                  
                }
                else if(res.status===422){
                    if(res.data.errors.email){
                        this.errorData.email = res.data.errors.email 
                        for(let e of res.data.errors.email  )
                            this.e(e);
                    }  
                    if(res.data.errors.password)
                    {
                        this.errorData.password = res.data.errors.password 
                        for(let e of res.data.errors.password  )
                            this.e(e);
                    }  
                    
                    if(res.data.errors.firstName)
                    {
                        this.errorData.firstName = res.data.errors.firstName 
                        for(let e of res.data.errors.firstName  )
                            this.e(e);
                    }    
                    if(res.data.errors.lastName)
                    {
                        this.errorData.lastName = res.data.errors.lastName 
                        for(let e of res.data.errors.lastName  )
                            this.e(e);
                    }    
                }
                else{
                    this.swr();
                }
            },
        }
    }
</script>
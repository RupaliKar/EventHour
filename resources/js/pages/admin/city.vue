<template>
    <div>
        <div class="row right_row1">
            <div class="top_div">
                <div class="top_left">
                    <p class="task_p">City</p>
                </div>
                
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-md-6">
                <div class="designation">
                    <Button @click="add_modal = true" type="info">Add New City</Button> 
                </div>
            </div>
        </div>
        <!---=== table right side ====---->
        
        <div class="_table_all"> 
            <div class="_table_main">
                <table class="_1table"> 
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                          
                        </tbody>
                </table>
            <!---=== row list attendance END ===---->
            </div>
        </div>              
                     
        <!-- Add client  start modal -->
        <Modal
            v-model="add_modal"
            title="Add New Client"
            @on-ok="form_submmit"
            @on-cancel="add_modal = false">
            <div class="left_atten_card">
                <div class="pro_left_input"> 
                    <div class="_1st_input_pro">
                        <div class="left_name_pro">
                            <span class="input_title">Name</span>
                        </div>
                        <div class="right_input_pro">
                            <Input v-model="form.name" style="width: 100%" />
                        </div>
                    </div>
                </div>
                <div class="pro_left_input"> 
                    <div class="_1st_input_pro">
                        <div class="left_name_pro">
                            <span class="input_title">Image</span>
                        </div>
                        <div class="right_input_pro">
                            
                           <Upload
								ref="upload"
								type="drag"
								name="image"
								:show-upload-list="listMethod" 
								:with-credentials="true"
								:data="{id:1}"
								:on-success="handleSuccess"
								:format="['jpg','jpeg','png']"
								:max-size="2048"
								action="/app/upload">
								<div style="padding: 20px 0">
									<Icon type="ios-cloud-upload" size="32" style="color: #3399ff"></Icon>
									<p>Upload Image</p>
								</div>
							</Upload>
							<div style="text-align:center">
								<img  style="width: 100%;height: auto;" v-if="imageUrl" :src="imageUrl" >
							</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        <!-- Add client modal end -->

    </div>
</template>

<script>
	
	export default {
	  data(){
          return{
            city:[],
            edit_modal: false,
            add_modal: false,
            edit_data: {},
            editIndex:-1,
            form:{
                name: '',
				image:''
            },
            imageUrl:'',			
            listMethod:true,
            edit_form:{
            name:'',
            id:'',
            },
            isEdit:false,
            editIndex:-1,
          }
      },
      methods:{

          async all_city(){
				const res = await this.callApi('get','all_city')
				if(res.status == 200){
					this.city = res.data
				}
            },
            

            async form_submmit(){
                if(this.form.name == '') return this.i("City Name is empty!");
                if(this.form.image == '') return this.i("City image is empty!");
                
				const res = await this.callApi('post','add_city',this.form)
				if(res.status == 201){
					this.city.push(res.data)
					this.s("New City Added !")
					//this.$router.push('/')
					window.location='/admin/city'
				}
				else{
					this.swr();
				}
            },

           handleSuccess(res, file){
                console.log(res);
                this.imageUrl=res.imageUrl
                this.form.image = res.imageUrl;
			},

        },
        created(){
            this.all_city();
        }
	}
</script>
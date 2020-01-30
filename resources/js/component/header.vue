<template>
    <div>
        <!--============================ HEADER-TOP AREA START ============================-->
	   <section class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-12">
						<div class="header-left">
							<a class="envelope1" href=""><i class="fa fa-envelope"></i> info@demo.com</a>
							<a class="phone1" href=""><i class="fa fa-phone"></i> 1234567890</a>
						</div>
					</div>
					<div class="col-md-6 col-sm-12 text-right">
						<div class="header-log-register">
							<div class="header-login">
								<!-- Button trigger modal -->
                          <ul>
                            <template v-if="isLoggedIn">
                                 <li class="nav-item">
                                    <a href="/logout"  class="nav-link" >Logout</a>
                              </li>
                              <li class="nav-item nav-link">
                                    {{authUser.name}}
                              </li>
                           </template>
                           <template v-else>
                                 <li class="nav-item">
                                    <router-link to="/login" class="nav-link">
                                       Login 
                                    </router-link>
                              </li>
                              <li class="nav-item">
                                    <router-link to="/registration" class="nav-link"   >
                                       Registration 
                                    </router-link>
                              </li>
                           </template>
                         </ul>
							</div>					
						</div>
					</div>
				</div>
			</div>
	   </section>
	   <!--============================ HEADER-TOP AREA END ============================-->
      <!--============================ HEADER AREA START ============================-->
      <header class="header header-fixed">
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <nav class="navbar navbar-expand-xl navbar-light">
                     <a class="navbar-brand" href="index.html">EventHour</a>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse ml-auto mainmenu" id="navbarNav">
                        <ul class="navbar-nav ml-auto another">
                           <li class="current">
                                <router-link to="/" class="nav-link">
                                 Home
                                </router-link>
                            </li>
                           <li class="dropdown">
							         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							         <a href="">about</a>
							      </a>
							      </li>
							      <li>
                              <router-link to="/services" class="nav-link">
                              Services
                              </router-link>
                            </li>
                            <li class="dropdown">
							      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							      Events
							      </a>
							      <div class="dropdown-menu my-dropdown-menu" aria-labelledby="navbarDropdown">
								      <a class="dropdown-item my-dropdown-item transition" href=""><i class="fa fa-angle-double-right"></i><router-link to="/venues" class="nav-link">
                                 Venue
                                </router-link></a>
							         </div>
							      </li>
                           <li><router-link to="/speaker" class="nav-link">
                                 speaker
                                </router-link>
                           </li>
                           <li><router-link to="/contact" class="nav-link">
                                 Contact
                                </router-link>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </header>
      <!--============================ HEADER AREA END ============================-->
    </div>
</template>

<script>


export default {
  
  created(){
     
  },

}
</script>
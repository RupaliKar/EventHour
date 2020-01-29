<template>
	
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <!---=== left column ====----> 
                <div class="col-md-auto left_div">
                    <div>
                      <div class="left_sidebar">
                          <div class="logo">
                              <p class="logo_p1">EventHour</p>
                              <div class="logo-img"><img src="/img/1.png" alt="" class="logo_i.mg"></div>
                              <!-- <p class="logo_p2">Dilruba Ferdous</p>
                              <p class="logo_p3">Front End Developer</p> -->
                              <p class="logo_p2"></p>
                              <a href="/logout"><Button type="info" size="large" class="logo_btn">Log out</Button></a>
                              
                          </div>
                          
                          <!---===left side List ====---->
                          <div class="list_menu">
                            <Menu>
                                <MenuGroup title="NAVIGATION">
                                    <MenuItem>
                                        <router-link to="/admin/city">
                                            city
                                        </router-link>    
                                    </MenuItem>
                                    <MenuItem>
                                        <router-link to="/admin/event">
                                            Event
                                        </router-link>    
                                    </MenuItem>
                                    <MenuItem>
                                        <router-link to="/admin/venue">
                                            Venue
                                        </router-link>    
                                    </MenuItem>
                                    <MenuItem>
                                        <router-link to="/admin/venue_img">
                                            Venue Image
                                        </router-link>    
                                    </MenuItem>
                                    <!-- <MenuItem>
                                        <router-link to="/admin/event_booking">
                                            Event Booking
                                        </router-link>    
                                    </MenuItem> -->
                                    <MenuItem>
                                        <router-link to="/admin/reviews">
                                            Reviews
                                        </router-link>    
                                    </MenuItem>
                                    <MenuItem>
                                        <router-link to="/admin/user">
                                            user
                                        </router-link>    
                                    </MenuItem>
                                </MenuGroup>
                            </Menu>
                        </div>
                          <!---===left side List END====---->
                      </div>
                  </div>
                </div>
                <!---===left column END ====---->

                <!---=== right column ====---->

                <div class="col-md right_div">
                    <div class="right_side">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                <div class="col-md-12">
                            <!---=== top navigation right side ====---->        
                                    <!-- <div class="row right_row1">
                                        <div class="top_div">
                                            <div class="top_left">
                                                <p class="task_p">Admin Dashboard</p>
                                            </div>
                                            
                                            <div class="notify_icon">
                                                    <Icon type="md-notifications-outline" />
                                                    <span class="num">2</span>
                                                </div>
                                        </div>
                                    </div> -->
                            <!---=== top navigation right side END ====---->
                                    <!-- Routing section -->
                                    	<transition name="component-fade" mode="out-in">
                                            <router-view></router-view>
                                        </transition>
                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!---=== right column END ====---->
            </div>
        </div>
    </div>

</template>

<style>

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.progress-linear {
    
    position: absolute;
    top: -15px;
   
}
</style>
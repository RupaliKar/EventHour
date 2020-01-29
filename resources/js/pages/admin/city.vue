<template>
    <div>
        <div class="dash_card">
            <div class="row">
                <!---=== Dashboard top 1st card ===--->             
                <div class="col-md-4">
                    <div class="d_card">
                        <div class="d_card_top">
                            <div class="d_card_left">
                                <p class="d_card_p1">Average score</p>
                            </div>
                            <div class="d_card_right">
                                <Select style="width:70px">
                                    <Option value="">Jan</Option>
                                    <Option value="">Feb</Option>
                                    <Option value="">Mar</Option>
                                    <Option value="">Apr</Option>
                                    <Option value=""> May</Option>
                                    <Option value="">Jun</Option>
                                    <Option value="">Jul</Option>
                                    <Option value="">Aug</Option>
                                    <Option value="">Sep</Option>
                                    <Option value="">Oct</Option>
                                    <Option value="">Nov</Option>
                                    <Option value="">Dec</Option>
                                </Select>
                            </div>
                        </div>

                        <div class="d_card_bottom">
                            <div class="d_card_bottom_left">
                                <i-circle :percent="80">
                                    <span class="demo-Circle-inner" style="font-size:24px">147.9</span>
                                </i-circle>
                            </div>
                            <div class="d_card_bottom_right">
                                <p class="d_card_p1">130.7</p>
                                <p class="d_card_p2">Today's score</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!---=== Dashboard top 1st card END ===--->  

                <!---=== Dashboard top 2nd card ===--->  
                <div class="col-md-4">
                        <div class="d_card">
                        <div class="d_card_top">
                            <div class="d_card_left">
                                <p class="d_card_p1">Attendance (%)</p>
                            </div>
                            <div class="d_card_right">
                                <Select style="width:70px">
                                    <Option value="">Jan</Option>
                                    <Option value="">Feb</Option>
                                    <Option value="">Mar</Option>
                                    <Option value="">Apr</Option>
                                    <Option value="">May</Option>
                                    <Option value="">Jun</Option>
                                    <Option value="">Jul</Option>
                                    <Option value="">Aug</Option>
                                    <Option value="">Sep</Option>
                                    <Option value="">Oct</Option>
                                    <Option value="">Nov</Option>
                                    <Option value="">Dec</Option>
                                </Select>
                            </div>
                        </div>

                        <div class="d_card_bottom">
                            <div class="d_card_bottom_left">
                                <i-circle :percent="87">
                                    <span class="demo-Circle-inner" style="font-size:24px">87%</span>
                                </i-circle>
                            </div>
                            <div class="d_card_bottom_right">
                                <p class="d_card_p1">95%</p>
                                <p class="d_card_p2">This month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!---=== Dashboard top 2nd card END ===---> 

                <!---=== Dashboard top 3rd card ===--->   
                <div class="col-md-4">
                        <div class="d_card">
                        <div class="d_card_top">
                            <div class="d_card_left">
                                <p class="d_card_p1">Average Ranking</p>
                            </div>
                            <div class="d_card_right">
                                <Select style="width:70px">
                                    <Option value="">Jan</Option>
                                    <Option value="">Feb</Option>
                                    <Option value="">Mar</Option>
                                    <Option value="">Apr</Option>
                                    <Option value="">May</Option>
                                    <Option value="">Jun</Option>
                                    <Option value="">Jul</Option>
                                    <Option value="">Aug</Option>
                                    <Option value="">Sep</Option>
                                    <Option value="">Oct</Option>
                                    <Option value="">Nov</Option>
                                    <Option value="">Dec</Option>
                                </Select>
                            </div>
                        </div>

                        <div class="d_card_bottom">
                            <div class="d_card_bottom_left">
                                <i-circle :percent="90">
                                    <span class="demo-Circle-inner" style="font-size:24px">2</span>
                                </i-circle>
                            </div>
                            <div class="d_card_bottom_right">
                                <p class="d_card_p1">4th</p>
                                <p class="d_card_p2">Today's Rank</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!---=== Dashboard top 3rd card END ===--->     

            </div>
        </div>

        <!----=== Employee List ====---->
        <div class="emp_list">
            <div class="row">
                <!----=== Employee List table ====---->
                <div class="col-md-6 emp_table">
                    <div class="emp_head">
                        <p class="table_head_p"></p>
                    </div>
                    <div class="row table_1">
                        <div class="col-md-4 col-">
                            <p class="list_p2">Employee Name</p>
                        </div>
                        <div class="col-md-4 col-4">
                            <p class="list_p2">Email</p>
                        </div>
                        <div class="col-md-4 col-4">
                            <p class="list_p2">Phone</p>
                        </div>
                    </div>
                    
                    
                        <div class="row table_2" >
                           
                        </div>
                </div>
            </div>
        </div>
        <!----=== Employee List END ====---->
    </div>
</template>
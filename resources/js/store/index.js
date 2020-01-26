import Vue from 'vue';
import Vuex from 'vuex';




Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    authUser:false,
    cart:[]
		
	},
	getters:{
	
		isLoggedIn (state) {
	    	return !!state.authUser
	  	},
	  	getAuthUser(state){
	  		return state.authUser
		  },
	  getCartItem (state) {
	  	return state.cart
	  }
		  
	},
	mutations:{
		
	  setAuthuser (state, data) {
      state.authUser = data
    },
     updateCart (state,data) {
     	state.cart.push(data)
     	
     },
     increment (state,data) {
     	//state.cart.push(data)
     	for (let i in state.cart ) {
     	if (state.cart[i].id===data.id) {
     		state.cart[i].quantity = data.quantity
     		break
     	}
     }
    }
	},
	actions:{

		 // updateCart (state,data) {
			// 		  state.commit('updateCart', data);
   //               }
	         }  
   });

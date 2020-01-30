import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import index from '../pages/index.vue'
import services from '../pages/services.vue'
import speaker from '../pages/speaker.vue'
import speaker_details from '../pages/speaker_details.vue'
import venues from '../pages/venues.vue'
import venues_details from '../pages/venues_details.vue'
import login from '../pages/login.vue'
import registration from '../pages/registration.vue'


let Admin = ['Admin'];


export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'index',
      }

    },

    {
      path: '/services',
      name: 'services',
      component: services,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'services',
      }

    },

    {
      path: '/speaker',
      name: 'speaker',
      component: speaker,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'speaker',
      }

    },

    {
      path: '/speaker_details',
      name: 'speaker_details',
      component: speaker_details,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'speaker_details',
      }

    },

    {
      path: '/venues',
      name: 'venues',
      component: venues,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'venues',
      }

    },

    {
      path: '/venues_details',
      name: 'venues_details',
      component: venues_details,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'venues_details',
      }

    },

    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'login',
      }

    },

    {
      path: '/registration',
      name: 'registration',
      component: registration,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'registration',
      }

    },

  ],

});

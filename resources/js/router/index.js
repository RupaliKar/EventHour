import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import index from '../pages/index.vue'
import services from '../pages/services.vue'
import speaker from '../pages/speaker.vue'
import speaker_details from '../pages/speaker_details.vue'
import venues from '../pages/venues.vue'
import venues_details from '../pages/venues_details.vue'
import contact from '../pages/contact.vue'
import login from '../pages/login.vue'
import registration from '../pages/registration.vue'
// import admin from '../pages/admin/admin.vue';

import city from '../pages/admin/city.vue'
import event from '../pages/admin/event.vue'
import reviews from '../pages/admin/reviews.vue'
import user from '../pages/admin/user.vue'
import venue from '../pages/admin/venue.vue'
import venue_img from '../pages/admin/venue_img.vue'


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
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'contact',
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

    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: admin,
    //   meta: {
    //       guest: true,
    //       allowedUserType:Admin,
    //       title: 'admin',
    //   }
    // },
    {
      path: '/admin/city',
      name: 'city',
      component: city,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'city',
      }

    },


    {
      path: '/admin/event',
      name: 'event',
      component: event,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'event',
      }

    },

    {
      path: '/admin/reviews',
      name: 'reviews',
      component: reviews,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'reviews',
      }

    },

    {
      path: '/admin/venue',
      name: 'venue',
      component: venue,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'venue',
      }

    },

    {
      path: '/admin/venue_img',
      name: 'venue_img',
      component: venue_img,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'venue_img',
      }

    },
    {
      path: '/admin/user',
      name: 'user',
      component: user,
      meta: {
         // guest: true,
         // allowedUserType: ['All'],
          title: 'user',
      }

    },

  ],

});

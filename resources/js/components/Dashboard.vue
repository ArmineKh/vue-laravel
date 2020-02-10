<template>
  <div class="container">
    <h1>Hallo {{ currentUser.name }} . . . welcome to your work space.</h1>
    <div class="row">
      <div class="col-sm-12">
        <!-- <EditCompany /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <!-- <EditCompany /> -->
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// import Company from './Company.vue'
// import Empoloye from './Employe.vue'
 import EditCompany from './EditCompany.vue'


import { mapGetters } from 'vuex';

export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters(['currentUser']),

    // currentUser(){
    //   return this.currentUser();
    // }
    // ...mapGetters('user',{user: 'currentUser'})
    // user(){
    //   return this.$store.getters.currentUser;
    // }
  },
  // methods: {
  //   currentUser(){
  //      return this.$store.getters.currentUser
  //   }
  // }
  components: {
    EditCompany,
    // Empoloye
  },

}
</script>

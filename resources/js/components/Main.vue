<template>
  <div class="main">
    <Header />
    <div class="content">
      <div class="row">
        <div class="col-sm-12">
          <!-- <editCompany /> -->
        </div>
      </div>


      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
import editCompany from './EditCompany.vue'

export default {
  name: 'Main',
  components: {
    Header,
    editCompany
  },

  }
  </script>

<template>
    <div class="container">
        <h1>Hallo {{ currentUser.name }} . . . welcome to your work space.</h1>
        <div class="row">
            <div class="col-sm-12">

            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>



import { mapGetters } from 'vuex';

export default {

    data(){
        return {

        }
    },

    methods: {
        currentUser(){
            return this.$store.getters.currentUser
        }
    }

}
</script>

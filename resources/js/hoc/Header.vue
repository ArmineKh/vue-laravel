<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel mb-4">
        <div class="container">
            <router-link class="navbar-brand" to="/">Authentication Laravel/Vue SPA</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent"><div class="navbar-nav ml-auto">
                <template v-if="!currentUser">
                    <li>
                        <router-link to="/login" class="nav-link">Loginn</router-link>
                    </li>
                    <li>
                        <router-link to="/register" class="nav-link">Register</router-link>
                    </li>
                </template>
                <template v-else>
                    <li>
                        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
                    </li>
                    <li >
                        <router-link :to="'/company'" class="nav-link">
                            Company
                        </router-link>
                    </li>
                    <li >
                        <router-link :to="'/employe'" class="nav-link">
                            Employ
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{currentUser.name}} <span class="caret"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a href="#!" @click.prevent="logout" class="dropdown-item">Logout</a>
                        </div>
                    </li>
                </template>
            </div>
        </div>
    </div>
</nav>

</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Header',
    methods:{
        logout(){
            this.$store.commit('LOGOUT');
            this.$router.push('/login');
        }
    },
    computed:{
        ...mapGetters(['currentUser']),
        currentUser(){
            return this.$store.getters.currentUser
        }
    },
}
</script>

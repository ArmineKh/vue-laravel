<template>
    <div class="main">
        <Header />
        <div class="content">
            <div class="row">
                <div class="col-sm-12">
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Header from '../hoc/Header.vue';

export default {
    name: 'Main',
    components: {
        Header,

    },

}
</script>

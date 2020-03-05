<template>
    <div class="container">
        <div class="row justify-content-center" >
            <template  v-if = "getCompany">
                <form @submit.prevent="edit" enctype="multipart/form-data" method="post">

                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control"  v-model="company.name" :placeholder="getCompany.name">
                    </div>
                    <template v-if="getErrors">
                        <div v-for = "error in getErrors">
                            <span class="error">{{error.name[0]}}</span>
                        </div>
                    </template>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" name="email" class="form-control" v-model="company.email" :placeholder="getCompany.email">
                    </div>
                    <template v-if="getErrors">
                        <div v-for = "error in getErrors">
                            <span class="error">{{error.email[0]}}</span>
                        </div>
                    </template>

                    <div class="form-group">
                        <label>Logo</label>
                        <div class="custom-file">
                            <input type="file"  class="custom-file-input" id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01" name="logo"  v-on:change="onFileInputChange" >
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                        <template v-if="getErrors">
                            <div v-for = "error in getErrors">
                                <span class="error">{{error.logo[0]}}</span>
                            </div>
                        </template>
                    </div>

                    <div class="form-group">
                        <label>Website</label>
                        <input type="text" name="website" class="form-control" v-model="company.website" :placeholder="getCompany.website">
                    </div>
                    <template v-if="getErrors">
                        <div v-for = "error in getErrors">
                            <span class="error">{{error.website[0]}}</span>
                        </div>
                    </template>

                    <button type="submit" class="btn btn-success">Save</button>
                </form>
            </template>

        </div>
    </div>
</template>

<script>

export default {
    name: 'editCompany',
    mounted() {
        this.$store.dispatch('getCompany', {url: `/api/company/${this.$route.params.id}/edit`, id: this.id})
    },

    data(){
        return {
            company:{
                id: this.$route.params.id,
                name: '',
                email: '',
                logo: null,
                website: ''
            },
        }
    },

    computed:{
        getCompany(){
            return this.$store.getters.getCompany;
        },
        getErrors(){
            return this.$store.getters.getErrors[0]
        }
    },
    methods: {

        onFileInputChange(e){
            this.company.logo = e.target.files[0] || e.dataTransfer.files[0];

        },
        edit() {
            const fd = new FormData();
            for (var key in this.company) {
                fd.append(key, this.company[key]);
            }
            fd.append('_method', 'put');

            this.$store.dispatch('updateCompany', {data: fd, id: +this.$route.params.id})
        }
    }
}
</script>
<style scoped>
.error{
    text-align: center;
    color: red;
}
</style>

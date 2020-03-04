<template>
    <div class="container">
        <div class="row justify-content-center" >
            <template  v-if = "getCompany">
                <form @submit.prevent="edit" enctype="multipart/form-data" method="post">
                    <template v-if="getErrors">
                        <p class="error">{{getErrors.err}}</p>
                    </template>

                    <div class="form-group">
                        <label>Name</label>
                        <validation-provider name="name" rules="required">
                            <template #default="{ errors }">
                                <input type="text" name="name" class="form-control"  v-model="company.name" :placeholder="getCompany.name">
                                <p class="error">{{ errors[0] }}</p>
                            </template>
                        </validation-provider>
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <validation-provider name="email" rules="required|email">
                            <template #default="{ errors }">
                                <input type="text" name="email" class="form-control" v-model="company.email" :placeholder="getCompany.email">
                                <p class="error">{{ errors[0] }}</p>
                            </template>
                        </validation-provider>
                    </div>

                    <div class="form-group">
                        <label>Logo</label>
                        <div class="custom-file">
                            <validation-provider name="logo" rules="required">
                                <template #default="{ errors }">
                                    <input type="file"  class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01" name="logo"  v-on:change="onFileInputChange" >
                                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    <p class="error">{{ errors[0] }}</p>
                                </template>
                            </validation-provider>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Website</label>
                        <validation-provider name="website" rules="required">
                            <template #default="{ errors }">
                                <input type="text" name="website" class="form-control" v-model="company.website" :placeholder="getCompany.website">
                                <p class="error">{{ errors[0] }}</p>
                            </template>
                        </validation-provider>
                    </div>

                    <button type="submit" class="btn btn-success">Save</button>
                </form>
            </template>

        </div>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

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
    components: {
        ValidationProvider
    },
    computed:{
        getCompany(){
            return this.$store.getters.getCompany;
        },
        getErrors(){
            return this.$store.getters.getErrors
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

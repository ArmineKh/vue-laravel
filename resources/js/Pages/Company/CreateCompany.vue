<template>
    <div class="container">
        <div class="row justify-content-center">
            <form @submit.prevent="addCompany" enctype="multipart/form-data">
                <template v-if="getErrors">
                    <p class="error">{{getErrors.err}}</p>
                </template>

                <div class="form-group">
                    <label>Name</label>
                    <validation-provider name="name" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="name" class="form-control"  v-model="company.name" >
                            <p class="error">{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <validation-provider name="email" rules="required|email">
                        <template #default="{ errors }">
                            <input type="text" name="email" class="form-control" v-model="company.email" >
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
                            <input type="text" name="website" class="form-control" v-model="company.website" >
                            <p class="error">{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>

                <button type="submit" class="btn btn-success" >Save</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

export default {
    data(){
        return {
            company:{
                name: '',
                email: '',
                logo: null,
                website: '',
            },
        }
    },
    components: {
        ValidationProvider
    },
    computed:{
        getErrors(){
            return this.$store.getters.getErrors
        }
    },

    methods: {
        onFileInputChange(e){
            this.company.logo = e.target.files[0] || e.dataTransfer.files[0];
        },

        addCompany(){
            const fd = new FormData();
            for (var key in this.company) {
                fd.append(key, this.company[key]);
            }

            this.$store.dispatch({
                type:"addCompany",
                data: fd
            })

            this.company.name = '';
            this.company.email = '';
            this.company.logo = '';
            this.company.website = '';

        },
    },
}
</script>
<style scoped>
.error{
    text-align: center;
    color: red;
}
</style>

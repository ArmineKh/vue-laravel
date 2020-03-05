<template>
    <div class="container">
        <div class="row justify-content-center">
            <form @submit.prevent="addCompany" enctype="multipart/form-data">

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" class="form-control"  v-model="company.name" >
                </div>
                <template v-if="getErrors">
                    <div v-for = "error in getErrors">
                        <span class="error">{{error.name[0]}}</span>
                    </div>
                </template>


                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" class="form-control" v-model="company.email" >
                    <template v-if="getErrors">
                        <div v-for = "error in getErrors">
                            <span class="error">{{error.email[0]}}</span>
                        </div>
                    </template>
                </div>

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
                    <input type="text" name="website" class="form-control" v-model="company.website" >
                    <template v-if="getErrors">
                        <div v-for = "error in getErrors">
                            <span class="error">{{error.website[0]}}</span>
                        </div>
                    </template>
                </div>

                <button type="submit" class="btn btn-success" >Save</button>
            </form>
        </div>
    </div>
</template>

<script>

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

    computed:{
        getErrors(){
            return this.$store.getters.getErrors[0]
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

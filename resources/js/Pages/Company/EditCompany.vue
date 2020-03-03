<template>
    <div class="container">
        <div class="row justify-content-center" >
<template  v-if = "company">
            <form @submit.prevent="edit" enctype="multipart/form-data" method="post">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" class="form-control" v-model="name" :placeholder="company.name">
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" class="form-control"  v-model="email" :placeholder="company.email">
                </div>

                <div class="form-group">
                    <label>Change Logo</label><br>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" name="logo" @change="onFileInputChange">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>

                <div class="form-group">
                    <label>Website</label>
                    <input type="text" name="website" class="form-control" v-model="website" required :placeholder="company.website">
                </div>

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
            id: this.$route.params.id,
            name: '',
            email: '',
            logo: null,
            website: '',
            errors: {}
        }
    },
    computed:{
        company(){
            return this.$store.getters.getCompany;
        }
    },
    methods: {

        onFileInputChange(e){
            this.logo = e.target.files[0] || e.dataTransfer.files[0];

        },
        edit() {
            const fd = new FormData();
            fd.append('name', this.name);
            fd.append('email', this.email);
            fd.append('logo', this.logo);
            fd.append('website', this.website);
            fd.append('_method', 'put');

            let viewModelRouter = this.$router;

            this.$store.dispatch('updateCompany', {data: fd, id: +this.$route.params.id})
            .then(res=>{
                viewModelRouter.push({path:'/company'});
            }).catch(err=>console.log(err))

        }
    }
}
</script>

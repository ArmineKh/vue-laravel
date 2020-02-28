<template>
    <div class="container">
        <div class="row justify-content-center">
            <form @submit.prevent="addComp" enctype="multipart/form-data">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" class="form-control" v-model="name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" class="form-control" v-model="email" required>
                </div>

                <div class="form-group">
                    <label>Logo</label>
                    <div class="custom-file">
                        <input type="file"  class="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" name="logo"  v-on:change="onFileInputChange" required>
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>

                <div class="form-group">
                    <label>Website</label>
                    <input type="text" name="website" class="form-control" v-model="website" required>
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

            name: '',
            email: '',
            logo: null,
            website: '',

        }
    },

    methods: {

        onFileInputChange(e){
            this.logo = e.target.files[0] || e.dataTransfer.files[0];
        },

        addComp(){
            const fd = new FormData();
            fd.append('name', this.name);
            fd.append('email', this.email);
            fd.append('logo', this.logo);
            fd.append('website', this.website);

            let vm = this.$router;

            this.$store.dispatch({
                type:"addCompany",
                data: fd
            }).then(res=>{
                vm.push({path:'/company'});
            }).catch(err=>console.log(err));

            this.name = '';
            this.email = '';
            this.logo = '';
            this.website = '';

        },
    },

}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <form @submit.prevent="edit" enctype="multipart/form-data" method="post">
        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" class="form-control" v-model="name">
        </div>


        <div class="form-group">
          <label>Email</label>
          <input type="text" name="email" class="form-control" v-model="email">
        </div>

        <!-- <div class="form-group">
          <label>Change Logo</label><br>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01" name="logo" @change="onFileInputChange">
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
          </div>
        </div> -->

        <div class="form-group">
          <label>Website</label>
          <input type="text" name="website" class="form-control" v-model="website" required>
        </div>

        <button type="submit" class="btn btn-success">Save</button>
      </form>

      <!-- <form @submit.prevent="uploadeLogo" enctype="multipart/form-data" method="post">
        <div class="form-group">
          <label>Change Logo</label><br>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01" name="logo" @change="onFileInputChange">
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
          </div>
        </div>
        <button type="submit" class="btn btn-success">Uploade Logo</button>
      </form> -->

    </div>
  </div>
</template>

<script>

export default {
  name: 'editCompany',
  mounted() {
    let app = this
    axios.get(`/api/company/update/${app.$route.params.id}/`, app.id).then(response =>{
      app.name = response.data.name;
      app.email = response.data.email;
      app.website = response.data.website;
    }).catch(err => reject(err));
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
  computed: {

  },
  methods: {
    onFileInputChange(e){
     this.logo = e.target.files[0];

    },
    uploadeLogo(){
       let logo = new FormData();
       logo.append('logo', this.logo)
       logo.append('_method', 'PUT');
       let  headers = {
           'Content-Type': 'multipart/form-data',
           'Authorization': localStorage.getItem('Token'),
         }
       axios.put(`/api/company/${this.$route.params.id}`, {data: logo, headers}).then(res=>{
         console.log(res.data)
       }).catch(err=>{console.log(err)});

    },
    edit() {
      // const fd = new FormData();
      // fd.append('name', this.name);
      // fd.append('email', this.email);
      // fd.append('logo', this.logo);
      // fd.append('website', this.website);
      // fd.append('_method', 'PUT');

      let fd = {
        name: this.name,
        email: this.email,
        // logo: this.logo,
        website: this.website,
      }


      let self = this.$router;
      this.$store.dispatch('updateCompany', {data: fd, id: +this.$route.params.id}).then(res=>{
        // console.log(res.id);
        self.push({path:'/company'});
      }).catch(err=>console.log(err))


    }
  }
}
</script>

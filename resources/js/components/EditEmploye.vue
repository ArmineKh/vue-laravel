<template>
  <div class="container">
    <div class="row justify-content-center">
      <form @submit.prevent="editEmp">
        <div class="form-group">
          <label>First Name</label>
          <input type="text" name="firstname" class="form-control" v-model="firstname">
        </div>

        <div class="form-group">
          <label>Last Name</label>
          <input type="text" name="lastname" class="form-control" v-model="lastname">
        </div>

        <div class="form-group">
          <label>Department</label>
          <input type="text" name="department" class="form-control" v-model="department">
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input type="text" name="phone" class="form-control" v-model="phone">
        </div>

        <button type="submit" class="btn btn-success">Save</button>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'editEmploye',
  mounted() {
    let app = this
    axios.get(`/api/employe/${app.$route.params.id}/edit`, app.id).then(response =>{
      app.firstname = response.data.firstname;
      app.lastname = response.data.lastname;
      app.department = response.data.department;
      app.phone = response.data.phone;
    }).catch(err => reject(err));
  },

  data(){
    return {
      id: this.$route.params.id,
      firstname: '',
      lastname: '',
      department: '',
      phone: '',
    }
  },

  methods: {
    editEmp() {
      let data = new FormData();
      data.append('firstname', this.firstname);
      data.append('lastname', this.lastname);
      data.append('department', this.department);
      data.append('phone', this.phone);

      let self = this.$router;
      this.$store.dispatch('updateEmploye', {data:data, id: +this.$route.params.id})
      .then(res=>{
        self.push({path:'/employe'});
      }).catch(err=>console.log(err))
    }
  }
}
</script>

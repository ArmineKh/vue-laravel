<template>
  <div class="container">
    <div class="row justify-content-center">
      <form @submit.prevent="addEmp" method="post">
        <div class="form-group">
          <label>First Name</label>
          <input type="text" name="firstname" class="form-control" v-model="firstname" required>
        </div>

        <div class="form-group">
          <label>Last Name</label>
          <input type="text" name="lastname" class="form-control" v-model="lastname" required>
        </div>

        <div class="form-group">
          <label>Department</label>
          <input type="text" name="department" class="form-control" v-model="department" required>
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input type="text" name="phone" class="form-control" v-model="phone" required>
        </div>
        <button type="submit" class="btn btn-success">Save</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {

      firstname: '',
      lastname: '',
      department: '',
      phone: '',

    }
  },

  methods: {
    addEmp(){
      let fd  = {
        firstname: this.firstname,
        lastname: this.lastname,
        department: this.department,
        phone: this.phone,
      };
      console.log(fd);

      let self = this.$router;
      this.$store.dispatch({
        type: 'addEmploye',
        data: fd
      })
      .then(res=>{
        self.push({path: '/employe'})
      }).catch(err=>{console.log(err)})

      this.firstname = '';
      this.lastname = '';
      this.department = '';
      this.phone = '';

    },
  }
}
</script>

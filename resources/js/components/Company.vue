<template>
  <div class="container">
    <div class="row form-group">
      <router-link :to="'/company/create'" class="link btn btn-primary">
        Create Company
      </router-link>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table">
          <caption>List of companyes</caption>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Logo</th>
            <th>Email</th>
            <th>Web site</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
          <tr class = "text-center" v-for="company in companyes" :key="company.id" >
            <td>{{ company.id }}</td>
            <td>{{ company.name }}</td>
            <td>
              <img :src="company.logo" width="50px">
            </td>
            <td>{{ company.email }}</td>
            <td>{{ company.website }}</td>
            <td>
              <button class = "btn btn-info" :data-id="company.id" @click="editComp">Edit</button>
            </td>
            <td><button  class = "btn btn-danger" :data-id="company.id"  @click="deleteComp">Delete</button></td>
          </tr>

        </table>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Company',
  data(){
    return {
      companyes: []
    }
  },
  created(){
    axios.get('/api/company').then((response) => {this.companyes = response.data;})
  },

  methods: {
    deleteComp(e) {
      const id = +e.target.getAttribute('data-id');
      this.$store.dispatch("deleteCompany", id);
      location.reload(true);
    },

    editComp(e) {
      const id = +e.target.getAttribute('data-id');
      this.$router.push(`/company/${id}/edit`);
    }
  }
}

</script>

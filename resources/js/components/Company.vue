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
          <template v-for="company in companyes">
            <tr class = "text-center" >
              <td>{{ company.id }}</td>
              <td>{{ company.name }}</td>
              <td>
                <img :src="company.logo" width="50px">
              </td>
              <td>{{ company.email }}</td>
              <td>{{ company.website }}</td>
              <td><button class = "btn btn-info" :data-id="company.id" @click="edit">Edit</button></td>
              <td><button class = "btn btn-danger" :data-id="company.id"  @click="deleteComp">Delete</button></td>
            </tr>
          </template>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex';

export default {
  name: 'Company',
  data(){
    return {
      companyes: []
    }
  },
  created(){
    axios.get('/api/company').then((response) => {this.companyes = response.data;});
    // try {
    //   const response = await axios.get('/api/company')
    //   this.companyes = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },

  computed: {
    // ...mapGetters(['companyes']),

  // getCompanies() {
  //   return this.$store.getters.companyes;
  // },

  },
  methods: {
    ...mapActions( ["deleteCompany"]),


    deleteComp(e) {
      const id = +e.target.getAttribute('data-id');
      console.log(id);

      this.deleteCompany(id);
      // this.$store.dispatch('deleteCompany', id).then(res => {
      // }).catch(err => console.log(err))
    },

    edit(e) {
      const id = +e.target.getAttribute('data-id');
      this.$router.push(`update/${id}`)
    }
  }
}

</script>

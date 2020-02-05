<template>
  <div class="container">
    <div class="row form-group">
      <router-link :to="'/create'" class="link btn btn-primary">
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
            <th>Email</th>
            <th>Logo</th>
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
              <td><a href="#" class = "btn btn-info" data-id="company.id" @click="update(company)">Edit</a></td>
              <td><a href="#" class = "btn btn-danger"  @click="deleteCompany(company.id)">Delete</a></td>

            </tr>
          </template>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      // pagination: {}
    }
  },
  mounted() {
    this.getResults();
  },
  computed: {
    ...mapGetters(['companies','getUser']),
  },
  methods: {
    deleteCompany(e) {
      const id = +e.target.getAttribute('data-id');
      this.$store.dispatch('deleteCompany', id).then(res => {
        // console.log(res)
        if(this.companies.length < 1){
          this.getResults(this.pagination.last_page - 1);
          // console.log(this.companies.length)
        }
      }).catch(err => console.log(err))
    },
    getResults(page = 1) {
      this.$store.dispatch('getCompanies', 'api/companies?page=' + page).then(res => {
        delete res.data;
        this.pagination = res
        // console.log(this.pagination)
      }).catch(err => console.log(err))
    },
    update(e) {
      const id = +e.target.getAttribute('data-id');
      this.$router.push(`update/${id}`)
    }
  }
}

</script>

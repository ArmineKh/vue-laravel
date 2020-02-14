<template>
  <div class="container">
    <div class="row form-group">
      <router-link :to="'/employe/create'" class="link btn btn-primary">
            Create Employe
        </router-link>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table">
          <caption>List of employees</caption>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
          <template v-for="employe in employees">
            <tr class = "text-center" >
              <td>{{ employe.id }}</td>
              <td>{{ employe.firstname }}</td>
              <td>{{ employe.lastname }}</td>
              <td>{{ employe.department }}</td>
              <td>{{ employe.phone }}</td>
              <td>
                <button class = "btn btn-info" :data-id="employe.id" @click="editEmp">Edit</button>
              </td>
              <td><button class = "btn btn-danger" :data-id="employe.id"  @click="deleteEmp">Delete</button></td>
            </tr>
          </template>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
      name: 'Employe',
      data(){
        return {
          employees: []
        }
      },
      created(){
        axios.get('/api/employe').then((response) => {this.companyes = response.data;});
      },
      methods: {
        //...mapActions( ["deleteEmploye"]),


        deleteEmp(e) {
          const id = +e.target.getAttribute('data-id');
          console.log(id);

          this.deleteEmploye(id);

        },

        editEmp(e) {
          const id = +e.target.getAttribute('data-id');
          this.$router.push(`update/${id}`)
        }
      }
    }
</script>

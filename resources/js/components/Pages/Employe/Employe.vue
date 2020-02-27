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
                    <tr class = "text-center" v-for="employe in getEmployees">
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

                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Employe',
    data(){
        return {
            employees: []
        }
    },
    created(){
        this.$store.dispatch('getEmployes');
    },
    computed:{
        getEmployees(){
            return this.$store.getters.employees;
        }
    },
    methods: {
        deleteEmp(e) {
            const id = +e.target.getAttribute('data-id');
            this.$store.dispatch('deleteEmploye', id);
        },

        editEmp(e) {
            const id = +e.target.getAttribute('data-id');
            this.$router.push(`/employe/${id}/edit`)
        }
    }
}
</script>

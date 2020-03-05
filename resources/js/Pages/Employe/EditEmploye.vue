<template>
    <div class="container">
        <div class="row justify-content-center" v-if = "getEmploye">
            <form @submit.prevent="editEmp">

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstname" class="form-control" v-model="employe.firstname" :placeholder="getEmploye.firstname">
                </div>
                <template v-if="getEmployeErrors">
                    <div v-for = "error in getEmployeErrors">
                        <span class="error">{{error.firstname[0]}}</span>
                    </div>
                </template>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastname" class="form-control" v-model="employe.lastname" :placeholder="getEmploye.lastname">
                </div>
                <template v-if="getEmployeErrors">
                    <div v-for = "error in getEmployeErrors">
                        <span class="error">{{error.lastname[0]}}</span>
                    </div>
                </template>

                <div class="form-group">
                    <label>Department</label>
                    <input type="text" name="department" class="form-control" v-model="employe.department" :placeholder="getEmploye.department">
                </div>
                <template v-if="getEmployeErrors">
                    <div v-for = "error in getEmployeErrors">
                        <span class="error">{{error.department[0]}}</span>
                    </div>
                </template>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" class="form-control" v-model="employe.phone" :placeholder="getEmploye.phone">
                </div>
                <template v-if="getEmployeErrors">
                    <div v-for = "error in getEmployeErrors">
                        <span class="error">{{error.phone[0]}}</span>
                    </div>
                </template>

                <button type="submit" class="btn btn-success">Save</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'editEmploye',
    mounted() {
        this.$store.dispatch('getEmploye', {url: `/api/employe/${this.$route.params.id}/edit`, id: this.id})
    },

    data(){
        return {
            employe:{
                id: this.$route.params.id,
                firstname: '',
                lastname: '',
                department: '',
                phone: ''
            },
        }
    },

    computed:{
        getEmploye(){
            return this.$store.getters.getEmploye;
        },
        getEmployeErrors(){
            return this.$store.getters.getEmployeErrors[0]
        }
    },

    methods: {
        editEmp() {
            let data = new FormData();
            for (var key in this.employe) {
                data.append(key, this.employe[key]);
            }

            data.append('_method', 'put');

            this.$store.dispatch('updateEmploye', {data:data, id: +this.$route.params.id})

        }
    }
}
</script>
<style scoped>
.error{
    text-align: center;
    color: red;
}
</style>

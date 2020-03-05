<template>
    <div class="container">
        <div class="row justify-content-center">
            <form @submit.prevent="addEmp" method="post">

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstname" class="form-control" v-model="employe.firstname" >
                </div>
                <template v-if="getEmployeErrors">
                    <div v-for = "error in getEmployeErrors">
                        <span class="error">{{error.firstname[0]}}</span>
                    </div>
                </template>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastname" class="form-control" v-model="employe.lastname" >
                </div>
                <template v-if="getEmployeErrors">
                    <div v-for = "error in getEmployeErrors">
                        <span class="error">{{error.lastname[0]}}</span>
                    </div>
                </template>


                <div class="form-group">
                    <label>Department</label>
                    <input type="text" name="department" class="form-control" v-model="employe.department" >
                </div>
                <template v-if="getEmployeErrors">
                    <div v-for = "error in getEmployeErrors">
                        <span class="error">{{error.department[0]}}</span>
                    </div>
                </template>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" class="form-control" v-model="employe.phone" >
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
    data(){
        return {
            employe:{
                firstname: '',
                lastname: '',
                department: '',
                phone: ''
            },
        }
    },

    computed:{
        getEmployeErrors(){
            return this.$store.getters.getEmployeErrors[0]
        }
    },

    methods: {
        addEmp(){
            let data = new FormData();
            for (var key in this.employe) {
                data.append(key, this.employe[key]);
            }

            this.$store.dispatch({
                type: 'addEmploye',
                data: data
            })


            this.employe.firstname = '';
            this.employe.lastname = '';
            this.employe.department = '';
            this.employe.phone = '';

        },
    }
}
</script>
<style scoped>
.error{
    text-align: center;
    color: red;
}
</style>
<style scoped>
.error{
    text-align: center;
    color: red;
}
</style>

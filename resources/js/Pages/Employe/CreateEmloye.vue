<template>
    <div class="container">
        <div class="row justify-content-center">
            <form @submit.prevent="addEmp" method="post">
                <template v-if="getEmployeErrors">
                    <p class="error">{{getEmployeErrors.err}}</p>
                </template>

                <div class="form-group">
                    <label>First Name</label>
                    <validation-provider name="firstname" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="firstname" class="form-control" v-model="employe.firstname" >
                            <p>{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <validation-provider name="lastname" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="lastname" class="form-control" v-model="employe.lastname" >
                            <p>{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>


                <div class="form-group">
                    <label>Department</label>
                    <validation-provider name="department" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="department" class="form-control" v-model="employe.department" >
                            <p>{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <validation-provider name="phone" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="phone" class="form-control" v-model="employe.phone" >
                            <p>{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>

                <button type="submit" class="btn btn-success">Save</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';


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
    components: {
        ValidationProvider
    },
    computed:{
        getEmployeErrors(){
            return this.$store.getters.getEmployeErrors
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

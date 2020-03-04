<template>
    <div class="container">
        <div class="row justify-content-center" v-if = "getEmploye">
            <form @submit.prevent="editEmp">
                <template v-if="getEmployeErrors">
                    <p class="error">{{getEmployeErrors.err}}</p>
                </template>

                <div class="form-group">
                    <label>First Name</label>
                    <validation-provider name="firstname" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="firstname" class="form-control" v-model="employe.firstname" :placeholder="getEmploye.firstname">
                            <p class="error">{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <validation-provider name="lastname" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="lastname" class="form-control" v-model="employe.lastname" :placeholder="getEmploye.lastname">
                            <p class="error">{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>

                <div class="form-group">
                    <label>Department</label>
                    <validation-provider name="department" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="department" class="form-control" v-model="employe.department" :placeholder="getEmploye.department">
                            <p class="error">{{ errors[0] }}</p>
                        </template>
                    </validation-provider>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <validation-provider name="phone" rules="required">
                        <template #default="{ errors }">
                            <input type="text" name="phone" class="form-control" v-model="employe.phone" :placeholder="getEmploye.phone">
                            <p class="error">{{ errors[0] }}</p>
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
    components: {
        ValidationProvider
    },
    computed:{
        getEmploye(){
            return this.$store.getters.getEmploye;
        },
        getEmployeErrors(){
            return this.$store.getters.getEmployeErrors
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

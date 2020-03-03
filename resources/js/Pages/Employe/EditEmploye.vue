<template>
    <div class="container">
        <div class="row justify-content-center" v-if = "employe">
            <form @submit.prevent="editEmp">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstname" class="form-control" v-model="firstname" :placeholder="employe.firstname">
                </div>

                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastname" class="form-control" v-model="lastname" :placeholder="employe.lastname">
                </div>

                <div class="form-group">
                    <label>Department</label>
                    <input type="text" name="department" class="form-control" v-model="department" :placeholder="employe.department">
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" class="form-control" v-model="phone" :placeholder="employe.phone">
                </div>

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
            id: this.$route.params.id,
            firstname: '',
            lastname: '',
            department: '',
            phone: '',
        }
    },
    computed:{
        employe(){
            return this.$store.getters.getEmploye;
        }
    },

    methods: {
        editEmp() {
            let data = new FormData();
            data.append('firstname', this.firstname);
            data.append('lastname', this.lastname);
            data.append('department', this.department);
            data.append('phone', this.phone);
            data.append('_method', 'put');

            let self = this.$router;
            this.$store.dispatch('updateEmploye', {data:data, id: +this.$route.params.id})
            .then(res=>{
                self.push({path:'/employe'});
            }).catch(err=>console.log(err))
        }
    }
}
</script>

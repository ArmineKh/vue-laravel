<template>
    <div class="container">
        <div class="row justify-content-center">
            <form @submit.prevent="edit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="name" class="form-control" v-model="formData.name">
                </div>
                <template v-if="errors.name">
                    <p class="error" v-for="error in errors.name">{{error}}</p>
                </template>

                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" class="form-control" v-model="formData.email">
                </div>
                <template v-if="errors.email">
                    <p class="error" v-for="error in errors.email">{{error}}</p>
                </template>
                <div class="form-group">
                    <label>Change Logo</label><br>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" name="logo" @change="onFileInputChange">
                        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                    </div>
                </div>


                <template v-if="errors.logo">
                    <p class="error" v-for="error in errors.logo">{{error}}</p>
                </template>
                <div class="form-group">
                    <label>Website</label>
                    <input type="text" name="website" class="form-control" v-model="formData.website">
                </div>
                <button type="submit" class="btn btn-success">Save</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
      name: 'EditCompany',
        data(){
            return {
               id: this.$route.params.id,
               formData: {
                    name: '',
                    email: '',
                    logo: null,
                    website: ''
                },
                errors: {}
            }
        },
        computed: {
            ...mapGetters(['companyes']),
        },
        methods: {
            ...mapActions( ["editCompany"]),
            onFileInputChange(e){
                this.formData.logo = e.target.files[0];

            },
            edit() {

                let data = {
                  name: this.formData.name,
                  email: this.formData.email,
                  logo: this.formData.logo,
                  website: this.formData.website
                };
                    this.editCompany(data);
            }
        }
    }
</script>

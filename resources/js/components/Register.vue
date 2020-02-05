<template>
  <div class="login row justify-content-center">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h3>Register</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group row" v-if="regError">
              <p class="error">
                {{regError}}
              </p>
            </div>
            <div class="form-group row" style="display: block;">
              <label for="name">Name</label>
              <validation-provider name="name" rules="required">
                  <template #default="{ errors }">
              <input type="text" name="name" class="form-control"  v-model="formRegister.name" placeholder="Name">
              <p>{{ errors[0] }}</p>
              </template>

            </validation-provider>
            </div>
            <div class="form-group row" style="display: block;">
              <label for="email">Email</label>
              <validation-provider name="email" rules="required|email">
                  <template #default="{ errors }">
              <input type="email" name="email"  class="form-control" v-model="formRegister.email" placeholder="Email address">
              <p>{{ errors[0] }}</p>
              </template>
            </validation-provider>
            </div>
            <div class="form-group row" style="display: block;">
              <label for="password">Password</label>
              <validation-provider name="email" rules="required|min:6">
                  <template #default="{ errors }">
              <input type="password" name="password" class="form-control"  v-model="formRegister.password" placeholder="password">
              <p>{{ errors[0] }}</p>
              </template>
            </validation-provider>
            </div>
            <div class="form-group row">
              <input type="submit" value="Register" class="btn btn-outline-primary ml-auto">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {registerUser} from '../partials/auth';

  export default {
    data(){
      return {
        formRegister: {
          name: '',
          email: '',
          password: ''
        },
        error: null
      }
    },
    components: {
    ValidationProvider
  },
    methods:{
      register(){
        registerUser(this.$data.formRegister)
        .then(res => {
          console.log(res);
          this.$store.commit("registerSuccess", res);
          this.$router.push({path: '/login'});
        })
        .catch(error => {
          this.$store.commit("registerFailed", {error});
        })
      }
    },
    computed:{
      regError(){
        return this.$store.getters.regError
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

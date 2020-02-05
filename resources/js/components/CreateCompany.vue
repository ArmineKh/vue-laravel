<div class="row mt-5">
   <div class="col-sm-8 offset-sm-2">
     <form   @submit.prevent="create">
       <div class="form-group row" v-if="createCompanyError">
         <p class="error">
           {{createCompanyError}}
         </p>
       </div>
       <div class="form-group">
         <validation-provider name="name" rules="required">
             <template #default="{ errors }">
               <label for="name">Nname:</label>
         <input type="text" name="name" class="form-control"  v-model="formCreatCompany.name" placeholder="Name">
         <p>{{ errors[0] }}</p>
         </template>

       </validation-provider>
       </div>
       <div class="form-group">
         <validation-provider name="email" rules="required|email">
             <template #default="{ errors }">
               <label for="email">Email:</label>
         <input type="email" name="email"  class="form-control" v-model="formCreatCompany.email" placeholder="Email address">
         <p>{{ errors[0] }}</p>
         </template>
       </validation-provider>
         <input type="email" name = "email" id = "email" class="form-control" required>
       </div>
       <div class="form-group">
         <label for="logo">Logo:</label>
         <!-- <input id="logo" type="file" class="form-control" name="logo"> -->
       </div>
       <div class="form-group">
         <validation-provider name="website" rules="required">
             <template #default="{ errors }">
               <label for="website">Web site:</label>
         <input type="text" name="website"id = "website" class="form-control"  v-model="formCreatCompany.website" placeholder="Website">
         <p>{{ errors[0] }}</p>
         </template>

       </validation-provider>
       </div>
       <button type = "submit" class = "btn btn-success">Submit</button>
     </form>
   </div>
 </div>

 <script>
 import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
 import {createCompany} from '../partials/company';

   export default {
     data(){
       return {
         formCreatCompany: {
           name: '',
           email: '',
           logo: '',
           website: ''
         },
         error: null
       }
     },
     components: {
     ValidationProvider
   },
     methods:{
       create(){

       }
     },

   }


 </script>

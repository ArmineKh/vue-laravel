<template>
    <div class="container">
    	<div class="row justify-content-center">
	        <form @submit.prevent="addEmp">
	            <div class="form-group">
	            	<label>First Name</label>
	            	<input type="text" name="name" class="form-control" v-model="firstname" >
	            </div>
	            <template v-if="errors.name">
					<p class="error" v-for="error in errors.firstname">{{error}}</p>
	            </template>

	            <div class="form-group">
	            	<label>Last Name</label>
	            	<input type="text" name="email" class="form-control" v-model="lastname" >
	            </div>
	            <template v-if="errors.lastname">
					<p class="error" v-for="error in errors.email">{{error}}</p>
	            </template>
              <div class="form-group">
                <label>Department</label>
                <input type="text" name="department" class="form-control" v-model="department" >
              </div>
	            <div class="form-group">
	            	<label>Phone</label>
	            	<input type="text" name="phone" class="form-control" v-model="phone" >
	            </div>
	            <button type="submit" class="btn btn-success">Save</button>
	        </form>
    	</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
		data(){
			return {

					firstname: '',
					lastname: '',
					department: '',
					phone: '',

				errors: {},
			}
		},

		methods: {

      ...mapActions( ["addEmploye"]),



			addEmp(){
				let data = {
          firstname: this.firstname,
          lastname: this.lastname,
          department: this.department,
          phone: this.phone
        };
        localStorage.setItem('jwtToken', document.querySelector('meta[name="csrf-token"]').getAttribute('content'))
         this.addEmploye(data);



            this.firstname = '';
            this.lastname = '';
            this.department = '';
            this.phone = '';


			   },



		}
    }
</script>

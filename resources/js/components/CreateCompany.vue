<template>
    <div class="container">
    	<div class="row justify-content-center">
	        <form @submit.prevent="addComp">
	            <div class="form-group">
	            	<label>Name</label>
	            	<input type="text" name="name" class="form-control" v-model="name" >
	            </div>
	            <template v-if="errors.name">
					<p class="error" v-for="error in errors.name">{{error}}</p>
	            </template>

	            <div class="form-group">
	            	<label>Email</label>
	            	<input type="text" name="email" class="form-control" v-model="email" >
	            </div>
	            <template v-if="errors.email">
					<p class="error" v-for="error in errors.email">{{error}}</p>
	            </template>
	            <div class="form-group">
	            	<label>Logo</label>
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
	            	<input type="text" name="website" class="form-control" v-model="website" >
	            </div>
	            <button type="submit" class="btn btn-success">Save</button>
	        </form>
    	</div>
      <button @click = "changeRoute">Change route</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
		data(){
			return {

          name: '',
          email: '',
          logo: '',
          website: '',


				errors: {},
         // token: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
			}
		},

		methods: {
      changeRoute(){
        this.$store.dispatch({
          type:"changeRoute"
        });
      },

      ...mapActions( ["addCompany"]),


			onFileInputChange(e){
				this.logo = e.target.files[0];
			},
			addComp(){
				let company = {
          name: this.name,
          email: this.email,
          logo: this.logo,
          website: this.website
        };
        console.log(localStorage.getItem('Token'));
        // localStorage.setItem('jwtToken', document.querySelector('meta[name="csrf-token"]').getAttribute('content'))
          this.$store.dispatch({
            type:"addCompany",
            data: company
          });
         // this.addCompany(company);



            this.name = '';
            this.email = '';
            this.logo = '';
            this.website = '';


			   },



		}
    }
</script>

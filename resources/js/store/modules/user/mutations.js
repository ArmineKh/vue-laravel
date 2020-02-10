
export default {
    login(state){
      state.loading = true;
      state.auth_error = null;
    },
    loginSuccess(state, payload){
      state.auth_error = null;
      state.isLoggedin = true;
      state.loading = false;
      state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    loginFailed(state, payload){
      state.loading = false;
      state.auth_error = payload.error;
    },
    logout(state){
      localStorage.removeItem("user");
      state.isLoggedin = false;
      state.currentUser = null;
    },
    registerSuccess(state, payload){
      state.reg_error = null;
      state.registeredUser = payload.user;
    },
    registerFailed(state, payload){
      state.reg_error = payload.error;
    },
  };

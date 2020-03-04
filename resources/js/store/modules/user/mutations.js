
export default {
    LOGIN(state){
        state.loading = true;
        state.auth_error = null;
    },
    LOGIN_SUCCESS(state, payload){
        state.auth_error = null;
        state.isLoggedin = true;
        state.loading = false;
        state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
    LOGIN_FAILED(state, payload){
        state.loading = false;
        state.auth_error = payload.error;
    },
    LOGOUT(state){
        localStorage.removeItem("user");
        state.isLoggedin = false;
        state.currentUser = null;
    },
    REGISTER_SUCCESS(state, payload){
        state.reg_error = null;
        state.registeredUser = payload.user;
    },
    REGISTER_FAILED(state, payload){
        state.reg_error = payload.error;
    },
};
 

export default    {
    isLoading(state){
        return state.loading;
    },
    isLoggedin(state){
        return state.isLoggedin;
    },
    currentUser(state){
        return state.currentUser;
    },
    authError(state){
        return state.auth_error;
    },
    regError(state){
        return state.reg_error;
    },
    registeredUser(state){
        return state.currentUser;
    },
};

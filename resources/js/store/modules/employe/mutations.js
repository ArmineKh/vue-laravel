export default {

    SET_EMPLOYES(state, employes){
        state.employeList  = employes;
    },

    DELETE_EMPLOYE(state, id) {
        state.employeList = state.employeList.filter(el => el.id != id);
    },

    ADD_EMPLOYE(state, data){
        state.employeList.push(data);
    },

    EDIT_EMPLOYE(state, data){
        state.employeList = data;
    },

    GET_EMPLOYE(state, payload){
        state.currentEmploye = payload;
    }

}

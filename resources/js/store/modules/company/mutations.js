export default {
    SET_COMPANYES(state, companies) {
        state.companiesList = companies
    },
    DELETE_COMPANY(state, id) {
        state.companiesList = state.companiesList.filter(el => el.id != id);
    },

    ADD_COMPANY(state, payload){
        state.companiesList.push(payload.data);
    },
    EDIT_COMPANY(state, data){
        state.companiesList = data.data;
    },

    GET_COMPANY(state, payload){
        state.currentCompany = payload;
    },
    ADD_COMPANY_FAILED(state,payload){
        state.errors.push(payload);
    },
    UPDATE_COMPANY_FAILED(state,payload){
        state.errors.push(payload);
    }

}

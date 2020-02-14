export default {
  setCompanies(state, companies) {
    state.companiesList = companies
  },
  DELETE_COMPANY(state, id) {
    state.companiesList = state.companiesList.filter(el => el.id != id);
  },

  ADD_COMPANY(state, payload){
    // console.log(payload.data);
    state.companiesList.push(payload.data);

  },
  EDIT_COMPANY(state, data){
    state.companiesList = data;
  }

}

export default {
  // setCompanies(state, companies) {
  //   state.companiesList = companies
  // },
  DELETE_COMPANY(state, id) {
    state.companiesList = state.companiesList.filter(el => el.id != id);
  },

  ADD_COMPANY(state, payload){
    state.companiesList.push(payload.data);

  },
  EDIT_COMPANY(state, data){
    // console.log(data.data);
    state.companiesList = data.data;
  }

}

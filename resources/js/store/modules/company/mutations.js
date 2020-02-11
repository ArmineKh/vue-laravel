export default {
  setCompanies(state, companies) {
    state.companiesList = companies
  },
  deleteCompany(state, id) {
    state.companiesList = state.companiesList.filter(el => el.id != id);
  },

  addCompany(state, data){
    // console.log(data);
    state.companiesList.push(data);
  },
  editCompany(state, data){
    state.companiesList = data;
  }

}

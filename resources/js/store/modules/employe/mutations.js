export default {
  SET_EMPLOYE(state, employees) {
    state.employeList = employees
  },
  DELETE_EMPLOYE(state, id) {
    state.employeList = state.employeList.filter(el => el.id != id);
  },

  ADD_EMPLOYE(state, data){
    // console.log(data);
    // state.employeList.push(data);
    state.employeList = data;

  },
  EDIT_EMPLOYE(state, data){
    state.employeList = data;
  }

}

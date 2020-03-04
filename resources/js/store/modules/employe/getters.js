export default {
    employees(state) {
        return state.employeList
    },
    getEmploye(state){
        return state.currentEmploye
    },
    getEmployeErrors(state){
        return state.employeErrors
    }
}

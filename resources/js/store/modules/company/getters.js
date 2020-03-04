export default {
    getCompanyes(state) {
        return state.companiesList
    },
    getCompany(state){
        return state.currentCompany
    },
    getErrors(state){
        return state.errors
    }
}

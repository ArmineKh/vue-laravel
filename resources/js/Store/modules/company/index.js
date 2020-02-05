import companyPartial from '../../../partials/company'
import {routes} from '../../../routes'

export default {
  state:{
    companiesList: []
  },
  getters:{
    companies(state) {
      return state.companiesList;
    }
  },
  mutations:{
    setCompanies(state, companies) {
      state.companiesList = companies
    },
    deleteCompanies(state, id) {
      state.companiesList = state.companiesList.filter(el => el.id != id);
    }
  },
  actions:{
    getCompanies(ctx, url) {
      return new Promise((resolve, reject) => {
        companyPartial.getCompanies(url).then(res => {
          ctx.commit('setCompanies', res.data.data);
          // console.log(res.data)
          resolve(res.data)
        }).catch(err => reject(err))
      })
    },
    addCompany(ctx, data) {
      return new Promise((resolve, reject) => {
        companyPartial.addCompany(data).then(res => {
          routes.push('/companies')
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    deleteCompany(ctx, id) {
      return new Promise((resolve, reject) => {
        companyPartial.deleteCompany(id).then(response => {
          ctx.commit('DELETE_COMPANY', response.data.id);
          resolve(response);
        }).catch(err => reject(err))
      })
    },
    editCompany(ctx, id) {
      return companyPartial.editCompany(id);
    },
    updateCompany(ctx, data) {
      return companyPartial.updateCompany(data);
    }
  }
}

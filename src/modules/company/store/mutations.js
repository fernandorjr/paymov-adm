import * as type from "./mutation-types"

export default {
  [type.SET_COMPANIES](state, payload) {
    state.companies = [];
    payload.map(companie => {
      state.companies.push(companie)
    })
  },
  [type.SET_COMPANY](state, payload) {
    state.companies.push(payload);
  }
};
import state from "./state"
import * as getters from "./getters"
import mutations from "./mutations"
import * as actions from "./actions"

export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
}
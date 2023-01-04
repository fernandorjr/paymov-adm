import * as type from "./mutation-types"

export default {
  [type.SET_TOKEN](state, payload) {
    state.token = payload;
  },
  [type.SET_USER](state, payload) {
    state.user = payload;
  },
};

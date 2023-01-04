import { createStore } from "vuex";

import { store as auth } from "@/modules/auth"
import { store as company } from "@/modules/company"

export default createStore({
  modules: {
    auth,
    company
  },
});

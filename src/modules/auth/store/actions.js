/* eslint-disable */
import * as type from "./mutation-types";
import authService from "@/modules/auth/service";

import factoryMethods from "@/utils/factoryMethods";

export const ActionSetUser = ({ commit }, payload) => {
  commit(type.SET_USER, payload);
};

export const ActionSetToken = ({ commit }, payload) => {
  localStorage.setItem("token", payload);
  commit(type.SET_TOKEN, payload);
};

export const ActionLogin = ({ dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    authService.login(payload).then((res) => {
      if (res.data.logado) {
        var user = res.data;
        user.token = factoryMethods.guidFactory();
        dispatch("ActionSetUser", user);
        dispatch("ActionSetToken", user.token);
        localStorage.setItem("token", user.token);
        resolve();
      } else {
        reject(res.data.mensagem);
      }
    });
  });
};

export const ActionLogoff = ({ dispatch }) => {
  localStorage.removeItem("token");
  dispatch("ActionSetUser", {});
  dispatch("ActionSetToken", "");
};

export const ActionCheckToken = ({ dispatch, state }) => {
  return new Promise ((resolve, reject) => {
    if(state.token){
      return resolve(state.token);
    } else {
      const token = localStorage.getItem("token");
      if(!token){
        return reject("Token inválido");
      } else {
        dispatch("ActionSetToken", token);
      }
    }
  })




  // if (state.token) {
  //   return Promise.resolve(state.token);
  // }
  // const token = localStorage.getItem("token");

  // if (!token) {
  //   return Promise.reject("Token inválido.");
  // }

  
  // return dispatch("ActionLoadSession");
};

// export const ActionLoadSession = ({ dispatch }) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = await authService.login();
//       dispatch("ActionSetUser", res.data);
//       resolve();
//     } catch (err) {
//       dispatch("ActionSignOut");
//       reject(err);
//     }
//   });
// };

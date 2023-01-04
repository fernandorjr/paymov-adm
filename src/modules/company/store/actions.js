/* eslint-disable */
import * as type from "./mutation-types";
// import companyService from "@/modules/company/service";
// import factoryMethods from "@/utils/factoryMethods";

export const ActionSetCompanies = ({ commit }, payload) => {
  commit(type.SET_COMPANIES, payload);
};
export const ActionSetCompany = ( { commit }, payload) => {
  commit(type.SET_COMPANY, payload);
};

export const ActionGetCompanies = ({ dispatch, state }) => {
  if(!state.companies){
    var companies = [
      {
        Empresa_id: "67BDE36C-009A-4AF4-9D2D-9594F1C2CABA",
        Empresa_nome: "Embratecc",
        Empresa_cnpj: "10.613.001/0001-65",
        Empresa_usuario: "emb",
        Empresa_activo: true,
      },
      {
        Empresa_id: "43B91DBA-568C-4A7C-9528-CE870EB472F1",
        Empresa_nome: "Percar",
        Empresa_cnpj: "34.062.488/0001-01",
        Empresa_usuario: "percar",
        Empresa_activo: true,
      },
    ];
    dispatch("ActionSetCompanies", companies);
  }
};

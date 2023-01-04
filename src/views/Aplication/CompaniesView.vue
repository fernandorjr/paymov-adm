<template>
  <div class="container" v-if="loadContent">
    <HeaderComponent title="Empresas" />
    <TableCompanies :table="table" :companies="companies" @openModal="handleOpenModal"/>
    <div class="row mt-3 d-flex justify-content-end">
      <ModalButtomComponent buttomName="Novo" :modalName="modalName" />
    </div>
  </div>

  <FormNewCompany  :modalName="modalName"  @companyValues="handleCompanyValues" @save="save" />
  <FormEditCompany :companyData="companyEdit"  modalName="editCompany" @save="save" />
</template>

<script>
import { mapActions, mapState } from "vuex";
import factoryMethods from "@/utils/factoryMethods";
import { Modal } from "bootstrap";

import HeaderComponent from "@/components/Shared/HeaderComponent.vue";
import FormNewCompany from "@/components/Aplication/Companies/FormNewCompany.vue";
import FormEditCompany from "@/components/Aplication/Companies/FormEditCompany.vue";
import ModalButtomComponent from "@/components/Shared/ModalButtomComponent.vue";
import TableCompanies from "@/components/Aplication/Companies/TableCompanies.vue";

export default {
  components: {
    HeaderComponent,
    TableCompanies,
    ModalButtomComponent,
    FormNewCompany,
    FormEditCompany,
  },
  data() {
    return {
      loadContent: false,
      modalName: "modalAddCompany",
      companyEdit: null,
      table: {
        header: ["ID Empresa", "Nome", "CNPJ", "Usuario", ""],
      },
    };
  },

  computed: {
    ...mapState({
      companies: (state) => state.company.companies,
    }),
  },

  methods: {
    ...mapActions("company", ["ActionGetCompanies", "ActionSetCompany"]),
    async getCompanies() {
      await this.ActionGetCompanies();
      this.loadContent = true;
    },
    save() {
      this.company.Empresa_id = factoryMethods.guidFactory();
      this.company.Empresa_activo = true;
      this.ActionSetCompany(this.company);
      this.company = {
        Empresa_id: "",
        Empresa_nome: "",
        Empresa_cnpj: "",
        Empresa_usuario: "",
        Empresa_activo: false,
      };
    },
    handleOpenModal(companyData, modalName){
      this.companyEdit = companyData;
      this.modal = new Modal(`#${modalName}`);
      this.modal.show();
    },
    handleCompanyValues(companyValues){
      this.company = companyValues;
    }
  },
  mounted() {
    this.getCompanies();
  },
};
</script>

<style scoped>
.link-button {
  cursor: pointer;
}
</style>
<template>
  <div
    class="modal fade"
    :id="modalName"
    tabindex="-1"
    aria-labelledby="modalAdd"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalAdd">Novo</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Nome da Empresa </label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="company.Empresa_nome"
              />
            </div>
            <div class="mb-3">
              <label for="document" class="form-label">CNPJ</label>
              <input
                type="text"
                class="form-control"
                id="document"
                v-model="company.Empresa_cnpj"
              />
            </div>
            <div class="mb-3">
              <label for="user" class="form-label">Usuario</label>
              <input
                type="text"
                class="form-control"
                id="user"
                v-model="company.Empresa_usuario"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-outline-danger"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="save"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '@/utils/utils';
/* eslint-disable */
export default {
  props: {
    companyData: {
      required: true
    },
    modalName: {
      required: true,
    },
  },
  data() {
    return {
      company: {},
    };
  },
  watch: {
    companyData: {
      handler() {
        this.company = utils.objectDeepClone(this.companyData);
      },
      deep: true,
    },
  },
  methods: {
    save(){
      this.$emit("save",this.company);
    }
  },
};
</script>

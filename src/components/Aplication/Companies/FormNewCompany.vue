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
            @click="this.$emit('save')"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      company: {
        Empresa_id: "",
        Empresa_nome: "",
        Empresa_cnpj: "",
        Empresa_usuario: "",
        Empresa_activo: false,
      },
    };
  },
  props:{
    modalName:{
      type: String,
      required: true,
    }
  },
  emits:['save', 'companyValues'],
  methods: {
    closeModal(){
      var modal = document.getElementById(this.modalName)
      var divBackdrop = document.querySelector(".modal-backdrop")
      divBackdrop.classList.toggle("show")
      modal.classList.toggle("show")
      modal.style.display = "none";
    }
  },
  watch: {
    company: {
      handler(newValue) {
        this.$emit("companyValues", newValue);
      },
      deep: true,
    },
  },
  mounted() {
    this.modal = new Modal(`#${this.modalName}`);
  },
};
</script>

<style scoped>
</style>
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
          <h1 class="modal-title fs-5" id="modalAdd">{{ title }}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot ></slot>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-outline-danger"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>

          <button type="button" class="btn btn-primary" @click="this.$emit('save')" data-bs-dismiss="modal">
            {{ btn }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  props:{
    btn:{
      type: String,
      default: "Salvar",
      required: true,
    },
    title: {
      type: String,
      default: "Novo",
      required: true,
    },
    modalName:{
      type: String,
      required: true,
    }
  },
  emits:['save'],
  methods: {
    closeModal(){
      var modal = document.getElementById(this.modalName)
      var divBackdrop = document.querySelector(".modal-backdrop")
      divBackdrop.classList.toggle("show")
      modal.classList.toggle("show")
      modal.style.display = "none";
    }
  },
  mounted() {
    this.modal = new Modal(`#${this.modalName}`);
  }
};
</script>

<style scoped>
</style>
<template>
  <button
    class="btn btn-primary w-auto d-flex align-items-center"
    type="button"
    data-bs-toggle="modal"
    :data-bs-target="`#${modalName}`"
  >
    <i class="bx bx-message-square-add me-3"></i>
    <span>{{ buttomName }}</span>
  </button>
</template>

<script>
export default {
  props: {
    modalName: {
      type: String,
      required: true,
    },
    buttomName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
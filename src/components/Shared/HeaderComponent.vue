<template>
  <div class="row">
    <div class="col-12 my-5">
      <h3>{{title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
</style>
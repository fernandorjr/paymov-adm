<template>
  <div class="row">
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th v-for="(title, index) in table.header" :key="index" scope="col">
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(company, index) in companies" :key="index">
          <th scope="row">{{ company.Empresa_id }}</th>
          <td>{{ company.Empresa_nome }}</td>
          <td>{{ company.Empresa_cnpj }}</td>
          <td>{{ company.Empresa_usuario }}</td>
          <td>
            <a class="link-button" @click="openModal(company)" >
              <i class="bx bx-edit text-primary"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    table: Object,
    companies: Array,
  },
  data() {
    return {
      modalName: "editCompany",
    };
  },
  methods:{
    openModal(data){
      this.$emit("openModal", data, this.modalName);
    },
  },
};
</script>

<style scoped>
.bx-edit {
  cursor: pointer;
}
</style>
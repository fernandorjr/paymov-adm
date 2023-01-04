<template>
  <LoginForm class="login-view" />
</template>

<script>
import LoginForm from "@/components/Login/LoginForm.vue";
export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>

<style lang="css" scoped>
.login-view {
  display: flex;
  align-items: center;
  height: 100vh;
}
</style>
<template>
  <SideBar />
  <router-view />
</template>

<script>
import SideBar from "@/components/Shared/SideBar.vue";
export default {
  components: {
    SideBar,
  },
  methods:{
    show(show){
      console.log(show)
    }
  }
};
</script>


<style>
* {
  font-family: "Poppins", sans-serif;
}


:root {
  --header-height: 3rem;
  --nav-width: 68px;
  --first-color: #11101d;
  --first-color-light: #f7f6fb;
  --white-color: #f7f6fb;
  --body-font: "Poppins", sans-serif;
  --normal-font-size: 1rem;
  --z-fixed: 100;
}
*,
::before,
::after {
  box-sizing: border-box;
}
body {
  position: relative;
  margin: var(--header-height) 0 0 0;
  padding: 0 1rem;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  transition: 0.5s;
}

#app {
  margin-top: 75px;
  margin-left: 68px;
}

@media screen and (max-width: 767px) {
  #app {
    margin-left: 0;
  }
}

</style>

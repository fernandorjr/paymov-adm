<template>
  <div :class="{ full: isShow }" @click="showNavbar" ></div>
  <header class="header" :class="{ 'body-pd': isBodyPd }" id="header">
    <div class="header_toggle">
      <i
        class="bx bx-menu"
        :class="{ 'bx-x': isBxx }"
        id="header-toggle"
        @click="showNavbar"
      ></i>
    </div>

    <div class="header_logo">
      <img src="@/assets/logo-sem-icone.png" alt="" />
    </div>

    <div class="header_img">
      <span> </span>
    </div>
  </header>
  <div class="l-navbar" :class="{ show: isShow }" id="nav-bar">
    <nav class="nav">
      <div>
        <div class="nav_logo">
          <i class="bx bx-layer nav_logo-icon"></i>
          <span class="nav_logo-name">{{
            user.usuario_nome ? user.usuario_nome : ""
          }}</span>
        </div>

        <div id="nav-list" class="nav_list">
          <router-link
            :to="{ name: 'home' }"
            @click="closeMenuChangeRouter"
            class="nav_link active"
          >
            <i class="bx bxs-home nav_icon"></i>
            <span class="nav_name">Página Inicial</span>
          </router-link>

          <router-link
            :to="{ name: 'companies' }"
            @click="closeMenuChangeRouter"
            class="nav_link active"
          >
            <i class="bx bxs-briefcase nav_icon"></i>
            <span class="nav_name">Empresas</span>
          </router-link>

          <!-- <router-link
            :to="{ name: 'companies' }"
            @click="closeMenuChangeRouter"
            class="nav_link active"
          >
            <i class="bx bxs-buildings nav_icon"></i>
            <span class="nav_name">Filiais</span>
          </router-link> -->

          <router-link
            :to="{ name: 'transactions' }"
            @click="closeMenuChangeRouter"
            class="nav_link"
          >
            <i class="bx bxs-credit-card nav_icon"></i>
            <span class="nav_name">Transações</span>
          </router-link>

          <router-link
            :to="{ name: 'reports' }"
            @click="closeMenuChangeRouter"
            class="nav_link"
          >
            <i class="bx bxs-report nav_icon"></i>
            <span class="nav_name">Relatórios</span>
          </router-link>
        </div>
      </div>
      <a class="nav_link" @click="handleLogoff()">
        <i class="bx bx-log-out nav_icon"></i>
        <span class="nav_name">Logoff</span>
      </a>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "SideBar",
  data() {
    return {
      isShow: false,
      isBodyPd: false,
      isBxx: false,
    };
  },
  methods: {
    ...mapActions("auth", ["ActionLogoff"]),
    showNavbar() {
      this.isShow = !this.isShow;
      this.isBxx = !this.isBxx;
      this.isBodyPd = !this.isBodyPd;
    },

    closeMenuChangeRouter() {
      if (this.isShow == true) {
        this.showNavbar();
      }
    },
    handleLogoff() {
      this.ActionLogoff();
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    ...mapState({ user: (state) => state.auth.user }),
  },
};
</script>

<style scoped>
.full {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.45);
}

a {
  text-decoration: none;
  cursor: pointer;
}
.header {
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--white-color);
  z-index: var(--z-fixed);
  transition: 0.5s;
}
.header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
}

.header_logo img {
  object-fit: contain;
  height: calc(var(--header-height));
}

.header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}
.header_img img {
  width: 40px;
}
.l-navbar {
  position: fixed;
  top: 0;
  left: -30%;
  width: var(--nav-width);
  height: 100vh;
  background-color: var(--first-color);
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: var(--z-fixed);
}
.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}
.nav_logo {
  margin-bottom: 3rem;
}
.show .nav_logo {
  transition: 0.5s;
  border-bottom: 1px solid var(--first-color-light);
}
.nav_logo-icon {
  font-size: 1.25rem;
  color: var(--white-color);
}
.nav_logo-name {
  color: var(--white-color);
  font-weight: 700;
}
.nav_link {
  color: var(--first-color-light);
  margin-bottom: 1.5rem;
  transition: 0.3s;
}
.nav_link:hover {
  color: var(--first-color);
  background-color: var(--white-color);
  padding-left: 15px;
}

.nav_icon {
  font-size: 1.25rem;
}
.show {
  left: 0;
}
.body-pd {
  padding-left: calc(var(--nav-width) + 1rem);
}
.router-link-exact-active {
  color: var(--white-color);
}
.router-link-exact-active::before {
  content: "";
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: var(--white-color);
}
.height-100 {
  height: 100vh;
}
@media screen and (min-width: 768px) {
  body {
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    padding-left: calc(var(--nav-width) + 2rem);
  }
  .header {
    height: calc(var(--header-height) + 1rem);
    padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
  }
  .header_img {
    width: 40px;
    height: 40px;
  }
  .header_img img {
    width: 45px;
  }
  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
  }
  .show {
    width: calc(var(--nav-width) + 156px);
  }
  .body-pd {
    padding-left: calc(var(--nav-width) + 188px);
  }

  .nav_list i {
    position: relative;
  }
}
</style>
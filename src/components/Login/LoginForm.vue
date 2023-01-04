<template>
  <div class="form-bg">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="form-container">
            <div class="form-banner">
              <!-- <i class="bx bxs-user-circle"></i> -->
              <img :src="banner" alt="Banner Login" />
            </div>
            <form class="form-horizontal" @submit.prevent="handleLogin()">
              <div class="form-horizontal-logo">
                <img :src="logo.img" :alt="logo.alt" />
              </div>
              <div class="form-group">
                <span class="input-icon"><i class="bx bx-envelope"></i></span>
                <input
                  class="form-control"
                  type="text"
                  v-model="usuario.usuario_login"
                  v-on:keypress.enter="handleLogin()"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <span class="input-icon"><i class="bx bx-lock-alt"></i></span>
                <input
                  class="form-control"
                  type="password"
                  v-model="usuario.usuario_senha"
                  placeholder="Password"
                />
              </div>
              <button class="btn">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo-sem-icone.png";
import banner from "@/assets/banner-login.png";
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      banner: banner,
      logo: {
        img: logo,

        alt: "Logo Paymov",
      },
      usuario: {
        usuario_id: 0,
        filial_id: "string",
        usuario_login: "",
        usuario_senha: "",
        usuario_nome: "string",
        logado: false,
        mensagem: "string",
      },
    };
  },
  methods: {
    ...mapActions("auth",["ActionLogin"]),
    async handleLogin() {
      try {
        await this.ActionLogin(this.usuario);
        this.$router.push({name: 'home'});
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível fazer login');
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  background: transparent;
  font-family: var(--font-family);
  font-size: 0;
  padding: 0 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.form-container .form-banner {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 50%;
  vertical-align: top;
  display: inline-block;
}
.form-container .form-banner img {
  width: 100%;
  height: 100%;
  border-radius: 25px;
}
.form-container .form-banner .signup a {
  color: #fff;
  text-transform: capitalize;
  transition: all 0.3s ease;
}
.form-container .form-banner .signup a:hover {
  text-decoration: underline;
}
.form-container .form-horizontal {
  background: rgba(255, 255, 255, 0.99);
  width: 50%;
  height: 50%;
  padding: 60px 30px;
  margin-left: -5px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: inline-block;
}
.form-container .title {
  color: #454545;
  font-size: 23px;
  font-weight: 900;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  margin: 0 0 30px 0;
}
.form-horizontal .form-group {
  background-color: rgba(255, 255, 255, 0.15);
  margin: 0 0 15px;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
}
.form-horizontal .form-group:focus-within {
  border: 1px solid var(--color-yellow);
}

.form-horizontal-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  width: 100%;
}

.form-horizontal-logo img {
  width: 70%;
}
.form-horizontal .input-icon {
  color: #b5b5b5;
  font-size: 15px;
  text-align: center;
  line-height: 38px;
  height: 35px;
  width: 40px;
  vertical-align: top;
  display: inline-block;
}
.form-horizontal .form-control {
  color: #b5b5b5;
  background-color: transparent;
  font-size: 14px;
  letter-spacing: 1px;
  width: calc(100% - 55px);
  height: 33px;
  padding: 2px 10px 0 0;
  box-shadow: none;
  border: none;
  border-radius: 0;
  display: inline-block;
  transition: all 0.3s;
}
.form-horizontal .form-control:focus {
  box-shadow: none;
  border: none;
}
.form-horizontal .form-control::placeholder {
  color: #b5b5b5;
  font-size: 13px;
  text-transform: capitalize;
}
.form-horizontal .btn {
  color: rgba(255, 255, 255, 0.8);
  background: var(--color-black);
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  margin: 10px 0 -20px 0;
  border: none;
  border-radius: 20px;
  transition: all 0.3s ease;
}
.form-horizontal .btn:hover,
.form-horizontal .btn:focus {
  color: #fff;
  background-color: var(--color-yellow);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.form-horizontal .btn:active {
  scale: 95%;
}

@media (max-width: 768px) {
  .form-container {
    display: flex;
    flex-direction: column;
  }
  .form-container .form-horizontal {
    width: 100%;
    margin: 0;
  }
}
/* 
@media only screen and (max-width: 576px) {
  .form-container {
    padding-bottom: 15px;
  }
  .form-container .form-banner {
    width: 100%;
    padding: 20px 0;
  }
  .form-container .form-horizontal {
    width: 100%;
    margin: 0;
  }
} */
</style>
import api from "@/services/axios";

const authService = {
  //todos os métodos de API.
  login(usuario) {
    return api.post("/Publico/Login", usuario);
  },
};

export default authService;

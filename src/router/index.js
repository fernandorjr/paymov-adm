import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/",
    name: "index",
    redirect: { name: "home" },
    component: () =>
      import(
        /* webpackChunkName: "index" */ "../views/Aplication/AppAuthenticated.vue"
      ),
    children: [
      {
        path: "home",
        name: "home",
        component: () =>
          import(
            /* webpackChunkName: "home"*/ "../views/Aplication/HomeView.vue"
          ),
      },
      {
        path: "empresas",
        name: "companies",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/Aplication/CompaniesView.vue"
          ),
      },
      {
        path: "transacoes",
        name: "transactions",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/Aplication/TransactionsView.vue"
          ),
      },
      {
        path: "relatorios",
        name: "reports",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "../views/Aplication/ReportsView.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const checkBeforeEach = async (to, from, next) => {
  if (to.name != "login" && !store.getters["auth/hasToken"]) {
    try {
      store.dispatch("auth/ActionCheckToken").then(() => {
        next();
      }).catch(next({ name: "login" }))
    } catch (err) {
      next({ name: "login" });
    }
  } else if (to.name == "login" && store.getters["auth/hasToken"]) {
    next({ name: "home" });
  } else {
    next();
  }
};

router.beforeEach(checkBeforeEach);

export default router;

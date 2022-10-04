<template>
  <div class="main-wrapper">
    <div class="account-content">
      <div class="container">
        <div class="account-logo">
          <router-link to="/">
            <img src="/img/logo.png" alt="Marndi's Technologies" />
          </router-link>
        </div>
        <div class="account-box">
          <div class="account-wrapper">
            <h3 class="account-title">Login</h3>
            <p class="account-subtitle">Access to our dashboard</p>
            <form @submit.prevent="login">
              <div class="form-group">
                <label>Email Address</label>
                <input class="form-control" type="text" v-model="email" />
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <label>Password</label>
                  </div>
                  <div class="col-auto">
                    <router-link class="text-muted" to="/forgot-password">
                      Forgot password?</router-link
                    >
                  </div>
                </div>
                <div class="position-relative">
                  <input
                    class="form-control"
                    type="password"
                    v-model="password"
                    id="password"
                  />
                  <span class="fa fa-eye-slash" id="toggle-password"></span>
                </div>
              </div>
              <div class="form-group text-center">
                <v-submit :progress="progress"> Login </v-submit>
              </div>
              <div class="account-footer">
                <p>
                  Don't have an account yet?
                  <router-link to="/register">Register</router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useAuthStore } from "@/stores";
export default {
  data() {
    return {
      progress: false,
      email: "puja1@gmail.com",
      password: "password",
    };
  },
  created() {
    // http.get('client/274c6ff7-fa6d-4d85-878d-ab7a65e004b5');
  },
  methods: {
    login() {
      const authStore = useAuthStore();
      this.progress = true;
      return authStore.login(this.email, this.password).then((response) => {
        this.progress = false;
      });
    },
  },
};
</script>

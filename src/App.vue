<template>
  <div class="main-wrapper" v-if="authenticated.isAuthenticated">
    <Header />
    <Sidebar />
    <div class="page-wrapper">

      <!-- <div class="loader-container" v-show="loader.isLoading">
        <div class="animated-background" style="width: 80%"></div>
        <div class="animated-background"></div>
        <div class="animated-background"></div>
        <div class="animated-background"></div>
        <div class="animated-background" style="width: 80%"></div>
        <div class="animated-background"></div>
        <div class="animated-background"></div>
        <div class="animated-background"></div>
        <div class="animated-background" style="width: 80%"></div>
      </div> -->
      <router-view> </router-view>
    </div>
  </div>
  <div class="account-page" v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Header  = defineAsyncComponent(() =>
	import('./views/layouts/Header.vue')
)
const Sidebar  = defineAsyncComponent(() =>
	import('./views/layouts/Sidebar.vue')
)


import { useAuthStore, responseStore } from "@/stores";

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      authenticated: "",
      loader: "",
    };
  },
  created() {
     this.authenticated = useAuthStore();
    this.loader = responseStore();
 
  },

  computed: {},
};
</script>
<style scoped>
.page-wrapper .loader-container {
  position: absolute;
  top: 100%;
  left: 30%;
  right: 50%;
}
.loader-container {
 
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes placeholder {
  0% {
    background-position: -600px 0;
  }
  100% {
    background-position: 600px 0;
  }
}

.animated-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholder;
  animation-timing-function: linear;
  background: #eeeeee;
  background: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  background-size: 1200px 100px;
  min-height: 30px;
  width: 100%;
  margin: 5px 0 5px 0;
  border-radius: 3px;
}
</style>

<template>
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll-custom">
      <div id="sidebar-menu" class="sidebar-menu slimScrollBar-custom">
        <ul v-if="mainMenu">
          <li class="menu-title">
            <span id="main-munu">Main</span>
          </li>
          <li
            class="submenu"
            v-for="(menu, index) in mainMenus"
            :key="index"
            :class="[menu.router_name == $route.name ? 'active' : '']"
          >
            <router-link
              :class="[
                currentIndex == index && is_submenu_open ? 'subdrop' : '',
              ]"
              :to="{ name: menu.router_name }"
              @click="menuOpen(index)"
            >
              <i :class="menu.icon"></i> <span> {{ menu.name }}</span>
              <span class="menu-arrow" v-show="menu.subMenus?.length > 0">
                <i class="fas fa-angle-right"></i>
              </span>
            </router-link>
            <transition name="slide">
              <ul
                :class="[
                  is_submenu_open && currentIndex === index
                    ? 'd-block '
                    : 'd-none',
                ]"
                v-if="menu.subMenus?.length > 0"
              >
                <li
                  v-for="(submenu, index) in menu.subMenus"
                  :key="index"
                  :class="[submenu.router_name == $route.name ? 'active' : '']"
                >
                  <router-link :to="{ name: submenu.router_name }"
                    >{{ submenu.name }}
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
          <li>
            <a href="javascript:void(0)" @click="showSettingMenu"
              ><i class="la la-cog"></i> <span>Settings</span></a
            >
          </li>
        </ul>

        <ul v-else>
          <li>
            <a href="javascript:void(0)" @click="showHomeMainMenu">
              <i class="la la-home"></i>
              <span>Back to Home</span></a
            >
          </li>
          <li class="menu-title" id="setting-menu">Settings</li>

          <li
            v-for="(setting, index) in settingMenus"
            :key="index"
            :class="[setting.router_name == $route.name ? 'active' : '']"
          >
            <router-link :to="{ name: setting.router_name }"
              ><i :class="setting.icon"></i>
              <span>{{ setting.name }}</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import menus from "@/locales/en.json";

export default {
  data() {
    return {
      mainMenu: JSON.parse(localStorage.getItem('mainMenu')),
      currentIndex: 0,
      currentSubmenuIndex: 0,
      is_submenu_open: false,
      mainMenus: menus.mainMenus,
      settingMenus: menus.settingMenus,
    };
  },
  methods: {
    showSettingMenu() {
      this.mainMenu = !this.mainMenu;
      var elmntToView = document.getElementById("main-munu");
      elmntToView.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
	  localStorage.setItem('mainMenu',JSON.stringify(false));
      this.$router.push({ name: "CompanySetting" });
    },
    showHomeMainMenu() {
      this.mainMenu = !this.mainMenu;
      this.currentIndex = 0;
      this.is_submenu_open = !this.is_submenu_open;
      this.$router.push({ name: "AdminDashboard" });
	  localStorage.setItem('mainMenu',JSON.stringify(true));
    },
    menuOpen(index) {
      this.currentIndex = index;
      this.is_submenu_open = !this.is_submenu_open;
    },
    subMenuActive(index) {
      this.currentSubmenuIndex = index;
    },
  },
  created() {
	//localStorage.setItem('mainMenu',JSON.stringify(true));
	//console.log(JSON.parse(localStorage.getItem('mainMenu')))
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

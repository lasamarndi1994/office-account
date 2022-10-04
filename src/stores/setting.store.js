import { defineStore } from 'pinia';

 export const settingStore = defineStore('setting',{
    state:() =>({
        mainMenu : true,
    }),
    getters: {
        isMainMenuActive: (state) => state.mainMenu,
      },

    actions: {
        setActiveMenu(res){
            this.mainMenu = res;
        }
       
    }

 });
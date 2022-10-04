import { defineStore } from 'pinia';

import router from '@/router'



export const useAuthStore = defineStore('auth',{

    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    getters: {
        isAuthenticated: (state) => !!state.user,
      },
    
    actions: {
        async login(username, password) {
            const user = await http.post(`/auth/login`, {
                'email' : username,
                'password' :password,
            });

            this.user = user.data;
            

            localStorage.setItem('user', JSON.stringify(user.data));
			localStorage.setItem('mainMenu',JSON.stringify(true));
          
            router.push('admin-dashboard' || '/');
          
        },
        logout() {
			
           	this.user = null;
            localStorage.removeItem('user');
			localStorage.setItem('mainMenu',JSON.stringify(false));
			router.push('login');
            
        }
    }
});

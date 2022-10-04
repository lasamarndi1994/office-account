import { defineStore } from 'pinia';

 export const responseStore = defineStore('response',{
    state:() =>({
        response : true,
    }),
    getters: {
        isLoading: (state) => state.response,
      },

    actions: {
        setResponse(res){
            this.response = res;
        }
       
    }

 });
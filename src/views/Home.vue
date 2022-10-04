
<template>
	<div>
		<router-link to="/login">Login</router-link>
	</div>
</template>
<script>
import Login from './auth/Login.vue';

export default {
    components: { Login },
    data(){
        return{
            isSliderActive: false,
        }
    },
    created(){
        
    },
    watch:{
        'isSliderActive':function(val){
                var element = document.getElementById("body");
                element.classList.toggle("mini-sidebar");
        }
    },
    methods:{
        silderBarToggle(){
        }
    }
}
</script>

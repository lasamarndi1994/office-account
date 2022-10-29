<template>
  <div class="modal custom-modal fade "  :class="{ show: modalShow}" :style="modalShowHide" aria-modal="true" role="dialog" >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{modalTitle}}</h5>
          <button
            type="button"
          
            @click="closeModal"
            class="close"
         
            aria-label="Close"
          >
          </button>
        </div>
        <div class="modal-body">
			<slot></slot>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show" v-show="modalShow"></div>
</template>
<script>


export default {
	emits: ["closeModal"],
    props: {
        modalShow : Boolean,
		modalTitle : String
    },
    watch:{
        'modalShow':function(){
            var body = document.querySelector("body");
            body.classList.toggle("modal-open");
            body.classList.toggle("body-modal");
        }
    },
    data(){
     return {

     }
    },
    created(){
      
    },
    methods:{
        closeModal(){ 
           this.$emit('closeModal');
        }
    },
    computed:{
        modalShowHide(){
            return this.modalShow ? "display:block; padding-left: 0px;" : "display:none;" 
        },
	
    }
}
</script>
<style >
    
 .body-modal{
    overflow: hidden; 
    padding-right: 17px;
 }
</style>
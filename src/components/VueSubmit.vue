<template>
  <button class="btn  btn-primary submit-btn" type="submit" :disabled="progress">
    <span class="spinner-border spinner-border-sm mr-1" v-show="progress"></span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    progress: Boolean,
  },
  data() {
    return {
      
    };
  },
};
</script>

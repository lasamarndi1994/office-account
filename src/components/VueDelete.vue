<template></template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    delete(index, data,table) {
      this.$swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    },
  },
};
</script>

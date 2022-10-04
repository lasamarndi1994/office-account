<template>
  <div class="row staff-grid-row">
    <div class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
      <div class="profile-widget">
        <div class="profile-img">
          <a href="client-profile.html" class="avatar"
            ><img alt="" src="/img/avatar.jpg"
          /></a>
        </div>
        <div class="dropdown profile-action">
          <a
            href="#"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><i class="material-icons">more_vert</i></a
          >
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item cursor" @click="editClient"
              ><i class="fa fa-pencil m-r-5"></i> Edit</a
            >
            <a
              class="dropdown-item"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_client"
              ><i class="fa fa-trash-o m-r-5"></i> Delete</a
            >
          </div>
        </div>
        <h4 class="user-name m-t-10 mb-0 text-ellipsis">
          <a href="client-profile.html">Global Technologies</a>
        </h4>
        <h5 class="user-name m-t-10 mb-0 text-ellipsis">
          <a href="client-profile.html">Barry Cuda</a>
        </h5>
        <div class="small text-muted">CEO</div>
        <a href="chat.html" class="btn btn-white btn-sm m-t-10 m-r-5"
          >Message</a
        >
        <a href="client-profile.html" class="btn btn-white btn-sm m-t-10"
          >View Profile</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
	props:{
		clients:Array
	},
  methods: {
    deleteClient(index, employee_id) {
      this.$emit("delete", index, employee_id);
    },
    editClient() {
      this.$emit("edit");
    },
  },
};
</script>
<style scoped>
.profile-widget {
  padding: 10px 0 0 0;
  height: 230px !important;
}
</style>

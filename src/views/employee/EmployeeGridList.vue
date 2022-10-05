<template>
  <div class="row staff-grid-row">
    <div
      class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
      v-for="(employee, index) in employees"
      :key="index"
    >
      <div class="profile-widget">
        <div class="profile-img">
          <a href="profile.html" class="avatar"
            ><img src="/img/avatar.jpg" alt=""
          /></a>
        </div>
        <div class="dropdown profile-action">
          <a
            href="#"
            class="action-icon dropdown-toggle material-icons"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><i class="material-icons">more_vert</i></a>
			
          <div class="dropdown-menu dropdown-menu-right">
            <a
              class="dropdown-item"
              href="javascript:void(0)"
              @click="editEmployee(employee.id)"
              >Edit
            </a>
            <a
              class="dropdown-item"
              href="javascript:void(0)"
              @click="deleteEmployee(index, employee.id)"
              >Delete</a
            >
          </div>
        </div>
        <h4 class="user-name m-t-10 mb-0 text-ellipsis">
          <a href="profile.html"
            >{{ employee.first_name }} {{ employee.last_name }}</a
          >
        </h4>
        <div class="small text-muted">Web Designer</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employees: Array,
  },
  created() {},
  methods: {
    deleteEmployee(index, employee_id) {
      this.$emit("delete", index, employee_id);
    },
    editEmployee(employee_id) {
      this.$emit("edit", employee_id);
    },
  },
};
</script>

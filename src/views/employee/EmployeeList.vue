<template>
    <div class="row">
        <div class="col-md-12">
            <div class="table-responsive">
                <table class="table table-striped custom-table datatable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employee ID</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th class="text-nowrap">Join Date</th>
                            <th>Role</th>
                            <th class="text-end no-sort">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee,index) in employees" :key="index">
                            <td>
                                <h2 class="table-avatar">
                                    <a href="profile.html" class="avatar"><img alt="" src="/img/avatar.jpg"></a>
                                    <a href="profile.html">{{employee.first_name}} <span>Web Designer</span></a>
                                </h2>
                            </td>
                            <td>{{employee.employee_id}}</td>
                            <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e3898c8b8d878c86a3869b828e938f86cd808c8e">[email&#160;protected]</a></td>
                            <td>{{employee.mobile_number}}</td>
                            <td>1 Jan 2013</td>
                            <td>
                                <div class="dropdown">
                                    <a href="" class="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Web Developer </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Software Engineer</a>
                                        <a class="dropdown-item" href="#">Software Tester</a>
                                        <a class="dropdown-item" href="#">Frontend Developer</a>
                                        <a class="dropdown-item" href="#">UI/UX Developer</a>
                                    </div>
                                </div>
                            </td>
                            <td class="text-end">
                                <div class="dropdown dropdown-action">
                                    <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="javascript:void" @click="openModal()"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                        <a class="dropdown-item" href="javascript:void"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	props:{
		employees : Array
	},
	methods: {
    openModal() {
      this.$emit("showModal");
    },
  },
}
</script>
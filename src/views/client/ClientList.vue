<template>
  <div class="row">
    <div class="col-md-12">
      <div class="table-responsive">
        <table class="table table-striped custom-table datatable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Client ID</th>
              <th>Contact Person</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              <th class="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(client,index) in clients" :key="index">
              <td>
                <h2 class="table-avatar">
                  <a href="client-profile.html" class="avatar"
                    ><img src="/img/avatar.jpg" alt=""
                  /></a>
                  <a href="client-profile.html">{{client.organization}}</a>
                </h2>
              </td>
              <td>CLT-0001</td>
              <td>Barry Cuda</td>
              <td>
                <a
                  href="/cdn-cgi/l/email-protection"
                  class="__cf_email__"
                  data-cfemail="afcdceddddd6ccdacbceefcad7cec2dfc3ca81ccc0c2"
                  >[email&#160;protected]</a
                >
              </td>
              <td>9876543210</td>
              <td>
                <div class="dropdown action-label">
                  <a
                    href="#"
                    class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="fa fa-dot-circle-o text-success"></i> Active
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"
                      ><i class="fa fa-dot-circle-o text-success"></i> Active</a
                    >
                    <a class="dropdown-item" href="#"
                      ><i class="fa fa-dot-circle-o text-danger"></i>
                      Inactive</a
                    >
                  </div>
                </div>
              </td>
              <td class="text-end">
                <div class="dropdown dropdown-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_client"
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
  props: {
    clients: Array,
  },
};
</script>

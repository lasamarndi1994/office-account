<template>
  <div class="content container-fluid">
    <div class="page-header">
      <div class="row">
        <div class="col-sm-12">
          <h3 class="page-title">User Report</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="admin-dashboard.html">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">User Reports</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row filter-row">
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus">
          <div class="cal-icon">
            <select class="form-control floating select">
              <option>Name1</option>
              <option>Name2</option>
            </select>
          </div>
          <label class="focus-label">User Role</label>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <a href="#" class="btn btn-success w-100"> Search </a>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-striped custom-table mb-0 datatable">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Role</th>
                <th>Designation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <h2 class="table-avatar">
                    <a href="profile.html" class="avatar"
                      ><img src="/img/avatar.jpg" alt=""
                    /></a>
                    <a href="profile.html"
                      >Barry Cuda <span>Global Technologies</span></a
                    >
                  </h2>
                </td>
                <td>Global Technologies</td>
                <td>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="75171407070c1600111435100d14180519105b161a18"
                    >[email&#160;protected]</a
                  >
                </td>
                <td>
                  <span class="badge bg-inverse-info">Client</span>
                </td>
                <td>CEO</td>
                <td>
                  <div class="dropdown action-label">
                    <a href="#" class="btn btn-white btn-sm btn-rounded"
                      ><i class="fa fa-dot-circle-o text-success"></i> Active
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <h2 class="table-avatar">
                    <a href="profile.html" class="avatar"
                      ><img src="/img/avatar.jpg" alt=""
                    /></a>
                    <a href="profile.html">Daniel Porter <span>Admin</span></a>
                  </h2>
                </td>
                <td>Focus Technologies</td>
                <td>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="5034313e39353c203f22243522103528313d203c357e333f3d"
                    >[email&#160;protected]</a
                  >
                </td>
                <td>
                  <span class="badge bg-inverse-danger">Admin</span>
                </td>
                <td>Admin Manager</td>
                <td>
                  <div class="dropdown action-label">
                    <a href="#" class="btn btn-white btn-sm btn-rounded"
                      ><i class="fa fa-dot-circle-o text-success"></i> Active
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
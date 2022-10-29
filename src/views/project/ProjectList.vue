<template>
  <div class="row">
    <div class="col-sm-12">
      <table
        class="table table-striped custom-table datatable dataTable no-footer"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead>
          <tr role="row">
            <th
              class="sorting_asc"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-sort="ascending"
              aria-label="Project: activate to sort column descending"
              style="width: 157.292px"
            >
              Project
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Project Id: activate to sort column ascending"
              style="width: 69.8125px"
            >
              Project Id
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Leader: activate to sort column ascending"
              style="width: 48.9062px"
            >
              Leader
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Team: activate to sort column ascending"
              style="width: 44.3021px"
            >
              Team
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Deadline: activate to sort column ascending"
              style="width: 73.9792px"
            >
              Deadline
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Priority: activate to sort column ascending"
              style="width: 99.4896px"
            >
              Priority
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Status: activate to sort column ascending"
              style="width: 96.4167px"
            >
              Status
            </th>
            <th
              class="text-end sorting"
              tabindex="0"
              aria-controls="DataTables_Table_0"
              rowspan="1"
              colspan="1"
              aria-label="Action: activate to sort column ascending"
              style="width: 47.1354px"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd">
            <td class="sorting_1">
              <a href="project-view.html">Hospital Administration</a>
            </td>
            <td>PRO-0004</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> High
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="even">
            <td class="sorting_1">
              <a href="project-view.html">Hospital Administration</a>
            </td>
            <td>PRO-0008</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> High
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="odd">
            <td class="sorting_1">
              <a href="project-view.html">Office Management</a>
            </td>
            <td>PRO-0001</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members text-nowrap">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li class="dropdown avatar-dropdown">
                  <a
                    href="#"
                    class="all-users dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >+15</a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <div class="avatar-group">
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-10.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-12.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-01.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="assets/img/profiles/avatar-16.jpg" />
                      </a>
                    </div>
                    <div class="avatar-pagination">
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span class="visually-hidden">Previous</span>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span class="visually-hidden">Next</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> High
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="even">
            <td class="sorting_1">
              <a href="project-view.html">Office Management</a>
            </td>
            <td>PRO-0005</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> High
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="odd">
            <td class="sorting_1">
              <a href="project-view.html">Office Management</a>
            </td>
            <td>PRO-0009</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> High
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="even">
            <td class="sorting_1">
              <a href="project-view.html">Project Management</a>
            </td>
            <td>PRO-0002</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-warning"></i> Medium
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> Inactive
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Active</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="odd">
            <td class="sorting_1">
              <a href="project-view.html">Project Management</a>
            </td>
            <td>PRO-0006</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> High
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="even">
            <td class="sorting_1">
              <a href="project-view.html">Project Management</a>
            </td>
            <td>PRO-0010</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> High
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="odd">
            <td class="sorting_1">
              <a href="project-view.html">Video Calling App</a>
            </td>
            <td>PRO-0003</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-success"></i> Low
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
                    ><i class="fa fa-trash-o m-r-5"></i> Delete</a
                  >
                </div>
              </div>
            </td>
          </tr>

          <tr class="even">
            <td class="sorting_1">
              <a href="project-view.html">Video Calling App</a>
            </td>
            <td>PRO-0007</td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Jeffery Lalor"
                    aria-label="Jeffery Lalor"
                    ><img alt="" src="assets/img/profiles/avatar-16.jpg"
                  /></a>
                </li>
              </ul>
            </td>
            <td>
              <ul class="team-members">
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Doe"
                    aria-label="John Doe"
                    ><img alt="" src="assets/img/profiles/avatar-02.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Richard Miles"
                    aria-label="Richard Miles"
                    ><img alt="" src="assets/img/profiles/avatar-09.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="John Smith"
                    aria-label="John Smith"
                    ><img alt="" src="assets/img/profiles/avatar-10.jpg"
                  /></a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Mike Litorus"
                    aria-label="Mike Litorus"
                    ><img alt="" src="assets/img/profiles/avatar-05.jpg"
                  /></a>
                </li>
                <li>
                  <a href="#" class="all-users">+15</a>
                </li>
              </ul>
            </td>
            <td>17 Apr 2019</td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
                  class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fa fa-dot-circle-o text-danger"></i> High
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-danger"></i> High</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-warning"></i> Medium</a
                  >
                  <a class="dropdown-item" href="#"
                    ><i class="fa fa-dot-circle-o text-success"></i> Low</a
                  >
                </div>
              </div>
            </td>
            <td>
              <div class="dropdown action-label">
                <a
                  href=""
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
                    ><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a
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
                    data-bs-target="#edit_project"
                    ><i class="fa fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_project"
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
</template>

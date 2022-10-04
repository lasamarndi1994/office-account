<template>
    <div class="content container-fluid">

        <div class="page-header">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="page-title">Trainers</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                        <li class="breadcrumb-item active">Trainers</li>
                    </ul>
                </div>
                <div class="col-auto float-end ms-auto">
                    <a href="#" class="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_trainer"><i
                            class="fa fa-plus"></i> Add New</a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped custom-table mb-0 datatable">
                        <thead>
                            <tr>
                                <th style="width: 30px;">#</th>
                                <th>Name </th>
                                <th>Contact Number </th>
                                <th>Email </th>
                                <th>Description </th>
                                <th>Status </th>
                                <th class="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html">John Doe </a>
                                    </h2>
                                </td>
                                <td>9876543210</td>
                                <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="39535651575d565c795c41585449555c175a5654">[email&#160;protected]</a>
                                </td>
                                <td>Lorem ipsum dollar</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-dot-circle-o text-danger"></i> Inactive
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-end">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#edit_type"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#delete_type"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html">Mike Litorus </a>
                                    </h2>
                                </td>
                                <td>9876543120</td>
                                <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="fa9793919f96938e95888f89ba9f829b978a969fd4999597">[email&#160;protected]</a>
                                </td>
                                <td>Lorem ipsum dollar</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-dot-circle-o text-success"></i> Active
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-end">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#edit_type"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#delete_type"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html">Wilmer Deluna </a>
                                    </h2>
                                </td>
                                <td>9876543210</td>
                                <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="9becf2f7f6fee9fffef7eef5fadbfee3faf6ebf7feb5f8f4f6">[email&#160;protected]</a>
                                </td>
                                <td>Lorem ipsum dollar</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-dot-circle-o text-danger"></i> Inactive
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-end">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#edit_type"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#delete_type"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html">John Smith </a>
                                    </h2>
                                </td>
                                <td>9876543210</td>
                                <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="49232621273a24203d21092c31282439252c672a2624">[email&#160;protected]</a>
                                </td>
                                <td>Lorem ipsum dollar</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-dot-circle-o text-danger"></i> Inactive
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-end">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#edit_type"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#delete_type"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html">Richard Miles </a>
                                    </h2>
                                </td>
                                <td>9876543210</td>
                                <td><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="f7859e949f9685939a9e9b9284b7928f969a879b92d994989a">[email&#160;protected]</a>
                                </td>
                                <td>Lorem ipsum dollar</td>
                                <td>
                                    <div class="dropdown action-label">
                                        <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa fa-dot-circle-o text-danger"></i> Inactive
                                        </a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-success"></i> Active</a>
                                            <a class="dropdown-item" href="#"><i
                                                    class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-end">
                                    <div class="dropdown dropdown-action">
                                        <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown"
                                            aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#edit_type"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                data-bs-target="#delete_type"><i class="fa fa-trash-o m-r-5"></i>
                                                Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <div id="add_trainer" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Trainer</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">First Name <span class="text-danger">*</span></label>
                                    <input class="form-control" type="text">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Last Name</label>
                                    <input class="form-control" type="text">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Role <span class="text-danger">*</span></label>
                                    <input class="form-control" type="text">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Email <span class="text-danger">*</span></label>
                                    <input class="form-control" type="email">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Phone </label>
                                    <input class="form-control" type="text">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Status</label>
                                    <select class="select">
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label>Description <span class="text-danger">*</span></label>
                                    <textarea class="form-control" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="submit-section">
                            <button class="btn btn-primary submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <div id="edit_type" class="modal custom-modal fade" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Trainer</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">First Name <span class="text-danger">*</span></label>
                                    <input class="form-control" type="text" value="John">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Last Name</label>
                                    <input class="form-control" type="text" value="Doe">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Role <span class="text-danger">*</span></label>
                                    <input class="form-control" type="text" value="Web Developer">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Email <span class="text-danger">*</span></label>
                                    <input class="form-control" type="email" value="johndoe@example.com">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Phone </label>
                                    <input class="form-control" type="text" value="9876543210">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Status</label>
                                    <select class="select">
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label>Description <span class="text-danger">*</span></label>
                                    <textarea class="form-control" rows="4">Lorem ipsum ismap</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="submit-section">
                            <button class="btn btn-primary submit-btn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <div class="modal custom-modal fade" id="delete_type" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="form-header">
                        <h3>Delete Trainers List</h3>
                        <p>Are you sure want to delete?</p>
                    </div>
                    <div class="modal-btn delete-action">
                        <div class="row">
                            <div class="col-6">
                                <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                            </div>
                            <div class="col-6">
                                <a href="javascript:void(0);" data-bs-dismiss="modal"
                                    class="btn btn-primary cancel-btn">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
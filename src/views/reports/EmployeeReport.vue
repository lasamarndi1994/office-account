<template>
    <div class="content container-fluid">

        <div class="page-header">
            <div class="row">
                <div class="col">
                    <h3 class="page-title">Employee Report</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                        <li class="breadcrumb-item active">Employee Report</li>
                    </ul>
                </div>
                <div class="col-auto">
                    <a href="#" class="btn btn-primary">PDF</a>
                </div>
            </div>
        </div>



        <div class="row filter-row mb-4">
            <div class="col-sm-6 col-md-3">
                <div class="form-group form-focus">
                    <input class="form-control floating" type="text">
                    <label class="focus-label">Employee</label>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="form-group form-focus select-focus">
                    <select class="select floating">
                        <option>Select Department</option>
                        <option>Designing</option>
                        <option>Development</option>
                        <option>Finance</option>
                        <option>Hr & Finance</option>
                    </select>
                    <label class="focus-label">Department</label>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="form-group form-focus">
                    <div class="cal-icon">
                        <input class="form-control floating datetimepicker" type="text">
                    </div>
                    <label class="focus-label">From</label>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="form-group form-focus">
                    <div class="cal-icon">
                        <input class="form-control floating datetimepicker" type="text">
                    </div>
                    <label class="focus-label">To</label>
                </div>
            </div>
            <div class="col-sm-6 col-md-3">
                <div class="d-grid">
                    <a href="#" class="btn btn-success"> Search </a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped custom-table mb-0 datatable">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Type</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Joining Date</th>
                                <th>DOB</th>
                                <th>Martial Status</th>
                                <th>Gender</th>
                                <th>Terminated Date</th>
                                <th>Relieving Date</th>
                                <th>Salary</th>
                                <th>Address</th>
                                <th>Contact Number</th>
                                <th>Emercency Contact Details</th>
                                <th>Experience</th>
                                <th class="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html" class="text-primary">John Doe <span>#0001</span></a>
                                    </h2>
                                </td>
                                <td>Employee</td>
                                <td class="text-info"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="7e141116101a111b3e1b061f130e121b501d1113">[email&#160;protected]</a>
                                </td>
                                <td>Design</td>
                                <td>UI Design</td>
                                <td>20 Aug 2020</td>
                                <td>03 Mar 1992</td>
                                <td>Married</td>
                                <td>Male</td>
                                <td>-</td>
                                <td>-</td>
                                <td>$20000</td>
                                <td>
                                    1861 Bayonne Ave, Manchester Township, NJ, 08759
                                </td>
                                <td>9876543210</td>
                                <td>7894561235</td>
                                <td>0 years 4 months and 9 days</td>
                                <td><button class="btn btn-outline-success btn-sm">Active</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html" class="text-primary">Richard Miles <span>#0002</span></a>
                                    </h2>
                                </td>
                                <td>Employee</td>
                                <td class="text-info"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="196b707a71786b7d7470757c6a597c61787469757c377a7674">[email&#160;protected]</a>
                                </td>
                                <td>Android Developer</td>
                                <td>IT Support</td>
                                <td>01 Jul 2020</td>
                                <td>05 Dec 1979</td>
                                <td>Married</td>
                                <td>Male</td>
                                <td>-</td>
                                <td>-</td>
                                <td>$15000</td>
                                <td>
                                    1861 Bayonne Ave, Manchester Township, NJ, 08759
                                </td>
                                <td>9876543210</td>
                                <td>7894561235</td>
                                <td>0 years 5 months and 24 days</td>
                                <td><button class="btn btn-outline-success btn-sm">Active</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html" class="text-primary">John Smith <span>#003</span></a>
                                    </h2>
                                </td>
                                <td>Employee</td>
                                <td class="text-info"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="a0cacfc8ced3cdc9d4c8e0c5d8c1cdd0ccc58ec3cfcd">[email&#160;protected]</a>
                                </td>
                                <td>IOS Developer</td>
                                <td>Development Manager</td>
                                <td>03 Sep 2020</td>
                                <td>16 Apr 1984</td>
                                <td>Married</td>
                                <td>Male</td>
                                <td>-</td>
                                <td>-</td>
                                <td>$27000</td>
                                <td>
                                    1861 Bayonne Ave, Manchester Township, NJ, 08759
                                </td>
                                <td>9876543210</td>
                                <td>7894561235</td>
                                <td>0 years 3 months and 21 days</td>
                                <td><button class="btn btn-outline-success btn-sm">Active</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html" class="text-primary">Mike Litorus <span>#004</span></a>
                                    </h2>
                                </td>
                                <td>Employee</td>
                                <td class="text-info"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="0a6763616f66637e65787f794a6f726b677a666f24696567">[email&#160;protected]</a>
                                </td>
                                <td>Web Developer</td>
                                <td>IT Support</td>
                                <td>15 Nov 2020</td>
                                <td>15 Jul 2005</td>
                                <td>Single</td>
                                <td>Male</td>
                                <td>-</td>
                                <td>-</td>
                                <td>$15000</td>
                                <td>
                                    1861 Bayonne Ave, Manchester Township, NJ, 08759
                                </td>
                                <td>9876543210</td>
                                <td>7894561235</td>
                                <td>0 years 1 months and 9 days</td>
                                <td><button class="btn btn-outline-success btn-sm">Active</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 class="table-avatar">
                                        <a href="profile.html" class="avatar"><img alt=""
                                                src="/img/avatar.jpg"></a>
                                        <a href="profile.html" class="text-primary">Wilmer Deluna <span>#005</span></a>
                                    </h2>
                                </td>
                                <td>Employee</td>
                                <td class="text-info"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                        data-cfemail="06716f6a6b637462636a73686746637e676b766a632865696b">[email&#160;protected]</a>
                                </td>
                                <td>Team Leader</td>
                                <td>Development Manager</td>
                                <td>01 Dec 2020</td>
                                <td>21 Jun 1984</td>
                                <td>Married</td>
                                <td>Male</td>
                                <td>-</td>
                                <td>-</td>
                                <td>$25000</td>
                                <td>
                                    1861 Bayonne Ave, Manchester Township, NJ, 08759
                                </td>
                                <td>9876543210</td>
                                <td>7894561235</td>
                                <td>0 years 0 months and 24 days</td>
                                <td><button class="btn btn-outline-success btn-sm">Active</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
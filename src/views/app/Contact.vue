<template>
  <div class="content container-fluid">
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">Contact</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="admin-dashboard.html">App</a>
            </li>
            <li class="breadcrumb-item active">Contact</li>
          </ul>
        </div>
        <div class="col-auto float-end ms-auto">
          <a
            href="#"
            class="btn add-btn"
            data-bs-toggle="modal"
            data-bs-target="#create_project"
            ><i class="fa fa-plus"></i> Create Project</a
          >
          <div class="view-icons">
            <a href="projects.html" class="grid-view btn btn-link active"
              ><i class="fa fa-th"></i></a
            ><a href="project-list.html" class="list-view btn btn-link"
              ><i class="fa fa-bars"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="contact-cat col-sm-4 col-lg-3">
        <a
          href="#"
          class="btn btn-primary w-100"
          data-bs-toggle="modal"
          data-bs-target="#add_contact"
          ><i class="fa fa-plus"></i> Add Contact</a
        >
        <div class="roles-menu">
          <ul>
            <li class="active"><a href="javascript:void(0);">All</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Client</a></li>
            <li><a href="#">Staff</a></li>
          </ul>
        </div>
      </div>
      <div class="contacts-list col-sm-8 col-lg-9">
        <ul class="contact-list">
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">John Doe</span>
                <span class="contact-date">Web Developer</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">Richard Miles</span>
                <span class="contact-date">Web Developer</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">John Smith</span>
                <span class="contact-date">Android Developer</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">Mike Litorus</span>
                <span class="contact-date">IOS Developer</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">Wilmer Deluna</span>
                <span class="contact-date">Team Leader</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">Jeffrey Warden</span>
                <span class="contact-date">Web Developer</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">Bernardo Galaviz</span>
                <span class="contact-date">Web Developer</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img
                    class="rounded-circle"
                    alt=""
                    src="/img/avatar.jpg"
                  />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">Lesley Grauer</span>
                <span class="contact-date">Team Leader</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">Jeffery Lalor</span>
                <span class="contact-date">Team Leader</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="contact-cont">
              <div class="float-start user-img">
                <a href="profile.html" class="avatar">
                  <img class="rounded-circle" alt="" src="/img/avatar.jpg" />
                  <span class="status online"></span>
                </a>
              </div>
              <div class="contact-info">
                <span class="contact-name text-ellipsis">Loren Gatlin</span>
                <span class="contact-date">Android Developer</span>
              </div>
              <ul class="contact-action">
                <li class="dropdown dropdown-action">
                  <a
                    href=""
                    class="dropdown-toggle action-icon"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">more_vert</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="contact-alphapets">
        <div class="alphapets-inner">
          <a href="#">A</a>
          <a href="#">B</a>
          <a href="#">C</a>
          <a href="#">D</a>
          <a href="#">E</a>
          <a href="#">F</a>
          <a href="#">G</a>
          <a href="#">H</a>
          <a href="#">I</a>
          <a href="#">J</a>
          <a href="#">K</a>
          <a href="#">L</a>
          <a href="#">M</a>
          <a href="#">N</a>
          <a href="#">O</a>
          <a href="#">P</a>
          <a href="#">Q</a>
          <a href="#">R</a>
          <a href="#">S</a>
          <a href="#">T</a>
          <a href="#">U</a>
          <a href="#">V</a>
          <a href="#">W</a>
          <a href="#">X</a>
          <a href="#">Y</a>
          <a href="#">Z</a>
        </div>
      </div>
    </div>
  </div>
</template>

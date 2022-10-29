<template>
	<div class="row">
      <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3" v-for="(project,index) in projects" :key="index">
        <div class="card">
          <div class="card-body">
            <div class="dropdown dropdown-action profile-action">
              <a
                href="#"
                class="action-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                ><i class="material-icons">more_vert</i></a
              >
              <div class="dropdown-menu dropdown-menu-right">
                <a @click="editProject(project.id)"
                  class="dropdown-item cursor"
                  
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
            <h4 class="project-title">
              <router-link :to="{ name: 'ProjectView', params: { id: project.id }}">{{project.project_name}}</router-link>
            </h4>
            <small class="block text-ellipsis m-b-15">
              <span class="text-xs">1</span>
              <span class="text-muted">open tasks, </span>
              <span class="text-xs">9</span>
              <span class="text-muted">tasks completed</span>
            </small>
            <p class="text-muted">
              {{project.description}}
            </p>
            <div class="pro-deadline m-b-15">
              <div class="sub-title">Deadline:</div>
              <div class="text-muted">{{project.end_date}}</div>
            </div>
            <div class="project-members m-b-15">
              <div>Project Leader :</div>
              <ul class="team-members">
                <li>
                  <a href="#" v-tooltip title="Jeffery Lalor"
                    ><img alt="" src="/img/avatar.jpg"
                  /></a>
                </li>
              </ul>
            </div>
            <div class="project-members m-b-15">
              <div>Team :</div>
              <ul class="team-members">
                <li v-for="(team,index) in project.teams" :key="index" >
                  <a href="#" v-tooltip :title="team.first_name+ ' '+ team.last_name"
                    ><img alt="" src="/img/avatar.jpg"
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
                        <img alt="" src="/img/avatar.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="/img/avatar.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="/img/avatar.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="/img/avatar.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="/img/avatar.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="/img/avatar.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="/img/avatar.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="/img/avatar.jpg" />
                      </a>
                      <a class="avatar avatar-xs" href="#">
                        <img alt="" src="/img/avatar.jpg" />
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
            </div>
            <p class="m-b-5">
              Progress <span class="text-success float-end">40%</span>
            </p>
            <div class="progress progress-xs mb-0">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                v-tooltip
                title="40%"
                style="width: 40%"
              ></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
	props:{
		projects:Object
	},
	methods:{
		editProject(project_id){
			this.$emit('edit',project_id);
		}
	}

}
</script>
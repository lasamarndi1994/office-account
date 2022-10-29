<template>
  <div class="content container-fluid">
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">Projects</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="admin-dashboard.html">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Projects</li>
          </ul>
        </div>
        <div class="col-auto float-end ms-auto">
          <button class="btn add-btn" @click="addProject">
            <i class="fa fa-plus"></i> Create Project
          </button>
          <div class="view-icons">
            <button
              type="button"
              @click="showStatus = !showStatus"
              class="grid-view btn btn-link active"
            >
              <i :class="changeDisplay"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row filter-row">
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus">
          <input type="text" class="form-control floating" />
          <label class="focus-label">Project Name</label>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus">
          <input type="text" class="form-control floating" />
          <label class="focus-label">Employee Name</label>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus select-focus">
          <select class="select form-control floating">
            <option>Select Roll</option>
            <option>Web Developer</option>
            <option>Web Designer</option>
            <option>Android Developer</option>
            <option>Ios Developer</option>
          </select>
          <label class="focus-label">Designation</label>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <a href="#" class="btn btn-success w-100"> Search </a>
      </div>
    </div>
    <project-grid v-if="showStatus" :projects="projects" @edit="edit" />
    <project-list
      v-else
      :projects="projects"
      @showModal="showMadal"
      @edit="edit"
    />
  </div>
  <v-modal
    :modalShow="modalShow"
    @closeModal="closeModal"
    :modalTitle="modalTitle"
  >
    <form @submit.prevent="store">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>Project Name</label>
            <input
              class="form-control"
              type="text"
              id="project_name"
              v-model="form.project_name"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label>Client</label>
            <Multiselect
              placeholder="Select client"
              v-model="form.client_id"
              mode="single"
              :close-on-select="true"
              :searchable="true"
              @search-change="getClient"
              valueProp="id"
              label="name"
              trackBy="name"
              :create-option="false"
              :options="clients"
              @open="multiSelectOpen"
            />
          </div>
          <div id="client_id" class="m-b-10"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label>Start Date</label>
            <div class="cal-icon">
              <flat-pickr
                v-model="form.start_date"
                id="start_date"
                class="form-control datetimepicker"
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label>End Date</label>
            <div class="cal-icon">
              <flat-pickr
                v-model="form.end_date"
                id="end_date"
                class="form-control datetimepicker"
                placeholder="YYYY-MM-DD"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <label>Rate</label>
            <input
              placeholder="$50"
              v-model="form.rate"
              id="rate"
              class="form-control"
              type="text"
            />
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group">
            <label>&nbsp;</label>
            <select
              class="select form-control"
              id="rate_type"
              v-model="form.rate_type"
            >
              <option value="hourly">Hourly</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label>Priority</label>
            <select
              class="select form-control"
              id="priority"
              v-model="form.priority"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8"  v-show="!isEdit">
          <div class="form-group">
            <label>Add Project Leader</label>

            <Multiselect
              placeholder="Select team"
              v-model="form.team_lead_id"
              mode="tags"
              :resolve-on-load="true"
              :close-on-select="true"
              :searchable="true"
              @search-change="searchTeamLeader"
              valueProp="id"
              label="full_name"
              trackBy="full_name"
              :create-option="false"
              :options="leaders"
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label>Team Leader</label>
            <div class="project-members">
              <a
                v-for="(teamLeader, index) in teamLeaders"
                :style="index > 5 ? 'display:none' : ''"
                :key="index"
                v-tooltip
                :title="teamLeader.first_name + ' ' + teamLeader.last_name"
                class="avatar cursor"
                @click="removeTeamLeader(index, $event)"
              >
                <span class="proflie-remove">
                  <i class="fas fa-times text-danger"></i>
                </span>
                <img src="/img/avatar.jpg" alt="" />
              </a>
              <span v-if="teamLeaders.length > 5" class="all-team"
                >+{{ teamLeaders.slice(5).length }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8"  v-show="!isEdit">
          <div class="form-group" >
            <label>Add Team</label>
            <Multiselect
              placeholder="Select team"
              v-model="form.employee_id"
              mode="tags"
              :resolve-on-load="true"
              :close-on-select="true"
              :searchable="true"
              @search-change="seachTeam"
              valueProp="id"
              label="full_name"
              trackBy="full_name"
              :create-option="false"
			  ref="multiselect"
              :options="teams"
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label>Team Members</label>
            <div class="project-members">
              <a
                v-for="(team, index) in teams"
                :style="index > 5 ? 'display:none' : ''"
                :key="index"
                v-tooltip
                :title="team.first_name + ' ' + team.last_name"
                class="avatar cursor"
                @click="removeTeam(index, $event)"
              >
                <span class="proflie-remove">
                  <i class="fas fa-times text-danger"></i>
                </span>
                <img src="/img/avatar.jpg" alt="" />
              </a>
              <span v-if="teamLeaders.length > 5" class="all-team"
                >+{{ teamLeaders.slice(5).length }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Description</label>
        <QuillEditor
          theme="snow"
          style="height: 200px"
          id="description"
          v-model:content="QuillEditorText"
        />
      </div>
      <div class="row">
        <div class="col-auto float-end ms-auto mb-2">
          <button
            type="button"
            class="btn btn-sm btn-success"
            @click="addFileSection"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="card" v-for="(file, index) in fileSections" :key="index">
          <button type="button" @click="removeFileSection(index)" class="close">
            <i class="fas fa-times text-danger"></i>
          </button>

          <div class="form-group mt-3">
            <label>File name</label>
            <input class="form-control" type="text" />
          </div>
          <div class="form-group">
            <label>Upload Files</label>
            <input class="form-control" type="file" />
          </div>
        </div>
      </div>
      <div class="submit-section">
        <v-submit :progress="progress">{{ formSumitButton }}</v-submit>
      </div>
    </form>
  </v-modal>
</template>
<script>
import { defineAsyncComponent } from "vue";
const flatPickr = defineAsyncComponent(() => import("vue-flatpickr-component"));
const ProjectGrid = defineAsyncComponent(() => import("./ProjectGrid.vue"));
const ProjectList = defineAsyncComponent(() => import("./ProjectList.vue"));
import Multiselect from "@vueform/multiselect";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { useToast } from "vue-toastification";

import "flatpickr/dist/flatpickr.css";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

  components: {
    flatPickr,
    QuillEditor,
    Multiselect,
    ProjectGrid,
    ProjectList,
  },
  data() {
    return {
      delaySearch: -1,
      showStatus: true,
      displayType: true,
      projects: [],
      progress: false,
      QuillEditorText: "",
      modalTitle: "Add New Project",
      isEdit: false,

      modalShow: false,
      getTeamLeaders: [],
      teamLeaders: [],
      searchBox: false,
      teamSearchBox: false,
      getTeams: [],
      employees: [],
      teams: [],
      clients: [],
      leaders: [],
      employee_id: "",
      fileSections: [
        {
          file_name: "",
          file: "",
        },
      ],
      form: {
        project_name: "",
        start_date: "",
        end_date: "",
        client_id: "",
        team_lead_id: [],
        employee_id: [],
        rate: "",
        rate_type: "",
        priority: "",
        description: "",
      },
    };
  },

  created() {
    http.get("/project").then((res) => {
      this.projects = res.data.data;
    });
  },
  watch: {
    "form.client_id": function (value) {
      http.get(`/get-client/${value}`).then((response) => {
        this.clients = response.data.data;
      });
    },
    QuillEditorText: function (value) {
      this.form.description = value.ops[0].insert;
    },
  },

  methods: {
    edit(project_id) {
		
		//console.log(this.$refs.multiselect);
      this.modalTitle = "Update Project";
      this.isEdit = true;
      http
        .get(`project/${project_id}`)
        .then((response) => {
          this.form = response.data.data;
          this.teams = response.data.data.teams;
          this.showMadal();
        })
        .catch(() => {});
    },
    multiSelectOpen() {
      if (this.clients.length === 0) {
        http.get(`/client`).then((response) => {
          this.clients = response.data.data;
        });
      }
    },
    getClient(name) {
      http.get(`/client?name=${name}`).then((response) => {
        this.clients = response.data.data;
      });
    },

    store() {
      this.beforeSend();
      let send = null;
      if (this.isEdit) {
        send = http.put(`/project/${this.form.id}`, this.form);
      } else {
        send = http.post("/project", this.form);
      }
      send
        .then((res) => {
          this.getSuccess(res);
          this.showMadal();
        })
        .catch((error) => {
          this.handleErrors(error);
        });
    },

    selectTeamLeader(employee) {
      this.teamLeaders.push({
        id: employee.id,
        first_name: employee.first_name,
        last_name: employee.first_name,
      });
      this.form.team_lead_id.push(employee.id);
    },
    selectTeam(employee) {
      this.teams.push({
        id: employee.id,
        first_name: employee.first_name,
        last_name: employee.first_name,
      });

      this.form.employee_id.push(employee.id);
      console.log(this.form.employee_id);
    },
    searchTeamLeader(name) {
      http.get(`/get-team-leaders?name=${name}`).then((res) => {
        if (res.data.data.length > 0) {
          this.leaders = res.data.data;
        }
      });
    },
    seachTeam(name) {
      http.get(`/employee?name=${name}`).then((res) => {
        if (res.data.data.length > 0) {
          this.teams = res.data.data;
		 
        }
      });
    },
    addProject() {
      this.modalTitle = "Add New project";
      this.isEdit = false;
      this.showMadal();
    },
    closeModal() {
      this.removeErrorFiled();
      this.form = {};
      this.modalShow = !this.modalShow;
    },
    showMadal() {
      this.modalShow = !this.modalShow;
    },
    addFileSection() {
      this.fileSections.push({
        file_name: "",
        file: "",
      });
    },
    removeFileSection(index) {
      this.fileSections.splice(index, 1);
    },
    removeTeamLeader(index, $event) {
      this.teamLeaders.splice(index, 1);
      const element = document.querySelector(".tooltip");
      element.remove("show");
    },
    removeTeam(index, $event) {
      this.teams.splice(index, 1);
      const element = document.querySelector(".tooltip");
      this.form.employee_id = this.teams;
      element.remove("show");
    },
  },
  computed: {
    formSumitButton() {
      return this.isEdit ? "Update" : "Save";
    },
    changeDisplay() {
      return this.showStatus ? "fa fa-bars" : "fa fa-th";
    },
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.remove-icon {
  visibility: visible;
}
.proflie-remove {
  cursor: pointer;
  height: 0px;
  width: 20px;
  position: absolute;
  bottom: 46px;
  left: 20px;
}
</style>

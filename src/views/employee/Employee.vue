<template>
  <div class="content container-fluid">
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">Employee</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/admin-dashboard">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Employee</li>
          </ul>
        </div>
        <div class="col-auto float-end ms-auto">
          <button type="button" class="btn add-btn" @click="addEmployee">
            <i class="fa fa-plus"></i> Add Employee
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
          <input
            type="text"
            class="form-control floating"
            placeholder="Employee ID"
            id="search_employee_id"
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus">
          <input
            type="text"
            class="form-control floating"
            placeholder="Employee Name"
          />
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus select-focus">
          <select class="form-control floating">
            <option>Select Designation</option>
            <option>Web Developer</option>
            <option>Web Designer</option>
            <option>Android Developer</option>
            <option>Ios Developer</option>
          </select>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="d-grid">
          <a href="#" class="btn btn-success w-100"> Search </a>
        </div>
      </div>
    </div>
    <employee-grid-list
      v-if="showStatus"
      @edit="edit"
      @delete="edelete"
      :employees="employees"
    />

    <employee-list
      :employees="employees"
      @showModal="showMadal"
      @edit="edit"
      v-else
    />

    <infinite-loading @infinite="infiniteHandler">
      <template #spinner>
        <div class="d-flex justify-content-center">
          <span>Loading...</span>
        </div>
      </template>
      <template #complete>
        <div class="d-flex justify-content-center">
          <span>No more data found.</span>
        </div>
      </template>
    </infinite-loading>
  </div>

  <v-modal
    :modalShow="modalShow"
    @closeModal="closeModal"
    :modalTitle="modalTitle"
  >
    <form autocomplete="off" @submit.prevent="store">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >First Name <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="first_name"
              v-model="form.first_name"
              type="text"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Last Name <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="last_name"
              v-model="form.last_name"
              type="text"
            />
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Email <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="email"
              autocomplete="off"
              v-model="form.email"
              type="text"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Phone <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="phone_number"
              v-model="form.phone_number"
              type="text"
            />
          </div>
        </div>
        <div class="col-sm-6" v-if="!isEdit">
          <div class="form-group">
            <label class="col-form-label"
              >Password <span class="text-danger">*</span></label
            >
            <input
              autocomplete="off"
              class="form-control"
              id="password"
              v-model="form.password"
              type="password"
            />
          </div>
        </div>
        <div class="col-sm-6" v-if="!isEdit">
          <div class="form-group">
            <!-- <label class="col-form-label">Confirm Password</label> -->
            <div class="mt-5 mr-2">
              <button
                type="button"
                @click="generatePassword"
                class="btn btn-primary btn-sm ml-2"
              >
                Generate Password</button
              >&nbsp;
              <input
                type="checkbox"
                v-model="form.send_password"
                class="mr-2"
              />
              Send password
            </div>

            <!-- <input class="form-control" v-model="form.confirm_password" type="password" />  -->
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Employee ID <span class="text-danger">*</span></label
            >
            <input
              type="text"
              v-model="form.employee_id"
              id="employee_id"
              class="form-control floating"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Joining Date <span class="text-danger">*</span></label
            >
            <div class="cal-icon">
              <flat-pickr
                v-model="form.joining_date"
                id="joining_date"
                class="form-control datetimepicker"
                placeholder="YYYY-MM-DD"
              />
              <!-- <input class="form-control datetimepicker" id="date_picker" type="text" /> -->
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Department <span class="text-danger">*</span></label>
            <select
              class="select form-control"
              id="department_id"
              v-model="form.department_id"
            >
              <option value="">Select Department</option>
              <option
                v-for="(department, index) in departments"
                :key="index"
                :value="department.id"
              >
                {{ department.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Designation <span class="text-danger">*</span></label>
            <select
              class="select form-control"
              v-model="form.designation_id"
              id="designation_id"
            >
              <option value="">Select Designation</option>
              <option
                v-for="(designation, index) in designations"
                :key="index"
                :value="designation.id"
              >
                {{ designation.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="table-responsive m-t-15">
        <table class="table table-striped custom-table">
          <thead>
            <tr>
              <th>Module Permission</th>
              <th class="text-center">Read</th>
              <th class="text-center">Write</th>
              <th class="text-center">Create</th>
              <th class="text-center">Delete</th>
              <th class="text-center">Import</th>
              <th class="text-center">Export</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(module, index) in modules" :key="index">
              <td>{{ module.name }}</td>
              <td class="text-center">
                <input type="checkbox" v-model="module.read" />
              </td>
              <td class="text-center">
                <input type="checkbox" v-model="module.write" />
              </td>
              <td class="text-center">
                <input type="checkbox" v-model="module.create" />
              </td>
              <td class="text-center">
                <input type="checkbox" v-model="module.delete" />
              </td>
              <td class="text-center">
                <input type="checkbox" v-model="module.import" />
              </td>
              <td class="text-center">
                <input type="checkbox" v-model="module.export" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="submit-section">
        <v-submit :progress="progress">{{ formSumitButton }}</v-submit>
      </div>
    </form>
  </v-modal>
  
</template>
<script>
import { defineAsyncComponent } from "vue";
const EmployeeGridList = defineAsyncComponent(() =>
  import("./EmployeeGridList.vue")
);
const EmployeeList = defineAsyncComponent(() => import("./EmployeeList.vue"));
const flatPickr = defineAsyncComponent(() => import("vue-flatpickr-component"));

const InfiniteLoading = defineAsyncComponent(() =>
  import("v3-infinite-loading")
);

import "flatpickr/dist/flatpickr.css";

import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: {
    EmployeeGridList,
    EmployeeList,
    flatPickr,
    InfiniteLoading,
  },

  data() {
    return {
      modalShow: false,
      displayType: true,
      employees: [],
      showStatus: true,
      designations: [],
      departments: [],
      modules: [],
      progress: false,
      isEdit: false,
      page: 1,
      modalTitle: "Add New Employee",

      form: {
        id: "",
        employee_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        department_id: "",
        designation_id: "",
        joining_date: "",
        send_password: false,
      },
    };
  },

  created() {
    this.getModules();
    http.get("/designations").then((res) => {
      this.designations = res.data.data;
    });
    http.get("/departments").then((res) => {
      this.departments = res.data.data;
    });
  },

  methods: {
    edelete(index, employee_id) {
      this.deleteInfo().then((result) => {
        if (result.isConfirmed) {
          http.delete(`/employee/${employee_id}`).then((res) => {
            this.employees.data.splice(index, 1);
            this.getSuccess(res);
          });
        }
      });
    },
    store() {
      this.beforeSend();
      this.form.modules = this.modules;
      let send = null;
      if (this.isEdit) {
        send = http.put(`/employee/${this.form.id}`, this.form);
      } else {
        send = http.post("/employee", this.form);
      }
      send
        .then((res) => {
          this.getSuccess(res);
          this.form = {};
          this.showMadal();
        })
        .catch((error) => {
          this.handleErrors(error);
        });
    },
    async infiniteHandler($state) {
      await http
        .get(`/employee?page=${this.page}`)
        .then((res) => {
          if (res.data.data.length > 0) {
            this.employees.push(...res.data.data);
			
          } else {
            $state.complete();
          }
        })
        .catch(() => {
          $state.error();
        });
      this.page++;
    },
    getModules() {
      http.get("get-modules").then((res) => {
        this.modules = res.data.data;
      });
    },

    generatePassword() {
      var length = 8,
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      this.form.password = retVal;
    },
    addEmployee() {
      this.modalTitle = "Add New Employee";
      this.isEdit = false;
      this.showMadal();
    },
    closeModal() {
      const errorElement = document.querySelector(".filed-error");
      if (errorElement) {
        errorElement.remove();
      }
      this.modalShow = !this.modalShow;
    },
    edit(employee_id) {
      this.modalTitle = "Update Employee";
      this.isEdit = true;
      http
        .get(`employee/${employee_id}`)
        .then((response) => {
          this.showMadal();
          this.form = response.data.data;
          if (response.data.data.modules.length > 0) {
            this.modules = response.data.data.modules;
          } else {
            this.getModules();
          }
        })
        .catch(() => {});
    },
    showMadal() {
      this.modalShow = !this.modalShow;
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

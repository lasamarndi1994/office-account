<template>
  <div class="content container-fluid">
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">Clients</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/admin-dashboard">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Clients</li>
          </ul>
        </div>
        <div class="col-auto float-end ms-auto">
          <button type="button" @click="addClient" class="btn add-btn">
            <i class="fa fa-plus"></i> Add Client
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
          <input type="text" class="form-control" placeholder="Client ID" />
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus">
          <input type="text" class="form-control" placeholder="Name" />
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus select-focus">
          <select class="select form-control">
            <option>Select Company</option>
            <option>Global Technologies</option>
            <option>Delta Infotech</option>
          </select>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="d-grid">
          <a href="#" class="btn btn-success"> Search </a>
        </div>
      </div>
    </div>
    <client-grid
      v-if="showStatus"
      @edit="edit"
      @delete="cdelete"
      :clients="clients"
    />
    <client-list v-else @edit="edit" @delete="cdelete" :clients="clients" />
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
      </div>

      <div class="submit-section">
        <v-submit :progress="progress">{{ formSumitButton }}</v-submit>
      </div>
    </form>
  </v-modal>
</template>

<script>
import { defineAsyncComponent } from "vue";

const ClientGrid = defineAsyncComponent(() => import("./ClientGrid.vue"));
const ClientList = defineAsyncComponent(() => import("./ClientList.vue"));
const flatPickr = defineAsyncComponent(() => import("vue-flatpickr-component"));

const InfiniteLoading = defineAsyncComponent(() => import("v3-infinite-loading"));

import "flatpickr/dist/flatpickr.css";

import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  components: {
    ClientGrid,
    ClientList,
    flatPickr,
    InfiniteLoading,
  },
  data() {
    return {
      modalShow: false,
      displayType: true,
      clients: [],
      showStatus: true,
      progress: false,
      isEdit: false,
      modalTitle: "Add New Client",
      page: 1,
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
    //this.getClints();
  },

  methods: {
    async infiniteHandler($state) {
      await http
        .get(`/client?page=${this.page}`)
        .then((res) => {
          if (res.data.data.length > 0) {
            this.clients.push(...res.data.data);
          } else {
            $state.complete();
          }
        })
        .catch(() => {
          $state.error();
        });
      this.page++;
    },

    cdelete(index, employee_id) {
      this.deleteInfo().then((result) => {
        if (result.isConfirmed) {
          http.delete(`/employee/${employee_id}`).then((res) => {
            this.employees.data.splice(index, 1);
            this.getSuccess(res);
          });
        }
      });
    },
    addClient() {
      this.modalTitle = "Add New Client";
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
    edit(client_id) {
      this.showMadal();
      //   this.modalTitle = "Update Client";
      //   this.isEdit = true;
      //   http
      //     .get(`employee/${employee_id}`)
      //     .then((response) => {
      //       this.showMadal();
      //       this.form = response.data.data;
      //       if (response.data.data.modules.length > 0) {
      //         this.modules = response.data.data.modules;
      //       } else {
      //         this.getModules();
      //       }
      //     })
      //     .catch(() => {});
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
<style scoped></style>

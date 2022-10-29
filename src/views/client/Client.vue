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
              >Client ID <span class="text-danger">*</span></label
            >
            <input
              type="text"
              v-model="form.client_id"
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
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Organization <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="organization"
              v-model="form.organization"
              type="text"
            />
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Website <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="website"
              autocomplete="off"
              v-model="form.website"
              type="text"
            />
          </div>
        </div>

        <div class="col-sm-12">
          <div class="form-group">
            <label class="col-form-label"
              >Adress <span class="text-danger">*</span></label
            >
            <textarea
              v-model="form.address"
              id="address"
              class="form-control"
              cols="35"
            >
            </textarea>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Country <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="country"
              autocomplete="off"
              v-model="form.country"
              type="text"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >State <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="state"
              autocomplete="off"
              v-model="form.state"
              type="text"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >City <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="city"
              autocomplete="off"
              v-model="form.city"
              type="text"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="col-form-label"
              >Postal Code <span class="text-danger">*</span></label
            >
            <input
              class="form-control"
              id="state"
              autocomplete="off"
              v-model="form.postal_code"
              type="text"
            />
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
        client_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        joining_date: "",
        state: "",
        country: "",
        postal_code: "",
        address: "",
        city: "",
        organization: "",
        website: "",
      },
    };
  },
  created() {},

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
    store() {
      this.beforeSend();
      this.form.modules = this.modules;
      let send = null;
      if (this.isEdit) {
        send = http.put(`/client/${this.form.id}`, this.form);
      } else {
        send = http.post("/client", this.form);
      }
      send
        .then((res) => {
          this.getSuccess(res);
          this.form = {};
          this.showMadal();
          this.clients.push(res.data.data);
        })
        .catch((error) => {
          this.handleErrors(error);
        });
    },

    cdelete(index, client_id) {
      this.deleteInfo().then((result) => {
        if (result.isConfirmed) {
          http.delete(`/client/${client_id}`).then((res) => {
            if (res.data.status === true) {
              this.clients.splice(index, 1);
              this.getSuccess(res);
            }
          }).catch((error) =>{
			console.log(error)
		  })
        }
      });
    },
    addClient() {
      this.modalTitle = "Add New Client";
      this.isEdit = false;
      this.showMadal();
    },
    closeModal() {
      this.removeErrorFiled();
      this.modalShow = !this.modalShow;
    },
    edit(client_id) {
		
      this.modalTitle = "Update Client";
      this.isEdit = true;
      http
        .get(`client/${client_id}`)
        .then((response) => {
          if (response.data.status === true) {
            this.showMadal();
            this.form = response.data.data;
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
<style scoped></style>

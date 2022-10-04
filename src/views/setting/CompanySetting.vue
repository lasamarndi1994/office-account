<template>
  <div class="content container-fluid">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="page-header">
          <div class="row">
            <div class="col-sm-12">
              <h3 class="page-title">Company Settings</h3>
            </div>
          </div>
        </div>

        <form @submit.prevent="store">
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>Company Name <span class="text-danger">*</span></label>
                <input
                  class="form-control"
                  type="text"
                  id="company_name"
                  v-model="form.company_name"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Contact Person</label>
                <input
                  class="form-control"
                  v-model="form.phone_number"
                  id="phone_number"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label>Address</label>
                <input
                  class="form-control"
                  v-model="form.address"
                  type="text"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="form-group">
                <label>Country</label>
                <select class="form-control select" v-model="form.country">
                  <option value="IN">India</option>
                  <option value="USA">United Nations</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="form-group">
                <label>City</label>
                <input class="form-control" v-model="form.city" type="text" />
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="form-group">
                <label>State/Province</label>
                <select class="form-control select" v-model="form.state">
                  <option value="California">California</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Alabama">Alabama</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
              <div class="form-group">
                <label>Postal Code</label>
                <input
                  class="form-control"
                  v-model="form.postal_code"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>Email</label>
                <input class="form-control" v-model="form.email" type="email" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Phone Number</label>
                <input
                  class="form-control"
                  v-model="form.mobile_number"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label>Mobile Number</label>
                <input
                  class="form-control"
                  v-model="form.postal_code"
                  type="text"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label>Fax</label>
                <input class="form-control" v-model="form.fax" type="text" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label>Website Url</label>
                <input
                  class="form-control"
                  v-model="form.website_url"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="submit-section">
            <v-submit :progress="progress">Save</v-submit>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      
      form: {
        company_name: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        email: "",
        mobile_number: "",
        phone_number: "",
        fax: "",
        website_url: "",
		
      },
    };
  },
  created() {
    http.get("/setting/company-setting").then((response) => {
      this.form = response.data.data;
    });
  },
  methods: {
    store() {
		this.beforeSend();
      http
        .post("setting/company-setting", this.form)
        .then((response) => {
			this.getSuccess(response);
        })
        .catch((error) => {
        	this.handleErrors(error);
        });
    },
  },
};
</script>
forEach

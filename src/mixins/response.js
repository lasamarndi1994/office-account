import { useToast } from "vue-toastification";

export default{
	setup() {
		// Get toast interface
		const toast = useToast();
		return { toast };
	},
	data() {
		return {

		}
	},

	methods: {
		beforeSend() {
			this.progress = true;
			const errorElement = document.querySelector(".filed-error");
			if (errorElement) {
				errorElement.remove();
			}
		},
		removeErrorFiled() {
			const errorElement = document.getElementsByClassName("filed-error");
			let length = errorElement.length;
			for (let i = 0; i < length; i++) {
				document.querySelector(".filed-error").remove();
			}
		},
		deleteInfo() {
			return this.$swal.fire({
				title: 'Do you want to save the changes?',
				showCancelButton: true,
				confirmButtonText: 'Delete',
				showClass: {
					popup: "animate__animated animate__fadeInDown",
				},
				hideClass: {
					popup: "animate__animated animate__fadeOutUp",
				},
			})
		},
		getSuccess(res) {
			this.progress = false;
			if (res.data.status === true) {
				this.toast.success(res.data.message);
			}
			else {
				this.toast.error(res.data.message);
			}
		},
		handleErrors(error) {
			this.progress = false;

			if (error.response.status === 422) {

				let validationErrors = error.response.data.errors;
				let errorObject = Object.entries(validationErrors);
				for (const [id, message] of errorObject) {
					const element = document.getElementById(id);
					if (element) {

						element.scrollIntoView({
							behavior: "smooth",
							block: "end",
							inline: "nearest",
						});
						const errorElement = document.getElementById("error_" + id);
						if (errorElement) {
							errorElement.remove();
						}
						element.after(
							Object.assign(document.createElement("span"), {
								textContent: message,
								id: "error_" + id,
								className: "filed-error text-danger",
							})
						);
					}
				}
			}
			else {
				this.toast.error(error.response.data.message);
			}
		}
	}
}

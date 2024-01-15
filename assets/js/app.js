const app = Vue.createApp({
	data() {
		return {
			state: true,
			inputName: '',
			names: [],
			error: false,
			errorMessage: '',
		};
	},
	methods: {
		addNameToList() {
			const inputName = this.inputName;
			if (this.validate(inputName)) {
				this.names.push(inputName);
				this.inputName = '';
				this.error = false;
			} else {
				this.error = true;
			}
		},
		validate(value) {
			this.errorMessage = '';
			if (value === '') {
				this.errorMessage = 'Sorry, input can not be empty.';
				return false;
			}
			if (this.names.includes(value)) {
				this.errorMessage = 'Sorry, list must be unique.';
				return false;
			}
			return true;
		},
	},
}).mount('#app');

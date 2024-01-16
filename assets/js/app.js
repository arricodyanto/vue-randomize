const app = Vue.createApp({
	data() {
		return {
			state: true,
			inputName: '',
			names: [],
			error: false,
			errorMessage: '',
			result: '',
		};
	},
	computed: {
		isMultiple() {
			return this.names.length > 1;
		},
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
		removeInput(index) {
			this.names.splice(index, 1);
		},
		showResult() {
			this.getWinner();
			this.state = false;
		},
		getRandomInput() {
			return this.names[Math.floor(Math.random() * this.names.length)];
		},
		getWinner() {
			let rarndomInput = this.getRandomInput();
			if (this.result != '') {
				while (rarndomInput === this.result) {
					rarndomInput = this.getRandomInput();
				}
			}
			this.result = rarndomInput;
		},
		resetApp() {
			this.state = true;
			this.inputName = '';
			this.names = [];
			this.error = false;
			this.errorMessage = '';
			this.result = '';
		},
		getNewWinner() {
			this.getWinner();
		},
	},
}).mount('#app');

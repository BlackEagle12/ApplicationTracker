import axios from "axios";

const HttpModule = axios.create({
	baseURL: import.meta.env.VITE_BASE_API_URL,
	timeout: 600000,
	headers: {
		"content-type": "application/json",
	},
});

HttpModule.interceptors.request.use((config) => {
	const user = JSON.parse(localStorage.getItem("User"));
	if (user) config.headers.Authorization = `Bearer ${user.token}`;
	return config;
});

HttpModule.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		console.log(response);
		return {
			status: response.data.statusCode,
			data: response.data.data,
		};
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		// return Promise.reject(error);
		console.log(error);

		console.log(error?.response?.data?.statusCode);
		if (error?.response?.data?.statusCode) {
			return {
				status: error.response.data.statusCode,
				data: error.response.data.errorMessage,
			};
		} else {
			return {
				status: error.response.status,
				data: error.message,
			};
		}
	}
);
export default HttpModule;

import axios from "axios";

const HttpModule = axios.create({
	baseURL: import.meta.env.VITE_BASE_API_URL,
	timeout: 60000,
	headers: {
		"content-type": "application/json",
	},
});

HttpModule.interceptors.request.use((config) => {
	const token = localStorage.getItem("User")?.token;
	if (token) config.headers.Authorization = `Bearer ${token}`;
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

		if (error.response.data.statusCode != undefined) {
			return {
				status: error.response.data.statusCode,
				data: error.response.data.data,
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

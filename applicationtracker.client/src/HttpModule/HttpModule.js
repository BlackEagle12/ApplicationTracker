import axios from "axios";
import { useEffect, useState } from "react";

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
			status: response?.data?.statusCode,
			data: response?.data?.data,
		};
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		// return Promise.reject(error);
		console.log(error);
		if (error?.response?.data?.statusCode) {
			return {
				status: error.response.data.statusCode,
				data: error.response.data.errorMessage,
			};
		} else {
			return {
				status: error?.response?.status,
				data: error?.message,
			};
		}
	}
);

const useInterceptorLoading = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		HttpModule.interceptors.request.use((config) => {
			setCount((previousCount) => previousCount + 1);
			if (count > 0) {
				setLoading(true);
			}
			return config;
		});

		HttpModule.interceptors.response.use(
			function (response) {
				setCount((previousCount) => previousCount - 1);
				if (count < 0) {
					setLoading(false);
				}
				return response;
			},
			function (error) {
				setCount((previousCount) => previousCount - 1);
				if (count < 0) {
					setLoading(false);
				}
				return error;
			}
		);
	}, []);
	return { loading: count > 0 };
};

export { HttpModule, useInterceptorLoading };

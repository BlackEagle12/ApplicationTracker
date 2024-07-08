import axios from "axios";

const HttpModule = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 1000,
	headers: {
		"content-type": "application/json",
	},
});

HttpModule.interceptors.request.use((config) => {
	const token = store.getState().session.token;
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});

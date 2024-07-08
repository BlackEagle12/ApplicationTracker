const options = {
	method: "",
	headers: {
		"content-type": "application/json",
		token: "token",
	},
	body: null,
};

export default HttpModule = {
	Get: (url, headers = null) => {
		options.method = "GET";

		if (headers) {
			options.headers = new Headers({ ...options.headers, headers });
		}
		return fetch(url, options);
	},

	Post: (url, body, headers = null) => {
		options.method = "POST";
		options.body = JSON.stringify(body);

		if (headers) {
			options.headers = new Headers({ ...options.headers, headers });
		}

		return fetch(url, options);
	},

	Put: (url, body, headers = null) => {
		options.method = "PUT";
		options.body = JSON.stringify(body);

		if (headers) {
			options.headers = new Headers({ ...options.headers, headers });
		}

		return fetch(url, options);
	},

	Delete: (url, body, headers = null) => {
		options.method = "DELETE";
		options.body = JSON.stringify(body);

		if (headers) {
			options.headers = new Headers({ ...options.headers, headers });
		}

		return fetch(url, options);
	},
};

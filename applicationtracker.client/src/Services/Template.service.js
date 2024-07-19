import EndpointConstants from "../HttpModule/Endpoints";
import HttpModule from "../HttpModule/HttpModule";

export const addEmailTemplate = async (data) => {
	return HttpModule.post(EndpointConstants.addEmailTemplate, data, {
		headers: {
			"content-type": "",
		},
	});
};

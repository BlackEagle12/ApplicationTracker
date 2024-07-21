import EndpointConstants from "../HttpModule/Endpoints";
import { HttpModule } from "../HttpModule/HttpModule";

export const appPasswordCheck = async (userId) => {
	let url = EndpointConstants.resolveParam(
		EndpointConstants.isEmailAppPasswordAdded,
		"userId",
		userId
	);

	return await HttpModule.get(url);
};

export const setEmailAppPassword = async (userId, passwd) => {
	let url = EndpointConstants.resolveParam(
		EndpointConstants.setEmailAppPassword,
		"userId",
		userId
	);

	return await HttpModule.post(url, passwd);
};

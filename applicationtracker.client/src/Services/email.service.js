import EndpointConstants from "../HttpModule/Endpoints";
import HttpModule from "../HttpModule/HttpModule";

export const appPasswordCheck = async (userId) => {
	let url = EndpointConstants.resolveParam(
		EndpointConstants.isEmailAppPasswordAdded,
		"userId",
		userId
	);

	return await HttpModule.Get(url);
};

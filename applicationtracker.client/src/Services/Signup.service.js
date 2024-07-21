import EndpointConstants from "../HttpModule/Endpoints";
import { HttpModule } from "../HttpModule/HttpModule";

// export const updateUserInfo = async (user) => {
// 	let url = EndpointConstants.updateUserURL;

// 	if (user.Id) url = url.replace("{id}", user.Id.toString());
// 	else url = url.replace("{id}", "0");

// 	return await HttpModule.put(url, user);
// };

export const onbordUser = async (user) => {
	return await HttpModule.post(EndpointConstants.onbordUserURL, user);
};

export const sendInvitation = async (email) => {
	return await HttpModule.post(EndpointConstants.sendInvitationURL, email);
};

export const verifyInvitation = async (data) => {
	return await HttpModule.post(EndpointConstants.verifyInvitationURL, data);
};

import EndpointConstants from "../HttpModule/Endpoints";
import HttpModule from "../HttpModule/HttpModule";

export const signup = async (email, passwd) => {};

export const SendOtp = async (email) => {
	return await HttpModule.post(EndpointConstants.SendOtpURL, email);
};

export const verifyInvitation = async (data) => {
	return await HttpModule.post(EndpointConstants.verifyInvitationURL, data);
};

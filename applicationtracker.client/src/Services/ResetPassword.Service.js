import EndpointConstants from "../HttpModule/Endpoints";
import { HttpModule } from "../HttpModule/HttpModule";

export const sendResetPasswordToken = async (email) => {
	return await HttpModule.post(
		EndpointConstants.sendResetPasswordTokenURL,
		email
	);
};

export const resetPassword = async (credentaials) => {
	return await HttpModule.post(
		EndpointConstants.resetPasswordURL,
		credentaials
	);
};

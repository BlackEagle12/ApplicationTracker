import EndpointConstants from "../HttpModule/Endpoints";
import { HttpModule } from "../HttpModule/HttpModule";

export const login = async (credential) => {
	return await HttpModule.post(EndpointConstants.signInURL, credential);
};

export const logout = async () => {
	localStorage.clear();
};

import EndpointConstants from "../HttpModule/Endpoints";
import HttpModule from "../HttpModule/HttpModule";

export const addEmailTemplate = async (data) => {

	var formData = new FormData();
	formData.append('UserId', 1);
	formData.append('TemplateName', data.templateName);
	formData.append('Subject', data.subject);
	formData.append('Body', data.body);
	formData.append('IsHtml', data.isHtml);

	console.log(formData);
	// return HttpModule.post(EndpointConstants.addEmailTemplate, data, {
	// 	headers: {
	// 		"content-type": "multipart/form-data",
	// 	},
	// });
};

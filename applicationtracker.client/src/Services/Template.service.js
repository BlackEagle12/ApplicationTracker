import EndpointConstants from "../HttpModule/Endpoints";
import { HttpModule } from "../HttpModule/HttpModule";

export const addEmailTemplate = async (data) => {
	let formData = new FormData();
	formData.append("UserEmail", data.UserEmail);
	formData.append("TemplateName", data.templateName);
	formData.append("Subject", data.subject);
	formData.append("Body", data.body);
	formData.append("IsHtml", data.isHtml);

	for (let index = 0; index < data.attachments.length; index++) {
		const files = data.attachments[index];
		formData.append(`Attachments`, files.file[0]);
	}

	return HttpModule.post(EndpointConstants.addEmailTemplate, formData, {
		headers: {
			"content-type": "multipart/form-data",
		},
	});
};

export const getAllEmailTemplates = async (userId) => {
	let url = EndpointConstants.resolveParam(
		EndpointConstants.getAllEmailTemplates,
		"userId",
		userId
	);

	return HttpModule.get(url);
};

export const deleteTemplateById = async (templateId) => {
	let url = EndpointConstants.resolveParam(
		EndpointConstants.deleteTemplateById,
		"templateId",
		templateId
	);

	return HttpModule.delete(url);
};

export const sendEmailUsingTemplate = async (data) => {
	let url = EndpointConstants.resolveParam(
		EndpointConstants.sendEmailUsingTemplate,
		"templateId",
		data.emailTemplate
	);

	let recipientEmailList = [];
	for (let index = 0; index < data.recipients.length; index++) {
		const recipient = data.recipients[index];
		recipientEmailList.push(recipient.email);
	}
	return HttpModule.post(url, recipientEmailList);
};

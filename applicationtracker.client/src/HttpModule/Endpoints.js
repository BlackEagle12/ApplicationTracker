const EndpointConstants = {
	sendInvitationURL: "/auth/sendinvitation",
	verifyInvitationURL: "/auth/verifyInvitation",
	updateUserURL: "/user/{id}",
	onbordUserURL: "/auth/onbordUser",
	signInURL: "/auth/authenticateuser",
	sendResetPasswordTokenURL: "/auth/sendresetpasswordtoken",
	resetPasswordURL: "/auth/resetpassword",
	isEmailAppPasswordAdded: "/user/apppasswordcheck/{userId}",
	setEmailAppPassword: "/user/setemailapppassword/{userId}",
	addEmailTemplate: "/templates/add/",
	getAllEmailTemplates: "/templates/all/{userId}",
	deleteTemplateById: "/templates/{templateId}",
	sendEmailUsingTemplate: "/templates/sendemail/{templateId}",

	resolveParam: (url, paramName, paramValue) => {
		return url.replace(`{${paramName}}`, paramValue);
	},
};

export default EndpointConstants;

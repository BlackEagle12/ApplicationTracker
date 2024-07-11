const EndpointConstants = {
	sendInvitationURL: "/auth/sendinvitation",
	verifyInvitationURL: "/auth/verifyInvitation",
	updateUserURL: "/user/{id}",
	onbordUserURL: "/auth/onbordUser",
	signInURL: "/auth/authenticateuser",
	sendResetPasswordTokenURL: "/auth/sendresetpasswordtoken",
	resetPasswordURL: "/auth/resetpassword",

	resolveParam: (url, paramName, paramValue) => {
		return url.replace(`{${paramName}}`, paramValue);
	},
};

export default EndpointConstants;

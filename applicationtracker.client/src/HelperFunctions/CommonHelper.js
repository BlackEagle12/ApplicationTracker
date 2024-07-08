export const validateEmail = (email) => {
	let pettern =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return pettern.test(String(email).toLowerCase());
};

export const validatePasswd = (passWd, confirmPassWd) => {
	passWd = passWd?.trim();
	let isValid = true;
	let errorList = [];
	if (passWd?.length < 8 || passWd?.length > 20) {
		isValid = false;
		errorList.push(
			"password must at least 8 characters and at most 20 characters long"
		);
	}
	if (!/(?=.*[a-z])/.test(passWd)) {
		isValid = false;
		errorList.push("password must contains atlease one lowercase");
	}
	if (!/(?=.*[A-Z])/.test(passWd)) {
		isValid = false;
		errorList.push("password must contains atlease one uppercase");
	}
	if (!/(?=.*[@#$%^&-+=()])/.test(passWd)) {
		isValid = false;
		errorList.push("password must contains atlease one special character");
	}
	if (passWd !== confirmPassWd) {
		isValid = false;
		errorList.push("password and confirm password are not same");
	}

	return {
		isValid: isValid,
		errorList: errorList,
	};
};

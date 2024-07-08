export const login = async (email, passwd) => {
	if (email === "vicky.manavadariya321@gmail.com" && passwd === "57872@tesT")
		return true;
	else return false;
};

export const logout = async () => {
	localStorage.clear();
};

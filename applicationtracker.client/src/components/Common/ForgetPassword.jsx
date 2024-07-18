import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	validateEmail,
	validatePasswd,
} from "../../HelperFunctions/CommonHelper";
import {
	resetPassword,
	sendResetPasswordToken,
} from "../../Services/ResetPassword.Service";
import { verifyInvitation } from "../../Services/Signup.service";
import ThemeButton from "../Theme/Button/ThemeButton";

export default function ForgetPassword() {
	const [showPassword, setShowPassword] = useState(false);
	const [user, setUser] = useState({});
	const [validationErrors, setValidationErrors] = useState({});
	const navigation = useNavigate();

	useEffect(() => {
		let usr = JSON.parse(localStorage.getItem("User"));
		if (usr?.Email !== undefined && usr?.Email !== null) {
			navigation("/");
		}
	}, []);

	const handleUserChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		if (validateEmail(user.Email)) {
			setValidationErrors((old) => {
				return {
					...old,
					Email: undefined,
				};
			});
		} else {
			setValidationErrors((old) => {
				return {
					...old,
					Email: "Please enter valid email",
				};
			});
			return;
		}

		let passValidation = validatePasswd(user.Passwd, user.CPasswd);

		if (passValidation.isValid) {
			setValidationErrors((old) => {
				return {
					...old,
					Passwd: undefined,
				};
			});
		} else {
			setValidationErrors((old) => {
				return {
					...old,
					Passwd: passValidation.errorList,
				};
			});
			return;
		}

		if (
			validationErrors.Passwd === undefined &&
			validationErrors.OTP === undefined &&
			validationErrors.Email === undefined
		) {
			var res = await resetPassword({
				Email: user.Email,
				Password: user.Passwd,
			});

			if (res?.status === 200) {
				localStorage.setItem("User", JSON.stringify(res.data));
				alert("Password reset sucessfully!!");
				navigation("/");
			} else {
				alert(res?.data);
			}
		}
	};

	const sendResetPassword = async () => {
		if (user.isOtpverified) return;

		if (validateEmail(user.Email)) {
			const res = await sendResetPasswordToken(user.Email);

			if (res.status === 200) {
				setUser({ ...user, isOtpSend: true });

				setValidationErrors((old) => {
					return {
						...old,
						Email: undefined,
					};
				});

				alert("invitation send sucessfully please check your email");
			} else {
				setValidationErrors((old) => {
					return {
						...old,
						Email: res?.data,
					};
				});
			}
		} else {
			setValidationErrors((old) => {
				return {
					...old,
					Email: "Please enter valid email",
				};
			});
		}
	};

	const handleVerifyOTP = async () => {
		let res = await verifyInvitation({
			email: user.Email,
			token: user.OTP,
		});

		if (res?.status === 200) {
			setUser({ ...user, isOtpverified: true });
			setValidationErrors({
				...validationErrors,
				OTP: undefined,
			});
			alert(res?.data);
		} else {
			setValidationErrors({
				...validationErrors,
				OTP: res?.data,
			});
		}
	};

	return (
		<div>
			<div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
			<div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
				<div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
					<div className="self-start hidden lg:flex flex-col  text-gray-300">
						<h1 className="my-3 font-semibold text-4xl">OOPs!!</h1>
						<p className="pr-3 text-sm opacity-75">
							Don't worry, it happens to the best of us. Enter your email
							address below, and we'll send you a link to reset your password.
							You'll be back to managing your job search in no time with
							JobTracker!
						</p>
					</div>
				</div>
				<div className="flex justify-center self-center  z-10">
					<div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
						<div className="mb-7">
							<h3 className="font-semibold text-2xl text-gray-800">
								Reset Password
							</h3>
						</div>
						<div className="space-y-3">
							<div className="">
								<input
									className=" w-full text-sm  px-4 py-3 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
									type="text"
									value={user.Email}
									name="Email"
									onChange={handleUserChange}
									disabled={user.isOtpverified}
									placeholder="Email"
								/>
								<p className="text-red-600 text-xs mx-2">
									{validationErrors.Email}
								</p>
							</div>
							<div
								className="text-center cursor-pointer bg-purple-800  hover:bg-purple-700 text-gray-100 duration-1000 rounded aria-disabled:bg-gray-600"
								onClick={sendResetPassword}
								aria-disabled={user.isOtpverified}
							>
								<div className="text-sm ml-auto flex items-center justify-center">
									<span className="py-1 w-5/6">Get otp</span>
									<span className="w-1/6 flex justify-center has-tooltip">
										<span className="tooltip rounded shadow-lg p-1 bg-red-600 text-white -mt-8 text-xs">
											this will disable your login credentials and enable when
											you will create new password
										</span>
										<svg
											className="h-4 w-4 text-white"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" />{" "}
											<circle cx="12" cy="12" r="9" />{" "}
											<line x1="12" y1="8" x2="12.01" y2="8" />{" "}
											<polyline points="11 12 12 12 12 16 13 16" />
										</svg>
									</span>
								</div>
							</div>
							<div className="flex items-center justify-between">
								<div className="w-full">
									<div className="flex justify-between items-center w-full gap-4">
										<input
											className=" text-sm  px-4 py-3 border disabled:cursor-not-allowed disabled:bg-gray-200 border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
											type="password"
											value={user.OTP}
											name="OTP"
											onChange={handleUserChange}
											disabled={
												user.isOtpSend == undefined ||
												!user.isOtpSend ||
												user.isOtpverified
											}
											placeholder="Enter 6 digit otp"
										/>
										<ThemeButton
											text="Verify"
											onClick={handleVerifyOTP}
											disabled={
												user.isOtpSend == undefined ||
												!user.isOtpSend ||
												user.isOtpverified
											}
										/>
										{/* <button
											className='className="w-full flex justify-center disabled:bg-gray-600 disabled:cursor-not-allowed bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"'
											onClick={handleVerifyOTP}
											disabled={
												user.isOtpSend == undefined ||
												!user.isOtpSend ||
												user.isOtpverified
											}
										>
											<p className="">asdasd</p>
										</button> */}
									</div>
									<p className="text-red-600 text-xs mx-2">
										{validationErrors.OTP}
									</p>
								</div>
							</div>

							<div className="relative" x-data="{ show: true }">
								<input
									placeholder="New password"
									type={showPassword ? "password" : "text"}
									value={user.Passwd}
									name="Passwd"
									onChange={handleUserChange}
									disabled={!user.isOtpverified}
									className="text-sm px-4 py-3 rounded-lg w-full disabled:bg-gray-200 disabled:cursor-not-allowed border border-gray-200 focus:outline-none focus:border-purple-400"
								/>
								<div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
									<svg
										onClick={() => setShowPassword(!showPassword)}
										className={
											"h-4 text-purple-700 " +
											(showPassword ? "hidden" : "block")
										}
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 576 512"
									>
										<path
											fill="currentColor"
											d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
										></path>
									</svg>

									<svg
										onClick={() => setShowPassword(!showPassword)}
										className={
											"h-4 text-purple-700 " +
											(showPassword ? "block" : "hidden")
										}
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 512"
									>
										<path
											fill="currentColor"
											d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
										></path>
									</svg>
								</div>
							</div>
							<div>
								<ul className="list-disc px-2">
									{validationErrors?.Passwd?.map((err) => (
										<li className="text-red-600 text-xs mx-2">{err}</li>
									))}
								</ul>
							</div>
							<div className="">
								<input
									className="w-full text-sm  px-4 py-3  border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
									type="password"
									value={user.CPasswd}
									name="CPasswd"
									onChange={handleUserChange}
									disabled={!user.isOtpverified}
									placeholder="Confirm password"
								/>
							</div>

							<div>
								<ThemeButton
									text="Reset password"
									onClick={handleSubmit}
									disabled={!user.isOtpverified}
								/>
								{/* <button
									type="submit"
									className={
										"w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
									}
								>
									Reset password
								</button> */}
							</div>
							<div className="flex items-center justify-center space-x-2 my-5">
								<span className="h-px w-16 bg-gray-100"></span>
								<span className="text-gray-300 font-normal">or</span>
								<span className="h-px w-16 bg-gray-100"></span>
							</div>
							<div className="mb-7 text-center">
								{/* <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3> */}
								<Link to="/login">
									<p className="text-gray-400">
										Get your password?&nbsp;
										<span className="text-sm text-purple-700 hover:text-purple-700">
											Sign In
										</span>
									</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<svg
				className="absolute bottom-0 left-0 "
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#fff"
					fillOpacity="1"
					d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
				></path>
			</svg>
		</div>
	);
}

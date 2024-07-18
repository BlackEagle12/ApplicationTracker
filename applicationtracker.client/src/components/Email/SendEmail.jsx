import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import ThemeButtonSmall from "../Theme/Button/ThemeButtonSmall";
import ThemeButton from "../Theme/Button/ThemeButton";
import {
	appPasswordCheck,
	setEmailAppPassword,
} from "../../Services/email.service";
import ThemeTost from "../Theme/Tost/ThemeTost";

export default function SendEmail() {
	const [loggedinUser, setLoggedinUser] = useState();
	const [isEmailAppPasswordAdded, setIsEmailAppPasswordAdded] = useState(false);

	useEffect(() => {
		let usr = JSON.parse(localStorage.getItem("User"));
		setLoggedinUser(usr);
	}, []);

	useEffect(() => {
		checkForAppPassword();
	}, [loggedinUser]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();

	const {
		register: registerAppPasswd,
		handleSubmit: appPasswdSubmit,
		formState: { errors: appPasswdErrors },
	} = useForm();

	const { fields, append, remove } = useFieldArray({
		control,
		name: "recipients",
	});

	const sendEmail = (data) => {
		console.log(data);
	};

	const setAppPassword = async (data) => {
		if (loggedinUser) {
			var res = await setEmailAppPassword(loggedinUser.id, data.appPasswd);
			if (res?.status === 200) {
				setIsEmailAppPasswordAdded(true);
			} else {
				alert(res?.data);
				return false;
			}
		}
	};

	const checkForAppPassword = async () => {
		if (loggedinUser) {
			var res = await appPasswordCheck(loggedinUser.id);

			if (res?.status === 200) {
				setIsEmailAppPasswordAdded(res.data);
			} else {
				alert(res?.data);
				return false;
			}
		}
	};

	function TostElement() {
		return (
			<div>
				your app password is already set.
				<a
					className="underline cursor-pointer mx-2"
					onClick={() => setIsEmailAppPasswordAdded(false)}
				>
					Update app password
				</a>
			</div>
		);
	}

	return isEmailAppPasswordAdded ? (
		<>
			<ThemeTost TostElement={TostElement} />
			<form onSubmit={handleSubmit(sendEmail)} className="pb-5">
				<div className="flex justify-between">
					<div className="w-3/4">
						<label
							htmlFor="floating_Attachments"
							className="font-medium text-sm text-gray-400 duration-300 hover:text-purple-400"
						>
							Select template
						</label>
						<select
							id="large"
							value={""}
							className="font-medium block w-full px-5 py-3 text-base text-gray-400 duration-300 border border-gray-300 rounded-lg bg-gray-50 bg-opacity-5 focus:bg-opacity-25 focus:outline-0 focus:ring-purple-400 focus:border-purple-400"
							{...register("emailTemplate", {
								required: "Email template must be selected",
							})}
						>
							<option value={""} hidden={true}>
								Choose a template
							</option>
							<option
								value={"US"}
								className="text-md font-normal text-gray-500"
							>
								Name - Subject
							</option>
						</select>
						{errors.emailTemplate && (
							<span className="text-red-600 text-xs">
								{errors.emailTemplate.message}
							</span>
						)}
					</div>
					<div className="flex items-end">
						<ThemeButton type={"submit"} text={"Send Email ✉️"} />
					</div>
				</div>
				<div>
					{fields.length < 1 && (
						<p className="text-red-600 text-xs">
							At least one recipient is required
						</p>
					)}
					<label
						htmlFor="floating_Recipients"
						className="font-medium text-sm text-gray-400 duration-300 hover:text-purple-400"
					>
						Recipients
					</label>
					<div className="grid grid-cols-2 gap-5 my-3" id="floating_Recipients">
						{fields.map((item, index) => (
							<div>
								<div className="flex gap-5">
									<div key={item.id} className="relative z-0 w-full my-1 group">
										<input
											type="email"
											id={"floating_Recipients" + index}
											className="block py-2.5 px-1 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
											placeholder=" "
											{...register(`recipients.${index}.email`, {
												required: "Either remove this field or add recipient",
											})}
										/>
										<label
											htmlFor={"floating_Recipients" + index}
											className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
										>
											Recipient
										</label>
									</div>
									<div className="my-auto">
										<ThemeButtonSmall
											type={"button"}
											onClick={() => remove(index)}
											text={"Remove"}
										/>
									</div>
								</div>
								<div>
									{errors.recipients?.[index]?.email && (
										<span className="text-red-600 text-xs">
											{errors.recipients?.[index]?.email.message}
										</span>
									)}
								</div>
							</div>
						))}
					</div>
					<ThemeButtonSmall
						type={"button"}
						onClick={() => append({ email: "" })}
						text={"Add Recipient"}
					/>
				</div>
			</form>
		</>
	) : (
		<div className="flex items-center justify-center h-full">
			<form onSubmit={appPasswdSubmit(setAppPassword)} className="w-1/2">
				<div className="relative z-0 w-full my-5 group">
					<input
						type="text"
						id={"floating_AppPasswd"}
						className="block py-2.5 px-1 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
						placeholder=" "
						{...registerAppPasswd(`appPasswd`, {
							required: "App password is required to send emails",
						})}
					/>
					<label
						htmlFor={"floating_AppPasswd"}
						className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						App pasword
					</label>
					{appPasswdErrors.appPasswd && (
						<span className="text-red-600 text-xs">
							{appPasswdErrors.appPasswd.message}
						</span>
					)}
				</div>
				<div>
					<ThemeButton type={"submit"} text={"Set Password"} />
				</div>
			</form>
		</div>
	);
}

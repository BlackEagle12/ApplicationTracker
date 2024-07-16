import React from "react";
import ThemeButton from "../Theme/ThemeButton";

export default function AddUpdateCollection() {
	return (
		<form className="mt-3">
			<div className="relative z-0 w-full mb-5 group">
				<input
					type="text"
					name="repeat_password"
					id="floating_repeat_password"
					className="block py-2.5 px-0 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_repeat_password"
					className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Text
				</label>
			</div>
			<div className="grid md:grid-cols-2 md:gap-6">
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						name="floating_first_name"
						id="floating_first_name"
						className="block py-2.5 px-0 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_first_name"
						className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						First name
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						name="floating_last_name"
						id="floating_last_name"
						className="block py-2.5 px-0 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_last_name"
						className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Last name
					</label>
				</div>
			</div>
			<div className="grid md:grid-cols-2 md:gap-6">
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="tel"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						name="floating_phone"
						id="floating_phone"
						className="block py-2.5 px-0 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_phone"
						className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Phone number (123-456-7890)
					</label>
				</div>
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						name="floating_company"
						id="floating_company"
						className="block py-2.5 px-0 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="floating_company"
						className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Company (Ex. Google)
					</label>
				</div>
			</div>
			<ThemeButton type="submit" />
		</form>
	);
}

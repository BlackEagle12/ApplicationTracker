import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import ThemeButton from "../../Theme/ThemeButton";
import ThemeButtonSmall from "../../Theme/ThemeButtonSmall";

export default function AddTemplates() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			attachments: [],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "attachments",
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="flex items-center h-full mx-2">
			<form onSubmit={handleSubmit(onSubmit)} className="w-full">
				<div className="relative z-0 w-full mb-5 group">
					<input
						type="text"
						id="floating_template_name"
						className="block py-2.5 px-1 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
						placeholder=" "
						{...register("templateName", {
							required:
								"Template name is required & this will be displayed while sending emails",
						})}
					/>
					<label
						htmlFor="floating_template_name"
						className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Template Name(this will be displayed while sending emails)
					</label>
					{errors.templateName && (
						<p className="text-red-600 text-xs">
							{errors.templateName.message}
						</p>
					)}
				</div>
				<div className="flex gap-9">
					<div className="w-1/2 border rounded p-5">
						<div className="relative z-0 w-full mb-5 group">
							<input
								type="text"
								id="floating_subject"
								className="block py-2.5 px-1 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
								placeholder=" "
								{...register("subject", {
									required: "Subject is required",
								})}
							/>
							<label
								htmlFor="floating_subject"
								className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Subject
							</label>
							{errors.subject && (
								<p className="text-red-600 text-xs">{errors.subject.message}</p>
							)}
						</div>
						<div className="relative z-0 w-full mb-5 group">
							<textarea
								className="block py-2.5 px-1 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
								id="floating_body"
								placeholder=" "
								rows={10}
								{...register("body", {
									required: "Body is required",
									minLength: {
										value: 10,
										message: "Body must be at least 10 characters long",
									},
								})}
							/>
							<label
								htmlFor="floating_body"
								className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Body
							</label>
							{errors.body && (
								<p className="text-red-600 text-xs">{errors.body.message}</p>
							)}
						</div>
						<div className="flex z-0 w-full mb-5 group gap-4">
							<input
								type="checkbox"
								id="floating_IsHtml"
								placeholder=" "
								className="scale-125 accent-purple-400"
								{...register("isHtml")}
							/>
							<label
								htmlFor="floating_IsHtml"
								className="font-medium text-sm text-gray-400 duration-300 hover:text-purple-400"
							>
								Is HTML
							</label>
						</div>
					</div>
					<div className="w-1/2 border rounded p-3">
						<label
							htmlFor="floating_Attachments"
							className="font-medium text-sm text-gray-400 duration-300 hover:text-purple-400"
						>
							Attachments
						</label>
						<div className="overflow-auto max-h-[300px] p-3 my-3">
							{fields.map((field, index) => (
								<>
									<div key={field.id} className="flex gap-3">
										<input
											type="file"
											id="file_input"
											className="block w-full my-3 text-md duration-300 rounded-lg text-gray-400 border file:p-2 file:mr-3 border-b-gray-300 file:border-0 cursor-pointer file:bg-purple-500 file:text-gray-300 focus:outline-none"
											{...register(`attachments.${index}.file`, {
												required:
													"Attachment is empty either add attachment or remove",
											})}
										/>
										<div className="my-auto">
											<ThemeButtonSmall
												type={"button"}
												onClick={() => remove(index)}
												text={"Remove"}
											/>
										</div>
									</div>
									{errors.attachments && errors.attachments[index] && (
										<p className="text-red-600 text-xs">
											{errors.attachments[index].file.message}
										</p>
									)}
								</>
							))}
						</div>

						<ThemeButtonSmall
							type={"button"}
							onClick={() => append({ file: null })}
							text={"Add Attachment"}
						/>
					</div>
				</div>
				<div className="my-5">
					<ThemeButton type={"submit"} text={"Add Template"} />
				</div>
			</form>
		</div>
	);
}

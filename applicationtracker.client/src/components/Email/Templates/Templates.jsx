import React, { useEffect, useState } from "react";
import {
	deleteTemplateById,
	getAllEmailTemplates,
} from "../../../Services/Template.service";
import { useNavigate } from "react-router-dom";
import Confirmationpopup from "../../Theme/Popup/Confirmationpopup";

export default function Templates() {
	const [loggedInUser, setloggedInUser] = useState();
	const [templateList, setTemplateList] = useState();
	const [deletePopupVisible, setDeletePopupVisible] = useState(false);
	const [deletetemplateId, setDeletetemplateId] = useState(0);
	const [deletetemplateName, setDeletetemplateName] = useState("");
	// const navigate = useNavigate();

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem("User"));
		setloggedInUser(user);
	}, []);

	useEffect(() => {
		if (loggedInUser) getTemplateList(loggedInUser.id);
	}, [loggedInUser]);

	const getTemplateList = async (userId) => {
		var res = await getAllEmailTemplates(userId);
		if (res.status === 200) {
			setTemplateList(res.data);
			console.log(res.data);
		} else {
			alert(res.data);
		}
	};

	const deleteTemplate = async (templateId) => {
		var res = await deleteTemplateById(templateId);
		if (res.status === 200) {
			alert(res.data);
			setDeletePopupVisible(false);
			getTemplateList(loggedInUser.id);
		} else {
			alert(res.data);
		}
	};

	return (
		<div className="relative overflow-x-auto shadow-md">
			<Confirmationpopup
				isVisible={deletePopupVisible}
				setIsVisible={setDeletePopupVisible}
				messageText={`Are you sure you want to delete ${deletetemplateName} tempalte?`}
				cancelText={"No, Thanks"}
				confirmText={"Delete"}
				onConfirm={() => deleteTemplate(deletetemplateId)}
			/>
			<div className="w-full text-sm text-center">
				<div className="grid grid-cols-12 text-xs text-gray-50 uppercase bg-black">
					<div className="px-6 py-3 border-gray-50 border w-full col-span-1">
						No.
					</div>
					<div className="px-6 py-3 border-gray-50 border w-full col-span-2">
						Template Name
					</div>
					<div className="px-6 py-3 border-gray-50 border w-full col-span-5">
						Email Subject
					</div>
					<div className="px-6 py-3 border-gray-50 border w-full col-span-2">
						Added On
					</div>
					<div className="px-6 py-3 border-gray-50 border w-full col-span-2">
						Actions
					</div>
				</div>
				<div className="h-[calc(100vh-150px)] overflow-auto">
					{templateList &&
						templateList.map((template, index) => (
							<div key={`template_${template.id}`}>
								<div className="bg-white bg-opacity-15 border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:bg-opacity-40 dark:hover:bg-gray-600 grid grid-cols-12">
									<div className="px-6 py-4 col-span-1">
										{index + 1}.
									</div>
									<div className="px-6 py-4 col-span-2">
										{template.name}
									</div>
									<div className="px-6 py-4 col-span-5">
										{template.subject}
									</div>
									<div className="px-6 py-4 col-span-2">
										{new Date(
											template.lastModifyed
										).toString()}
									</div>
									<div className="px-6 py-4 col-span-2">
										<div className="flex justify-evenly items-center gap-2">
											{/* <svg
											className="h-6 w-6 text-purple-400 cursor-pointer"
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											onClick={() =>
												navigate(
													`/email/templates/update/${template.id}`
												)
											}
										>
											<path
												stroke="none"
												d="M0 0h24v24H0z"
											/>{" "}
											<path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
											<path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
											<line
												x1="16"
												y1="5"
												x2="19"
												y2="8"
											/>
										</svg> */}

											<svg
												className="h-6 w-6 text-red-200 cursor-pointer"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													onClick={() => {
														setDeletePopupVisible(
															true
														);
														setDeletetemplateId(
															template.id
														);
														setDeletetemplateName(
															template.name
														);
													}}
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

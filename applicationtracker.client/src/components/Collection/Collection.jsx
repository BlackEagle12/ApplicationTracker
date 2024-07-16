import React, { useState } from "react";
import user from "../../assets/User/user.png";
export default function Collection() {
	let jobCollection = [
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: false,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
		{
			company: {
				name: "Weybee Solution",
				logo: user,
				profileUrl: "https://in.linkedin.com/company/weybee",
			},
			job: {
				profile: "Full-stack developer",
				postingUrl:
					"https://www.linkedin.com/jobs/weybee-solutions-pvt-ltd-jobs-worldwide?",
				isApplied: false,
				isEasyApply: true,
				jobCompanyId: null,
				collectedOn: new Date(),
			},
		},
	];

	const [collection, setCollection] = useState(jobCollection);

	return (
		<div className="relative overflow-x-auto shadow-md">
			<div className="w-full text-sm text-center">
				<div className="grid grid-cols-7 text-xs text-gray-50 uppercase bg-black">
					<div className="px-6 py-3 border-gray-50 border w-full col-span-2">
						Company
					</div>
					<div className="px-6 py-3 border-gray-50 border w-full">
						Job posting
					</div>
					<div className="px-6 py-3 border-gray-50 border w-full">
						Is easy apply
					</div>
					<div className="px-6 py-3 border-gray-50 border w-full">Job id</div>
					<div className="px-6 py-3 border-gray-50 border w-full">
						Collected on
					</div>
					<div className="px-6 py-3 border-gray-50 border w-full">Actions</div>
				</div>
				<div className="h-[calc(100vh-150px)] overflow-auto">
					{collection &&
						collection.map((collectionItem) => (
							<div className="bg-white bg-opacity-15 border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:bg-opacity-40 dark:hover:bg-gray-600 grid grid-cols-7">
								<div className="flex items-center justify-center px-6 py-4 whitespace-nowrap dark:text-white col-span-2">
									<img
										className="w-10 h-10 rounded-full"
										src={collectionItem.company.logo}
										alt="Jese image"
									/>
									<div className="ps-3 underline">
										<a href={collectionItem.company.profileUrl} target="_blank">
											{collectionItem.company.name}
										</a>
									</div>
								</div>
								<div className="px-6 py-4 underline">
									<a href={collectionItem.job.postingUrl} target="_blank">
										{collectionItem.job.profile}
									</a>
								</div>
								<div className="px-6 py-4">
									<div className="flex items-center justify-center">
										<div
											className={
												"h-2.5 w-2.5 rounded-full me-2 " +
												(collectionItem.job.isEasyApply
													? "bg-green-300"
													: "bg-red-300")
											}
										></div>
										{collectionItem.job.isEasyApply ? "Yes" : "No"}
									</div>
								</div>
								<div className="px-6 py-4">
									{collectionItem.job.jobCompanyId
										? collectionItem.job.jobCompanyId
										: "Not Added"}
								</div>
								<div className="px-6 py-4">
									{collectionItem.job.collectedOn.toDateString()}
								</div>
								<div className="px-6 py-4">
									<div className="flex justify-evenly items-center gap-2">
										<svg
											className="h-6 w-6 text-purple-400"
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" />{" "}
											<path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
											<path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
											<line x1="16" y1="5" x2="19" y2="8" />
										</svg>

										<svg
											className="h-6 w-6 text-purple-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
											/>
										</svg>

										<svg
											className="h-6 w-6 text-red-200"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

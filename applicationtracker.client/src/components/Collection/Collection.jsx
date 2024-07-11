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
		<div className="realtive h-full overflow-x-auto shadow-md">
			{/* <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 border-gray-50">
				<label htmlFor="table-search" className="sr-only">
					Search
				</label>
				<div className="relative ml-auto">
					<div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="text"
						id="table-search-users"
						className="block p-2 ps-10 text-sm focus:outline-none text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for company"
					/>
				</div>
			</div> */}
			<table className="text-center w-full h-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs uppercase text-gray-50 dark:bg-gray-700 bg-black sticky top-0">
					<tr>
						<th
							scope="col"
							className="px-6 py-3 border-gray-50 border border-separate"
						>
							Company
						</th>
						<th
							scope="col"
							className="px-6 py-3 border-gray-50 border border-separate"
						>
							Job posting
						</th>
						<th
							scope="col"
							className="px-6 py-3 border-gray-50 border border-separate"
						>
							Is easy apply
						</th>
						<th
							scope="col"
							className="px-6 py-3 border-gray-50 border border-separate"
						>
							Job id
						</th>
						<th
							scope="col"
							className="px-6 py-3 border-gray-50 border border-separate"
						>
							Collected on
						</th>
						<th
							scope="col"
							className="px-6 py-3 border-gray-50 border border-separate"
						>
							Actions
						</th>
					</tr>
				</thead>

				<tbody>
					{collection &&
						collection.map((collectionItem) => (
							<tr className="bg-white text-white bg-opacity-15 border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:bg-opacity-40 dark:hover:bg-gray-600">
								<td className=" flex items-center justify-center px-6 py-4 whitespace-nowrap dark:text-white flex-wrap">
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
								</td>
								<td className=" px-6 py-4 underline">
									<a href={collectionItem.job.postingUrl} target="_blank">
										{collectionItem.job.profile}
									</a>
								</td>
								<td className=" px-6 py-4">
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
								</td>
								<td className=" px-6 py-4">
									{collectionItem.job.jobCompanyId
										? collectionItem.job.jobCompanyId
										: "Not Added"}
								</td>
								<td className=" px-6 py-4">
									{collectionItem.job.collectedOn.toDateString()}
								</td>
								<td className=" px-6 py-4">
									<div className="flex justify-evenly items-center gap-2">
										<svg
											className="h-6 w-6 text-purple-400"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
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
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
											/>
										</svg>

										<svg
											class="h-6 w-6 text-red-200"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</div>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

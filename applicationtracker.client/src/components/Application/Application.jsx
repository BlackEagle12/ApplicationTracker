import React, { useState } from "react";
import user from "../../assets/User/user.png";
export default function Application() {
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
	];

	const [collection, setCollection] = useState(jobCollection);
	return (
		<div className="relative overflow-x-auto shadow-md h-full">
			<table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-50 uppercase bg-black sticky top-0 m-0 box-border">
					<tr>
						<th scope="col" className="px-6 py-3 border">
							Name
						</th>
						<th scope="col" className="px-6 py-3 border">
							Position
						</th>
						<th scope="col" className="px-6 py-3 border">
							Status
						</th>
						<th scope="col" className="px-6 py-3 border">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{jobCollection.map((job) => (
						<tr className="bg-white text-white bg-opacity-15 border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th
								scope="row"
								className="flex items-center px-6 py-4 whitespace-nowrap"
							>
								<img
									className="w-10 h-10 rounded-full"
									src="/docs/images/people/profile-picture-1.jpg"
									alt="Jese image"
								/>
								<div className="ps-3">
									<div className="">Neil Sims</div>
									<div className="font-normal text-[#99a2b3]">
										neil.sims@flowbite.com
									</div>
								</div>
							</th>
							<td className="px-6 py-4">React Developer</td>
							<td className="px-6 py-4">
								<div className="flex items-center">
									<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
									Online
								</div>
							</td>
							<td className="px-6 py-4">
								<a
									href="#"
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
								>
									Edit user
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

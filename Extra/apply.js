var joblist = [
	{
		Company: {
			CompanyLinkedInURL: "https://www.linkedin.com/company/camascope/life",
			CompanyLogoUrl:
				"https://media.licdn.com/dms/image/C4E0BAQHo5ryGhL6Z6A/company-logo_100_100/0/1680124400295/camascope_logo?e=1729728000&v=beta&t=h7ijX0Iva-Zr2RCgpXKEGtGd93j9ptOQIvNGe67-RM0",
			CompanyName: "Camascope",
			CompanyStrength: "\n                            ",
		},
		Job: {
			LinkedInPostUrl:
				"https://www.linkedin.com/jobs/view/3939102364/?alternateChannel=search&refId=BXZNAcQt6TTVPu1qMOBJHA%3D%3D&trackingId=l2FJ%2FgHQgm1R%2BHJD%2BEc7rg%3D%3D&trk=d_flagship3_job_details",
			JobTitle: "Engineering Manager (C#.net, Azure)",
			Location: "Bengaluru, Karnataka, India",
			PostTime: "1 month ago",
			TotalApplicant: "Over 100 applicants",
			JobRemotType: "Hybrid",
			JobType: "Full-time",
			IsEasyApply: true,
		},
	},
	{
		Company: {
			CompanyLinkedInURL: "https://www.linkedin.com/company/tigihr/life",
			CompanyLogoUrl:
				"https://media.licdn.com/dms/image/C4D0BAQGLW9qW5g-H0A/company-logo_100_100/0/1675969755065/tigihr_logo?e=1729728000&v=beta&t=8lDAHN_f2YYd_td_Z6CghfnbbxOu8oGd5rCmp37z-zA",
			CompanyName: "TIGI HR ®",
		},
		Job: {
			LinkedInPostUrl:
				"https://www.linkedin.com/jobs/view/3959993576/?alternateChannel=search&refId=BXZNAcQt6TTVPu1qMOBJHA%3D%3D&trackingId=hy0KlhrJITHpZTKFOtH3jw%3D%3D&trk=d_flagship3_job_details",
			JobTitle: "Dotnet Developer",
			Location: "Bangalore Urban, Karnataka, India",
			PostTime: "3 weeks ago",
			TotalApplicant: "Over 100 applicants",
			JobRemotType: "On-site",
			JobType: "Full-time",
			JobExperienceLavel: "Associate",
			IsEasyApply: true,
		},
	},
];

for (const job of joblist) {
}

for (let index = 0; index < joblist.length; index++) {
	const job = joblist[index];

	let url = job.Company.CompanyLinkedInURL.replace("life", "people");
	console.log(url);

	let companyWindow = window.open(url, `_blank${index}`);
	console.log(companyWindow);
	companyWindow.getElementByXpath = (path) => {
		try {
			return document.evaluate(
				path,
				companyWindow.document,
				null,
				XPathResult.FIRST_ORDERED_NODE_TYPE,
				null
			).singleNodeValue;
		} catch (error) {
			console.log("Error in getElementByXpath", error);
		}
	};

	companyWindow.GetEmployeDetails = () => {
		return new Promise((resolve, reject) => {
			try {
				let peopleListXpath =
					"/html/body/div[4]/div[3]/div/div[2]/div/div[2]/main/div[2]/div/div[2]/div/div[1]/ul";
				let peopleListParentNode =
					companyWindow.getElementByXpath(peopleListXpath);

				if (
					(peopleListParentNode != undefined || peopleListParentNode) != null
				) {
					let needToCollectMenbers = 10;
					let collectedMembers = [];
					let scrolledMenbers = 0;
					while (collectedMembers.length < needToCollectMenbers) {
						//scroll
						var body = companyWindow.getElementByXpath("/html/body");
						window.scrollTo(0, body.scrollHeight);

						let peopleNodeList = peopleListParentNode.children;

						while (scrolledMenbers < peopleNodeList.length) {
							let personNode = peopleNodeList[scrolledMenbers];
							let personInfoNode =
								personNode.children[0]?.children[0]?.children[1]?.children[0]
									?.children[1];
							let personProfileUrl =
								personInfoNode.children[0]?.children[0]?.href;
							let personName =
								personInfoNode?.children[0]?.children[0]?.children[0]
									?.childNodes[2]?.textContent;
							let personPosition =
								personInfoNode.children[2].children[0].children[0].childNodes[2]
									.textContent;
							if (personName && personProfileUrl) {
								collectedMembers.push({
									memberName: personName,
									memberProfileUrl: personProfileUrl,
									memberPosition: personPosition,
								});
								scrolledMenbers++;
							}
						}
					}
					resolve(collectedMembers);
				} else {
					console.log("not found");
					resolve([]);
				}
			} catch {
				console.log("Error in : GetEmployeDetails");
				resolve([]);
			}
		});
	};

	companyWindow.wait = (ms) => {
		return new Promise(async (resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, ms);
		});
	};

	await companyWindow.wait(10000);
	var memberData = await companyWindow.GetEmployeDetails();
	console.log(memberData);
	companyWindow.close();
	await companyWindow.wait(2000);
}
console.log("New script appended!");

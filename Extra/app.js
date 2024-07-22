const getElementByXpath = (path) => {
	try {
		return document.evaluate(
			path,
			document,
			null,
			XPathResult.FIRST_ORDERED_NODE_TYPE,
			null
		).singleNodeValue;
	} catch (error) {
		console.log("Error in getElementByXpath", error);
	}
};

const ScrollJobLists = (MainContainer, newScrollHeight) => {
	return new Promise((resolve, reject) => {
		try {
			MainContainer.scrollTo(0, newScrollHeight);
			setTimeout(() => {
				resolve();
			}, 2000);
		} catch (error) {
			reject(new Error("Failed to fetch data"));
		}
	});
};
const getJobData = (detailParentDivXPath) => {
	try {
		let jobObject = {};

		let detailParentDivNode = getElementByXpath(detailParentDivXPath);
		let detailParentDivChildNodes = detailParentDivNode?.children;

		let companyDetailsNode = detailParentDivChildNodes[0];
		let companyData = getCompanyDetailsFromNode(companyDetailsNode);
		jobObject.Company = companyData;

		let jobNameNode = detailParentDivChildNodes[1];
		let { jobUrl, jobTitle } = getJobDetailsFromNode(jobNameNode);
		jobObject.Job = {};
		jobObject.Job.LinkedInPostUrl = jobUrl;
		jobObject.Job.JobTitle = jobTitle;

		let locationTotalApplicantAndPostTimeNode = detailParentDivChildNodes[2];
		let { location, postTime, totalApplicant } =
			getJoblocationTotalApplicantAndPostTimeFromNode(
				locationTotalApplicantAndPostTimeNode
			);
		jobObject.Job.Location = location;
		jobObject.Job.PostTime = postTime;
		jobObject.Job.TotalApplicant = totalApplicant;

		let jobRemoteTypeJobTypeJobExperienceLavelCompanyStrengthCompanyDomainAndTotalApplicantNode =
			detailParentDivChildNodes[3];
		let {
			jobRemotType,
			jobType,
			jobExperienceLavel,
			companyStrength,
			companyDomain,
		} =
			getjobRemoteTypeJobTypeJobExperienceLavelCompanyStrengthCompanyDomainAndTotalApplicantNodeFromNode(
				jobRemoteTypeJobTypeJobExperienceLavelCompanyStrengthCompanyDomainAndTotalApplicantNode
			);

		jobObject.Company.CompanyStrength = companyStrength;
		jobObject.Company.CompanyDomain = companyDomain;
		jobObject.Job.JobRemotType = jobRemotType;
		jobObject.Job.JobType = jobType;
		jobObject.Job.JobExperienceLavel = jobExperienceLavel;

		let applyAndSaveButtonNode = detailParentDivChildNodes[5];
		let isEasyApply = getIsEasyApplyFromNode(applyAndSaveButtonNode);
		jobObject.Job.IsEasyApply = isEasyApply;

		return jobObject;
	} catch (error) {
		console.log("Error in getJobData", error);
	}
};

const getIsEasyApplyFromNode = (applyAndSaveButtonNode) => {
	try {
		let text =
			applyAndSaveButtonNode?.children[0]?.children[0]?.children[0]?.children[0]
				?.children[1]?.childNodes[2]?.textContent;
		if (text === "Easy Apply") return true;
		else return false;
	} catch (error) {
		console.log("Error in getIsEasyApplyFromNode", error);
	}
};

const getjobRemoteTypeJobTypeJobExperienceLavelCompanyStrengthCompanyDomainAndTotalApplicantNodeFromNode =
	(
		jobRemoteTypeJobTypeJobExperienceLavelCompanyStrengthCompanyDomainAndTotalApplicantNode
	) => {
		try {
			let detailsList =
				jobRemoteTypeJobTypeJobExperienceLavelCompanyStrengthCompanyDomainAndTotalApplicantNode
					?.children[0]?.children;

			let jobDetail = detailsList[0]?.children[1]?.children;
			let jobRemotType = jobDetail[0]?.children[0]?.children[0]?.textContent;
			let jobType =
				jobDetail[1]?.children[0]?.children[0]?.textContent ??
				jobDetail[1]?.childNodes[2]?.textContent;

			let jobExperienceLavel = jobDetail[2]?.childNodes[2]?.textContent.replace(
				"Matches your job preferences, job type is",
				""
			);

			let companyDetail =
				detailsList[1]?.children[1]?.childNodes[2]?.textContent;
			let companyStrength = companyDetail.split(" · ")[0];
			let companyDomain = companyDetail.split(" · ")[1];

			return {
				jobRemotType: jobRemotType,
				jobType: jobType,
				jobExperienceLavel: jobExperienceLavel,
				companyStrength: companyStrength,
				companyDomain: companyDomain,
			};
		} catch (error) {
			console.log(
				"Error in getjobRemoteTypeJobTypeJobExperienceLavelCompanyStrengthCompanyDomainAndTotalApplicantNodeFromNode",
				error
			);
		}
	};
const getJoblocationTotalApplicantAndPostTimeFromNode = (
	locationTotalApplicantAndPostTimeNode
) => {
	try {
		let locationAndPostTimeHTMLColleactionList =
			locationTotalApplicantAndPostTimeNode?.children[0]?.children;

		let location = locationAndPostTimeHTMLColleactionList[0]?.textContent;
		let postTime = locationAndPostTimeHTMLColleactionList[2]?.textContent;
		let totalApplicant = locationAndPostTimeHTMLColleactionList[4]?.textContent;
		return {
			location: location,
			postTime: postTime,
			totalApplicant: totalApplicant,
		};
	} catch (error) {
		console.log(
			"Error in getJoblocationTotalApplicantAndPostTimeFromNode",
			error
		);
	}
};

const getJobDetailsFromNode = (jobNameNode) => {
	try {
		let jobDeatilsAnchorTag =
			jobNameNode?.children[0]?.children[0]?.children[0];
		let jobUrl = jobDeatilsAnchorTag.href;
		let jobTitle = jobDeatilsAnchorTag?.text;
		return { jobUrl: jobUrl, jobTitle: jobTitle };
	} catch (error) {
		console.log("Error in getJobDetailsFromNode", error);
	}
};

const getCompanyDetailsFromNode = (companyDetailsNode) => {
	try {
		let companyJson = {};

		let companyDetailsNodes = companyDetailsNode?.children[0]?.children;
		let companyLogoanchorTagNode = companyDetailsNodes[0];
		companyJson.CompanyLinkedInURL = companyLogoanchorTagNode.href;
		companyJson.CompanyLogoUrl =
			companyLogoanchorTagNode?.children[0]?.children[0]?.children[0]?.src;

		let companyNameDetailNode = companyDetailsNodes[1];
		companyJson.CompanyName = companyNameDetailNode?.children[0]?.text;
		return companyJson;
	} catch (error) {
		console.log("Error in getCompanyDetailsFromNode", error);
	}
};

const clickElementAndWait = (element) => {
	try {
		element?.click();
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(), 10000);
		});
	} catch (error) {
		console.log("Error in clickElementAndWait", error, element);
	}
};

const getJobDataList = async (
	listContainerXPath,
	detailParentDivXPath,
	MainContainerXPath
) => {
	try {
		let jobListJson = [];
		let listContainer = getElementByXpath(listContainerXPath);
		let MainContainer = getElementByXpath(MainContainerXPath);
		let jobSectionList = listContainer?.children;
		// insideLoop
		let scrollDiff = MainContainer.scrollHeight / 25;
		let newScrollHeight = 0;

		for (let index = 0; index < jobSectionList.length; index++) {
			const item = jobSectionList[index];
			await ScrollJobLists(MainContainer, newScrollHeight);
			await clickElementAndWait(item?.children[0]?.children[0]);
			let jobData = getJobData(detailParentDivXPath);
			jobListJson.push(jobData);

			if (index > 1) {
				newScrollHeight += scrollDiff;
			}
		}
		return jobListJson;
	} catch (error) {
		console.log("Error in getJobDataList", error);
		return [];
	}
};

//need to get this from env
let MainContainerXPath = '//*[@id="main"]/div/div[2]/div[1]/div';
let listContainerXPath = '//*[@id="main"]/div/div[2]/div[1]/div/ul';
let detailParentDivXPath =
	'//*[@id="main"]/div/div[2]/div/div/div[2]/div/div[1]/div/div[1]/div/div[1]/div[1]';
let pageListPossibleXPathList = [
	"/html/body/div[5]/div[3]/div[4]/div/div/main/div/div[2]/div[1]/div/div[4]/ul",
	"/html/body/div[5]/div[3]/div[4]/div/div/main/div/div[2]/div[1]/div/div[3]/ul",
	"/html/body/div[4]/div[3]/div[4]/div/div/main/div/div[2]/div[1]/div/div[4]/ul",
	"/html/body/div[4]/div[3]/div[4]/div/div/main/div/div[2]/div[1]/div/div[3]/ul",
];
let pagesParentNode = undefined;
for (const pageListXPath of pageListPossibleXPathList) {
	pagesParentNode = getElementByXpath(pageListXPath);
	if (pagesParentNode) break;
}

let totalPages = 0;
if (pagesParentNode) {
	totalPages = parseInt(
		pagesParentNode.children[9]?.children[0]?.children[0]?.textContent
	);
} else {
	throw new Error("pages parent node not found");
}
let currentPage = 0;
let jobList = [];
while (totalPages >= currentPage) {
	try {
		let pagesListNodes = pagesParentNode.children;
		let nextPageNode = undefined;
		for (const pageNode of pagesListNodes) {
			let pageNumber = parseInt(pageNode.children[0]?.children[0]?.textContent);
			if (pageNumber != NaN && pageNumber === currentPage + 1) {
				nextPageNode = pageNode;
				break;
			}
		}
		if (nextPageNode) {
			currentPage += 1;
			console.log("clicked on ", currentPage);
			await clickElementAndWait(nextPageNode.children[0]);
		} else {
			await clickElementAndWait(pagesListNodes[8]?.children[0]);
			currentPage += 1;
			console.log(pagesListNodes[8]?.children[0]?.children[0]?.textContent);
		}

		var latestPageNo = (totalPages = parseInt(
			pagesParentNode.children[9]?.children[0]?.children[0]?.textContent
		));

		if (latestPageNo > totalPages) {
			totalPages = latestPageNo;
		}

		let partialJobListJson = await getJobDataList(
			listContainerXPath,
			detailParentDivXPath,
			MainContainerXPath
		);

		if (partialJobListJson) {
			for (const partialJobJson of partialJobListJson) {
				jobList.push(partialJobJson);
			}
		}
		console.log("page " + currentPage + " completed");
		console.log(jobList);
	} catch (error) {
		console.log(jobList);
		console.log("error in page " + currentPage);
		console.log(error);
	}
}

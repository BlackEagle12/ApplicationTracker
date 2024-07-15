const getElementByXpath = (path) => {
	return document.evaluate(
		path,
		document,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE,
		null
	).singleNodeValue;
};

const ScrollJobLists = (MainContainerXPath) => {
	let currentScrollHeight = 100;
	let MainContainer = getElementByXpath(MainContainerXPath);
	return new Promise((resolve, reject) => {
		try {
			const intervalId = setInterval(() => {
				MainContainer.scrollTo(0, currentScrollHeight);
				currentScrollHeight += 100;

				if (currentScrollHeight > MainContainer.scrollHeight) {
					clearInterval(intervalId);
					resolve();
				}
			}, 1000);
		} catch (error) {
			reject(new Error("Failed to fetch data"));
		}
	});
};

const getJobData = (item, contentDivClasses) => {
	let jobObject = {};
	// let contentDiv = item.querySelector(contentDivClasses);

	// if (contentDiv) {
	// 	let contentDivchildern = contentDiv?.children;

	// 	let jobNameParent = contentDivchildern[0];
	// 	let jobNameAnchorTag = jobNameParent.querySelector("a");
	// 	jobObject.JobUrl = jobNameAnchorTag.href;

	// 	let jobNameStrongTag = jobNameAnchorTag.querySelector("strong");
	// 	jobObject.JobName = jobNameStrongTag.childNodes[1].data;

	// 	let companyNameParent = contentDivchildern[1];
	// 	let conpanyNameSpanTag = companyNameParent.querySelector("span");
	// 	jobObject.CompanyName = conpanyNameSpanTag.childNodes[2].data;

	// 	let locationParent = contentDivchildern[2];
	// 	let locationListLiTagList = locationParent.children[0].children;
	// 	jobObject.locationList = [];
	// 	for (let locationListLiTag of locationListLiTagList) {
	// 		jobObject.locationList.push(locationListLiTag.childNodes[2].data);
	// 	}
	// } else {
	// 	jobObject.JobUrl = null;
	// 	jobObject.JobName = null;
	// 	jobObject.CompanyName = null;
	// 	jobObject.locationList = null;
	// }

	let detailParentDivXPath =
		'//*[@id="main"]/div/div[2]/div/div/div[2]/div/div[1]/div/div[1]/div/div[1]/div[1]';
	let detailParentDivNode = getElementByXpath(detailParentDivXPath);
	let detailParentDivChildNodes = detailParentDivNode.children;

	let companyDetailsNode = detailParentDivChildNodes[0];
	let companyData = getCompanyDetailsFromNode(companyDetailsNode);
	jobObject.Company = companyData;

	let jobNameNode = detailParentDivChildNodes[1];
	let { jobUrl, jobTitle } = getJobDetailsFromNode(jobNameNode);
	jobObject.Job.LinkedInPostUrl = jobUrl;
	jobObject.Job.jobTitle = jobTitle;

	let locationAndPostTimeNode = detailParentDivChildNodes[2];
	getJoblocationAndPostTimeFromNode;

	let jobRemotejobTypeAndExperienceLavelNode = detailParentDivChildNodes[3];
	let applyAndSaveButtonNode = detailParentDivChildNodes[5];
	return jobObject;
};

const getJobDetailsFromNode = (jobDeatilsNode) => {
	let jobDeatilsAnchorTag = jobNameNode.children[0].children[0].children[0];
	let jobUrl = jobDeatilsAnchorTag.href;
	let jobTitle = jobDeatilsAnchorTag.text;
	return { jobUrl: jobUrl, jobTitle: jobTitle };
};

const getCompanyDetailsFromNode = (companyDetailsNode) => {
	let companyJson = {};

	let companyDetailsNodes = companyDetailsNode.children[0].children;
	let companyLogoanchorTagNode = companyDetailsNodes[0];
	companyJson.CompanyLinkedInURL = companyLogoanchorTagNode.href;
	companyJson.CompanyLogoUrl =
		companyLogoanchorTagNode.children[0].children[0].children[0].src;

	let companyNameDetailNode = companyDetailsNodes[1];
	companyJson.CompanyName = companyNameDetailNode.children[0].text;
	return companyJson;
};

const getJobDataList = (listContainerXPath, contentDivClasses) => {
	let jobListJson = [];
	let listContainer = getElementByXpath(listContainerXPath);
	let jobSectionList = listContainer.children;
	// insideLoop
	for (let item of jobSectionList) {
		let jobData = getJobData(item, contentDivClasses);
		jobListJson.push(jobData);
	}
	return jobListJson;
};

//need to get this from env
let MainContainerXPath = '//*[@id="main"]/div/div[2]/div[1]/div';
let listContainerXPath = '//*[@id="main"]/div/div[2]/div[1]/div/ul';
let contentDivClasses =
	".flex-grow-1.artdeco-entity-lockup__content.ember-view";

ScrollJobLists(MainContainerXPath)
	.then(() => {
		let jobListJson = getJobDataList(listContainerXPath, contentDivClasses);
		console.log(jobListJson);
	})
	.catch((error) => {
		log(error);
		alert("failed to scroll");
	});

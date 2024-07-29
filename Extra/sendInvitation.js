let JobDataList = [
	{
		Company: {
			CompanyLinkedInURL: "https://www.linkedin.com/company/birlasoft/life",
			CompanyLogoUrl:
				"https://media.licdn.com/dms/image/C4E0BAQFJ26tVfkJeKg/company-logo_100_100/0/1630606173796/birlasoft_logo?e=1729728000&v=beta&t=6Z4Isq6npan5LybgDj2qQhoYYII2j-LvWP7YkpQvUrA",
			CompanyName: "Birlasoft",
		},
		Job: {
			LinkedInPostUrl:
				"https://www.linkedin.com/jobs/view/3946480845/?alternateChannel=search&refId=MSh4wCkStN63zmSxpgmzMg%3D%3D&trackingId=hZiIGlk6ytQw9fQg0WuPlg%3D%3D&trk=d_flagship3_search_srp_jobs",
			JobTitle: ".NET Developer (Immediate interviews)",
			Location: "Bengaluru, Karnataka, India",
			PostTime: "Reposted 1 month ago",
			TotalApplicant: "Over 100 applicants",
			JobRemotType: "Hybrid",
			JobType: "Full-time",
			JobExperienceLavel: "Mid-Senior level",
			IsEasyApply: true,
		},
		isMenberFerched: true,
		companymembers: [
			{
				memberName: "kIRAN BIRARI",
				memberProfileUrl:
					"https://www.linkedin.com/in/kiran-birari-573261172?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACj45-cBx7GdNWjCWpbNuaoCtihW2emdNCA",
				memberPosition:
					"Software Developer|| Asp.net,C#, Windows Form,WPF,Web api,Web services, SQL server,Mysql, Oracle.",
			},
			{
				memberName: "SUVARNA KHAIRNAR",
				memberProfileUrl:
					"https://www.linkedin.com/in/suvarna-khairnar-86a3b7108?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABsckxIBLFamjMNVOpW1Elo5jcUg6l4bedg",
				memberPosition:
					"#SharePointDeveloper #PowerPlatformDeveloper #Birlasoftian #Ex-Tcser",
			},
			{
				memberName: "Siddharth Chauhan",
				memberProfileUrl:
					"https://www.linkedin.com/in/siddharth-chauhan-a38624a1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABWgmswB6kDcD1lWzmAo0Y4xE07_dNMlWwM",
				memberPosition:
					"Salesforce, Development(Apex,LWC), integration and deployment",
			},
			{
				memberName: "Sagar Supekar",
				memberProfileUrl:
					"https://www.linkedin.com/in/sagar-supekar-910963134?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACDjq1wBaTHUhPh2uu_q8p7mPRrtvv9CgC0",
				memberPosition: "software developer at Birlasoft",
			},
			{
				memberName: "Atul Murkute",
				memberProfileUrl:
					"https://www.linkedin.com/in/atul-murkute-50697081?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABFn9dYBOZTQ0u0N6-tO-z4W8TyNTQgBGrk",
				memberPosition: "PTC Windchill Developer",
			},
			{
				memberName: "Abhishek Anmol",
				memberProfileUrl:
					"https://www.linkedin.com/in/abhishek-anmol-a68959173?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAClA87ABUfOJC7a8CgYURFzsmQZgWzPhTts",
				memberPosition: "Software Developer at Birlasoft",
			},
			{
				memberName: "Ankan Chattapadhyay",
				memberProfileUrl:
					"https://www.linkedin.com/in/ankan-chattapadhyay-1b31a017a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACpi1xcB46TSdfwPBYEbWN6sN3bop2-DrYg",
				memberPosition:
					"Software Developer at Birlasoft - MES (Apriso) || Digital Manufacturing || Ex ITC Infotech",
			},
			{
				memberName: "Pavan Soni",
				memberProfileUrl:
					"https://www.linkedin.com/in/pavan-soni-604516154?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACUYeOQB4n0mjQ_7zLxm7pj5bDFpbaM3gsQ",
				memberPosition:
					"Software Developer | Java | Microservices | Azure DevOps",
			},
			{
				memberName: "Pratibha Shinde",
				memberProfileUrl:
					"https://www.linkedin.com/in/pratibha-shinde-2a5226116?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABzdhB0Bvjm5Te3x2Eh2BtFqmN28eyXyax8",
				memberPosition: "Senior Software Developer at Birlasoft",
			},
			{
				memberName: "Sandeep Kumar Yadav",
				memberProfileUrl:
					"https://www.linkedin.com/in/sandeep-kumar-yadav-ba5b8872?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA966K0BXe7dq1oCyan2hvPgSvxorR_9sMA",
				memberPosition: "Consultant Specialist at Birlasoft",
			},
		],
	},
];

const wait = (ms) => {
	return new Promise(async (resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};

const sendInvitation = (invitationMessage) => {
	return new Promise(async (resolve, reject) => {
		try {
			let moreButtonXpathList = [
				"/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/div[2]/button",
				"/html/body/div[4]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/div[2]/button",
			];

			let connectButtonXpathList = [
				"/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/div[2]/div/div/ul/li[3]/div",
				"/html/body/div[4]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/div[2]/div/div/ul/li[3]/div",
				"/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/button",
			];

			let addConnectionNoteButtonXpath =
				"/html/body/div[3]/div/div/div[3]/button[1]";

			let connectionNoteInputTextareaXpathList = [
				"/html/body/div[3]/div/div/div[3]/div[1]/textarea",
				"/html/body/div[3]/div/div/div[2]/div/textarea",
			];

			let sendInvitationButtonXpathList = [
				"/html/body/div[3]/div/div/div[4]/button[2]",
				"/html/body/div[3]/div/div/div[3]/button[2]",
			];

			let operationTostMessageNodeXpath =
				"/html/body/div[1]/section/div/div/div/p/span";

			let moreButton = undefined;
			for (const moreButtonXpath of moreButtonXpathList) {
				moreButton = personWindow.getElementByXpath(moreButtonXpath);
				if (moreButton) break;
			}

			if (!moreButton) {
				debugger;
				throw new Error("moreButton is null");
			}

			moreButton.click();
			await personWindow.wait(5000);

			let connectButton = undefined;
			for (const connectButtonXpath of connectButtonXpathList) {
				connectButton = personWindow.getElementByXpath(connectButtonXpath);
				if (connectButton) break;
			}
			if (!connectButton) {
				debugger;
				throw new Error("connectButton is null");
			}
			connectButton.click();

			await personWindow.wait(5000);

			let addConnectionNoteButton = personWindow.getElementByXpath(
				addConnectionNoteButtonXpath
			);
			if (!addConnectionNoteButton) {
				debugger;
				throw new Error("addConnectionNoteButton is null");
			}
			addConnectionNoteButton.click();

			await personWindow.wait(5000);

			let connectionNoteInputTextarea = undefined;
			for (const connectionNoteInputTextareaXpath of connectionNoteInputTextareaXpathList) {
				connectionNoteInputTextarea = personWindow.getElementByXpath(
					connectionNoteInputTextareaXpath
				);
				if (connectionNoteInputTextarea) break;
			}
			if (!connectionNoteInputTextarea) {
				debugger;
				throw new Error("connectionNoteInputTextarea is null");
			}
			connectionNoteInputTextarea.value = invitationMessage;

			await personWindow.wait(5000);

			let sendInvitationButton = undefined;
			for (const sendInvitationButtonXpath of sendInvitationButtonXpathList) {
				sendInvitationButton = personWindow.getElementByXpath(
					sendInvitationButtonXpath
				);
				if (sendInvitationButton) break;
			}
			if (!sendInvitationButton) {
				debugger;
				throw new Error("sendInvitationButton is null");
			}
			sendInvitationButton.disabled = false;

			if (sendInvitationButton.disabled) debugger;

			await personWindow.wait(1000);
			sendInvitationButton.click();
			await personWindow.wait(10000);

			let isInvitationSend = true;

			let operationTostMessageNode = personWindow.getElementByXpath(
				operationTostMessageNodeXpath
			);
			let sucessMessage = operationTostMessageNode?.childNodes[1]?.textContent;

			resolve({
				sucessMessage: sucessMessage,
				isInvitationSend: isInvitationSend,
			});
		} catch (error) {
			reject(error);
		}
	});
};

let personWindow = window.open("", `_blank`);

const getElementByXpath = (path) => {
	try {
		return document.evaluate(
			path,
			personWindow.document,
			null,
			XPathResult.FIRST_ORDERED_NODE_TYPE,
			null
		).singleNodeValue;
	} catch (error) {
		console.log("Error in getElementByXpath", error);
	}
};

let fetchedResultList = [];
for (const jobData of JobDataList) {
	if (jobData.isMenberFerched) {
		let linkedInMembers = jobData.companymembers;
		let successCount = 0;
		for (const linkedInMember of linkedInMembers) {
			try {
				personWindow.location.href = linkedInMember.memberProfileUrl;
				await wait(10000);
				personWindow.getElementByXpath = getElementByXpath;
				personWindow.sendInvitation = sendInvitation;
				personWindow.wait = wait;
				let invitationMessage = `Hi ${linkedInMember.memberName},\nI hope you're well. Noticed we work in the same industry and would love to connect. I found an exciting opening for ${jobData.Job.JobTitle} at ${jobData.Company.CompanyName}. I believe I'd be a great fit. Could you refer me for the same?`;
				let res = await personWindow.sendInvitation(invitationMessage);

				linkedInMember.IsInvitationSent = res.isInvitationSend;
				linkedInMember.successMessage = res.sucessMessage;
				if (res.isInvitationSend) {
					if (++successCount >= 5) break;
				}
			} catch (error) {
				linkedInMember.IsInvitationSent = false;
				linkedInMember.error = error;
			}
		}
		fetchedResultList.push({ ...jobData });
	}
}
console.log(fetchedResultList);
console.log("New script completed!");
personWindow.close();

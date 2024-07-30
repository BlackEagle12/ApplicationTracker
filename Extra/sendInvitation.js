let JobDataList = [];

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
				// debugger;
				throw new Error("moreButton is null");
			}

			moreButton.click();
			await personWindow.wait(5000);

			let connectButton = undefined;
			for (const connectButtonXpath of connectButtonXpathList) {
				connectButton =
					personWindow.getElementByXpath(connectButtonXpath);
				if (connectButton) break;
			}
			if (!connectButton) {
				// debugger;
				throw new Error("connectButton is null");
			}
			connectButton.click();

			await personWindow.wait(5000);

			let addConnectionNoteButton = personWindow.getElementByXpath(
				addConnectionNoteButtonXpath
			);
			if (!addConnectionNoteButton) {
				// debugger;
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
				// debugger;
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
				// debugger;
				throw new Error("sendInvitationButton is null");
			}
			sendInvitationButton.disabled = false;

			// if (sendInvitationButton.disabled) debugger;

			await personWindow.wait(1000);
			sendInvitationButton.click();
			await personWindow.wait(10000);

			let isInvitationSend = true;

			let operationTostMessageNode = personWindow.getElementByXpath(
				operationTostMessageNodeXpath
			);
			let sucessMessage =
				operationTostMessageNode?.childNodes[1]?.textContent;

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
	if (jobData.isMenberFerched && !jobData.isRefralMessageSent) {
		let linkedInMembers = jobData.companymembers;
		let successCount = 0;
		for (const linkedInMember of linkedInMembers) {
			try {
				if (!linkedInMember.IsInvitationSent) {
					personWindow.location.href =
						linkedInMember.memberProfileUrl;
					await wait(10000);
					personWindow.getElementByXpath = getElementByXpath;
					personWindow.sendInvitation = sendInvitation;
					personWindow.wait = wait;
					let invitationMessage = `Hi ${
						linkedInMember.memberName.split(" ")[0]
					},\nI hope you're well. I have noticed we work in the same industry and would love to connect with you. I found an exciting opening for ${
						jobData.Job.JobTitle
					} at ${
						jobData.Company.CompanyName
					}. I believe I'd be a great fit. Could you please refer me?`;
					let res = await personWindow.sendInvitation(
						invitationMessage
					);

					linkedInMember.IsInvitationSent = res.isInvitationSend;
					linkedInMember.successMessage = res.sucessMessage;
					if (res.isInvitationSend) {
						if (++successCount >= 5) break;
					}
				}
			} catch (error) {
				linkedInMember.IsInvitationSent = false;
				linkedInMember.error = error;
			}
		}
		jobData.isRefralMessageSent = true;
		fetchedResultList.push({ ...jobData });
		console.log(fetchedResultList);
	}
}
console.log("New script completed!");
personWindow.close();

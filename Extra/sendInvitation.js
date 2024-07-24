var linkedInMembers = [
	{
		memberName: "Kashyap Dave",
		memberProfileUrl:
			"https://www.linkedin.com/in/kashyap-dave26?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACKKthABdqU-lJ7Gm7Ns0Eq_voRCk4pkqRo",
		memberPosition:
			"Co-Founder & Director at TIGI HR | Elevating businesses with top 1% talent | Trusted Recruitment Partner | Helping startups to grow their business",
	},
	{
		memberName: "Parth U",
		memberProfileUrl:
			"https://www.linkedin.com/in/parth-u-ab0511166?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACeWOeQBAeEgrIJWBAeNY-2Yl1din9g55ro",
		memberPosition:
			"Hiring - Sales Director | Sr. Laravel Developer | Project Manager - Dot Net",
	},
];

const wait = (ms) => {
	return new Promise(async (resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};

const sendInvitation = () => {
	return new Promise(async (resolve, reject) => {
		let moreButtonXpath =
			"/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/div[2]/button";
		let connectButtonXpath =
			"/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/div[2]/div/div/ul/li[3]/div";
		let addConnectionNoteButtonXpath =
			"/html/body/div[3]/div/div/div[3]/button[1]";
		let connectionNoteInputTextareaXpath =
			"/html/body/div[3]/div/div/div[3]/div[1]/textarea";
		let sendInvitationButtonXpath =
			"/html/body/div[3]/div/div/div[4]/button[2]";
		let operationTostMessageNodeXpath =
			"/html/body/div[1]/section/div/div/div/p/span";

		let moreButton = getElementByXpath(moreButtonXpath);
		moreButton.click();
		await personWindow.wait(1000);

		let connectButton = getElementByXpath(connectButtonXpath);
		connectButton.click();
		await personWindow.wait(1000);
		let addConnectionNoteButton = getElementByXpath(
			addConnectionNoteButtonXpath
		);
		addConnectionNoteButton.click();
		await personWindow.wait(1000);

		let connectionNoteInputTextarea = getElementByXpath(
			connectionNoteInputTextareaXpath
		);
		connectionNoteInputTextarea.value = "hii";
		let sendInvitationButton = getElementByXpath(sendInvitationButtonXpath);
		sendInvitationButton.disabled = false;
		sendInvitationButton.click();
		await personWindow.wait(1000);

		let operationTostMessageNode = getElementByXpath(
			operationTostMessageNodeXpath
		);
		let message = operationTostMessageNode.childNodes[1].textContent;
		resolve(message);
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

let result = [];
for (const linkedInMember of linkedInMembers) {
	personWindow.location.href = linkedInMember.memberProfileUrl;
	await wait(10000);
	personWindow.getElementByXpath = getElementByXpath;
	personWindow.sendInvitation = sendInvitation;
	personWindow.wait = wait;
	var message = await personWindow.sendInvitation();
	result.push({ ...linkedInMember, message: message });
	await wait(2000);
}
console.log(result);
console.log("New script completed!");
personWindow.close();

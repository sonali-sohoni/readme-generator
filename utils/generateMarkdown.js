// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licesesDef = [
	{
		licenseName: "MIT License",
		licenseLink: "https://choosealicense.com/licenses/mit/",
		badgeTxt: "MIT",
	},
	{
		licenseName: "Apache License 2.0",
		licenseLink: "https://choosealicense.com/licenses/apache-2.0/",
		badgeText: "Apache%202.0",
	},
	{
		licenseName: "Mozilla Public License 2.0",
		licenseLink: "https://choosealicense.com/licenses/mpl-2.0/",
		badgeText: "Mozilla%202.0",
	},
	{
		licenseName: "GNU GPLv3",
		licenseLink: "https://choosealicense.com/licenses/gpl-3.0/",
		badgeText: "GNU%20GPLv3",
	},
];
function renderLicenseBadge(license) {
	//	console.log("parameter = " + license);
	let licenseObj = licesesDef.find(
		(obj) => obj.licenseName.trim() === license.trim()
	);
	// console.log("-------------------------------");
	// console.log(licenseObj.badgeTxt);
	// console.log("-------------------------------");
	return license
		? `![license](https://img.shields.io/badge/License-${licenseObj.badgeTxt}-success)`
		: "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	let licenseObj = licesesDef.find((obj) => obj.licenseName === license);
	return licenseObj.licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
	//	console.log(license);
	return `## License
Distributed under ${license}.
Read more about this license [here](${renderLicenseLink(license)})
	`;
}
//![APM](https://img.shields.io/apm/l/vim-mode)
const getSection = (sectionName, sectionText) => {
	if (!sectionText) return "";
	else {
		return `## ${sectionName}

${sectionText}`;
	}
};

const getQuestionsSection = (sectionName, email, gitHubLink) => {
	if (!email && !gitHubLink) return "";
	else {
		return `## ${sectionName}
Please check issues and other resources at [project repository](${gitHubLink})
You can also reach out project team by email ${email} `;
	}
};

const generateTableOfContents = (data) => {
	let table_content = "";
	let tableEntries = Object.entries(data).filter((entry) => {
		if (
			entry[0] === "title" ||
			entry[0] === "desc" ||
			entry[0] === "github" ||
			entry[0] === "email" ||
			entry[0] == "confirm_images" ||
			entry[0] == "images"
		)
			return false;

		if (entry[1]) return true;
	});
	//	console.log("table Entries " + tableEntries);
	let ind = 0;
	tableEntries.forEach((entry) => {
		ind++;
		table_content +=
			"(" +
			ind +
			") " +
			" [" +
			entry[0] +
			"]" +
			"(#" +
			entry[0].toLowerCase() +
			")" +
			"</br>      ";
	});

	table_content +=
		"(" +
		ind +
		") " +
		" [" +
		"Questions" +
		"]" +
		"(#" +
		"questions" +
		")" +
		"</br>      ";

	return table_content;
};

const getImageRefs = (images) => {
	return images
		? images
				.map(({ url, altText }) => {
					return `![${altText}](${url})`;
				})
				.join("")
		: "";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	//console.log(Object.entries(data));

	return `
# ${data.title} ${renderLicenseBadge(data.License)}

${getSection("Description", data.desc)}

## Table Of Contents 
${generateTableOfContents(data)}

${getSection("Installation", data.Installation)}

${getSection("Usage", data.Usage)}

${getImageRefs(data.images)}

${getSection("Credits", data.Credits)}

${renderLicenseSection(data.License)}

${getSection("Contributing", data.Contributing)}

${getSection("Tests", data.Tests)}

${getQuestionsSection("Questions", data.email, data.github)}

    
  `;
}
module.exports = generateMarkdown;

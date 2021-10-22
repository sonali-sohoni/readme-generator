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
	console.log("parameter = " + license);
	let licenseObj = licesesDef.find(
		(obj) => obj.licenseName.trim() === license.trim()
	);
	console.log("-------------------------------");
	console.log(licenseObj.badgeTxt);
	console.log("-------------------------------");
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
	console.log(license);
	return `## License
	Distributed under ${license}.
	${renderLicenseLink(license)}
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

const getImageRefs = (images) => {
	return images
		? images
				.map(({ url, altText }) => {
					return `
     ![${altText}](${url})
    `;
				})
				.join("")
		: "";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	console.log("generate MarkDown" + data.license);
	return `
# ${data.title} ${renderLicenseBadge(data.license)}

${getSection("Description", data.desc)}

${getSection("Installation", data.install_instructions)}

${getSection("Usage", data.usage)}

${getImageRefs(data.images)}

${getSection("Credits", data.credits)}

${renderLicenseSection(data.license)}

    
  `;
}
module.exports = generateMarkdown;

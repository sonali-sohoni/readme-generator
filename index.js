// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const readmeTemplate = require("./src/readme-template.js");
// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the name of your project? (required)",
		validate: (projectTitle) => {
			if (projectTitle) return true;
			else {
				console.log("Please enter the project name.");
			}
		},
	},
	{
		type: "input",
		name: "desc",
		message: "Please enter the brief description about the project.(required)",
		validate: (description) => {
			if (description) return true;
			else {
				console.log("Please enter the project description.");
			}
		},
	},
	{
		type: "editor",
		name: "install_instructions",
		message: "Please enter installation instructions.(required)",
	},
	{
		type: "editor",
		name: "usage",
		message: "Please enter usage instructions.(required)",
	},
	{
		type: "input",
		name: "credits",
		message: "Please enter collaborators list -",
	},
	{
		type: "checkbox",
		name: "license",
		message: "Please select valid license from the list below -",
		choices: ["License preferred by the community", "MIT License", "GNU GPLv3"],
	},
	{
		type: "confirm",
		name: "confirm_images",
		message: "Do you want to upload images to readme file?",
	},
];

const getAnswers = () => {
	return inquirer.prompt(questions);
};

const getImages = (answers) => {
	console.log(answers);
	if (!answers.images) {
		answers.images = [];
	}
	return inquirer
		.prompt([
			{
				type: "input",
				name: "image_url",
				message: "Please enter URL for images",
			},
			{
				type: "input",
				name: "altText",
				message: "Please enter alternate text for the image - ",
			},
			{
				type: "confirm",
				name: "moreImages",
				message: "Would you like to add another image URL?",
			},
		])
		.then((imageData) => {
			console.log(imageData);
			answers.images.push({
				url: imageData.image_url,
				altText: imageData.altText,
			});
			if (imageData.moreImages) {
				return getImages(answers);
			} else return answers;
		});
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	getAnswers()
		.then((answers) => {
			console.log(answers);
			if (answers.confirm_images) return getImages(answers);
			else return answers;
		})
		.then((answersWithImages) => {
			console.log("answers with images ");
			console.log(answersWithImages);
			//	return getMoreAnswers();
			console.log(readmeTemplate(answersWithImages));
		})
		.catch((err) => {
			console.log(err);
		});
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
//const readmeTemplate = require("./src/readme-template.js");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the name of your project? [Required]",
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
		message: "Please enter the brief description about the project.[Required]",
		validate: (description) => {
			if (description) return true;
			else {
				console.log("Please enter the project description.[Required] ");
			}
		},
	},
	{
		type: "input",
		name: "github",
		message: "Please enter the GitHub link of your application [Required]- ",
		validate: (githublink) => {
			if (githublink) return true;
			else
				console.log(
					"Please enter the GitHub link of your application [Required] -"
				);
		},
	},
	{
		type: "input",
		name: "email",
		message: "Please enter your preferred contact email address -",
	},
	{
		type: "input",
		name: "Installation",
		message: "Please enter installation instructions. - ",
	},
	{
		type: "input",
		name: "Usage",
		message: "Please enter usage instructions. - ",
	},

	{
		type: "input",
		name: "Credits",
		message: "Please enter collaborators list -",
	},
	{
		type: "input",
		name: "Contributing",
		message:
			"Please enter instructions about how other developers can contribute to this project - ",
	},

	{
		type: "input",
		name: "Tests",
		message: "Please enter the instructions to test your application - ",
	},

	{
		type: "list",
		name: "License",
		message: "Please select valid license from the list below - ",
		choices: [
			"MIT License",
			"Apache License 2.0",
			"Mozilla Public License 2.0",
			"GNU GPLv3",
		],
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
	//console.log(answers);
	if (!answers.images) {
		answers.images = [];
	}
	return inquirer
		.prompt([
			{
				type: "input",
				name: "image_url",
				message: "Please enter the path/URL for the image - ",
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
			//	console.log(imageData);
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
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			throw err;
		}
		console.log(`${fileName} got created.`);
	});
}
// TODO: Create a function to initialize app
function init() {
	getAnswers()
		.then((answers) => {
			//		console.log(answers);
			if (answers.confirm_images) return getImages(answers);
			else return answers;
		})
		.then((answersWithImages) => {
			//		console.log("answers with images ");
			//		console.log(answersWithImages);
			//	return getMoreAnswers();
			const fileContent = generateMarkdown(answersWithImages);
			//		console.log(fileContent);
			writeToFile("./dist/readme.md", fileContent);
		})
		.catch((err) => {
			console.log(err);
		});
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => {
		console.log(answers);
	});
}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a short description of your project: ",
    },
    {
      type: "input",
      name: "usage",
      message: "Write a brief explanation of how to use your application: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Write a brief explanation of how to install your application: ",
    },
    {
      type: "input",
      name: "contributors",
      message: "How can people contribute to this application?",
    },
    {
      type: "input",
      name: "test",
      message: "What are the test intstructions for this application?",
    },
    {
      type: "list",
      message: "What license do you want to use for your project?",
      name: "license",
      choices: ["MIT", "Apache 2.0", "BSD"],
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ])
  .then((data) => {
    const tableOfContents = `## Contents <br> 1. [Description](#description)<br> 2. [Usage](#usage)<br> 3. [Installation](#installation)<br> 4. [Test](#test)<br> 5. [License](#license)<br> 6. [Questions](#questions)<br>\n`;
    const title = `## Title \n${data.title}`;
    const description = `## Description \n${data.description}\n\n`;
    const usage = `## Usage  \n${data.usage}\n\n`;
    const installation = `## Installation  \n${data.installation}\n\n`;
    const contributors = `## Contribution Guidelines \n${data.contributors}\n\n`;
    const test = `## Test \n${data.test}\n\n`;
    const license = `## License \n${data.license}\n\n`;
    let badge = "";
    if (data.license === "Apache 2.0") {
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
    } else if (data.license === "MIT") {
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
    } else if (data.license === "BSD") {
      badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n`;
    }
    const github = `## Questions \n Send me a direct message me at ${data.github}, or email me at ${data.email} for any questions\n\n`;

    fs.writeFile(
      "README.md",
      title +
        badge +
        tableOfContents +
        description +
        usage +
        installation +
        contributors +
        test +
        license +
        github,
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });

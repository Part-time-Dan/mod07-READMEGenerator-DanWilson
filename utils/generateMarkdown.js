// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `${renderLicenseBadge()}

## License
${data.license}

`;
  
};

module.exports = generateMarkdown;


// # ${data.title}

// ## Description
// ${data.description}

// ## Installation
// ${data.installation}

// ## Usage
// ${data.usage}

// ## Contributing
// ${data.contribution}

// ## Tests
// ${data.tests}
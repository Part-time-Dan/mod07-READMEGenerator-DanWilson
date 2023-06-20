// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      licenseValue = 'MIT';
      licenseLink = '(https://choosealicense.com/licenses/mit/)';
      license = `[![License: ${licenseValue}](https://img.shields.io/badge/License-MIT-yellow.svg)]${licenseLink}`;
      break;

    case 'Apache 2.0':
      licenseValue = 'Apache 2.0';
      licenseLink = '(https://choosealicense.com/licenses/apache-2.0/)';
      license = `[![License: ${licenseValue}](https://img.shields.io/badge/License-Apache_2.0-orange.svg)]${licenseLink}`;
      break;

    case 'GPLv3':
      licenseValue = 'GPL v3';
      licenseLink = '(https://choosealicense.com/licenses/gpl-3.0/)';
      license = `[![License: ${licenseValue}](https://img.shields.io/badge/License-GPLv3-blue.svg)]${licenseLink}`;
      break;

    // this will act as the check for no user license for the remaining functions to return empty strings
    case 'N/A':
      licenseValue = '';
      licenseLink = '';
      license = '';
      break;

    default:
      console.log("Whoops!");
  };
  return license;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(`${licenseValue}` == '') {
    var license = ''
  } else {
    var license = `- [License](#license)`
  };
  return license;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(`${licenseValue}` == '') {
    var license = ''
  } else {
    var license = 
`
## License
For additional license information, please follow the link: [${licenseValue}]${licenseLink}
`;
  };

  return license;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  license = `${data.license}`

return `
${renderLicenseBadge(license)}
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink()}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contribution}

## Tests
${data.tests}

## Questions
If you have questions about this project:


Find me on GitHub-> [${data.github}](https://github.com/${data.github})

OR

Reach me by email here-> [${data.email}](mailto:${data.email})

${renderLicenseSection()}
`;
  
};

module.exports = generateMarkdown;

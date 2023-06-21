// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { // treat parameter as data.license
  switch (license) {

    case 'MIT':
      return `[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)`;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)`;
    case 'GPLv3':
      return `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`;
    case 'N/A':
      return '';

    default:
      console.log("Whoops!");
  };

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {

    case 'MIT':
      return `[MIT](https://choosealicense.com/licenses/mit/)`;
    case 'Apache 2.0':
      return `[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    case 'GPLv3':
      return `[GPL v3](https://choosealicense.com/licenses/gpl-3.0/)`;
    case 'N/A':
      return '';

    default:
      console.log("Whoops!");
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license = renderLicenseLink(license)
  if(license == '') {
    return '';
  } else {
    return`
## License
For additional license information, please follow the link: ${license}
`;
};
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  // conditional hides the "License" option from Table of Contents if no license selected
  if(renderLicenseBadge(data.license) !== '') {
    var tableLink = `- [License](#license)`;
  } else {
    var tableLink = '';
  };

return `
${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
${tableLink}

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

Find me on GitHub -> [${data.github}](https://github.com/${data.github})

OR

Reach me by email here -> [${data.email}](mailto:${data.email})

${renderLicenseSection(data.license)}
`;
  
};

module.exports = generateMarkdown;

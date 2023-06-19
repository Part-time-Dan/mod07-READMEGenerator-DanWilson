// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'MIT':
      licenseValue = 'MIT';
      licenseLink = '(https://choosealicense.com/licenses/mit/)'
      license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)';
      break;

    case 'Apache 2.0':
      licenseValue = 'Apache 2.0';
      licenseLink = '(https://choosealicense.com/licenses/apache-2.0/)'
      license = `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-orange.svg)]${licenseLink}`
      break;

    case 'GPLv3':
      licenseValue = 'GPL v3'
      licenseLink = `(https://choosealicense.com/licenses/gpl-3.0/)`
      license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]${licenseLink}`
      break;

    default:
      // if user chooses 'N/A' from choice list, show no badge
      license = '' 

  }

  return license;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license = licenseLink;
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  license = `${data.license}`

return `
BADGE
${renderLicenseBadge(license)}

LINK
${renderLicenseLink(license)}

## License
${license}

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
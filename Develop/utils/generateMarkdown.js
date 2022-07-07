// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.value;
  let yourLicense = ""
  if(licenseType ===  "MIT"){
    yourLicense = '![License: MIT](https://img.shields.io/badge/LicenseLicense-${data.license}-yellow.svg)'
  }else if (licenseType ===  "ISC"){
    yourLicense = '![License: ISC](https://img.shields.io/badge/LicenseLicense-${data.license}-blue.svg)'
  }else if (licenseType ===   "Apache"){
    yourLicense = '![License:  Apache](https://img.shields.io/badge/LicenseLicense-${data.license}-red.svg)'
  }else if (licenseType ===  "GNU"){
    yourLicense = '![License: GNU](https://img.shields.io/badge/LicenseLicense-${data.license}-green.svg)'
  }else if (licenseType === "Mozilla" ){
    yourLicense = '![License: Mozilla](https://img.shields.io/badge/LicenseLicense-${data.license}-purple.svg)'
  }else {
    license.value = " "
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 
  ## Description
${data.description}

## Table of contents
*[INSTALLATION](#installation)
*[USAGE](#usage)
*[LICENSE](#license)
*[CONTRIBUTION](#contribution)
*[TESTS](#tests)
*[QUESTIONS](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is license under ${data.license}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
if you have any questions in regards to this project, please contact me at ${data.email}
You can view more of my projects at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;

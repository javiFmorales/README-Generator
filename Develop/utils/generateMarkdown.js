// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = ""
  if (licenseType === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/LicenseLicense-${license}-yellow.svg)`
  } else if (licenseType === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/LicenseLicense-${license}-blue.svg)`
  } else if (licenseType === "Apache") {
    return `![License:  Apache](https://img.shields.io/badge/LicenseLicense-${license}-red.svg)`
  } else if (licenseType === "GNU") {
    return `![License: GNU](https://img.shields.io/badge/LicenseLicense-${license}-green.svg)`
  } else if (licenseType === "Mozilla") {
    return `![License: Mozilla](https://img.shields.io/badge/LicenseLicense-${license}-purple.svg)`
  } else {
    return ``
  }

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license;
  if (licenseType === "MIT") {
    return `[License: MIT](https://opensource.org/licenses/MIT)`
  } else if (licenseType === "ISC") {
    return `[License: ISC](https://opensource.org/licenses/ISC)`
  } else if (licenseType === "Apache") {
    return `[License:  Apache](http://www.apache.org/licenses/)`
  } else if (licenseType === "GNU") {
    return `[License: GNU](https://www.gnu.org/licenses/gpl-howto.html)`
  } else if (licenseType === "Mozilla") {
    return `[License: Mozilla](http://mozilla.org/MPL/2.0/)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseType = license;
  if (licenseType === "MIT") {
    return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions`

  } else if (licenseType === "ISC") {
    return `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies`

  } else if (licenseType === "Apache") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code`

  } else if (licenseType === "GNU") {
    return `This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version`

  } else if (licenseType === "Mozilla") {
    return `This License represents the complete agreement concerning the subject matter hereof. If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable. Any law or regulation which provides that the language of a contract shall be construed against the drafter shall not be used to construe this License against a Contributor`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.licenseType)} 

  ## Description
${data.description}

## Table of contents
* [INSTALLATION](#installation)
* [USAGE](#usage)
* [LICENSE](#license)
* [CONTRIBUTION](#contribution)
* [TESTS](#tests)
* [QUESTIONS](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is license under ${data.license}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

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


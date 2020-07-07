// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}

# Desciption 
  ${data.description}

# Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

# Installation 
  ${data.installation}

# Usage
  ${data.usage}

# License 
  ${data.license}

# Contributing
  ${data.contributing}

# Tests
  ${data.tests}

# Questions:

  If you have any questions about this app, feel free to contact me here:

  - Github profile: https://github.com/${data.github}

  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;

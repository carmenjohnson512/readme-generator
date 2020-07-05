// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Desciption: 
  ${data.description}
# Table of Contents: 
  ${data.tableOfContents}
# Installation: 
  ${data.installation}
# License: 
  ${data.license}
`;
}

module.exports = generateMarkdown;

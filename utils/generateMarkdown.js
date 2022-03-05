// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
//   if(!license || license.length === 0 ){
//     renderLicenseBadge = '';
//   }
//   return
// }

const renderLicenseBadge = license => {
  
if(license === 'apache') {
  return 'apache'
}
if (license === 'MIT') {
  return 'MIT'
}
else {
return 'GNU'
}
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = newData => {
  console.log(newData);
  return `${newData.title}
${renderLicenseBadge(newData.license)
}
`
}

module.exports = generateMarkdown;

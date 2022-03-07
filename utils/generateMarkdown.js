

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

const generateMarkdown = newData => {
  console.log(newData);
  return `${newData.title}
${renderLicenseBadge(newData.license)
}
${newData.detail}
${newData.operate}
${newData.Technologies}
${newData.contact}
${newData.contribute}
`
}

module.exports = generateMarkdown;

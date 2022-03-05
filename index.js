// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is this project about?',
    },
    {
        type: 'input',
        name: 'detail',
        message: 'In detail describe your project',
    },
    {
       type: 'input',
       name: 'operate',
       message: 'What are the  steps you take to maneuver your site?', 
    },
    {
        type: 'list',
        message: 'what license did you used?',
        default: '',
        name: 'license',
        choices: ['MIT','GNU', 'GPL V3', 'Apache'],
    },
    {
        type: 'checkbox',
        message: 'What languages do you have knowledge of?',
        name: 'languages',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        // when: ({languagesYN}) => {
        //     if (languagesYN) {
        //         return true;
        //     } else {
        //         return false
        //     }
        // }
    },
    {
        type: 'list',
        message: 'What is your preferred method to get in contact?',
        name: 'contact',
        choices: ['email', 'mobile phone', 'home phone'],
        // validate: contactList => {
        //     if (contactList) {
        //         return true;
        //     } else {
        //         console.log('Please provide info');
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Include everyone who contribute in this project?',
        // validate: contributeInput => {
        //     if (contributeInput) {
        //         return true;
        //     } else {
        //         console.log('provide name!');
        //         return false;
        //     }
        // }
    },

];

// TODO: Create a function to write README file
const writeToFile = data => {
    // let newData = markdown.generateMarkdown(data)
    fs.writeFile('README.md', generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        } else {
            console.log('Your README was created')
        }
    });
}

// TODO: Create a function to initialize app
 const init = () => {
    return inquirer.prompt(questions)
    .then (data => {
      return data;

    })
     
}

// Function call to initialize app
init()
.then (MD => {
    return writeToFile(MD)
})

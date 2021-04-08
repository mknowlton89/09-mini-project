// Create the package.json

// Install inquirer

// Setup the requirements in the index.js file (inquirer & fs)
const inquirer = require('inquirer');

const fs = require('fs');

// Prompt users for name, location, bio, LinkedIN URL, GitHub URL
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'What is your location?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Tell me about yourself?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn URL?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub URL?',
        },
    ])
    .then((data) => {
        const filename = "index.html";

        console.log(data);

        const name = data.name;

        fs.appendFile(filename, JSON.stringify())

        // Create an HTML element

        // Add data to that element

        // Append it to something on the page.

        // Add the logic
        fs.appendFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
// Take that info and create an HTML doc and add the variables collected above to the HTML doc - using fs -https://ourcodeworld.com/articles/read/297/how-to-create-a-file-using-the-filesystem-fs-module-in-node-js

// Format the HTML doc
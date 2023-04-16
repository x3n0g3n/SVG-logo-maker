const inquirer = require('inquirer');
const fs = require('fs');
const makeShape = require('./lib/makeShape');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Please enter text, must not be more than 3 letters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: `Please enter text color keyword or a hexadecimal number.`,
    },
    {
      type: 'input',
      name: 'logoColor',
      message: `Please enter a color keyword or a hexadecimal number for the logo's background.`,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Please choose logo shape`,
      choices: ['triangle', 'circle', 'square'],
    },
  ])
.then((response)=>{
    console.log(response)
    const myshape= makeShape(response)
    console.log(myshape)
})      

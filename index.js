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
      name: 'textColour',
      message: `Please enter text color keyword or a hexadecimal number.`,
    },
    {
      type: 'input',
      name: 'logoColour',
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

    const svgText = myshape.render()

    //additional HTML text. See example svg files

    //fs.writefile with the svgText as the data
})      
// const fs = require('fs');

// function writeLogoToFile(logoData, filename) {
//   // Convert the logoData to a string
//   const logoString = JSON.stringify(logoData);

//   // Write the logo string to a file
//   fs.writeFile(filename, logoString, (err) => {
//     if (err) {
//       console.error('Error writing file:', err);
//     } else {
//       console.log('Logo data saved to file:', filename);
//     }
//   });
// }

// const filename = 'logo.json';
// writeLogoToFile(logoData, filename);
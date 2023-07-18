const isCss3Color = require('is-css3-color');

class Shape {
  constructor({ logoName, textColor, logoColor, logoShape }) {
    this.logoShape = logoShape;

   // this.vaildTextInput(logoName);
    this.logoName = logoName;

   // this.vaildcolorInput(textcolor);
    this.textColor = textColor;

   // this.vaildcolorInput(logocolor);
    this.logoColor = logoColor;
  }

  ifInputEmpty(input) {
    if (!input) throw new Error('Input cannot be empty');
  }

  vaildTextInput(input) {
   // this.ifInputEmpty(input);

    if (input.length > 3) {
      throw new Error('Logo text cannot be more than 3 characters');
    }
  }

  vaildcolorInput(input) {
   // this.ifInputEmpty(input);


    if (!isCss3Color(input)) {
      throw new Error('Please enter a vaild css color keyword or hex code');
    }
  }

  render() {
    throw new Error('Child shapes must implement a render() method');
  }
}
module.exports = Shape;
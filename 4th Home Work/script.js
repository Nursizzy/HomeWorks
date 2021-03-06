///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №4.....\\\\\\\\\\\\\\\\\\\\\\\\
// First Task:
const concatStrings = (function () {
  let stringsArr = [];
  let firstSeparator;

  return function concatInner(str, separator) {
    if (typeof str === 'string') {
      stringsArr.push(str);
      typeof separator === 'string' ? (firstSeparator = separator) : (firstSeparator = ''); // тут вместо второго ифа решил еще раз тернари оператор использовать

      return concatInner;
    } else {
      const result = stringsArr.join(firstSeparator || '');

      stringsArr = [];
      firstSeparator = null;
      return result;
    }
  };
})();

// Testing
console.log(concatStrings('first')('second')('third')()); // верно!
console.log(concatStrings('first', null)('second')());// верно!
console.log(concatStrings('first', '123')('second')('third')());// верно!
console.log(concatStrings('some-value')('')('')(null));// верно!
console.log(concatStrings('some-value')(2));// верно!
console.log(concatStrings('some-value')('333')(123n));// верно!

// Second Task
class Calculator {
  constructor(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error('Please enter valid number!');
    }

    this.x = x;
    this.y = y;
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }
  setX = (x) => {
    if (!Number.isFinite(x)) {
      throw new Error('invalid number for new x');
    }

    return (this.x = x);
  };

  setY = (y) => {
    if (!Number.isFinite(y)) {
      throw new Error('invalid number for new y');
    }

    return (this.y = y);
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error('');
    }

    return console.log(this.x / this.y);
  };

  logSum = () => console.log(this.x + this.y);

  logMul = () => console.log(this.x * this.y);

  logSub = () => console.log(this.x - this.y);
}

//Testing
const calculator = new Calculator(2, 3);
const logCalculatorDiv = calculator.logDiv;

calculator.logSum();// верно!
calculator.logDiv();// верно!
calculator.setX(15);// верно!
calculator.logDiv();// верно!
logCalculatorDiv();// верно!
calculator.setY(444n);// верно!

//Create Calculator class
class Calculator {
  constructor(previousNum, currentNum) {
    this.previousNum = previousNum;
    this.currentNum = currentNum;
    this.clear();
    this.memoryItem = 0;
  }

  clear() {
    this.currentElem = '';
    this.previousElem = '';
    this.operation = undefined;
  }

  reverse() {
    return (this.currentElem *= -1);
  }

  task() {
    const prev = parseFloat(this.previousElem);
    const current = parseFloat(this.currentElem);
    let task;

    if (isNaN(prev) || isNaN(current)) {
      return;
    }

    switch (this.operation) {
      case '+':
        task = prev + current;
        break;
      case '-':
        task = prev - current;
        break;
      case 'x':
        task = prev * current;
        break;
      case '÷':
        task = prev / current;
        break;
      case 'M+':
        task = current;
      default:
        return;
    }

    this.currentElem = task;
    this.operation = undefined;
    this.previousElem = '';
  }

  delete() {
    this.currentElem = this.currentElem.toString().slice(0, -1);
  }

  output(number) {
    const stringNumber = number.toString();

    if (stringNumber != null) {
      let numOutput = number.toLocaleString('en', { maximumFractionDigits: 8 });

      return `${numOutput}`;
    }

    return stringNumber;
  }

  display() {
    this.currentNum.innerText = this.output(this.currentElem);
    memoryDisplay.innerText = this.memoryItem;

    if (this.operation != null) {
      return (this.previousNum.innerText = `${this.output(this.previousElem)} ${this.operation}`);
    }

    return (this.previousNum.innerText = '');
  }

  addNum(number) {
    if (number === '.' && this.currentElem.includes('.')) {
      return;
    }

    this.currentElem = this.currentElem.toString() + number.toString();
  }

  operationClick(operation) {
    if (this.currentElem === '') {
      return;
    } else if (this.previousElem !== '') {
      this.task();
    }

    this.operation = operation;
    this.previousElem = this.currentElem;
    this.currentElem = '';
  }

  addSpecial(operation) {
    switch (operation) {
      case 'M+':
        this.memoryItem = Math.abs(currentNum.innerText);
        break;
      case 'M-':
        this.memoryItem = -Math.abs(currentNum.innerText);
        break;
      case 'MC':
        this.memoryItem = 0;
        break;
      case 'MR':
        this.currentElem = this.memoryItem;
        break;
    }
  }
}

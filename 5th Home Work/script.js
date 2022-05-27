///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №5.....\\\\\\\\\\\\\\\\\\\\\\\\
//Task:
class Stack {
  constructor(size = 10) {
    this.maxSize = size;
    this.curSize = 0;
    this.topElement;
  }

  push = (el) => {
    if (this.curSize === this.maxSize) {
      throw new Error('Ошибка! Стэк переполнен!');
    }

    const data = {
      el,
      previous: null,
    };

    if (!this.topElement) {
      this.topElement = data;
    } 
    
    else {
      data.previous = this.topElement;
      this.topElement = data;
    }

    this.curSize += 1;
  };

  pop = () => {
    if (this.curSize === 0) {
      throw new Error('Ошибка! Пустой стэк.');
    }

    const popNewElement = this.topElement;
    
    this.topElement = popNewElement.previous;
    this.curSize -= 1;
    return popNewElement.el;
  };

  peek = () => (this.curSize === 0 ? null : this.topElement.el);

  isEmpty = () => this.curSize === 0;

  toArray = () => {
    const array = [];
    let arrayElement = this.topElement;
    
    do {
      array.push(arrayElement.el);
      arrayElement = arrayElement.previous;
    } while (arrayElement);
    
    return array.reverse();
  };

  static fromIterable(iterable) {
    if (iterable[Symbol.iterator] === undefined) {
      throw new Error('Ошибка! Стек не итерируемый.');
    }

    const newStack = new Stack(iterable.length);

    for (let el of iterable) {
      newStack.push(el);
    }

    return newStack;
  }
}

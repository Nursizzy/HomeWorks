///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №5.....\\\\\\\\\\\\\\\\\\\\\\\\
//Task:
class Stack {
  constructor(size = 10) {
    this.maxSize = size;
    this.stack = [];
  }

  push = (el) => {
    if (this.stack.length === this.maxSize) {
      throw new Error('Ошибка! Стэк переполнен!');
    }

    return this.stack.push(el);
  };

  pop = () => {
    if (this.stack.length === 0) {
      throw new Error('Ошибка! Пустой стэк.');
    }
    
    return this.stack.pop();
  };

  peek = () => this.stack.length === 0 ? null : this.stack[this.stack.length - 1];

  isEmpty = () => this.stack.length === 0;

  toArray = () => this.stack;

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

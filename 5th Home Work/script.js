///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №5.....\\\\\\\\\\\\\\\\\\\\\\\\
//Task:
class Stack {
  constructor(size = 10) {
    this._maxSize = size;
    this._stack = [];
  }

  push = (el) => {
    if (this._stack.length === this._maxSize) {
      throw new Error('Ошибка! Стэк переполнен!');
    }

    return this._stack.push(el);
  };

  pop = () => {
    if (this._stack.length === 0) {
      throw new Error('Ошибка! Пустой стэк.');
    }
    return this._stack.pop();
  };

  peek = () =>
    this._stack.length === 0 ? null : this._stack[this._stack.length - 1];

  isEmpty = () => this._stack.length === 0;

  toArray = () => this._stack.toArray();

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

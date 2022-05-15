///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №3.....\\\\\\\\\\\\\\\\\\\\\\\\
// First Task:
const testData = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (fn, context = this) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (fn.call(context, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
// Testing
const filteredData = testData.myFilter((x) => x > 2);
console.log(filteredData); // получился правильный результат [3,4,5]

// Second Task:
const createDebounceFunction = function (fn, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};
//Testing
const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);// по ощущениям запустилось как нужно через 400 + 1000 мс
// More testing
setTimeout(debounceLog100, 500);
setTimeout(debounceLog100, 1000);
setTimeout(debounceLog100, 2000);
setTimeout(debounceLog100, 3000);
setTimeout(debounceLog100, 4000);
setTimeout(debounceLog100, 5000);// по ощущениям запустилось как нужно через 5000 + 1000 мс

///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №2.....\\\\\\\\\\\\\\\\\\\\\\\\
// Task 1:
function makeObjectDeepCopy(object) {
  const deepCopy = Object.create(
    Object.getPrototypeOf(object),
    Object.getOwnPropertyDescriptors(object)
  );

  for (let [key, value] of Object.entries(object)) {
    if (value instanceof Object) {
      deepCopy[key] = makeObjectDeepCopy(value);
    } else if (Array.isArray(value)) {
      deepCopy[key] = value.slice();
    }
  }

  return deepCopy;
}

// Test object
const newObject = {
  name: 'Nurs',
  lastName: 'Bast',
  age: [12, 04, 1996],
  degree: {
    major: 'Finance',
    grades: ['A+', 'A', 'B+', 'B', ['C+', ['C', 'D'], 0]],
  },
};

console.log('Первая задача:', makeObjectDeepCopy(newObject)); // success

// Task 2
const onlyNumbers = function (array, int1, int2) {
  return (
    array.every((elemet) => typeof elemet === 'number') && isFinite(int1, int2)
  );
};
function selectFromInterval(arr, int1, int2) {
  if (arr instanceof Array && onlyNumbers(arr, int1, int2)) {
    return arr.filter((x) =>
      int1 > int2 ? x >= int2 && x <= int1 : x >= int1 && x <= int2
    );
  } else {
    return 'Ошибка!';
  }
}

console.log('Вторая задача:', selectFromInterval([1, 2, 3, 4], 2, 5));

// Task 3
let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let from = this.from;
    let to = this.to;
    let isTrue = isFinite(from) && isFinite(to); // ... оказывается их нужно было просто сюда вынести
    let fromOverTo = from > to;

    return {
      next() {
        if (!isTrue || fromOverTo) {
          console.log('error');
        }
        if (from <= to) {
          return {
            done: false,
            value: from++,
          };
        }
        return { done: true, value: from };
      },
    };
  },
};
// range = { from: 1, to: 4 };
console.log('Третья задача:');
for (let item of range) {
  console.log(item);
}

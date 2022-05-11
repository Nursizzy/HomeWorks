///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №2.....\\\\\\\\\\\\\\\\\\\\\\\\
// First Task:
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

// Test for first task:
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

// Second Task
const onlyNumbers = function (array, int1, int2) {
  return (
    array.every((elemet) => typeof elemet === 'number') && isFinite(int1, int2)
  );
};

function selectFromInterval(arr, int1, int2) {
  if (arr instanceof Array && onlyNumbers(arr, int1, int2)) {
    return arr.filter((x) =>
      int1 > int2 ? x >= int2 && x <= int1 : x >= int1 && x <= int2
    ); // таким образом попытался избавиться от многоэтажности ифов, но чувствую что это тоже несовсем правильно
  } else {
    return 'Ошибка!';
  }
}
// Test for second task:
console.log('Вторая задача:', selectFromInterval([1, 2, 3, 4], 2, 5));

// Third Task:
let range = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    let from = this.from;
    let to = this.to;
    let isTrue = isFinite(from) && isFinite(to); // ... оказывается их нужно было просто сюда вынести
    let fromOverTo = from > to;

    return {
      next() {
        if (!isTrue || fromOverTo) {
          console.log('Ошибка!');
        } if (from <= to) {
          return {
            done: false,
            value: from++,
          };
        } return { done: true };
      },
    };
  },
};
// Test for third task:
console.log('Третья задача:');
for (let item of range) {
  console.log(item);
}

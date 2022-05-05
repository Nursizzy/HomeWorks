///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №1.....\\\\\\\\\\\\\\\\\\\\\\\\
//Selectors
const FIRST_TASK_BUTTON = document.querySelector('.num_to_string');
const SECOND_TASK_BUTTON = document.querySelector('.num_sum_and_num_division');
//Functions
const errorLog = () => console.log('Некорректный ввод!');

//First task
FIRST_TASK_BUTTON.addEventListener('click', function () {
  const num = +prompt('Введите число которое хотите преобразовать:');
  const numSystem = +prompt(
    'В какую систему исчисления хотите преобразовать число? Введите числовое значение от 2 до 36:'
  );
  if (
    isFinite(num) === isFinite(numSystem) &&
    numSystem >= 2 &&
    numSystem <= 36
  )
    console.log(num.toString(numSystem));
  else errorLog();
});
//Second task
SECOND_TASK_BUTTON.addEventListener('click', function () {
  const firstNum = +prompt('Введите первое число:');
  if (isFinite(firstNum)) {
    const secondNum = +prompt('Введите второе число:');
    if (isFinite(secondNum) && secondNum !== 0)
      console.log(
        `Ответ: ${firstNum + secondNum}, ${(firstNum / secondNum).toFixed(2)}`
      );
    else errorLog();
  } else errorLog();
});
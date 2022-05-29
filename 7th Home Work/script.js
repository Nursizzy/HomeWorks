// Declarations
const numberBtns = document.querySelectorAll('.number');
const operationBtns = document.querySelectorAll('.operation');
const result = document.querySelector('.result');
const deleteBtn = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const previousNum = document.querySelector('.previousNum');
const currentNum = document.querySelector('.currentNum');
const reverseNum = document.querySelector('.operation-reverse');
const favourtiesBtn = document.querySelector('.link');
const memoryDisplay = document.querySelector('.memory');
const specialBtns = document.querySelectorAll('.special');

//Create calculator using Calculator class
const calculator = new Calculator(previousNum, currentNum);

// Onclick AddEventListeners
numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.addNum(button.innerText);
    calculator.display();
  });
});

operationBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.operationClick(button.innerText);
    calculator.display();
  });
});

specialBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.addSpecial(button.innerText);
    calculator.display();
  });
});

result.addEventListener('click', () => {
  calculator.task();
  calculator.display();
});

clear.addEventListener('click', () => {
  calculator.clear();
  calculator.display();
});

deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.display();
});

reverseNum.addEventListener('click', () => {
  calculator.reverse();
  calculator.display();
});

// External function to bookmark page
function addToFavourite(a) {
  pageTitle = document.title;
  pageURL = document.location;
  
  try {
    // Internet Explorer solution
    eval('window.external.AddFa-vorite(pageURL, pageTitle)'.replace(/-/g, ''));
  } catch (e) {
    try {
      // Mozilla Firefox solution
      window.sidebar.addPanel(pageTitle, pageURL, '');
    } catch (e) {
      // Opera solution
      if (typeof opera == 'object') {
        a.rel = 'sidebar';
        a.title = pageTitle;
        a.url = pageURL;
        return true;
      } else {
        // The rest browsers (i.e Chrome, Safari)
        alert(
          'Press ' +
          (navigator.userAgent.toLowerCase().indexOf('mac') != -1
              ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
      }
    }
  }
  
  return false;
}

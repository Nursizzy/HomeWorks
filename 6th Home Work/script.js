///////////////// .....ДОМАШНЕЕ ЗАДАНИЕ №6.....\\\\\\\\\\\\\\\\\\\\\\\\
//Task:
class Car {
  // Все свойства должны быть приватными
  #brand; //(строка от 1 до 50 символов включительно)
  #model; // (строка от 1 до 50 символов включительно)
  #yearOfManufacturing; // (число от 1900 до текущего года включительно)
  #maxSpeed; //(число от 100 до 300 км/ч)
  #maxFuelVolume; // (число в литрах от 5 до 20)
  #fuelConsumption; //(число в л/100км)
  #currentFuelVolume = 0; // (число в литрах, по умолчанию 0)
  #isStarted = false; //(логический тип, по умолчанию false)
  #mileage = 0; //(число в километрах, по умолчанию 0)

  // Сеттер и геттер для brand
  set brand(brand) {
    const isValid = typeof brand === 'string' && brand.length > 1 && brand.length <= 50;

    if (!isValid) {
      throw new Error('Ошибка! Cтрока должна быть от 1 до 50 символов включительно.');
    }
    
    return (this.#brand = brand);
  }

  get brand() {
    return this.#brand;
  }

  // Сеттер и геттер для Model
  set model(model) {
    const isValid = typeof model === 'string' && model.length > 1 && model.length <= 50;

    if (!isValid) {
      throw new Error('Ошибка! Cтрока должна быть от 1 до 50 символов включительно.');
    }
    
    return (this.#model = model);
  }

  get model() {
    return this.#model;
  }

  // Сеттер и геттер для yearOfManufacturing
  set yearOfManufacturing(year) {
    const isValid = typeof year === 'number' && year >= 1900 && year <= new Date().getFullYear();
    
    if (!isValid) {
      throw new Error('Ошибка! Число должно быть от 1900 до текущего года включительно.');
    }
    
    return (this.#yearOfManufacturing = year);
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  // Сеттер и геттер для maxSpeed
  set maxSpeed(value) {
    const isValid = typeof value === 'number' && value > 100 && value < 300;
    
    if (!isValid) {
      throw new Error('Ошибка! Число должно быть от 100 до 300 км/ч.');
    }
    
    return (this.#maxSpeed = value);
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }
  
  // Сеттер и геттер для maxFuelVolume
  set maxFuelVolume(volume) {
    const isValid = typeof volume === 'number' && volume > 5 && volume <= 20;
    
    if (!isValid) {
      throw new Error('Ошибка! Число должно быть от 5 до 20 литров.');
    }
    
    return (this.#maxFuelVolume = volume);
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  // Сеттер и геттер для fuelConsumption
  set fuelConsumption(value) {
    if (typeof value !== 'number' && value < 1) {
      throw new Error('Ошибка! Должно быть положительное число в л/100км.');
    }
    
    return (this.#fuelConsumption = value);
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  // Только геттер для fuelConsumption
  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  // Только геттер для fuelConsumption
  get isStarted() {
    return this.#isStarted;
  }

  // Только геттер для fuelConsumption
  get mileage() {
    return this.#mileage;
  }

  // Методы
  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена!');
    }
    
    return (this.#isStarted = true);
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина еще не заведена!');
    }

    return (this.#isStarted = false);
  }

  fillUpGasTank(value) {
    if (typeof value !== 'number' || value < 1) {
      throw new Error('Неверное количество топлива для заправки!');
    } else if ( value > this.#maxFuelVolume || value + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак будет переполнен!');
    }

    return (this.#currentFuelVolume += value);
  }

  drive(speed, hours) {
    const speedIsValid = !isNaN(speed) && speed > 0;
    const hoursIsValid = !isNaN(hours) && hours > 0;
    const distance = speed * hours;
    const fuelNeeded = distance * (this.#fuelConsumption / 100);
    
    if (!speedIsValid || !hoursIsValid) {
      throw new Error(`${!speedIsValid ? 'Неверная скорость!' : 'Неверное количество часов!'}'`);
    } else if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро!');
    } else if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена чтобы ехать!');
    } else if (this.#currentFuelVolume < fuelNeeded) {
      throw new Error('Недостаточно топлива');
    } else {
      this.#currentFuelVolume -= fuelNeeded;
      this.#mileage += distance;
    }
  }
}

//Testing
const newCar = new Car();

console.log(newCar);
newCar.brand = 'BMW';
console.log(newCar.brand); // Работает
newCar.model = 'X6';
console.log(newCar.model); // Работает
newCar.yearOfManufacturing = 2022;
console.log(newCar.yearOfManufacturing); // Работает
newCar.maxSpeed = 260;
console.log(newCar.maxSpeed); // Работает
newCar.maxFuelVolume = 19;
console.log(newCar.maxFuelVolume); // Работает
newCar.fuelConsumption = 5;
console.log(newCar.fuelConsumption); // Работает
console.log(newCar.currentFuelVolume); // Работает
console.log(newCar.isStarted); // Работает
console.log(newCar.mileage); // Работает
newCar.start(); // Работает
newCar.shutDownEngine(); // Работает
newCar.start(); // Работает
newCar.fillUpGasTank(19); // Работает
newCar.drive(150, 2); // Работает
console.log(newCar.currentFuelVolume); // Работает
console.log(newCar.mileage); // Работает

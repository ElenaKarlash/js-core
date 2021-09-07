const myValue = "0";
console.log(typeof myValue);
console.log(typeof (myValue - 1));
console.log(typeof !!myValue);
console.log(typeof !myValue);

if (!myValue) {
  console.log("условие приводится к true");
} else {
  console.log("условие не было выполнено");
}

let name = "Elena";

if (name) {
  console.log(`${name}`);
} else {
  console.log("ошибка в значении");
}

name = "";
if (name) {
  console.log(`${name}`);
} else {
  console.log("ошибка в значении");
}

let age = 17;

if (age) {
  if (age >= 18) {
    console.log("coвершеннолетний");
  } else {
    console.log("вы еще молоды");
  }
} else {
  console.log(`ваше значение возраста: ${age}некорректно`);
}

age = undefined;

if (age) {
  if (age >= 18) {
    console.log("совершеннолетний");
  } else {
    console.log("вы еще молоды");
  }
} else {
  console.log(`ваше значение возраста: ${age} некорректно`);
}

age = null;

if (age) {
  if (age >= 18) {
    console.log("совершеннолетний");
  } else {
    console.log("Вы молоды");
  }
} else {
  console.log(`некорректно: ${age}`);
}

age = NaN;

if (age) {
  if (age >= 18) {
    console.log("совершеннолетний");
  } else {
    console.log("Вы молоды");
  }
} else {
  console.log(`некорректно: ${age}`);
}

age = Infinity;

if (age && age !== Infinity) {
  if (age >= 18 && age <= 200) {
    console.log("совершеннолетний");
  } else {
    console.log("Вы молоды");
  }
} else {
  console.log(`некорректно: ${age}`);
}
 

//Homework
// обявить переменную score со значением 10 
//сделать проверку такого значения: является ли оно true, если да, то 
//проверить и вывести сообщение при значении от 0 до 10 включительно
//"вы не прощли тестировании"
//от 10 до 15 вкл "Вы прошли тестипрвание"
//свыше 15 "такой балл не возможен"
//Переназначит значение Score "0", null, undefined, Infinity, NaN, 15,
//11, 23, '23'


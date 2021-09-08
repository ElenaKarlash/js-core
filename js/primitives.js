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
//проверить и вывести сообщение: при значении от 0 до 10 включительно
//"вы не прошли тестированиe"
//от 10 до 15 вкл "Вы прошли тестирoвание"
//свыше 15 "такой балл не возможен"
//Переназначить значение Score "0", null, undefined, Infinity, NaN, 15,
//11, 23, '23'

//console.log(typeof score);
//console.log(typeof (score - 1));
//console.log(typeof !!score);
//console.log(typeof !score);

let score = 10;

if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы не прошли тестирование");
  }

  if (score > 10 && score <= 15) {
    console.log("Вы прошли тестирование");
  } else {
    console.log(` такой балл невозможен:${score}`);
  }
}

score = null;
if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы не прошли тестирование");
  }
  if (score > 10 && score <= 15) {
    console.log("Вы прошли тестирование");
  }
  if (score > 15) {
    console.log(`такой балл невозможен:${score}`);
  }
} else {
  console.log(`не число:${score}`);
}

score = 0;

if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы не прошли тестирование");
  }
  if (score > 10 && score <= 15) {
    console.log("Вы прошли тестирование");
  }
  if (score > 15) {
    console.log(`Такой балл невозможен: ${score}`);
  }
}
//} else {
// console.log(`не число:${score}`);
//}

score = undefined;
if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы прошли тестирование");
  }
  if (score > 10 && score <= 15) {
  }
  console.log("Вы прошли тестирование");
} else {
  console.log(`такой балл невозможен: ${score}`);
}

score = Infinity;
if (score || score !== Infinity) {
  if (score >= 0 && score <= 10) {
    console.log("Вы не прошли тестирование");
  }
  if (score >= 10 && score <= 15) {
    console.log("Вы прошли тестирование");
  } else {
    console.log(`такой балл невозможен: ${score}`);
  }
}

score = NaN;
if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы не прошли тестирование");
  }
  if (score > 10 && score <= 15) {
    console.log("Вы прошли тестирование");
  } else {
    console.log(`такой балл невозможен: ${score}`);
  }
}

score = 15;
if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы не прошли тестирование");
  }
  if (score > 10 && score >= 15) {
    console.log("Вы прошли тестирование");
  } else {
    console.log(`такой балл невозможен:${score}`);
  }
}

score = 11;
if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы не прошли тестирование");
  }
  if (score > 10 && score <= 15) {
    console.log("Вы прошли тестирование");
  } else {
    console.log(`такой балл невозможен: ${score}`);
  }
}

score = 23;
if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы не прошли тестирование");
    if (score > 10 && score <= 15) {
      console.log("Вы прошли тестирование");
    }
  } else {
    `такой балл невозможен: ${score}`;
  }
}
score = "23";
if (score) {
  if (score >= 0 && score <= 10) {
    console.log("Вы прошли тестирование");
    if (score > 10 && score <= 15) {
      console.log("Вы прошли тестирование");
    }
  } else {
    `такой балл невозможен: ${score}`;
  }
}

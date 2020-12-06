// первое задание
let name = prompt ('Ваше имя'),
    age = prompt ('Ваш возраст'),
    city = prompt ('Ваш город проживания'),
    phone = prompt ('Ваш телефон'),
    email = prompt ('Ваша почта'),
    company = prompt ('Ваша компания');
    console.log('Меня зовут, ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city  + ' и работаю в компании ' + company + ' . Мои контактные данные: ' + phone + ', ' + email + ' .');

    // второе задание
let year = 2020 - age;
console.log(name + ' родился в ' + year + ' году.');

    // третье задание
let arr = [5, 5, 2, 3, 9, 1],
    blok_f = arr[0] + arr[1] + arr[2],
    blok_s = arr[3] + arr[4] + arr[5];
    console.log('Сумма первых трёх цифр', blok_f);
    console.log('Сумма вторых трёх цифр', blok_s);

if (blok_f == blok_s) {
    console.log('да');
} else {
    console.log('нет');
}

    // четвертое задание
let a = 1;
if (a > 0) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

    // пятое задание
let A = 10,
    b = 2,
    c = A + b,
    d = A - b,
    i = A * b,
    f = A / b;

    console.log('Сумма A и b', c);
    console.log('Разность A и b', d);
    console.log('Произведение A и b', i);
    console.log('Частное A и b', f);

if (c > 1) {
    let n = c * c;
    console.log('Квадрат суммы', n);
} else {
    console.log('Значит меньше 1');
}

    // шестое задание
if ((2 < A < 11) || (6 <= b < 14)) {
    console.log('верно');
} else {
    console.log('неверно');
}

    // седьмое задание
let n = prompt('Введите число от 0 до 59, для определения четверти часа');

if (n < 16) {
    alert('Первая четверть часа');
} else if (n < 31) {
    alert('Вторая четверть часа');
}
else if (n < 46) {
    alert('третья четверть часа');
}
else if (n <= 59) {
    alert('Четвёртая четверть часа');
}
else {
    alert('что-то пошло не так');
}

    // восьмое задание
let day = prompt('Введите число от 1 до 31, для определения декады');

if (day <= 10) {
    alert('Первая декада');
} else if (day <= 20) {
    alert('Вторая декада');
} else if (day <= 31) {
    alert('третья декада');
} else {
    alert('что-то пошло не так');
}

    // девятое задание
let days = prompt('введите количество дней'),
    years = days / 365,
    month = days / 31;
    week = days / 7,
    hour = days * 24,
    minutes = days * 1440,
    seconds = days * 86400;

    if (years < 1) {
        document.write('Меньше года');
    } else {
        document.write('Количество лет:' + years);
    }

    if (month < 1) {
        document.write('Меньше месяца');
    } else {
        document.write('Количество месяцев:' + month);
    }

    if (week < 1) {
        document.write('Меньше недели');
    } else {
        document.write('Количество месяцев:' + week);
    }

    document.write('Количество часов:' + hour);
    document.write('Количество минут:' + minutes);
    document.write('Количество секунд:' + seconds);

    // десятое задание
let number = prompt('введите день в году');

    if (number <= 31) {
        alert('Январь');
        seazon = 1;
    } else if (number <= 59) {
        alert('Февраль');
        seazon = 1;
    } else if (number <= 90) {
        alert('март');
        seazon = 2;
    } else if (number <= 120) {
        alert('апрель');
        seazon = 2;
    } else if (number <= 151) {
        alert('май');
        seazone = 2;
    } else if (number <= 181) {
        alert('июнь');
        seazon = 3;
    } else if (number <= 212) {
        alert('июль');
        seazon = 3;
    } else if (number <= 243) {
        alert('август');
        seazon = 3;
    } else if (number <= 273) {
        alert('сентябрь');
        seazon = 4;
    } else if (number <= 304) {
        alert('октябрь');
        seazon = 4;
    } else if (number <= 334) {
        alert('ноябрь');
        seazon = 4;
    } else if (number <= 365) {
        alert('декабрь');
        seazon = 1;
    } else {
        alert('что-то пошло не так');
    }

switch (seazon) {
    case 1:
        alert('Зима');
        break;
    case 2:
        alert('Весна');
        break;
    case 3:
        alert('Лето');
        break;
    case 4:
        alert('Осень');
        break;
    default:
        alert('Нет такого значения');
}


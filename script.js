// 1. Переменные и типы данных

const bookTitle = "Война и мир";
const bookAuthor = "Лев Толстой";
const bookYear = 1869;
const bookPages = 1225;
const isAvailable = true;

console.log("Название ", bookTitle);
console.log("Автор ", bookAuthor);
console.log("Год издания ", bookYear);
console.log("Количество страниц ", bookPages);
console.log("В наличии ", isAvailable);

console.log("Тип названия ", typeof bookTitle);
console.log("Тип автора ", typeof bookAuthor);
console.log("Тип года ", typeof bookYear);
console.log("Тип страниц ", typeof bookPages);
console.log("Тип наличия ", typeof isAvailable);

const num1 = 15;
const num2 = 4;

console.log("Сумма ", num1 + num2);
console.log("Разность ", num1 - num2);
console.log("Произведени ", num1 * num2);
console.log("Частное ", num1 / num2);
console.log("Остаток от деления ", num1 % num2);

// 2. Условия и операторы

// Четное число
const numberToCheck = 10;
if (numberToCheck % 2 === 0) {
    console.log(numberToCheck, "- чётное число");
} else {
    console.log(numberToCheck, "- нечётное число");
}

// Температура
const temperature = 20;
if (temperature < 0) {
    console.log("мороз");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("прохладно");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("комфортно");
} else {
    console.log("жарко");
}

// Покупки со скидкой
const purchaseAmount = 12000;
let finalPrice = purchaseAmount;

if (purchaseAmount >= 10000) {
    finalPrice = purchaseAmount * 0.9;
} else if (purchaseAmount >= 5000) {
    finalPrice = purchaseAmount * 0.95;
}

console.log("Итоговая стоимость:", finalPrice);

// Доступ по возрасту и пропуску
const userAge = 20;
const hasPass = true;

if (userAge >= 18 && hasPass) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}

// 3 Циклы

// Числа от 1 до 50
console.log("Числа от 1 до 50 ");
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// Числа от 1 до 100, что делятся на 3
console.log("Числа от 1 до 100, кратные 3 ");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Сумма нечётных чисел
let oddSum = 0;
for (let i = 1; i <= 99; i += 2) {
    oddSum += i;
}
console.log("Сумма нечётных чисел от 1 до 99 - ", oddSum);

// Таблица умножения
const N = 7;
console.log(`Таблица умножения для ${N}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
}

// 4. Функции

// Больше, меньше
function getMax(a, b) {
    return a > b ? a : b;
}
console.log("Большее из 10 и 20", getMax(10, 20));

// Проверка на положительное число
function isPositive(num) {
    return num > 0;
}
console.log("Число 5 положительное?", isPositive(5));
console.log("Число -3 положительное?", isPositive(-3));

// Площадь прямоугольника
function calculateArea(width, height) {
    if (width < 0 || height < 0) {
        return "Размеры не могут быть отрицательными";
    }
    return width * height;
}
console.log("Площадь 5x10:", calculateArea(5, 10));
console.log("Площадь -5x10:", calculateArea(-5, 10));

// Минуты в часы и минуты
function convertMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} ч ${remainingMinutes} мин`;
}
console.log("125 минут:", convertMinutes(125));

// 5. Задачка

const grades = [5, 3, 4, 2, 5, 4, 3, 3, 5, 2];

function getCount(gradesArray) {
    return gradesArray.length;
}

function getAverage(gradesArray) {
    const sum = gradesArray.reduce((acc, grade) => acc + grade, 0);
    return sum / gradesArray.length;
}

function getMin(gradesArray) {
    return Math.min(...gradesArray);
}

function getMax(gradesArray) {
    return Math.max(...gradesArray);
}

function getPassed(gradesArray) {
    return gradesArray.filter(grade => grade >= 3).length;
}

function getStatistics(gradesArray) {
    return {
        count: getCount(gradesArray),
        average: getAverage(gradesArray),
        min: getMin(gradesArray),
        max: getMax(gradesArray),
        passed: getPassed(gradesArray)
    };
}

const stats = getStatistics(grades);
console.log("Статистика", stats);

if (stats.average >= 4) {
    console.log("Хороший результат");
} else {
    console.log("Нужно тренироваться дальше");
}
// Блок 1. Основы
// Frontend - клиент, Backend - сервер.
// Браузер -> запрос -> сервер -> ответ -> отрисовка.
// HTML - структура, CSS - стиль, JS - логика.
// React - библиотека для UI.

// Задание 2
const productTitle = "Ноутбук";
const productPrice = 45000;
const productQuantity = 3;
const isAvailable = true;

console.log(productTitle, typeof productTitle);
console.log(productPrice, typeof productPrice);
console.log(productQuantity, typeof productQuantity);
console.log(isAvailable, typeof isAvailable);

const totalSum = productPrice * productQuantity;
let finalSum = totalSum;

// Тут проверка на скидку
if (totalSum >= 5000) {
    finalSum = totalSum * 0.9;
}

console.log(`Исходная сумма: ${totalSum}`);
console.log(`Итоговая стоимость: ${finalSum}`);

// Тут функция для таблицы умножения
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
printMultiplicationTable(7);

// Задание 3
const students = [
  { id: 1, name: "Анна", age: 19, group: "ИС-31", score: 92 },
  { id: 2, name: "Иван", age: 21, group: "ИС-32", score: 76 },
  { id: 3, name: "Мария", age: 20, group: "ИС-31", score: 88 },
  { id: 4, name: "Олег", age: 22, group: "ИС-33", score: 64 },
  { id: 5, name: "Елена", age: 19, group: "ИС-32", score: 95 }
];

console.log(students[2].name, students[2].group);
students[0].scholarship = true;
console.log(students.map(s => s.name));
console.log(students.filter(s => s.score >= 80));
console.log(students.find(s => s.id === 4));
console.log(students.reduce((sum, s) => sum + s.score, 0));

// Задание 4
const products = [
    { id: 1, title: "Телефон", category: "Электроника", price: 30000, quantity: 2 },
    { id: 2, title: "Книга", category: "Книги", price: 500, quantity: 10 },
    { id: 3, title: "Ноутбук", category: "Электроника", price: 60000, quantity: 1 },
    { id: 4, title: "Ручка", category: "Канцелярия", price: 50, quantity: 50 },
    { id: 5, title: "Наушники", category: "Электроника", price: 2000, quantity: 5 }
];

const titles = products.map(p => p.title);
console.log(titles);

const electronics = products.filter(p => p.category === "Электроника");
console.log(electronics);

const foundProduct = products.find(p => p.id === 3);
console.log(foundProduct);

const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log(sortedProducts);

const totalStockValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
console.log(totalStockValue);

const modifiedProduct = { ...products[0], price: 25000 };
console.log(modifiedProduct);
console.log(products[0]);
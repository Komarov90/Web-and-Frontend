let x;
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

x = 2 * 3;
console.log(`Результат умножения: ${x}`);

x = 10 / 2;
console.log(`Результат деления: ${x}`);

x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);

x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);

let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne);

let resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

let resultThree = 58 + " Фрилансер";
console.log(resultThree);

let resultFour = 2 + "2";
console.log(resultFour);

let resultFive = 58 - 20 + " Фрилансер";
console.log(resultFive);

let resultOne = "25" - 5;
console.log(resultOne);
console.log(typeof resultOne);

let resultTwo = 10 * "80";
console.log(resultTwo);
console.log(typeof resultOne);

let resultThree = 3 * "Фрилансер";
console.log(resultThree);
console.log(typeof resultOne);

let resultOne = +"25";
console.log(resultOne);
console.log(typeof resultOne);

let resultTwo = +10;
console.log(resultTwo);
console.log(typeof resultTwo);

let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

console.log(Number(users) + Number(admins));

let resultOne = 2 - 1 * 5;
console.log(resultOne);

let resultTwo = (2 - 1) * 5;
console.log(resultTwo);

let resultThree = 2 - 1 + 5;
console.log(resultThree);

let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);

let resultOne = resultTwo = resultThree = 1 + 2;
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

let resultOne = 1 + 2;

resultTwo = resultOne;
resultThree = resultOne;

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

let users = 5;
users = users + 3;
users = users * 2;


let users = 5;
console.log(users);
users += 3;
console.log(users);
users *= 2;
console.log(users);

let users = 5;
console.log(users);
users += 1 + 2;
console.log(users);

let addUser = 2;
addUser++;
console.log(addUser);

addUser = addUser + 1;
addUser += 1;

let removeUser = 2;
removeUser--;
console.log(removeUser);

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

//Префиксная форма
let usersCounter = 0;
let newUsers = ++usersCounter;
console.log(newUsers);

let usersCounter = 0;
++usersCounter;
console.log(usersCounter);

let usersCounter = 0;
console.log(++usersCounter);

let usersCounter = 0;
console.log(usersCounter++);
console.log(usersCounter);

let usersCounter = 0;
let newUsers = 2 * ++usersCounter;
console.log(newUsers);

let usersCounter = 0;
++usersCounter;
let newUsers = 2 * usersCounter;
console.log(newUsers);

let usersCounter = (8 + 2, 19 + 1);
console.log(usersCounter);


console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);

let result = 11 > 10;
console.log(result);

console.log('Б' > 'А');

console.log('Скрипт' > 'Скрипка');

console.log('Слайдер' > 'Слайд');

console.log('Фрилансер' > 'фрилансер');


console.log('58' > 10);
console.log('007' == 7);


console.log(true == 1);
console.log(false == 0);

let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(itemA == itemB);

console.log(0 == false);

console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);

console.log(null === undefined);

console.log(null == undefined);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log(1 || 0);

console.log(true || 'фрилансер');

console.log(null || 58);

console.log(null || 'фрилансер' || 0);

console.log(undefined || '' || null || 0);

let userName = '';
let userNickName = '';

let user = userName || userNickName || "Без имени";
console.log(user);

let admins = 10;
let users = 5;
admins > users || users++;
console.log(users);

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log('Фрилансер' && 0 && 2 && 3);
console.log(1 && 2 && null && 3);
console.log('15' && '42');

let users = 0;
(users > 0) && console.log(`Пользователей ${users}`);

console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрилансер');

let arrOne = [
	'Ваня',
	'Иван',
	'Оля',
];
console.log(arrOne[1]);
console.log(arrOne[5]);


let arrTwo = [
	"Коля",
	{
		type: "JS",
		age: 36
	},
	true,
	function () {
		console.log('Привет, я Коля');
	}
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();


let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]);


let arrOne = ['Ваня', 'Иван', 'Оля',];
console.log(arrOne);
console.log(arrOne.length);

arrOne.length = 0;
console.log(arrOne);


let arr = ['Ваня', 'Иван', 'Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);


let arr = ['Ваня', 'Иван', 'Оля',];


arr[0] = 'Коля';
console.log(arr);


arr[3] = 'Ваня';
console.log(arr);


let arr = ['Ваня', 'Иштван', 'Оля',];
arr.push('Вася');
console.log(arr);

arr.push('Дима', 'Катя');
console.log(arr);


let arr = ['Ваня', 'Иштван', 'Оля',];
arr.shift();
console.log(arr);


let arr = ['Ваня', 'Иштван', 'Оля',];
arr.pop();
console.log(arr);


let arr = ['Ваня', 'Иштван', 'Оля',];
arr.unshift('Вася');
console.log(arr);

arr.unshift('Дима', 'Катя');
console.log(arr);


let arr = ['Ваня', 'Иштван', 'Оля',];

delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);

let arrOne = ['Ваня', 'Иштван', 'Оля',];
arrOne.splice(1, 1);
console.log(arrOne);

let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);


let arrThree = ['Ваня', 'Иштван', 'Оля',];
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);


let arrFour = ['Ваня', 'Иштван', 'Оля',];
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);


let arrFive = ['Ваня', 'Иштван', 'Оля',];
arrFive.splice(-1, 1);
console.log(arrFive);


let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);


let arrThree = arrOne.slice(-2, -1);
console.log(arrThree);


let arrFour = arrOne.slice();
console.log(arrFour);


let arrOne = ['Ваня', 'Иштван', 'Оля',];
let arrTwo = arrOne.concat('Петя');
console.log(arrTwo);


console.log(arr.indexOf('Иштван'));
console.log(arr.indexOf('Вася'));
console.log(arr.indexOf('Иштван', 2));


console.log(arr.includes('Иштван'));
console.log(arr.includes('Вася'));
console.log(arr.includes('Иштван', 2));


let result = arr.find(function(item, index, array) {
});


let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr.find(function (item, index, array) {
	return item.age === 18;
});


console.log(resultOne);


let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);


let results = arr.filter(function (item, index, array) {

});

let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let result = arr.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(result);


let arrOne = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne.sort());


let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

console.log("8" > "22");


let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());


function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

}


console.log(arrTwo.sort(compareNumeric));


let arrOne = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOne.reverse());


let result = arr.map(function(item, index, array) {
});
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];

let result = arr.map(function (item, index, array) {
	return item[0];
});

console.log(arr);
console.log(result);


let str = 'Ваня,Иштван,Оля';

let arr = str.split(',');
console.log(arr);


let arrTwo = str.split(',', 2);
console.log(arrTwo);


let arr = ['Ваня', 'Иштван', 'Оля',];
let srt = arr.join('.');
console.log(srt);


let arrTwo = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwo));


let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);


if (Array.isArray(obj)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}


let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr.length);

// Цикл FOR
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}


let arr = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arr) {
	console.log(arrItem);
}


arr.forEach(function (item, index, array) {
});


let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});


arr.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});

let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(show);

function show(item) {
	console.log(item);
}


let value = arr.reduce(function(previousValue, item, index, array) {
}, [initial]);


let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueOne);

let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);


let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);

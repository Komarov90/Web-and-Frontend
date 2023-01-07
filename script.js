
let someStringOne = 'Привет! Я строка!';
let someStringTwo = "Привет! Я строка!";
let someStringThree = `Привет! Я строка!`;

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);


let textHi = "Привет!";
let textAll = `${textHi} Я строка!`;

console.log(textAll);


function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);


let text = `Привет!
Вы на канале
Фрилансер по жизни!
`;
console.log(text);


let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someString + someNum);


let textTwo = "Привет!\nВы на канале\nФрилансер по жизни!";
console.log(textTwo);


let text = "Привет!\n\tВы на канале\n\t\tФрилансер по жизни!";
console.log(text);


let text = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(text);


let text = "Привет! Вы на канале \"Фрилансер по жизни!\"";
console.log(text);


let text = "Живи, а работай в свободное время! \u00A9 \u{1F60D}";
console.log(text);


let textOne = "Привет!";
console.log(textOne.length);


let text = "Привет!";
let firstSymbol = text[0];
let lasttSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lasttSymbol);


for (const char of text) {
	console.log(char);
}


let text = "Привет!";
text[6] = ".";
console.log(text);

let text = "Привет!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());


let text = "Привет!";
console.log(text.indexOf('рив'));
console.log(text.indexOf('рив', 3));


let text = "Привет!";
console.log(text.includes('рив'));
console.log(text.includes('рив', 3));

console.log(text.startsWith('рив'));
console.log(text.endsWith('!'));


let text = "Привет!";
let searchText = "пР";

console.log(text.toLowerCase().includes(searchText.toLowerCase()));


let text = "Привет!";
console.log(text.slice(1, 2));
console.log(text.slice(-2, -1));
console.log(text.slice(1));



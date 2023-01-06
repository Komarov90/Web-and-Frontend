let someNum = 458;
console.log(someNum);

let someNums = 4.58;
console.log(someNums);

let someBigNum = 1000000;
console.log(someBigNum);

let someBigNum = 1e6;
console.log(someBigNum);


let someLittleNum = 0.000001;
console.log(someLittleNum);

let someLittleNum = 1e-6;
console.log(someLittleNum);

console.log(0b11111111);
console.log(0o377);

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));


let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);


Math.ceil - Округление в большую сторону

let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);


let numOne = Math.round(5.8);
let numTwo = Math.round(2.2);
let numThree = Math.round(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);


let numOne = Math.round(5.845);
console.log(numOne); // 6


let numOne = Math.round(5.845 * 10) / 10;
console.log(numOne);


let numTwo = Math.round(5.845 * 100) / 100;
console.log(numTwo);


let numThree = Math.round(5.8449 * 100) / 100;
console.log(numThree);


let numOne = 5.845;
console.log(numOne.toFixed(1));


console.log(+numOne.toFixed(1));
console.log(Number(numOne.toFixed(1)));


let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne);

let numTwo = 12.35;
console.log(numTwo.toFixed(1));


let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);


let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));


console.log(Number(25 + "Привет!"));
console.log(isNaN(25 + "Привет!"));

if (25 + "Привет!" !== NaN) {
	console.log('Я не NaN');
}

console.log(NaN === NaN);


console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Привет!")); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false


let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);


let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);


let valueOne = parseInt("150.58px");
console.log(valueOne);
console.log(typeof valueOne);


let valueTwo = parseFloat("150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);


let valueTwo = parseFloat("a150.58px");
console.log(valueTwo);
console.log(typeof valueTwo);


console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));


console.log(Math.random());
console.log(Math.random());
console.log(Math.random());


console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));


let num = -58;
console.log(Math.abs(num));

console.log(Math.pow(5, 8));

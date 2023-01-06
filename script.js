let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}


let num = 5;
while (num) {
	console.log(num);
	num--;
}


let num = 5;
while (num) console.log(num--);


let num = 0;
do {
	console.log(num);
	num++;
} while (num < 0);

for (Начало; Условие; Шаг) {

}


for (let num = 0; num < 5; num++) {
	console.log(num);
}

for (let num = 0; num < 5; num++) {
	console.log(num);
}
console.log(num);


let num;
for (num = 0; num < 5; num++) {
	console.log(num);
}
console.log(`Вывод вне цикла: ${num}`);


let num = 0;
for (; num < 5; num++) {
	console.log(num);
}


let num = 0;
for (; num < 5;) {
	num++;
	console.log(num);
}

let num = 0;
for (;;) {
	num++;
	console.log(num);
}


let num = 0;
for (; num < 5; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);


let num = 0;
for (; num < 5; num++) {
	if (num == 2) continue;
	console.log(num);
}


let num = 0;
for (; num < 5; num++) {
	(num != 2) ? console.log(num) : continue;
}


firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) {
			continue firstFor;
		}
		console.log(size);
	}
}

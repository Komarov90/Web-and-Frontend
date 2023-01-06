let userInfo = {
	name: "Вася", // Свойство объекта
	age: 30, // Последняя (висячая) запятая
};

console.log(userInfo);
console.log(userInfo.name);


let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
};
console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);


let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};
console.log(userInfo["likes javascript"]);

let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};
console.log(userInfo[firstPart]);

let userInfo = {
	let: "Вася",
	for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);


let userInfo = {
	0: "Вася",
};
console.log(userInfo[0]);
console.log(userInfo["0"]);


let id = Symbol("id");
let userInfo = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение"
};
console.log(userInfo);


let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);

function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);


function makeUserInfo(name, age) {
	return {
		name,
		age,
		"likes javascript": true,
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);

let userInfo = {
	name: "Вася",
}

console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo['likes javascript'] = true;

console.log(userInfo);

userInfo.address = {
	city: "Uzhhorod",
	street: "Freedom",
};

console.log(userInfo);


let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo);

let userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);

const userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);


let userInfo = {
	name: "Вася",
	age: 30,
}

console.log(userInfo);

let user = userInfo;

console.log(user);

user.age = 18;

console.log(userInfo);


let userInfo = {
	name: "Вася",
	age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);


let userInfo = {
	name: "Вася",
	age: 30,
	address: {
	city: "Uzhhorod",
	street: "Freedom",
	//}
}
console.log(userInfo?.address?.street);

let userInfo = {
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
if ("name" in userInfo) {
	console.log(userInfo.name);
}

let userInfo = {
	name: undefined,
}
if (userInfo.name) { false
	console.log(userInfo.name);
}
if ("name" in userInfo) { true
	console.log(userInfo.name);
}


let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

for (let key in userInfo) {
	console.log(key);  name, age, address
	console.log(userInfo[key]);
}

for (let key in userInfo.address) {
	console.log(key); city, street
	console.log(userInfo.address[key]);
}

let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();


let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
	}
}
userInfo.showInfo();


let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		show();
	}
}
userInfo.showInfo();


let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
	}
}
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();

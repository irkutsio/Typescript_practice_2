// // interface Person {
// // 	name: string;
// // 	age: number;
// // 	greet(phrase: string): void;
// // }

// // let user1: Person;

// // user1 = {
// // 	name: 'Ira',
// // 	age: 34,
// // 	greet(phrase) {
// // 		console.log(this.name + ` ${phrase}`);
// // 	},
// // };

// // user1.greet('Hello!');

// ///////////////////////////
// /////////////
// //////////////////////////

// // type addFn = (n1: number, n2: number) => number;
// interface addFn {
// 	//instead of ⬆
// 	(n1: number, n2: number): number;
// }

// let add: addFn;

// add = (n1: number, n2: number) => {
// 	return n1 + n2;
// };

// interface Named {
// 	readonly name?: string;
// 	outputName?: string; //optional
// }

// interface Greetable extends Named {
// 	//forced us to have name from Named AND greet from Greetable
// 	greet(phrase: string): void;
// }

// class Person implements Greetable {
// 	name?: string;
// 	age = 89; //можна додавати екстра properties

// 	// constructor(n: string = 'IRA') { //same ⬇
// 	constructor(n?: string) {
// 		if (n) {
// 			this.name = n;
// 		} else {
// 			this.name = ' noName';
// 		}
// 	}

// 	greet(phrase: string) {
// 		console.log(` ${phrase} ${this.name}`);
// 	}
// }

// let user1: Greetable;
// // user1 = new Person('Ira');
// user1 = new Person();

// user1.greet('Hi there,');
// console.log(user1);

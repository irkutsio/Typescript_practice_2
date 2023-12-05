// // // function add(n1: number, n2: number, printResult: boolean) {
// // // 	if (printResult) {
// // // 		return n1 + n2;
// // // 	}
// // // 	return 'no result';
// // // }

// // // const showResult = false;

// // // const result = add(6, 6, showResult);

// // // console.log(result);

// // //tuples

// // // const person: {
// // // 	name: string;
// // // 	age: number;
// // // 	user: [number, string]; //tuples якщо точно відомі типи даних для двох елементів у масиві
// // // } = {
// // // 	name: 'ira',
// // // 	age: 45,
// // // 	user: [34, 'user'],
// // // };

// // // person.user.push(34); // push це виключення

// // // console.log(person.user); //works

// // //union === |

// // // function add (num1 : number | string, num2 : number | string) {
// // //     if (typeof num1 === 'number' && typeof num2 === 'number')
// // //     return num1 + num2
// // // }

// // // console.log(add(6,900))

// // const a = 'a';
// // const b = 'b';
// // console.log(a + b);

// // // function add(num1: number, num2: number): string {
// // // 	let result = 0;
// // // 	result = num1 + num2;
// // // 	return result.toString(); //works
// // // }

// // // console.log(add(67,56))

// // // function add(num1: number, num2: number) : void{
// // // 	console.log(num1 + num2);
// // // }

// // // add(67, 56);

// // // function add(num1: number, num2: number) : number{
// // // 	return num1 + num2;
// // // }
// // // add(67, 56);

// // ////////////////////параметр\\\параметр\\\\\\return
// // // let functionType : (a: number, b: number) => number;
// // // functionType = add;
// // // console.log(functionType(3,4))

// // //******************************************************************************** */
// // function add(num1: number, num2: number, cb: (num: number) => void) {
// // 	const result = num1 + num2;
// // 	cb(result);
// // }

// // add(10, 20, result => {
// // 	console.log(result);
// // });
// // //********************************************************************************* */

// // function sendRequest(data: string, cb: (response: any) => void) {
// // 	// ... sending a request with "data"
// // 	return cb({ data: 'Hi there!' });
// // }

// // sendRequest('Send this!', response => {
// // 	console.log(response);
// // 	return true;
// // });

// // //******************************
// // //never

// // function generateError(message: string, code: number): never {
// // 	//because 'throw' does NOT return undefined, return NOTHUNG => never
// // 	throw { message, code };
// // }

// // generateError('oops, something goes wrong', 404);

// const person = {
// 	name: 'Max',
// 	age: 23,
// };

// // const copiedPerson = {...person}
// // const copiedPerson1 = person

// // person.age = 89

// // console.log(copiedPerson) // 23
// // console.log(copiedPerson1)// 89

// // for (const key in person) {
// // 	console.log(key) //ключі
// // 	console.log(person[key]) // значення
// // }

// /////////////////////////////////////////////////////////////////
// //INTERSECTIONS
// //1

// type Combinable = number | string;
// type Str = string | boolean;
// type Universal = Combinable & Str; // string // те що у них спільне

// //2
// // type Admin = {
// // 	name: string;
// // 	privileges: string[];
// // };

// // type Employee = {
// // 	name: string;
// // 	startDate: Date;
// // };

// // type ElevatedEmployee = Admin & Employee;

// // const el1: ElevatedEmployee = {
// // 	name: 'Ira',
// // 	privileges: ['1', '2'],
// // 	startDate: new Date(),
// // };

// //3
// //Interface
// interface Admin1 {
// 	name: string;
// 	privileges: string[];
// }

// interface Employee1 {
// 	name: string;
// 	startDate: Date;
// }

// interface ElevatedEmployee1 extends Admin1, Employee1 {}

// const el2: ElevatedEmployee1 = {
// 	name: 'Ira',
// 	privileges: ['1', '2'],
// 	startDate: new Date(),
// };

// //
// // Guards //typeof
// //

// // function add(a: Combinable, b: Combinable) {
// // 	if (typeof a === 'string' || typeof b === 'string') {
// // 		return a.toString() + b.toString();
// // 	}
// // 	return a + b;
// // }

// //
// //Function Overloads
// //

// // console.log(add(5, '78'));
// const result1 = add(7, 5);
// // const result2 = add('qwe','rty')

// //
// // result2.split('') //помилка бо тип Combinable/
// //
// const result2 = add('qwe', 'rty') as string;
// result2.split(''); //помилка бо тип Combinable/
// console.log(result2.split(',')); //works
// //
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: Combinable, b: Combinable) {
// 	if (typeof a === 'string' || typeof b === 'string') {
// 		return a.toString() + b.toString();
// 	}
// 	return a + b;
// }

// const result3 = add('rfgty', 'fghyu');
// result3.toUpperCase();
// console.log(result3.toUpperCase());

// //
// ////Optional Chaining operator ? =>  перевірка на undefined
// //

// //
// ////Optional Chaining operator ?? перевірка на null і undefined
// //

// const fetchUserData = {
// 	id: 'user1',
// 	name: 'Max',
// 	job: { title: 'CEO', description: 'My oun company' },
// };

// console.log(fetchUserData?.job?.title)

// ///
// //Guards // in
// //

// type Admin = {
// 	name: string;
// 	privileges: string[];
// };

// type Employee = {
// 	name: string;
// 	startDate: Date;
// };

// type UnknownEmployee = Admin | Employee;

// function printEmploeeInfo(empl: UnknownEmployee) {
// 	console.log('Name' + ' ' + empl.name);
// 	// console.log('Privilegs' + ' ' + empl.privileges) // privileges does not exist in UnknownEmployee
// 	if ('privileges' in empl) {
// 		console.log('Privileges' + ' ' + empl.privileges);
// 	}
// 	if ('startDate' in empl) {
// 		console.log('startDate' + ' ' + empl.startDate);
// 	}
// }

// printEmploeeInfo(el2); // it works
// printEmploeeInfo({ name: 'Name', privileges: ['7'] }); // it wotks

// //
// //Guards //instance of
// //

// class Car {
// 	drive() {
// 		console.log('Driving.....');
// 	}
// }

// class Truck {
// 	drive() {
// 		console.log('Driving a truck.....');
// 	}
// 	loadCargo(amount: number) {
// 		console.log('loading cargo....' + amount);
// 	}
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
// 	vehicle.drive();
// 	if (vehicle instanceof Truck) {
// 		vehicle.loadCargo(7);
// 	}
// }

// useVehicle(v2);

// //
// //Discriminated Unions
// //

// interface Bird {
// 	type: 'bird'; //literal value
// 	flyingspeed: number;
// }

// interface Horse {
// 	type: 'horse';
// 	runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
// 	// console.log('The speed is....' + animal.)/
// 	switch (animal.type) {
// 		case 'bird':
// 			console.log('The bird`s speed is....' + animal.flyingspeed);

// 			break;
// 		case 'horse':
// 			console.log('The horse`s speed is....' + animal.runningSpeed);
// 	}
// }
// moveAnimal({ type: 'bird', flyingspeed: 87 });
// moveAnimal({ type: 'horse', runningSpeed: 89 });

// //
// //Type Casting
// //
// const paragraph = document.getElementById('paragraph_id');
// // const input = <HTMLInputElement>document.getElementById('user-input')!; //works
// const input = document.getElementById('user-input')! as HTMLInputElement; //works alternative
// input.value = 'Hi there!';

// //
// //Index Properties
// //
// interface ErrorContainer {
// 	// {email :'not a valid email', userName:'must start with a character'}
// 	[prop: string]: string;
// }

// const errorBag: ErrorContainer = {
// 	email: 'not a valid email',
// 	userName: 'must start with a capital character',
// };

//
// ////////////////////////////////GENERICS/////////////////////////////////////
//

const names: Array<string> = []; // string[]

function merge<T, U>(objA: T, objB: U) {
	return { ...objB, ...objA };
}

type Admin = {
	name: string;
	privileges: string[];
};
type Employee = {
	name: string;
	startDate: Date;
};

const admin = {
	name: 'Ira',
	privileges: ['true'],
};
const employee = {
	name: 'Max',
	startDate: new Date(),
};

const mergedObj = merge<Admin, Employee>(admin, employee);
console.log(mergedObj);

//Constraints/

function merge1<T extends object, U extends object>(objA: T, objB: U) {
	return { ...objB, ...objA };
}

// const mergedObj1 = merge1(admin, '35'); // помилка

interface Lengthy {
	length: number;
}

function countAndPrintDescr<T extends Lengthy>(el: T): [T, string] {
	let description = 'Got no value';
	if (el.length === 1) {
		description = 'got 1 elements';
	} else if (el.length > 1) {
		description = 'got ' + el.length + ' elements';
	}
	return [el, description];
}
console.log(countAndPrintDescr(['12', 'qwerty']));
console.log(countAndPrintDescr('Hi there!'));
console.log(countAndPrintDescr([]));

//
// keyof
//
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');

//
//Generic Classes
//

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}
	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) return;
		this.data.splice(this.data.indexOf(item), 1);
	}
	getItems() {
		return [...this.data];
	}
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem('text');
stringStorage.addItem('task');
stringStorage.removeItem('text');
console.log(stringStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(34);
numberStorage.addItem(78887);
numberStorage.removeItem(34);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const iraObj = { name: 'ira' };
// objStorage.addItem(iraObj);
// objStorage.addItem({ name: 'dog' });
// objStorage.removeItem({ name: 'ira' }); //indexof лучше для примитивов, obj не подходит, не находит потому что два разных обЪекта, сложный тип даных
// objStorage.removeItem(iraObj); //works
// console.log(objStorage.getItems());

//////////
//Partial

interface Test {
	title: string;
	descr: string;
	date: Date;
}

function test(title: string, descr: string, date: Date): Test {
	let obj: Partial<Test> = {};

	obj.title = title;
	obj.descr = descr;
	obj.date = date;

	return obj as Test;
}

//Readonly
const arr: Readonly<number[]> = [1, 2, 3, 4];
// arr.push(56) // помилка 

// DECORATORS

//class decorator
function Logger(logStr: string) {
	console.log('LOGGER FACTORY');
	return function (constructor: Function) {
		console.log(logStr);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY');
	// return function (_: Function) { //if don`t need constructor
	return function <T extends { new (...args: any[]): {name:string} }>(originalConstructor: T) {
		return class extends originalConstructor {
			constructor(...args: any[]) {
				super();
				console.log('rendering template');
				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector('h1')!.textContent = this.name;
				}
			}
		};
	};
}

// @Logger('logging person')
@WithTemplate('<h1>My Person Title</h1>', 'app')
class Person {
	name = 'Max';

	constructor() {
		console.log(' Creating new person...');
	}
}

const person = new Person();
console.log(person);

//// ---

//// ---

//// ---

// property decorator
function Log(target: any, propertyName: string | Symbol) {
	console.log('Property decorator');
	console.log(target, propertyName);
}

// Accesors decorator
///////-------prototype
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Accesors decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
	
}

//method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
	console.log('Method decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

//parameter decorator
// -----------------------------------------------position of argument
function Log4(target: any, name: string | Symbol, position: number) {
	console.log('Parameter decorator');
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	// @Log // property decorator
	title: string;
	private _price: number;

	// @Log2
	set price(value: number) {
		if (value > 0) {
			this._price = value;
		} else {
			throw new Error('value must be greater then 0');
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this._price * (1 + tax);
	}
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

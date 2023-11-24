// // function add(n1: number, n2: number, printResult: boolean) {
// // 	if (printResult) {
// // 		return n1 + n2;
// // 	}
// // 	return 'no result';
// // }

// // const showResult = false;

// // const result = add(6, 6, showResult);

// // console.log(result);

// //tuples

// // const person: {
// // 	name: string;
// // 	age: number;
// // 	user: [number, string]; //tuples якщо точно відомі типи даних для двох елементів у масиві
// // } = {
// // 	name: 'ira',
// // 	age: 45,
// // 	user: [34, 'user'],
// // };

// // person.user.push(34); // push це виключення

// // console.log(person.user); //works

// //union === |

// // function add (num1 : number | string, num2 : number | string) {
// //     if (typeof num1 === 'number' && typeof num2 === 'number')
// //     return num1 + num2
// // }

// // console.log(add(6,900))

// const a = 'a';
// const b = 'b';
// console.log(a + b);

// // function add(num1: number, num2: number): string {
// // 	let result = 0;
// // 	result = num1 + num2;
// // 	return result.toString(); //works
// // }

// // console.log(add(67,56))

// // function add(num1: number, num2: number) : void{
// // 	console.log(num1 + num2);
// // }

// // add(67, 56);

// // function add(num1: number, num2: number) : number{
// // 	return num1 + num2;
// // }
// // add(67, 56);

// ////////////////////параметр\\\параметр\\\\\\return
// // let functionType : (a: number, b: number) => number;
// // functionType = add;
// // console.log(functionType(3,4))

// //******************************************************************************** */
// function add(num1: number, num2: number, cb: (num: number) => void) {
// 	const result = num1 + num2;
// 	cb(result);
// }

// add(10, 20, result => {
// 	console.log(result);
// });
// //********************************************************************************* */

// function sendRequest(data: string, cb: (response: any) => void) {
// 	// ... sending a request with "data"
// 	return cb({ data: 'Hi there!' });
// }

// sendRequest('Send this!', response => {
// 	console.log(response);
// 	return true;
// });

// //******************************
// //never

// function generateError(message: string, code: number): never {
// 	//because 'throw' does NOT return undefined, return NOTHUNG => never
// 	throw { message, code };
// }

// generateError('oops, something goes wrong', 404);

const person = {
	name: 'Max',
	age : 23
}

const copiedPerson = {...person}
const copiedPerson1 = person

person.age = 89

console.log(copiedPerson) // 23 
console.log(copiedPerson1)// 89

// for (const key in person) {
// 	console.log(person) //ключі
// 	console.log(person[key]) // значення
// }
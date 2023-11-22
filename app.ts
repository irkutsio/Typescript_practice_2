// function add(n1: number, n2: number, printResult: boolean) {
// 	if (printResult) {
// 		return n1 + n2;
// 	}
// 	return 'no result';
// }

// const showResult = false;

// const result = add(6, 6, showResult);

// console.log(result);

//tuples

const person: {
	name: string;
	age: number;
	user: [number, string]; //tuples якщо точно відомі типи даних для двох елементів у масиві
} = {
	name: 'ira',
	age: 45,
	user: [34, 'user'],
};

person.user.push(34) // push це виключення

console.log(person.user) //works 

//union === |

function add (num1 : number | string, num2 : number | string) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
    return num1 + num2
}

console.log(add(6,900))

const a = 'a';
const b = 'b'
console.log(a + b)
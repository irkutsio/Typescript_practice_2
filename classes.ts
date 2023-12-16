// Classes

// class Department {
//     name:string;

//     constructor(n: string){
//         this.name =  n
//     }

//     describe (){
//         console.log(`this department name is ${this.name}`)
//     }
// }

// const account = new Department('Accounting');
// console.log(account)
// account.describe() //this department name is Accounting

// const accCopy =  {describe: account.describe}
// accCopy.describe() //this department name is undefined

// const accCopy1 =  {name : 'Max',describe: account.describe}
// accCopy1.describe() //this department name is Max

/////////////////////////////////////

// class Department {
// 	// private readonly id: string;
// 	// private name: string; // shortcut in 32 line
// 	private employees: string[] = [];

// 	constructor(public name: string, private readonly id: string) {
// 		// this.name = name;
// 		// this.id = id;
// 	}

// 	describe(this: Department) {
// 		console.log(`this department name is ${this.name} + ${this.id}`);
// 	}

// 	addEmployees(employee: string) {
// 		this.employees.push(employee);
//         // this.id = 'd2' //Cannot assign to 'id' because it is a read-only property
// 	}

// 	prinEmplInfo() {
// 		console.log(this.employees.length);
// 		console.log(this.employees);
// 	}
// }

// const accounting = new Department('Accounting','d1');
// accounting.addEmployees('Max');
// accounting.addEmployees('Ira');

// accounting.describe();
// accounting.prinEmplInfo();

// accounting.employees[2] = 'Anna'  // error

////////
//Inheritance
//

// class Department {
// 	protected employees: string[] = []; //protected instead of privet

// 	constructor(public name: string, protected id: string) {}

// 	describe(this: Department) {
// 		console.log(`this department name is ${this.name} + ${this.id}`);
// 	}

// 	addEmployees(employee: string) {
// 		this.employees.push(employee);
// 	}

// 	printEmplInfo() {
// 		console.log(this.employees.length);
// 		console.log(this.employees);
// 	}

// 	static createEmployee(name: string) {
// 		return { name };
// 	}
// }

// const employee1 = Department.createEmployee('Nunu'); //static method,недоступно у екземпляра
// console.log(employee1);

// class ItDepartment extends Department {
// 	// public admins: string[];
// 	constructor(public admins: string[], id: string) {
// 		super('ACCOUNTING', id); // якщо класс наслідується функція super() before any this
// 		this.admins = admins;
// 	}
// }

// const it = new ItDepartment(['ITMax'], 'd1');
// it.addEmployees('Max');
// it.addEmployees('Ira');

// it.describe();
// it.printEmplInfo();

// console.log(it);

// class AccountingDepartment extends Department {
// 	private lastReport: string;

// 	constructor(private reports: string[], id: string) {
// 		super('IT', id);
// 		this.lastReport = reports[0];
// 	}
// 	addReport(text: string) {
// 		this.reports.push(text);
// 		this.lastReport = text;
// 	}
// 	printReports() {
// 		console.log(this.reports);
// 	}

// 	addEmployees(name: string) {
// 		if (name === 'Max') {
// 			return;
// 		}
// 		this.employees.push(name);
// 	}

// 	get mostRecentReport() {
// 		if (this.lastReport) {
// 			console.log(this.lastReport);
// 			return this.lastReport;
// 		}
// 		throw new Error('no reports');
// 	}

// 	set mostRecentReport(text: string) {
// 		this.addReport(text);
// 	}

// 	describe() {
// 		console.log('Accounting department :' + this.id);
// 	}
// }

// const accounting = new AccountingDepartment([], 'a2');

// // accounting.mostRecentReport;
// accounting.addEmployees('Manu');
// accounting.addReport('this is error report');

// accounting.printEmplInfo();
// accounting.mostRecentReport = 'my new report'; // setter on 131 line
// accounting.mostRecentReport;

// accounting.describe()

//
//abstract
//

// abstract class Department {
// 	protected employees: string[] = []; //protected instead of privet

// 	constructor(public name: string, protected id: string) {}

// 	abstract describe(this: Department): void;

// 	addEmployees(employee: string) {
// 		this.employees.push(employee);
// 	}

// 	printEmplInfo() {
// 		console.log(this.employees.length);
// 		console.log(this.employees);
// 	}

// 	static createEmployee(name: string) {
// 		return { name };
// 	}
// }

// class ItDepartment extends Department {
// 	constructor(public admins: string[], id: string) {
// 		super('ACCOUNTING', id);
// 		this.admins = admins;
// 	}

//     describe(): void {
//         console.log('Accounting department :' + this.id)
//     }
// }

// const it = new ItDepartment(['ITMax'], 'acc8');
// it.addEmployees('Max');
// it.addEmployees('Ira');

// it.describe();
// it.printEmplInfo();

// console.log(it);

////
/////70. Singletons & Private Constructors
////
abstract class Department {
	protected employees: string[] = []; //protected instead of privet

	constructor(public name: string, protected id: string) {}

	abstract describe(this: Department): void;

	addEmployees(employee: string) {
		this.employees.push(employee);
	}

	printEmplInfo() {
		console.log(this.employees.length);
		console.log(this.employees);
	}

	static createEmployee(name: string) {
		return { name };
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment;
	private constructor(private reports: string[], id: string) {
		super('IT', id);
		this.lastReport = reports[0];
	}
	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}
	printReports() {
		console.log(this.reports);
	}

	addEmployees(name: string) {
		if (name === 'Max') {
			return;
		}
		this.employees.push(name);
	}

	get mostRecentReport() {
		if (this.lastReport) {
			console.log(this.lastReport);
			return this.lastReport;
		}
		throw new Error('no reports');
	}

	set mostRecentReport(text: string) {
		this.addReport(text);
	}

	describe() {
		console.log('Accounting department :' + this.id);
	}

	static getInstance() {
        if(AccountingDepartment.instance) {
return this.instance
        }
        this.instance = new AccountingDepartment([], 'a2')
        return this.instance;
    }
}

// const accounting = new AccountingDepartment([], 'a2'); //
const accounting = AccountingDepartment.getInstance() //instead of ⬆
console.log(accounting)
// accounting.mostRecentReport;
accounting.addEmployees('Manu');
accounting.addReport('this is error report');

accounting.printEmplInfo();
accounting.mostRecentReport = 'my new report'; // setter on 131 line
accounting.mostRecentReport;

accounting.describe();

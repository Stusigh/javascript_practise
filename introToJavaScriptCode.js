/* 
Type Casting
*/

let x = parseInt("10"); // 10
x = parseFloat("10.55"); // 10.55
x = toString(10.55); // "10.55";

/* 
Template Litarals
*/

let name = "Shane"; 
let age = 25;

console.log(`Happy Birthday ${name}! How is ${age+1} treating you?`);

/* 
Undefined, Null
*/

console.log(typeof nothing);//undefined

let something;
console.log(typeof something); //undefined
console.log(something); //undefined

something = null;
console.log(typeof something); //"object"
console.log(something); //"null"

/* 
Comparison Operators
*/
/* 
<	Less than
>	Greater than
<=	Less than or equal to
>=	Great than or equal to
==	Loose equality (compares values)
===	Strict equality (compares values AND type)
!=	Values do not equal
!==	Same type, but different values

*/


/* 
Short Circuit Evaulation
*/

somevar && myFunction() //equivalant to if(somevar)
somevar || myFunction() //equivalant to if(!somevar)

/* 
Do While Loop
*/

let x = 0;
do {
    x = x + 1;
    // or x +=1
    // or x++
} while(x < 10);

/* 
Switch Statements
*/

let x = 1
switch(x) {
	case 3:
		console.log('three')
	case 1:
		console.log(1);
		//break;
	case 2:
		console.log(2);
		break;
	default:
		console.log('default')
}

/* 
Slicing and Splicing
*/

let a = [1,2,3,4];

//Slice - doesn't mutate array, slice(start,end)
a.slice(0,2); //[1,2]
'abcd'.slice(1,3) // 'bc'

//Splice - splice(start,numToRemove,...items to add) - this does mutate
a.splice(1,2,'a','b'); //a is [1,'a','b',4]

/* 
Converting Arrays to Strings, Ordering, Sorting
*/

//Stringifying
teachers = ['Assaf', 'Shane'];
teachers.toString(); 'Assaf,Shane';
teachers.join('&'); 'Assaf&Shane';

let a = [2, 1, 3]
a.sort(); //[1,2,3]
a.reverse(); //[3,2,1]

/* 
Slicing and Splicing
*/




/*
Functions containing functions
*/

//Declare an add function
function add(number1, number2) {
	return number1 + number2;
}
 
//Declare a function that takes a function as an argument
function doMath(operation, number1, number2) {
	return operation(number1,number2);
}
 
//Pass a function into another.
let sum = doMath(add, 1, 2);

/*
Filter function
*/

let students = [
	{name: 'John Lennon', average: 90},
	{name: 'Ringo Starr', average: 58},
	{name: 'Paul McCartney', average: 82}
];

let passingStudents = students.filter(function(student){
	return student.average > 60;
});

passingStudents === [
	{name: 'John Lennon', average: 90},
	{name: 'Paul McCartney', average: 82}
];

/*
Find function
*/

let students = [
	{name: 'John Lennon', average: 90},
	{name: 'Ringo Starr', average: 58},
	{name: 'Paul McCartney', average: 82}
];

let passingStudents = students.find(function(student){
	return student.average > 50;
});

passingStudents === [
	{name: 'John Lennon', average: 90}
];

/*
Map function
*/

	
let students = [
	{firstName: 'Cam', lastName: 'Newton'},
	{firstName: 'Ted', lastName: 'Ginn'},
	{firstName: 'Greg', lastName: 'Olsen'}
]
 
let fullNames = students.map(function(student){
	return `${student.firstName} ${student.lastName}`;
})
 
fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

/*
Reduce function
*/

	
let students = [
	{name: 'Cam Newton', assignmentsCompleted: 6},
	{name: 'Ted Ginn', assignmentsCompleted: 10},
	{name: 'Greg Olsen', assignmentsCompleted: 8}
]
 
let totalAssignments = students.reduce(function(sum,student){
	return sum + student.assignmentsCompleted;
}, 0);
 
totalAssignments === 24;
console.log(totalAssignments)
// superHeros = [["Batman", "Bruce Wayne"],["Spiderman", "Peter Parker"],["The Flash", "Barry Allen"]];

// let secretIdentity = superHeros.map(function(superHero){
//     return `${superHero[0]} is ${superHero[1]}`
// })

// console.log(secretIdentity)


// //Make the array of superheroes:
// let superHeroes = [["Batman", "Bruce Wayne", "Gotham"],["Spiderman", "Peter Parker", "New York"],["The Flash", "Barry Allen", "Chicago"]];
// //Make an empty array:
// let revealArray = [];
// //Tell the map function that we are going to iterate over the superHeroes array, and that each element can be referenced by the word superHeroIdentity:
// superHeroes.map(function(superHeroIdentity){
// 	//Push each part to the revealArray, one new element per iteration.
// 	revealArray.push(`${superHeroIdentity[0]} is ${superHeroIdentity[1]}, he lives in ${superHeroIdentity[2]}`)
// });

// console.log(revealArray);

emptyArray = []
let superHeroes = [["Batman", "Bruce Wayne", "Gotham"],["Spiderman", "Peter Parker", "New York"],["The Flash", "Barry Allen", "Chicago"]];

for (let superHero in superHeroes) {
	emptyArray.push(superHeroes[superHero][0]+ ' is ' + superHeroes[superHero][1] + ' and lives in ' + superHeroes[superHero][2]);
}
console.log(emptyArray)


// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]
 
// let fullNames = students.map(function(student){
// 	return `${student.firstName} ${student.lastName}`;
// })
 
// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]


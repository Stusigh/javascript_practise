
// let teacher = {name: 'Shane'};
 
// let speak = function(item1, item2){
// 	console.log(this.name, item1, item2);
// }
 
// speak.call(teacher, 'coffee', 'ramen'); //'Shane', 'coffee', 'ramen'
// speak.apply(teacher, ['coffee', 'ramen']); //'Shane', 'coffee', 'ramen'


/* arrow function
*/

let students = [
    { name: "Edwin"}, 
    { name: "Kim"}, 
    { name: "Skip"}
  ];
  
  let names = students.map((student) => student.name);
  
  console.log(names);
  // ["Edwin","Kim","Skip"]

  /* arrow function */

  let teacher = {
	name: 'Shane',
	speak: function() {
		
		//Bind a function to a specific context
		var boundFunction = () => {
			console.log('later my name is ' + this.name);
		};
		
		//boundFunction will always run in bound context
		setTimeout(boundFunction,1000);
	}
}
 
teacher.speak();
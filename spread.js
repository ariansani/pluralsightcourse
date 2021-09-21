//using spread in function Calls
//spread treats all elements in an array as individual arguments
const temperatures = [75,62,68,32];
console.log(Math.min(... temperatures));





//using spread in array literals
//take data in existing array to create new array
const parents = ["Lorie", "Steve"];
const kids = ["Jake","Annie","Jess"];
const fullFamily = [parents, kids]; //this line creates a nested array
const fullFamilyWithSpread = [...parents,...kids];//this creates a single array

//using spread to copy elements instead of reference
//IMPORTANT NOTE: Spread only goes "One Level Deep" when copying an array. 
//it does not perform a deep copy of nested arrays.
const originals = ["Mona Lisa","American Gothic", "The School of Athens"];
const copies_wrong = originals; //this will copy the reference
const copies = [...originals]; //this will copy the values


//using spread in object literals
const mainColors = {brightRed: "#e55039", waterfallBlue: "#38ada9"};
const accentColors = {lightGrey: "#778ca3", swanWhite: "#f7f1e3"};

const fullPalette = {...mainColors, ...accentColors};
//{brightRed: "#e55039", waterfallBlue: "#38ada9", lightGrey: "#778ca3", swanWhite: "#f7f1e3"}
const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true };
const hybrid = {name: "Gryphon", ...lion, ...eagle};
//{name: "Gryphon", hasTail: true, legs: 4, canFly: true}

/* Spread and Immutability*/
//In frameworks like React, it's important not to mutate specific data (the state, specifically). 
//Because of the way React is written, updating arrays & objects directly in the state can cause issues where your app does not render or re-render when it should.
//You'll often see spread used in this context.
//Here's a simple example of what NOT to do.. 
// We have an array of todos, and we want to add a new todo to the end of that array.
 // The "easy" way is to simply push on to todos, BUT THAT MUTATES THE ARRAY!
 const todosWRONG = [
	{user: "Brick", completed: false, task: "Upload Video"},
	{user: "Lilith", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo){
  todosWRONG.push(newTodo);
}
//Rather than mutating the todos array directly, 
//we should instead make a copy of the todos array that also contains the newTodo added at the end.
//  Spread makes this relatively easy:
const todos = [
	{user: "Brick", completed: false, task: "Upload Video"},
	{user: "Lilith", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo){
  return [...todos, {...newTodo, completed: false}]
}

const newTodos = addTodo({user: "Mordecai", task: "Feed Bloodwing"});
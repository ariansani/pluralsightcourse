//async function
//declare any function in JS as Async function
//async function ALWAYS return resolved promises

async function friendlyFn(){
    return 'Hello!!! omg so nice to see you!';
}

friendlyFn();

//REJECT with Throw
async function oops(){
    throw "you shouldn't have invoked me!";
}

//Await keyword
let starWars = {
    genre: "sci-fi",
    async logMovieData(){
        let url = "https://swapi.co/api/films/";
        let movieData = await $.getJSON(url);
        console.log(movieData.results);
    }
};

starWars.logMovieData();

//Await with classes
class Pokemon {
    constructor(id){
        this.id = id;
    }
    async logName(){
        let url = `https://pokeapi.co/api/v2/pokemon/${this.id}/`;
        let response = await $.getJSON(url);
        console.log(response.name);
    }
}

let pokemon = new Pokemon(1);
pokemon.logName();

//Handling errors
//if a promise is rejected using await, an error will be thrown
//use try catch
async function getUser(user){
    try{
        let url = `https://api.github.com/users/${user}`;
        let response = await $.getJSON(url);
        console.log(`${response.name}: ${response.bio}`);
    }catch(e){
        console.log("User does not exist!");
    }
}

//Refactor with .then
$.getJSON(`${baseURL}/1/`)
.then(p1 => {
    console.log(`The first pokemon is ${p1.name}`);
    return $.getJSON(`${baseURL}/2/`);
})
.then(p2 => {
    console.log(`The second pokemon is ${p2.name}`);
    return $.getJSON(`${baseURL}/3/`);
})
.then(p3 => {
    console.log(`The third pokemon is ${p3.name}`);
    return $.getJSON(`${baseURL}/4/`);
});

//version with async functions to clean up
//this looks cleaner but its still not the best way
//as the three requests are sequential.
//Each request is queued, wait for the previous to finish
async function catchSomeOfEm(){
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let p1 = await $.getJSON(`${baseURL}/1/`);
    let p2 = await $.getJSON(`${baseURL}/2/`);
    let p3 = await $.getJSON(`${baseURL}/3/`);

    console.log(`The first pokemon is ${p1.name}`);
    console.log(`The second pokemon is ${p2.name}`);
    console.log(`The third pokemon is ${p3.name}`);
}

catchSomeOfEm();

//Parallel, runs faster!
async function catchSomeOfEmParallel(){
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let p1Promise = $.getJSON(`${baseURL}/1/`);
    let p2Promise = $.getJSON(`${baseURL}/2/`);
    let p3Promise = $.getJSON(`${baseURL}/3/`);

    let p1 = await p1Promise;
    let p2 = await p2Promise;
    let p3 = await p3Promise;

    console.log(`The first pokemon is ${p1.name}`);
    console.log(`The second pokemon is ${p2.name}`);
    console.log(`The third pokemon is ${p3.name}`);
}

catchSomeOfEmParallel();

//refactor justabit more!
async function catchSomeOfEmParallel2(){
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let pokemon = await Promise.all([
        $.getJSON(`${baseURL}/1/`),
        $.getJSON(`${baseURL}/2/`),
        $.getJSON(`${baseURL}/3/`)
    ]);

    
    console.log(`The first pokemon is ${pokemon[0].name}`);
    console.log(`The second pokemon is ${pokemon[1].name}`);
    console.log(`The third pokemon is ${pokemon[2].name}`);
}

catchSomeOfEmParallel();
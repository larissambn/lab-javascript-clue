// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 22,
        description: "old",
        image: "image",
        color: "green"
    },{
        firstName: 'Jacob',
        lastName: 'Black',
        occupation: 'Entrepreneur',
        age: 22,
        description: "old",
        image: "image",
        color: "black"
    },{
        firstName: 'Jacob',
        lastName: 'white',
        occupation: 'Entrepreneur',
        age: 22,
        description: "old",
        image: "image",
        color: "white"
    },{
        firstName: 'Jacob',
        lastName: 'Blue',
        occupation: 'Entrepreneur',
        age: 22,
        description: "old",
        image: "image",
        color: "blue"
    },{
        firstName: 'Jacob',
        lastName: 'Gray',
        occupation: 'Entrepreneur',
        age: 22,
        description: "old",
        image: "image",
        color: "gray"
    },{
        firstName: 'Jacob',
        lastName: 'Red',
        occupation: 'Entrepreneur',
        age: 22,
        description: "old",
        image: "image",
        color: "red"
    }
];

// Rooms Array

const roomsArray = [
    {name : "sala"},  {name : "escada"},  {name : "quarto"},  {name : "cozinha"},  {name : "biblioteca"},  {name : "banheiro"},  {name : "piscina"},  {name : "quarto de visitas"},  {name : "lareira"},  {name : "edícula"},  {name : "porão"},  {name : "segundo andar"},  {name : "terceiro andar"},  {name : "quarto andar"},  {name : "quinto andar"},    
];

// Weapons Array

const weaponsArray = [
    { name : "faca", weight : 12 }, 
    { name : "candelabro", weight : 12 }, 
    { name : "pá", weight : 12 }, 
    { name : "taco", weight : 12 }, 
    { name : "frigideira", weight : 12 }, 
    { name : "abajur", weight : 12 }, 
    { name : "chicote", weight : 12 }, 
    { name : "livro", weight : 12 }, 
    { name : "vela", weight : 12 }, 
       
];

// Create one array with all the cards
const randomCard =  suspectsArray.concat(roomsArray).concat(weaponsArray)

//ITINERATION 1

function selectRandom(randomCard) {

    // Return undefined if array is empty
    if (randomCard.length === 0) {
        return undefined;
      }
    
      // Check if the array has only one element - Return the element of a single value array
      if (randomCard.length === 1) {
        return randomCard[0];
      }

// Pick random object
const randomIndex = Math.floor(Math.random() * randomCard.length);
const card = randomCard[randomIndex]

// Return element 
  return card;
}

// Transform function in a Const to Execute it. 
const randomElement = selectRandom(randomCard);
console.log(randomElement);

// ITINERATION 2

function pickMystery() {

    const suspect = selectRandom(suspectsArray);
    const room = selectRandom(roomsArray);
    const weapon = selectRandom(weaponsArray);

    const mystery = {suspect, weapon, room}

    return mystery;
}

// Call the pickMystery function and capture the returned object
const mysteryObject = pickMystery();
console.log(mysteryObject);

// ITERATION 3

function revealMystery(mysteryObject) {
   
    // By destructuring the object, we can directly access the nested properties of the mysteryObject without having to use dot notation or repeated object access. 
    const { suspect, weapon, room } = mysteryObject;
    console.log(`${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`);
      
    // Call the revealMystery function with the mysteryObject
    revealMystery(mysteryObject);
}



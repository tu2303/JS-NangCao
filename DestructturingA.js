'use strict';
const weedays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weedays[3]]: {
        open: 12,
        close: 22,
    },
    [weedays[4]]: {
        open: 11,
        close: 23,
    },
    [weedays[5]]: {
        open: 0,
        close: 24,
    },
};
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toLowerCase());

// Fix capitalization in name
const passenger = 'jOnAS'; //jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toLowerCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = 'hello@jonas.io';
const LoginEmail = '  Hello@jonas.Io \n';

//const lowerEmail = lowerEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
const normalizedEmail = LoginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);


// replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '?').replace(',', '.');
console.log(priceUS);

const announcement = 'All passenger come to boarding dỏo 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
//console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//Boolens
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW ARirbus family');
}

//Praction exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();

    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcone aboard');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


/*
////////////////////
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737' [0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat');
    else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));


*/
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegettarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu
        [starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your decliciours pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...orderIngredients) {
        console.log(mainIngredient);
        console.log(orderIngredients);
    },
};

//////////////////////////////////////
// Coding Challegen

/*
Write a program that receives a list of variable
names written in underscore_case and convent them to cammeLose

The input will come from a textarea inserted into the 
DOM (see code below), and conversion will happen when the button is pressed

THIS TEST DATA (PASTED to textarea)
underscore_case 
first_name
some_Variable 
 calculate_AGE
 delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separete console.log outputs)
underscoreCase
firstName
someVariable 
calculateAge
deplayedDeparture

HINT 1: Remember which character defines a new line in the textarea
HINT 2: The solution only needs to work for a variable made out of 2 works, like a_b
HINT 3: Start without worrying about the. Tackle that only after you have the variable name 
conversion working
HINT 4: This challenge is difficult on purpose, so start watching the solution in case
you're stuck.Then pause and continue!

Afterward, test with your own test data!

GOOD LUCK
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        console.log(row, first, second);

        const output = `${first}${second.replace(
            second[0],
            second[0].toLowerCase()
        )}`;
        console.log(`${output.padEnd(20)}${'gg'.repeat(i + 1)}`);
    }
});




/*
//////////////////////////////////////
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtman'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
    const names = name.split(' ');
    const nameUpper = [];

    for (const n of names) {
        //nameUpper.push(n[0].toLowerCase() + n.slice(1));
        nameUpper.push(n.replace(n[0], n[0].toLowerCase()));
    }
    console.log(nameUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtman');

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCredit = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCredit(64637836));
console.log(maskCredit(43378463864647384));
console.log(maskCredit('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planeInline = function(n) {
    console.log(`There are ${n} planes in line ${'>>>'.repeat(n)}`);
}

planeInline(5);
planeInline(3);
planeInline(12);

/*
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'c'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again'],
]);
console.log(question);

/*
///////////////////////////////////////////////
1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow card
from the game minute 64 onfair. So remove this 
event from the game events log

3. Print the following string to the console: "an
event happened, on average, every 9 minutes. (keep in 
    mind that a game has 90 minutes)

4. Loop over the events and log them to the console, 
marking whether it's in the first hafl or second hafl 
(after 45 min) of the game, like this: 
[FIRST HALF] 17: goal

GOOD LUCK
*/


/////////////////////////
/*
const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

// 1. 
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. 
gameEvents.delete(64);

// 3.
console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);

// 4. 
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FRIST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}



/*
//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);



/*
////////////////////////////
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegettarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/*
/////////////////////////////////////////
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);


/*
// Property NAMES
const Properties = Object.keys(openingHours);
console.log(Properties);

let openStr = 'We are open on ${Properties.length} days: ';
for (const day of Properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/*
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//console.log(restaurant.openingHours.mon.open);

//WITH optional chaining 
console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon.open);

// Example 
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day].open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Methods does not exist');

//Arrays
//const users = [{ name: 'Jonas', email: 'hello@jonas.io'}];

const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}


/////////////////////////////////////
// Coding Challenge #1

/*
we're building a football betting app (soccer for my 
    American friends )!

Suppose we get data from a web service about a 
certain game (below). In this challenge we're gonna 
work with the data. So here are your tasks:

1. Create one player array for each team (variables 
    'players1' and 'players2')

2. The  first player in any player array is the 
goalkeeper and the others are field players. for 
Bayern Munich (team1) create one varible ('gk')
with the goalkeeper's name, and one array 
('fieldplayers') with all the remaining 10 field 
players

3. Create an array 'allPlayers' containing all
playres of both teams (22 players)

4. During the game, Bayern Munich (team1) used 3 
substitute players. so create a new array
('playersFinal') containing all the orginal team1
players plus 'thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create on varible 
for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an 
arbitrary number of them to the console, along with the
number of goals who were scored (number of player names passed in)

7. The team with the lower odd is more likely to win.
Print to the console which team is more likely to
win, WITHOUT using an if/esle statemen or the
ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' 
and 'kimmich'. then, call the function 
again with players from game.scorerd

GOOD LUCK 
*/

/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. 
for (const [i, player] of game.scored.entries()) console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}



/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...frieldPlayers] = players1;
console.log(gk, frieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.
const {
    odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};

//printGoals('Davies', 'Muller', 'Lewandowski',
//    'Kimmich');
//printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7. 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


/*
//Logical Assignment Openrators

const rest1 = {
    name: 'Capri',
    //numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//nullish assignment oprator (null or undefined)
//rest1.numGuests ??= 10;
//rest1.numGuests ??= 10;

//AND assignment operato
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
// The Nullish Coalescing Operato(??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '');
const guestCorrect = restaurant.numGuests || 10;
console.log(guestCorrect);



/*
//Short Circuiting (&&and||)

console.log('----UK----');
//Use ANY data type, return ANY data type,short-circuiting
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----');
console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('hello' && 23 && null && 'jonas');

// Practical exmaple
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');



/*
//Rest Pattern and Parameters

// 1) Destructuring

//SPREAD, because on RIGHT side of = 

const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu, ];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weedays } = restaurant.openingHours;
console.log(weedays);

// 2) Function
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

/*

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
    //prompt("Let's make pasta! Ingredient 1?"),
    //prompt('Ingredient 2?'),
    //prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
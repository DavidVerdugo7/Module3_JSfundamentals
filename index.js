/*                        //====JS fundamentals 1
"" + 1 + 0; //= 10
"" - 1 + 0; //= -1
true + false; //= 1
!true; //= false
6 / "3"; //= 2
"2" * "3"; //= 6
4 + 5 + "px"; //= '9px'
"$" + 4 + 5; //= '$45'
"4" - 2; //= '2'
"  -9  " + 5; //= '  -9  5'
"  -9  " - 5; //= -14
"4px" - 2; //= NaN
null + 1; //= 1
undefined + 1; //= NaN
undefined == null; //= true
undefined === null; //= false
" \t \n" - 2; //= NaN

//====JS fundamentals 2
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; //= "34"
let additionfixed = Number(three) + Number(four); //= 7
let multiplication = three * four; //= 12
let division = three / four; // 0.75
let subtraction = three - four; //= -1
let lessThan1 = three < four; //= true
let lessThan2 = thirty < four; //= false

//====JS fundamentals 3
//Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true"); //= 0 is falsy so will not print
if ("0") console.log("#2 zero is true"); //= '0' is string and even if is 0 is true value so will print.
if (null) console.log("null is true"); //= null is a falsy value, so will not print
if (-1) console.log("negative is true"); //= -1 is a true and is number, so will print
if (1) console.log("positive is true"); //= 1 is a true value, so will print.

//====JS fundamentals 4
let a = 2,
  b = 3;
let result = `${a} + ${b} is ${
  a + b < 10 ? "less than 10" : "greater than 10"
}`;
console.log(result); //= 2 + 3 is less than 10

//====JS fundamentals 5

//expression syntax:
const getGreeting = function (name) {
  return "Hello " + name + "!";
};

console.log(getGreeting("Alice")); //= Hello Alice!

//arrow function syntax:
const getGreetings = (name) => "Hello " + name + "!";

console.log(getGreeting("Bob")); // Output: Hello Bob!

//====JS fundamentals 6  

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName} `;
    console.log(greeting + this.getCatchPhrase(person));
  },
   getCatchPhrase(person) {
    if (person.numFingers === 6) {
      return "You killed my father. Prepare to die.";
    } else {
      return "Nice to meet you.";
    }
  },            

//====JS fundamentals 7

const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
  printFullTimeScore() {
    console.log("Full-time score is " + this.score);
    return this;
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .printFullTimeScore();

//C

const basketballGame = {
  score: 0,
  fouls: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score + ", fouls: " + this.fouls);
    return this;
  },
  fullTime() {
    console.log("Full-time score is " + this.score + ", fouls: " + this.fouls);
    return this;
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .foul()
  .halfTime()
  .foul()
  .freeThrow()
  .threePointer()
  .fullTime();
                        

//====JS fundamentals 8
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
function aboutSy(obj) {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      const value = obj[property];
      console.log(`${property}: ${value}`);
    }
  }
}

aboutSy(sydney); 

//new obj:
const car = {
  brand: "bmw",
  year: "2022",
  model: "cx5",
  engine: "disel",
  seats: "five",
};
function aboutCar(bmw) {
  for (let i in bmw) {
    const value = bmw[i];
    console.log(`${i}: ${value}`);
  }
}
aboutCar(car);      

//====JS fundamentals 9

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = teamSports;
moreSports.push("Soccer");
moreSports.unshift("Tennis");
//b
let dog2 = dog1;
dog2 = "tilly";
//c
let cat2 = cat1;
cat2.name = "aslan";

console.log("Original teamSports:", teamSports);
console.log("Original dog1:", dog1);
console.log("Original cat1:", cat1);
                                               
//====JS fundamentals 10
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}
//a
let person1 = new Person("Jenn", 30);
//b
let person2 = new Person("Bob", 25);
console.log("Person 1 - Name:", person1.name, "Age:", person1.age);
console.log("Person 2 - Name:", person2.name, "Age:", person2.age);          

////// estoy en el punto D creando classfunction.
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
}
let person3 = new PersonClass("Alice", 28);
console.log("Person 3 - Name:", person3.name, "Age:", person3.age);

//E                                               */ /////
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  this.canDrive = function () {
    return this.age >= 16;
  };
}
let person1 = new Person("Jenn", 30);
console.log("Person 1 - Name:", person1.name, "Age:", person1.age);
console.log("Can Person 1 drive?", person1.canDrive());

'use strict';

////////////

/*
///       Constructor function

const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
console.log(jonas instanceof Person);

//Prototypes
console.log(Person.prototype);

//methods
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

//properties
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__); //Prototype: Person
console.log(jonas.__proto__.__proto__); //Prototype: Object
console.log(jonas.__proto__.__proto__.__proto__); //Prototype: null

console.dir(Person.prototype.constructor);

const arr = [4, 6, 7, 7, 3, 4, 6, 7, 7, 5, 6, 8]; // new Array === []
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__); //Prototype : Array
console.log(arr.__proto__.__proto__); //Prototype: Object
console.log(arr.__proto__.__proto__.__proto__); //Prototype: null

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1.__proto__);
*/

///////////////////
//ES6 classes
/*
//class expression
//const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  //setting a property that exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1994);
console.log(jessica);
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// setter and getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 250;
console.log(account.movements);

console.log(jessica.age);
console.log(jessica.hey);
console.log(PersonCl.hey);
PersonCl.hey();
*/

/////////////////
//object.create()
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(name, birthYear) {
    this.firstName = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2003;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1998);
sarah.calcAge();
*/

////////////////////////////////
////////////////////////////////
///////////////////////////////

//         Inheritance
/*
//By constructor class

const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this, (course = course);
};

const jenna = new Student('Jenna', 1994, 'Computer Science');
// console.log(`jenna.calcage: ${jenna.calcAge()}`);

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(jenna.__proto__);

console.dir(Student.prototype.constructor);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
*/

/*
/// Inheritance  --  by ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  //setting a property that exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  //static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentClwithCourse extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always happens first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${this.age} years old but I feel more like ${this.age + 10}`
    );
  }
}

const jessica = new StudentClwithCourse(
  'Jessica Davis',
  1985,
  'Computer Science'
);

console.log(jessica);
console.log(jessica.age);
console.log(jessica.fullName);
console.log(jessica.course);
jessica.introduce();
jessica.calcAge();

class StudentCl extends PersonCl {}
const martha = new StudentCl('Martha Jones', 2012);
console.log(martha);
console.log(martha.age);
console.log(martha.fullName);
martha.calcAge();
*/

/*
//Inheritance by object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(name, birthYear) {
    this.firstName = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (name, birthYear, course) {
  PersonProto.init.call(this, name, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2012, 'Computer Science');
console.log(jay);
jay.calcAge();
jay.introduce();
*/

////    Encapsulation
/*
class Account {
  //public fields (instances)
  locale = navigator.language;

  //private fields  (instances)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //protected properties
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //public methods
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }
  getMovements() {
    return this.#movements;
  }

  static helper() {
    console.log('Static method');
  }

  //private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
console.log(acc1.pin);
acc1.requestLoan(1000);

//console.log(acc1.#movemnts);
console.log(acc1.getMovements());
Account.helper();

//Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(3400);
console.log(acc1.getMovements());
*/

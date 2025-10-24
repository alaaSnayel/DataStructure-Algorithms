// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1.value = 15; // object2.value also change to 15 because object2 reference to object1
// object3.value remain 10 because object3 is a different object in memory

//object3 not === object1

// context vs scope
const object4 = {
  a: function () {
    console.log(this);
  },
};

// instantiation
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEEEEEe I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Alaa", "Healer");
const wizard2 = new Wizard("Nora", "Dark Magic");

console.log(wizard1);
console.log(wizard2);
console.log(wizard1.play());
console.log(wizard2.play());
console.log(wizard1.introduce());
console.log(wizard2.introduce());

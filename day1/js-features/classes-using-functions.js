function Person(theName, theAge) {
    this.name = theName;
    this.age = theAge;
    this.eat = function() {
      console.log(this.name + " is eating");
    };
}

var p1 = new Person("Sam", 12);
console.log(p1.name, p1.age);
p1.eat();

var p2 = new Person("Ram", 22);
console.log(p2.name, p2.age);
p2.eat();

// string interpolation
let name = "deb";
let message = `How are you ${name} ?`;
console.log(message);
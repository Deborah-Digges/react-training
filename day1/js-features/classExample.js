class Person {
    constructor(theName, theAge) {
        this.name = theName;
        this.age = theAge;
    }
    
    eat() {
        console.log(this.name + " is eating :D");
    }
}

var p1 = new Person("Vatsal", 26);
p1.eat();
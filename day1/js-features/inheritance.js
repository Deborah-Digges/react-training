class Animal {
    makeNoise() {
        
    }
    
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    makeNoise() {
        console.log("bow bow");
    }
    
    eat() {
        super.eat();
        console.log("wuff wuff");
    }
}

var doggie = new Dog();
doggie.makeNoise();
doggie.eat();
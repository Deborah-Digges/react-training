class Animal {
    makeNoise() {
        
    }
}

class Dog extends Animal {
    makeNoise() {
        console.log("bow bow");
    }
}

var doggie = new Dog();
doggie.makeNoise();
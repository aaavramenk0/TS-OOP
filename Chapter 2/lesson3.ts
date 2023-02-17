// super
export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    constructor() {

    }

    woof(): string {
        return "WOOF! WOOF! WOOF!";
    }
}

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) { // we should provide the same variables inside the constructor 
        super(data.age, data.legs, data.name); // and then paste those variables inside the super()
    }


    meow(): string {
        return "Meow! Meow! Meow!";
    }
}

const dog = new Dog();
const cat = new Cat({ age: 19, legs: 4, name: "Gator" });

console.log(dog instanceof Animal); // false -> when 'implements' => Class is not the Child of parent Class
console.log(cat instanceof Animal); // true -> when 'extends' => Class is the Child of parent Class
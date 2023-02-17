// Base / Parent Class
export class Animal { // this class properties are global for every other Class 
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// Derived / Child Class
export class Dog extends Animal { // extends means that we take all the properties of parent class and add new that are related only with this Class
    woof(): string { // add method to the class
        return "WOOF! WOOF! WOOF!";
    }
}
const dog = new Dog(2, 4, 'Gator');
dog.name; dog.legs; dog.age; dog.woof();


export class Cat extends Animal {
    meow(): string {
        return "Meow! Meow! Meow!";
    }
}
const cat = new Cat(19, 4, 'Baby');
cat.age; cat.legs; cat.name; cat.meow();

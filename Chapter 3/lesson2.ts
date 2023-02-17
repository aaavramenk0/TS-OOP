export class Animal {
    protected age: number; // access is getting only children of this class
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// child
export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }
}
const cat = new Cat({ age: 19, legs: 4, name: 'Baby' });
cat.age; // we also can't access to the variable here, because it can be accessed only inside the children classes.
// same shape
export class Dog implements Animal {
    // we can't access to the variable 'age' because it's protected and 'implemented' classes are not children of the parent class
    age: number;
    legs: number;
    name: string;
}
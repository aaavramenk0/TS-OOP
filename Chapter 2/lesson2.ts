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

// Same Shape
export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    woof(): string {
        return "WOOF! WOOF! WOOF!";
    }
}

export class Animal {
    age: number; // by default the variable are public
    private legs: number; // now 'legs' are private and we can't access it outside this class
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }
}

const cat = new Cat({ age: 19, legs: 4, name: 'Baby' });
cat.age;
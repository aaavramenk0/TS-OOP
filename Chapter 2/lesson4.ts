// super overrider
export class Animal {
    age: number;
    legs: number;
    lives: 1;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }

    meow(): string {
        return "Roar! Roar! Roar!";
    }
}

export class Cat extends Animal {
    liver = 9;
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }


    meow(): string {
        super.meow();
        super.lives;

        return "Meow! Meow! Meow!";
    }
}
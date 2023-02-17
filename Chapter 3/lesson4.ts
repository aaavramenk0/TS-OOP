export class Message {
    public readonly id: string;
    title: string;
    message: string;
    isSent: boolean;

    constructor(id: string) {
        this.id = id;
    }
}

const message = new Message('123'); // we can access and assign the value to the variable with 'readonly'
message.id = '123abc' // but we can not reassign new value because this variable has 'readonly' property
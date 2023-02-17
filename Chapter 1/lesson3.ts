export class Message {
    title: string; // associate type to the property
    message: string;
    isSent: boolean;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }
}

const message = new Message('Hello', 'World'); // class calling with the constructor
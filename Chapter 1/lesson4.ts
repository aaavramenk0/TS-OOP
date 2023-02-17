export class Message {
    title: string; // associate type to the property
    message: string;
    isSent: boolean;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    // Method - function that belongs to the class
    previewMessage(): string { // 'string' here is the type of what we will return
        //          show only 10 letters & paste '...' in the end of the string
        return this.message.slice(0, 10).concat('...');
    }
}

const message = new Message(
    "New Course!!! Just $9.99!!!",
    "Check out our latest course on OOP with TypeScript!"
);
message.previewMessage();
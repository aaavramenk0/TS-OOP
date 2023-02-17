export class Message { // class declaration now (ES6+)
    title;
    message;
    id;
}
const message = new Message(); // class calling now (ES6+)



function Message2(title, message, id) { // class declaration before ES6
    this.title = title;
    this.message = message;
    this.id = id;
}
const message2 = new Message2('Hello', 'world', 'Infinity'); // class calling before ES6
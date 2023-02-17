const message1 = { // object declaration
    title: undefined,
    message: undefined,
    id: undefined
};
const message2 = { title: undefined, message: undefined, id: undefined };
const message3 = { title: undefined, message: undefined, id: undefined };

// Classes (⬇) are works better than just objects (⬆), because there is no need to change every field if we need to add property to the message. With class you can easily update properties inside the class declaration and they will sync with every place where we will call this class.

export class Message { // class declaration
    title; // class property
    message;
    id;
}

const message4 = new Message(); // class calling
const message5 = new Message();
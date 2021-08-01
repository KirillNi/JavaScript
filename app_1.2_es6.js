'use strict'

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj1 = new Post('author1', 'Lorem1', '27.07.2021');
obj1.edit('New text');
console.log(obj1);

let obj2 = new AttachedPost('author2', 'Lorem2', '28.07.2021');
obj2.makeTextHighlighted();
console.log(obj2);

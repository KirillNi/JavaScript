'use strict'

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
};

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
};

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

let obj1 = new Post('author1', 'Lorem1', '27.07.2021');
obj1.edit('New text');
console.log(obj1);

let obj2 = new AttachedPost('author2', 'Lorem2', '28.07.2021');
obj2.makeTextHighlighted();
console.log(obj2);

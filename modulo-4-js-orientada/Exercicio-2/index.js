const Author = require("./Author");

const jhon = new Author("Jhon Doe")

const post = jhon.writePost("Titulo do post", "lorem ipsum")

post.addComment("Issac Pontes", "Muito bom ")
post.addComment("Filipe", "Achei incrivel")


console.log(jhon)
console.log(post)
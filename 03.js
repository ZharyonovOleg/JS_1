"use strict";

console.log("1 задание:");

//


console.log("2 задание:");

const post = {author: "John", postId: 23,comments:
        [{userId: 10, userName: "Alex", text: "lorem ipsum", rating:
                {likes: 10, dislikes: 2}},
        {userId: 5, userName: "Jane", text: "lorem ipsum 2", rating:
                {likes: 3, dislikes: 1}},]};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
console.log(post.comments[1].rating.likes + ' вывел для закрепления');

console.log("3 задание:  не понял products.forEach(price = price * 0.85);");

const products = [{id: 3, price: 200}, {id: 4, price: 900}, {id: 1, price: 1000}];

products.forEach(elem[price] = elem[price] * 0.85);

console.log(products);


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

products.forEach(elem => {  //пропустил момент со стрелочной функцией
        elem.price = elem.price * 0.85
});

console.log(products);


const products2 = [{id: 3, price: 200}, {id: 4, price: 900}, {id: 1, price: 1000}];

products2.forEach(function (elem) {  // ВО! Допёр!!! :-)))
        elem.price = elem.price * 0.85
});

console.log(products2);


console.log("4 задание:");



console.log("5 задание:");



console.log("6 задание:");

let x = 'x'

for (let y = x; y.length < 21;) {
        console.log(y);
        y = x + y;
}

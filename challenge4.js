let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

shoppingList.push('fruit loops');

shoppingList[shoppingList.length - 2] = 'fair trade coffee';

shoppingList.splice(2, 2, 'rice', 'beans');

let shoppingCart = [];
shoppingCart.push(shoppingList.pop());
shoppingCart.unshift(shoppingList.shift());



while(shoppingList.length != 0) {
    shoppingCart.push(shoppingList.pop());
}
shoppingCart.sort();
shoppingCart.reverse();


console.log(shoppingCart.toString());
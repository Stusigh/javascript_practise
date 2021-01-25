let shoppingCart = [];

while(true) {
    let addItem = window.prompt('Add a new item? y or n');
    if(addItem === 'n') {
        break;
    } else {
        itemToAdd = prompt('Please enter an item name to add to your cart');
        shoppingCart.push(itemToAdd);
    }
    
}
console.log(shoppingCart);



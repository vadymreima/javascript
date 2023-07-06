//TASK 1////////////////////////////////////
let productQuantity = Number(prompt('Enter the quantity of goods'));
let productPrice = 147.93;
let summ = productQuantity * productPrice;

console.log('Amount: ', summ);
alert('Amount:' + (summ));






//TASK 2//////////////////////////////////////
let product_price = Number(prompt('Enter price please'));
let discount = product_price * 0.93;
let Summ = product_price - discount;

console.log('price with discount: ', Summ);
alert('Price with promo =' + (Summ));






//TASK 3///////////////////////////////////////
let first = Number(prompt('Enter first number, please:'));
let second = Number(prompt('Enter second number, please:'));
let third = Number(prompt('Enter third number, please:'));
let fourth = Number(prompt('Enter fourth number, please:'));
let fifth = Number(prompt('Enter fifth number, please:'));
let sixth = Number(prompt('Enter sixth number, please:'));

let average = (first + second + third + fourth + fifth + sixth) / 6;

console.log('arithmetic average =', average);
alert('arithmetic average =' + average);
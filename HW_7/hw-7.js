window.onload = function(){

    // - Створіть класс  Сar який має такі значення(рік випуску, модедь, назву, 
// кількість покупок) розмістіть 5 створених обєктів в массив машин

class Car {
    constructor(name, model, year, sales) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.sales = sales;
    }
    carInfoPublic(){
        console.log(`Car ${this.name}, model ${this.model}, graduation year ${this.year}. Sales ${this.sales}`);
    }
    // static myStaticMetods(){
    //     console.log('My static methods')
    // }
};

let carArr = [];

let car1 = new Car('Honda', 'Acord', 2017, 19);
carArr.push(car1);
let car2 = new Car('Subaru', 'Impreza', 2013, 143);
carArr.push(car2);
let car3 = new Car('BMW', 'F30', 2015, 5);
carArr.push(car3);
let car4 = new Car('Lincoln', 'MKX', 2020, 23);
carArr.push(car4);
let car5 = new Car('Lexus', 'L300', 2019, 1);
carArr.push(car5);

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

car1.carInfoPublic();
car2.carInfoPublic();
car3.carInfoPublic();
car4.carInfoPublic();
car5.carInfoPublic();


console.log(carArr);  


// - За допмогою деструктиризації переберіть массив в який виведіть в консоль 
// інфо про модель і кількість покупок

for (const {model, sales} of carArr) {
    console.log(`Модель ${model}, продалась ${sales} разів.`)
}
    



// - створіть html з такими елементами і виберіть їх селекторами
    

    let autoplay = document.querySelector('[autoplay]');
    let elements = document.querySelectorAll('div, p');
    let item = document.querySelectorAll('ul.nav > li');
    let numberItem = document.querySelector('li:nth-child(2)');

    let elementArray = [autoplay, elements, item, numberItem];
    console.log(elementArray);



// - Створити html документ, в якому є теги header, footer, nav 
// вибрати їх селектором, розмістити в масив, а далі за домогою forEach  
// змінити їх innerHtml значення ( тут є 2 вирішення по виборці елементів)

    let arr2 = [];
    let header = document.querySelector('header');
    arr2.push(header);
    let nav = document.querySelector('nav');
    arr2.push(nav);
    let footer = document.querySelector('footer');
    arr2.push(footer);
    console.log(arr2);

    arr2.forEach(item => {item.innerHTML = `Done`});

    // for (let i = 0; i < arr2; i++) {
    //     arr2.length[i].innerHTML = 'Done2';
    // }

}
    








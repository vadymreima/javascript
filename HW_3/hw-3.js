// Task 1

let emptyArr = [];
for(let i=2; i<21; i+=2) {
    emptyArr.push(i);
}
console.log(`emptyArr is full ${emptyArr}`)



let emptyArr2 = [];
for (let i = 2; i < 21; i++) {
    if(i % 2 == 0){
        emptyArr2.push(i)
    }
}
console.log(`emptyArr2 is full ${emptyArr2}`)





// Task 2

let box1 = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove",];
let box2 = [];
for (let i=0; i<box1.length; i++){
    if (box1[i]=="Keep"){
        box2.push(box1[i]);
    }
}
console.log(box2)





// Task 3

let bag = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]
for (let i = 0; i < bag.length; i += 1){
    if(bag[i] < 0){
        bag[i] = 0
    }
}
console.log(bag)


let bag2 = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]
for (let i = 0; i < bag2.length; i += 1){
    bag2[i] = bag2[i] < 0 ? 0 : bag2[i]
    }
console.log(bag2)



// Task 4

let days = ["Понеділок", "Середа", "Неділя"]
let plans = ["Урок 03", "Урок 04", "Вихідни"]

for(let i=0; i < days.length; i++){
    console.log(`Сьогодні ${days[i]} y вас ${plans[i]}`)
}



// Task 5

let firs = Number(prompt('Write your first number:'))
let operator = prompt('What are you want do? ( + or - or * or /): ')
let second = Number(prompt('Write your second number:'))
switch(operator){
    case'+':
        console.log(firs + second);
        break;
    case'-':
        console.log(firs - second);
        break;
    case'*':
        console.log(firs * second);
        break;
    case'/':
        console.log(firs / second);
        break;
    default:
        console.log('ERROR 400')
}
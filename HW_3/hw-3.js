let CocaCola = [];

for(let i=2; i<100; i+=2) {
    CocaCola.push(i);
}
console.log(CocaCola)








let box1 = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove",];
let box2 = [];
for (let i=0; i<box1.length; i+=1){
    if (box1[i]==="Keep"){
        box2.push(box1[i]);
    }
}
console.log(box2)







let bag = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]
for (let i = 0; i < bag.length; i += 1){
    if(bag[i] < 0){
        bag[i] = 0
    }
}
console.log(bag)






let days = ["Понеділок", "Середа", "Неділя"]
let plans = ["Урок 03", "Урок 04", "Вихідни"]

for(let i=0; i<days.length; i+=1){
    console.log(`Сьогодні ${days[i]} y вас ${plans[i]}`)
}










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
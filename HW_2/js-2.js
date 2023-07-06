/////////////////////////////////////////////////////////////
let user_age = prompt('age');

age = user_age >= 30 ? true : false;
console.log(age);
/////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
let login = prompt('input your login:')

let password = prompt('input your password:')

if (login == 'admin' && password == '1234'){
    console.log('welcome to system')
}else{
    console.log('login or password is not correct') 
}
/////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
let day = prompt('ведіть назву дня: ')
switch (day.toLowerCase()){
    case'четверг':
        console.log(`Сьогодні ${day} i в тебе урок о 19:00`)
        break;
    case 'понеділок':
    case 'вівторок':
    case 'середа':
    case 'пятниця':
    case 'субота':
        console.log(`Сьогодні ${day} i в тебе немає уроку о 19:00`);
        break;
}
/////////////////////////////////////////////////////////////









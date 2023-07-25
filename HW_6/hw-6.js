// - Створити функцію яка повертає сторіччя, функція отримує рік

function getCentury (year){
    return Math.floor(year / 100) + 1;
}
console.log(getCentury(1175));

///////// OR /////////

let year2 = 1993;
let century = getCentury(year2) + 1;
console.log(century);






// - Реалізуйте гру камінь- нижниці - бумага за допомогою методів розглянутих на уроці

function game() {
    const choices = ['папір', 'камінь', 'ножиці'];
    const playerChoice = prompt('Що вибираєш: папір, ножиці чи камінь').toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    alert(`Ти обрав: ${playerChoice}, компютер обрав ${computerChoice}`);
  
    if (playerChoice === computerChoice) {
      alert('Нічія!');
    } else if (
        (playerChoice === 'ножиці' && computerChoice === 'папір') || (playerChoice === 'камінь' && computerChoice === 'ножиці') || (playerChoice === 'папір' && computerChoice === 'камінь')
    ) {
      alert('Гравець виграв!');
    } else {
      alert('Комп`ютер виграв!');
    }
  }
  game();
  




// - Створити функцію яка отримує массив і тип.В функції  з массиву вибираються  всі типи що були передані  і повертаються новим массивом

const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true,'false']];

function filterArr(arr, type) {
    return arr.filter(i => typeof i === type);
  }

let newArray = filterArr(sort, 'string');
console.log(newArray)
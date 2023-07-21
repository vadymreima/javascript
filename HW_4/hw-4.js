// ЗАДАЧА №1

let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

function getAnimalFn(argument, item) {
    if (item == "first") {
        console.log(argument[0]);
    }
    if (item == "last") {
        console.log(animals[argument.length - 1])
    }
}
getAnimalFn(animals, 'first')
getAnimalFn(animals, 'last')





// ЗАДАЧА №2

let smileArr = [':)', '=)',':)', '=)',':)', '=)'];

function changeSmile(newSmile){
    for(i = 0; i < smileArr.length; i++){
        if(smileArr[i] == ':)') {
            smileArr[i] = newSmile;
        }
    }
    console.log(smileArr);
}
changeSmile('*')



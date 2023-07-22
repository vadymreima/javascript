// ЗАДАЧА №1

let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let animals1 = ['cat1', 'cow1', 'fish1', 'chicken1', 'dog1', 'pig1'];

function getAnimalFn(animalsArr, item) {
    if (item == 'first') {
        console.log(animalsArr[0]);
    }
    else if (item == 'last') {
        console.log(animalsArr[animalsArr.length - 1])
    }
        if ( item != 'first') {
            console.log('error')
        }
        else if ( item != 'last') {
            console.log('error')
        }
}
getAnimalFn(animals, 'last')








// ЗАДАЧА №2

let smile = [':)', '=)',':)', '=)',':)', '=)'];
let smileMore = [':)', '=)',':)', '=)',':)', '=)', ':)', ];

function changeSmile(newSmile, smileArr){
    for(i = 0; i < smileArr.length; i++){
        if(smileArr[i] == ':)') {
            smileArr[i] = newSmile;
        }
    }
    console.log(smileArr);
}
changeSmile('=)))', smile)
changeSmile('=))))))))))))', smileMore)




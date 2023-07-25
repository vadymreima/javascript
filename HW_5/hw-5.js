
function FilmMakerConstructor (nameFilm, relizAge, rating){
     this.nameFilm = nameFilm,
     this.relizAge = relizAge,
     this.rating = rating;
}

FilmMakerConstructor.prototype.giveInfo = function(){
    console.log(`Name fiml ${this.nameFilm}, his data relize ${this.relizAge} and his reting ${this.rating}`);
}
let firstFilm = new FilmMakerConstructor('SOUND OF FREEDOM', 2022, '74');
firstFilm.giveInfo();

let filmArr = [];
let Film1 = new FilmMakerConstructor('OPPENHEIMER', 2023, '94');
let Film2 = new FilmMakerConstructor('THEY CLONED TYRONE', 2017, '59');
let Film3 = new FilmMakerConstructor('THE FLASH', 2020, '63');
let Film4 = new FilmMakerConstructor('LEAVE NO TRACE', 2021, '81');
let Film5 = new FilmMakerConstructor('GOOD LUCK', 2019, '49');
filmArr = filmArr.concat(Film1, Film2, Film3, Film4, Film5);

let sortPopular = function(Arr){
    Arr.sort((a, b) => a.rating - b.rating);
    return Arr;
}
console.log(sortPopular(filmArr));
sortPopular(filmArr);









let title = ['OPPENHEIMER', 'LEAVE NO TRACE', 'GOOD LUCK', 'THE FLASH', 'THEY CLONED TYRONE', 'SOUND OF FREEDOM'];
let year = [2022, 2023, 2017, 2020, 2021, 2019];

let listArr = [];
for (let i = 0; i < year.length; i++) {
    let objectVideo = {
        title: title[i],
        year: year[i]
    }
    listArr.push(objectVideo);
  }
console.log(listArr);

function sortYear(array, year){
    return array.filter(function(objectVideo){
        return objectVideo.year == year;
    });
}
console.log(sortYear(listArr, 2021));
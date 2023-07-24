
function FilmMakerConstructor (nameFilm, relizAge, rating){
     this.nameFilm = nameFilm,
     this.relizAge = relizAge,
     this.rating = rating;
}

FilmMakerConstructor.prototype.giveInfo = function(){
    console.log(`Name fiml ${this.nameFilm}, his data relize ${this.relizAge} and his reting ${this.rating}`);
}
const firstFilm = new FilmMakerConstructor('SOUND OF FREEDOM', 2022, '74');
firstFilm.giveInfo();

const filmArr = [];
const Film1 = new FilmMakerConstructor('OPPENHEIMER', 2023, '94');
filmArr.push(Film1)
const Film2 = new FilmMakerConstructor('THEY CLONED TYRONE', 2017, '59');
filmArr.push(Film2)
const Film3 = new FilmMakerConstructor('THE FLASH', 2020, '63');
filmArr.push(Film3)
const Film4 = new FilmMakerConstructor('LEAVE NO TRACE', 2021, '81');
filmArr.push(Film4)
const Film5 = new FilmMakerConstructor('GOOD LUCK', 2019, '49');
filmArr.push(Film5)
console.log(filmArr);

let sortPopular = function(Arr){
    Arr.sort((a, b) => a.rating - b.rating);
    return Arr;
}
console.log(sortPopular(filmArr))










let films = ['OPPENHEIMER', 'LEAVE NO TRACE', 'GOOD LUCK', 'THE FLASH', 'THEY CLONED TYRONE', 'SOUND OF FREEDOM'];
let year = [2022, 2023, 2017, 2020, 2021, 2019];

let listArr = [];
for (let i = 0; i < year.length; i++) {
    let objectVideo = {
        title: films[i],
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

console.log("hello!");
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const result = moviesArray.map((film) => film.director);

  //Bonus: Clean without duplicates =>
  const cleanList = result.filter((director,index) => result.indexOf(director) === index)
  return cleanList;

};
console.log("1. Clean list:");
console.log(getAllDirectors(movies));
console.log("---------------------------------------------------------------");


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const movieDirector = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const dramaMovies = movieDirector.filter((movieGenre) =>
    movieGenre.genre.includes("Drama")
  );
  return dramaMovies;
};
console.log(howManyMoviesExtended(movies));
console.log("----------------------------------------------------------------");


// V02 - Simplified - TODO EN UNA SOLA VARIABLE DENTRO DE LA FUNCION CON EL NOMBRE DE DICHA VARIABLE dramaMovies

/*const howmanyMovies = (moviesArray) => {
  const dramaMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return dramaMovies;
};*/

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
    return 0;
};
let result = 0;
moviesArray.forEach(movie => {
    if (movie.score) result += movie.score;
});
return parseFloat((result/moviesArray.length).toFixed(2));
    
}
console.log(scoresAverage(movies));

//VO2--------------------------------------------
/*const scoresAverage1 = (moviesArray) =>{
  let totalScores = 0;
  const scores = moviesArray.map((movie) => movie.score);

  for (let i = 0; i <scores.length; i++){
      totalScores = scores[i] + totalScores
  }
  const totalMovieScore = totalScores / moviesArray.length;
  return totalMovieScore.toFixed(2);    
}

console.log(scoresAverage1(movies));
*/


/*
function moviesAverageOfDirector(array, director) {
  let moviesDirector = array.filter((films) => films.director == director);
  let sumScore = moviesDirector.reduce(function(acc,films) {
    return acc + films.score
  },0);

  let scoreAverage = sumScore / moviesDirector.length;
  return  Math.round (scoreAverage * 100) /100;

}
*/ 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes ("Drama"));
    return scoresAverage(dramaMovies);
};
console.log(dramaMoviesScore(movies));
 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const year = moviesArray.filter((movie) => movie.year);
  let orderByYear = year.sort((a,b) => (a.year - b.year));
  return year;
}
console.table(orderByYear(movies));

//VO2---------------
function orderByYear1(moviesArray) {
  const copyOfMovies = moviesArray.map((movie) => movie);

 copyOfMovies.sort((a,b) => {
  if (a.year > b.year) return a.year - b.year;
  if (a.year < b.year) return a.year - b.year;
  else return a.title.localeCompare(b.title);
 });

  return copyOfMovies
}

console.table(orderByYear1(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//V01-------------------------------
function orderAlphabetically(moviesArray) {
  const alphabet = moviesArray.map((movie) => movie.title).sort().slice(0,20);
      
  return alphabet
}

console.table(orderAlphabetically(movies));

//VO2--------------------------------------
const orderAlphabetically1 = (moviesArray) => {
  return moviesArray.map((movie) => movie.title).sort().slice(0,20)
};
console.table(orderAlphabetically1(movies));

  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

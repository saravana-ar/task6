class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  const theLifeOfThiru = new Movie("THE LIFE OF THIRU", "THIRU Productions", "PG-13");
  
  const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3"),
    new Movie("Movie4", "Studio4", "PG"),
  ];
  
  const pgMovies = Movie.getPG(moviesArray);
  
  console.log(theLifeOfThiru); 
  console.log(pgMovies);     
  
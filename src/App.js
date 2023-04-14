import "./App.css";
import movies from "./data/movies";

function App() {
  const movieOfTheDay = movies[0]; // TODO increment to the next day magically
  const allMoviesEver = ['Avatar', 'John Wick', 'Jurassic Park']; // TODO pull from API
  const guessTracker = []; // TODO use state


  const onGuess = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.table(formData);
    const isRight = formData.guess.toLowerCase() === movieOfTheDay.title.toLowerCase()
    guessTracker.push({...formData, isRight}); // TODO eventually do statistics (how many guesses to get right on average, etc)
    if(isRight) {
      // TODO display failed and successful guesses
      alert("yay");
    }
    else {
      alert("Oh no")
    }
  }

  const allMoviesEverOptions = allMoviesEver.map(movie => (<option value={movie} key={movie}/>))

  const gifs = movieOfTheDay.gifs.map(gif => (<img
    src={gif.src}
    className="gif"
    key={gif.src}
    alt={gif.alt}
  />))
  return (
    <div className="App">
      <header className="App-header">
        <p>🎬</p>
        <p>Giffish</p>
      </header>
      <main>
        <div className="gif-section">
         {gifs}
        </div>
        <div className="guess-section"></div>
        <div className="search-bar-section">
          <form onSubmit={onGuess}>
            <input list="movies" name="guess" />
            <datalist id="movies">
              {allMoviesEverOptions}
            </datalist>
            <input type="submit" />
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;

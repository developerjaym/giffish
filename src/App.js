import "./App.css";
import movies from "./data/movies";

function App() {
  const movieOfTheDay = movies[0]; // TODO increment to the next day magically

  const onGuess = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.table(formData);
    if(formData.guess.toLowerCase() === movieOfTheDay.title.toLowerCase()) {
      alert("yay");
    }
  }

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
              <option value="John Wick" />
              <option value="Jurassic Park" />
            </datalist>
            <input type="submit" />
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;

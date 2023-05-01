import { useState } from "react";
import "./App.css";
import movies from "./data/movies";

// components
import Header from "./components/Header/Header.js"

function App() {
  const [guesses, setGuesses] = useState([]);
  const [errors, setErrors] = useState([]);
  const [movieOfTheDay, setMovieOfTheDay] = useState(
    movies[Math.floor(Math.random() * movies.length)]
  );
  const allMoviesEver = movies.map((movie) => movie.title); // TODO pull from API

  const onGuess = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    if (guesses.map((guess) => guess.guess).includes(formData.guess)) {
      setErrors([
        ...errors,
        {
          alt: `You already guessed that`,
          src: "https://media.giphy.com/media/8PSrxF5OrHIBPJDS86/giphy.gif",
        },
      ]);
      return;
    } else {
      setErrors([]);
    }
    console.table(`formData: `, formData);
    const isRight =
      formData.guess.toLowerCase() === movieOfTheDay.title.toLowerCase();
    if (isRight) {
      setMovieOfTheDay(movies[Math.floor(Math.random() * movies.length)])
    }
    setGuesses([...guesses, { ...formData, isRight }]);
    console.table(`guesses: `, guesses);
    e.target.reset();
  };

  const allMoviesEverOptions = allMoviesEver.map((movie) => (
    <option value={movie} key={movie} />
  ));

  const gifs = movieOfTheDay.gifs.map((gif) => (
    <img src={gif.src} className="gif" key={gif.src} alt={gif.alt} />
  ));
  return (
    <div className="App">
        <Header></Header>
      <main>
        <div className="gif-section">{gifs}</div>
        <section className="guess-section">
          <ul className="no-bullets">
            {guesses.map((guess) => (
              <li key={`${guess.guess} + ${crypto.randomUUID()}`}>
                {guess.guess} {guess.isRight ? "✅" : "❌"}
              </li>
            ))}
          </ul>
        </section>
        <section className="error"></section>
        <div className="search-bar-section">
          <form onSubmit={onGuess}>
            <input list="movies" name="guess" minLength={1} required />
            <datalist id="movies">{allMoviesEverOptions}</datalist>
            <input type="submit" />
          </form>
          <ul className="no-bullets">
            {errors.map((error) => (
              <li key={`${error.alt} + ${crypto.randomUUID()}`}>
                <img
                  src={error.src}
                  className="gif"
                  key={error.src}
                  alt={error.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import StarRating from "./StarRating";
import { use } from "framer-motion/client";
const KEY = "f84fc31d";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function CineLog() {
  const [query, setQuery] = useState("");
  const [SearchMovie, setSearchMovie] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedID, setSelectedID] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [watched, setWatched] = useState([]);
  const [isWatching, setIsWatching] = useState(false);

  function handleSelectMovie(id) {
    setSelectedID((selectedID) => (id === selectedID ? null : id));
  }

  function handleCloseMovie(id) {
    setSelectedID(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Something went wrong");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found!");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <div className="cineL-body">
      <div className="cineL-head">
        <Nav
          setSearchMovie={setSearchMovie}
          query={query}
          setQuery={setQuery}
          setIsWatching={setIsWatching}
        />
        {isWatching ? (
          <>
            {/* <WatchedSummary watched={watched} /> */}
            <WatchedList
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          </>
        ) : (
          <>
            {SearchMovie ? (
              <div className="cineL-disp-details">
                <div>
                  {isLoading && <Loader />}
                  {!isLoading && !error && !isWatching && (
                    <MovieList
                      movies={movies}
                      onSelectMovie={handleSelectMovie}
                      selectedID={selectedID}
                    />
                  )}
                  {error && <ErrorMessage message={error} />}
                </div>
                <div>
                  {selectedID && !isWatching && (
                    <MovieDetails
                      selectedID={selectedID}
                      onCloseMovie={handleCloseMovie}
                      setError={setError}
                      onAddWatched={handleAddWatched}
                      watched={watched}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="cineL-disp">
                <img
                  id="cl-head-img"
                  src="https://cdn.pixabay.com/photo/2022/09/22/00/42/mountains-7471423_1280.jpg"
                  alt=""
                ></img>
                <img
                  id="cl-head-img"
                  src="https://cdn.pixabay.com/photo/2022/08/25/17/02/fantasy-7410809_1280.jpg"
                  alt=""
                ></img>
                <div id="cl-movies-disp">
                  <img
                    className="cl-movie-start"
                    src="https://m.media-amazon.com/images/M/MV5BMzgxZTNhYjAtYmM1OC00NjVlLThiYTAtZmFjYjQwOTZiMjcyXkEyXkFqcGdeQXVyMjQ5NjgwMjA@._V1_SX300.jpg"
                    alt=""
                  ></img>
                  <img
                    className="cl-movie-img"
                    src="https://m.media-amazon.com/images/M/MV5BNzY0ZTlhYzgtOTgzZC00ZTg2LTk4NTEtZDllM2E2NGE5Njg2XkEyXkFqcGc@._V1_SX300.jpg"
                    alt=""
                  ></img>
                  <img
                    className="cl-movie-img"
                    src="https://m.media-amazon.com/images/M/MV5BMTkxNDc3OTcxMV5BMl5BanBnXkFtZTgwODk2NjAzOTE@._V1_SX300.jpg"
                    alt=""
                  ></img>{" "}
                  <img
                    className="cl-movie-img"
                    src="https://m.media-amazon.com/images/M/MV5BOGZjZDk4YTYtMjcyMS00ZTg1LWE5NWUtZDI5M2U4ZDc5MTc5XkEyXkFqcGc@._V1_SX300.jpg"
                    alt=""
                  ></img>{" "}
                  <img
                    className="cl-movie-img"
                    src="https://m.media-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_SX300.jpg"
                    alt=""
                  ></img>{" "}
                  <img
                    className="cl-movie-img"
                    src="https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg"
                    alt=""
                  ></img>{" "}
                  <img
                    className="cl-movie-img"
                    src="https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_SX300.jpg"
                    alt=""
                  ></img>
                  <img
                    className="cl-movie-end"
                    src="https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
                    alt=""
                  ></img>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Nav({ setSearchMovie, query, setQuery, setIsWatching }) {
  const [isSearching, setIsSearching] = useState(false);
  const [movies, setMovies] = useState([]);
  return (
    <div className="cl-nav">
      <nav className="cl-navbar">
        <YourMovies setIsWatching={setIsWatching} />
        {isSearching ? (
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Search
              query={query}
              setQuery={setQuery}
              setSearchMovie={setSearchMovie}
              setIsWatching={setIsWatching}
            />
            <NumResults movies={movies} />
          </div>
        ) : (
          <div style={{ height: " 5rem", padding: "0 3.2rem" }}>
            <img
              onClick={() => setIsSearching(true)}
              style={{
                height: "25px",
                width: "25px",
                marginTop: "10px",
              }}
              src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.svg"
              alt=""
            ></img>
          </div>
        )}
        <Logo />
      </nav>
    </div>
  );
}

function Logo() {
  return (
    <div className="cineL-logo">
      <span role="img">🎬</span>
      <h1>CineLog</h1>
    </div>
  );
}

function YourMovies({ setIsWatching }) {
  return (
    <div onClick={() => setIsWatching(true)} className="cineL-logo">
      <span role="img">🍿</span>
      <h1>Your Movies</h1>
    </div>
  );
}

function NumResults({ movies }) {
  return (
    <p className="cineL-num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Search({ query, setQuery, setSearchMovie, setIsWatching }) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) {
          setSearchMovie(true);
          setIsWatching(false);
          return;
        }

        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="cineL-search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

function Loader() {
  return <p className="cineL-loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="cineL-error">
      <span>⛔️</span> {message}
    </p>
  );
}

function MovieList({ movies, onSelectMovie, selectedID }) {
  const containerMaxWidth = selectedID ? "80rem" : "155rem";
  const slidesPerView = selectedID ? "3" : "6";
  const marginTop = selectedID ? "18%" : "10%";
  console.log(movies);
  return (
    <div style={{ marginTop: marginTop }}>
      <ImageCarousel
        Image={movies}
        getItemContent={(movie) => ({
          src: movie.Poster, // Extract Poster for display
          alt: movie.Title, // Extract Title for alt text
          id: movie.imdbID, // Extract imdbID for click handling
        })}
        slidesPerView={slidesPerView}
        Imgwidth={"180px"}
        Imgheight={"270px"}
        slideShadow={"-20px 20px 15px rgb(0,0,0,0.3)"}
        SwiperSlideWidth={"27rem"}
        SwiperSlideHeight={"42rem"}
        containerMaxWidth={containerMaxWidth}
        slideRotate={0}
        slideStretch={0}
        slideDepth={0}
        slideModifier={2.5}
        initialSlide={"0"}
        handleClick={onSelectMovie}
      />
    </div>
  );
}

function MovieDetails({
  selectedID,
  onCloseMovie,
  setError,
  onAddWatched,
  watched,
}) {
  console.log(selectedID);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedID, // Make sure to pass the selectedID
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie); // Add movie to watched list
    onCloseMovie();

    // setAvgRating(Number(imdbRating));
    // setAvgRating((avgRating) => (avgRating + userRating) / 2);
  }

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
          console.log("Close");
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
          );
          if (!res.ok) throw new Error("Something went wrong");
          const data = await res.json();
          setMovie(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [selectedID]
  );

  console.log(movie);

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = `CineLog`;
      };
    },
    [title]
  );
  return (
    <div className="cineL-details">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cineL-details-long">
          <header className="cineL-details-overview">
            {/* <button className="cineL-btn-back" onClick={onCloseMovie}>
              &larr;
            </button> */}
            <img
              style={{ width: "30%" }}
              src={poster}
              alt={`Poster of ${movie} movie`}
            ></img>
            <div>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️ </span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section id="cineL-details-section">
            <div>
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                    color="#DAA520"
                  />
                  {userRating > 0 && (
                    <button className="cineL-btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by: {director}</p>
          </section>
        </div>
      )}
    </div>
  );
}

// function WatchedSummary({ watched }) {
//   const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
//   const avgUserRating = average(watched.map((movie) => movie.userRating));
//   const avgRuntime = average(watched.map((movie) => movie.runtime));
//   return (
//     <div className="cineL-summary">
//       <h2>Movies you watched</h2>
//       <div>
//         <p>
//           <span>#️⃣</span>
//           <span>{watched.length} movies</span>
//         </p>
//         <p>
//           <span>⭐️</span>
//           <span>{avgImdbRating}</span>
//         </p>
//         <p>
//           <span>🌟</span>
//           <span>{avgUserRating}</span>
//         </p>
//         <p>
//           <span>⏳</span>
//           <span>{avgRuntime} min</span>
//         </p>
//       </div>
//     </div>
//   );
// }

function WatchedList({ watched, onDeleteWatched }) {
  return (
    <ul className="cineL-list">
      {watched.map((movie) => (
        <li id="CineL-listItem" key={movie.imdbID}>
          <div>
            <img
              style={{ height: "150px", width: "120px" }}
              src={movie.poster}
              alt={`${movie.title} poster`}
            />
          </div>
          <div id="cL-watchedmoviedetails">
            <h3>{movie.title}</h3>
            <div>
              <p>
                <span>IMDb rating: ⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>Your Rating: 🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>Watch Time ⏳:</span>
                <span>{movie.runtime} min</span>
              </p>
            </div>
            <button
              className="cineL-btn-delete"
              onClick={() => onDeleteWatched(movie.imdbID)}
            >
              Remove from Watchlist
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

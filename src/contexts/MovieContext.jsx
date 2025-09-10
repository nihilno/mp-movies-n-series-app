import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

function MovieProvider({ children, initialData }) {
  const [searchedQuery, setSearchedQuery] = useState("");

  const buildMovieData = (dataArray) => ({
    data: dataArray,
    trending: dataArray.filter((movie) => movie.isTrending),
    recommended: dataArray.filter((movie) => !movie.isTrending),
    movies: dataArray.filter((movie) => movie.category === "Movie"),
    series: dataArray.filter((movie) => movie.category === "TV Series"),
    bookmarkedMovies: dataArray.filter(
      (movie) => movie.category === "Movie" && movie.isBookmarked,
    ),
    bookmarkedSeries: dataArray.filter(
      (movie) => movie.category === "TV Series" && movie.isBookmarked,
    ),
  });

  const [movieData, setMovieData] = useState(() =>
    initialData?.data ? initialData : buildMovieData(initialData || []),
  );

  function toggleBookmark(title) {
    const updatedData = movieData.data.map((movie) =>
      movie.title === title
        ? { ...movie, isBookmarked: !movie.isBookmarked }
        : movie,
    );
    setMovieData(buildMovieData(updatedData));
  }

  return (
    <MovieContext.Provider
      value={{ ...movieData, toggleBookmark, searchedQuery, setSearchedQuery }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovies must be used within MovieProvider");
  return context;
}

//eslint-disable-next-line
export { MovieProvider, useMovies };

import { useMovies } from "../../contexts/MovieContext";
import Card from "../ui/Card";

function Movies() {
  const { movies } = useMovies();

  return (
    <>
      <Card title="Movies" placeholder="Search for movies" data={movies}></Card>
    </>
  );
}

export default Movies;

import { useMovies } from "../../contexts/MovieContext";
import Card from "../ui/Card";

function Bookmarked() {
  const { bookmarkedMovies, bookmarkedSeries } = useMovies();

  return (
    <>
      <Card
        title="Bookmarked Movies"
        placeholder="Search for bookmarked shows"
        data={bookmarkedMovies}
      ></Card>
      <Card
        title="Bookmarked TV Series"
        placeholder="Search for bookmarked shows"
        data={bookmarkedSeries}
        input={false}
      ></Card>
    </>
  );
}

export default Bookmarked;

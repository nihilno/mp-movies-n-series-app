import Card from "../ui/Card";
import { useMovies } from "../../contexts/MovieContext";

function Series() {
  const { series } = useMovies();

  return (
    <>
      <Card
        title="TV Series"
        placeholder="Search for TV series"
        data={series}
      ></Card>
    </>
  );
}

export default Series;

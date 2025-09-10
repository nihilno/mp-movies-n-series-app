import { useMovies } from "../../contexts/MovieContext";

import Trending from "./Trending";
import Card from "../ui/Card";

function Hompage() {
  const { trending, recommended } = useMovies();

  return (
    <>
      <Card
        title="Recommended for you"
        placeholder="Search for movies or TV series"
        data={recommended}
      >
        <Trending trending={trending} />
      </Card>
    </>
  );
}

export default Hompage;

import { useMovies } from "../../contexts/MovieContext";

import CardItem from "./CardItem";
import SearchBar from "./SearchBar";

function Card({
  title = "Shows",
  data = [],
  placeholder = "Search for shows",
  input = true,
  children,
}) {
  const { searchedQuery } = useMovies();

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchedQuery.toLowerCase()),
  );

  return (
    <>
      <section className="flex flex-col space-y-5 lg:space-y-8 lg:pl-7">
        {input && <SearchBar placeholder={placeholder} />}
        <>{children}</>

        <h1
          className={`text-xl sm:mt-2 sm:text-3xl md:mt-4 lg:mt-8 xl:text-4xl 2xl:text-5xl ${filteredData.length === 0 ? "hidden" : ""}`}
        >
          {searchedQuery.length > 0 ? (
            <>
              Found {filteredData.length} result(s) for
              <span className="text-[var(--clr-red)]"> {searchedQuery} </span>
              in {title}
            </>
          ) : (
            title
          )}
        </h1>

        <div className="gap grid grid-cols-2 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4">
          {filteredData?.map((cardItem, index) => (
            <CardItem cardItem={cardItem} key={cardItem.title || index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Card;

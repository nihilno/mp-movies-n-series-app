import { useMovies } from "../../contexts/MovieContext";
import SearchIcon from "../../images/icon-search.svg";

function SearchBar({ placeholder }) {
  const { searchedQuery, setSearchedQuery } = useMovies();

  return (
    <section className="lg:pt-4">
      <div className="relative mt-6">
        <div className="relative w-full pl-12 xl:pl-14 2xl:pl-16">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full py-2 pr-5 text-base caret-[var(--clr-red)] outline-none placeholder:text-base sm:text-xl sm:placeholder:text-xl xl:text-2xl xl:placeholder:text-2xl 2xl:text-4xl 2xl:placeholder:text-4xl"
            value={searchedQuery}
            onChange={(e) => setSearchedQuery(e.target.value)}
          />

          <span
            className={`absolute bottom-0 left-0 h-[1px] bg-[var(--clr-icons)] transition-all duration-300 ${
              searchedQuery ? "w-bar translate-x-12 opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <img
          src={SearchIcon}
          alt="Search"
          className="pointer-events-none absolute top-1/2 left-0 w-7 -translate-y-1/2 transform xl:w-9 2xl:w-11"
        />
      </div>
    </section>
  );
}

export default SearchBar;

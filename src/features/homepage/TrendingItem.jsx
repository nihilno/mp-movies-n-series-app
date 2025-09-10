import { useMovies } from "../../contexts/MovieContext";

import MovieIcon from "../../images/icon-category-movie.svg";
import SeriesIcon from "../../images/icon-category-tv.svg";
import BookmarkButton from "../ui/BookmarkButton";
import HoverPlay from "../ui/HoverPlay";

function TrendingItem({ trendingMovie }) {
  const { year, category, rating, title, isBookmarked } = trendingMovie;
  const { toggleBookmark } = useMovies();

  return (
    <div className="trending group relative shrink-0 cursor-pointer rounded-tl-lg rounded-tr-lg select-none">
      <picture className="transform duration-300 ease-in-out group-hover:opacity-50">
        <source
          media="(min-width: 768px)"
          alt={`Trending: ${title}`}
          srcSet={`/${trendingMovie.thumbnail?.trending.large}`}
        />
        <img
          src={`/${trendingMovie.thumbnail?.trending.small}`}
          alt={`Trending: ${title}`}
          className="h-full w-full rounded-tl-lg rounded-tr-lg"
        />
      </picture>

      <HoverPlay className="z-10 opacity-100" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full rounded-b-lg bg-gradient-to-t from-black/70 to-transparent"></div>

      <div className="absolute bottom-0 left-0 space-y-1 px-4 py-3 sm:p-5">
        <ul className="flex items-center gap-2 text-[10px] sm:text-base lg:text-xs xl:text-lg">
          <li>{year}</li>
          <span>&#8226;</span>
          <li className="flex items-center gap-2">
            <img
              src={category === "Movie" ? MovieIcon : SeriesIcon}
              alt={category}
            />
            {category}
          </li>
          <span>&#8226;</span>
          <li>{rating}</li>
        </ul>
        <h2 className="text-sm font-normal sm:text-xl lg:text-lg xl:text-3xl">
          {title}
        </h2>
      </div>

      <BookmarkButton
        isBookmarked={isBookmarked}
        onToggle={() => toggleBookmark(title)}
      />
    </div>
  );
}

export default TrendingItem;

import { useMovies } from "../../contexts/MovieContext";

import MovieIcon from "../../images/icon-category-movie.svg";
import SeriesIcon from "../../images/icon-category-tv.svg";
import BookmarkButton from "./BookmarkButton";
import HoverPlay from "../ui/HoverPlay"; // import HoverPlay

function CardItem({ cardItem }) {
  const { title, category, year, rating, isBookmarked } = cardItem;
  const { toggleBookmark } = useMovies();

  return (
    <div className="group relative w-full max-w-[328px] cursor-pointer space-y-2 overflow-hidden select-none xl:max-w-120">
      <picture className="transform duration-300 ease-in-out group-hover:opacity-50">
        <source
          media="(min-width: 768px)"
          alt={`Trending: ${title}`}
          srcSet={`/${cardItem.thumbnail?.regular.large}`}
        />
        <img
          src={`/${cardItem.thumbnail?.regular.small}`}
          alt={`Trending: ${title}`}
          className="rounded-tl-lg rounded-tr-lg"
        />
      </picture>

      {/* HoverPlay overlay positioned absolutely, appears on hover */}
      <HoverPlay className="z-10 opacity-100" />

      <div className="space-y-1">
        <ul className="flex items-center gap-2 text-[10px] opacity-80 sm:text-base lg:text-xs xl:text-base">
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
        <h2 className="text-sm font-normal sm:text-xl lg:text-lg xl:text-xl">
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

export default CardItem;

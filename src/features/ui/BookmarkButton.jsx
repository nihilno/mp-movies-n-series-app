import BookmarkTrue from "../../images/icon-bookmark-full.svg";
import BookmarkFalse from "../../images/icon-bookmark-empty.svg";

function BookmarkButton({ isBookmarked, onToggle }) {
  return (
    <div className="absolute top-0 right-0 z-100 px-2 py-1.5 sm:p-5 lg:p-3">
      <div
        className="grid aspect-square w-[32px] cursor-pointer place-items-center rounded-full bg-[var(--clr-bg)]/65 p-2 xl:w-[48px]"
        onClick={onToggle}
      >
        <img
          src={isBookmarked ? BookmarkTrue : BookmarkFalse}
          alt="Press to bookmark"
          className="xl:w-5"
        />
      </div>
    </div>
  );
}

export default BookmarkButton;

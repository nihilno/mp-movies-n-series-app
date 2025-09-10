import iconPlay from "../../images/icon-play.svg";

function HoverPlay({ className = "" }) {
  return (
    <section
      className={`absolute inset-0 hidden place-items-center bg-black/30 group-hover:grid ${className}`}
    >
      <div className="flex items-center gap-3 rounded-full bg-white/25 px-2 py-1.5 md:px-3 md:py-2">
        <img src={iconPlay} alt="Play" className="w-5 md:w-8 lg:w-12" />
        <h3 className="text-sm font-normal md:text-lg lg:text-2xl">Play</h3>
      </div>
    </section>
  );
}

export default HoverPlay;

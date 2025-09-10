import TrendingItem from "./TrendingItem";

function Trending({ trending = [] }) {
  return (
    <section className="space-y-5 lg:space-y-8">
      <h1 className="text-xl sm:mt-2 sm:text-3xl md:mt-4 xl:mt-8 xl:text-4xl 2xl:text-5xl">
        Trending
      </h1>
      <div className="gap flex items-center overflow-x-auto">
        {trending.map((trendingMovie) => (
          <TrendingItem
            trendingMovie={trendingMovie}
            key={trendingMovie.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Trending;

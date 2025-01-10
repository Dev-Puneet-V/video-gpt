import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { topic, movies } = props;
  return (
    <div>
      <p className="font-bold text-4xl">{topic} || Trending Now</p>
      <div>
        <div className="overflow-x-scroll">
          {movies?.map((movie) => {
            return (
              <MovieCard
                img={
                  movie.url ||
                  "https://occ-0-2164-325.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcA03N2P8G7Pnep3ahHLJXFxgxZNtsNzXy2oTZ9vC1zyy7xvgtCbUg1xH8Pj0-ILIz0fkJwUiPKBvXj-mZ2wFUiCCIl3EMzaK3V7g0Njpn38F6lHI9QANL9-PFFag9sE8TASsg.webp"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

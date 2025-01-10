const MovieCard = (props) => {
  const { img } = props;
  return (
    <div
      className="rounded-md h-[300px] w-[100px] hover:h-[310px] hover:w-[110px] transition-all duration-300"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
};

export default MovieCard;

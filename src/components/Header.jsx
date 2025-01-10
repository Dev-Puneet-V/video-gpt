const Header = () => {
  return (
    <>
      <div className="z-10 flex justify-between w-screen p-7 bg-gradient-to-b from-black to-grey absolute">
        <img className="w-[170px]" src="/assets/netflix-icon-large.svg" />
        <button className="w-[80px] h-[40px] bg-white rounded-full font-bold">
          Sign In
        </button>
      </div>
    </>
  );
};

export default Header;

import Auth from "./Auth";
import Header from "./Header";
import MovieList from "./MovieList";
import PrimaryHomeScreen from "./PrimaryHomeScreen";
const Home = () => {
  return (
    <div
      className="relative bg-gradient-to-b from-orange-950 to-white w-screen h-[100vh] bg-gradient-to-r from-black to-grey"
      style={{
        background:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/c26fea09-133d-4b1e-94fc-e2f90d866977/web_tall_panel/IN-en-20250106-TRIFECTA-perspective_f52bdf68-3d33-47dd-8cb6-a027e288fdc9_large.jpg)",
      }}
    >
      <Header />
      <PrimaryHomeScreen />
      <div className="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen flex items-center justify-center">
        <Auth />
      </div>
    </div>
  );
};

export default Home;

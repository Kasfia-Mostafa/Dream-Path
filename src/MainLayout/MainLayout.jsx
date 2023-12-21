import Banner from "../MainPage/Banner/Banner";
import Navbar from "../MainPage/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div className="h-[100vh]">
      <Navbar></Navbar>
     <Banner></Banner>
    </div>
  );
};

export default MainLayout;
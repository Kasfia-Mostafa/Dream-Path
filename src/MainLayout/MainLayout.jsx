import Banner from "../MainPage/Banner/Banner";
import Navbar from "../MainPage/Navbar/Navbar";
import UserSection from "../MainPage/UseSection/UserSection";


const MainLayout = () => {
  return (
    <div className="h-[100vh]">
      <Navbar></Navbar>
     <Banner></Banner>
     <UserSection></UserSection>
    </div>
  );
};

export default MainLayout;
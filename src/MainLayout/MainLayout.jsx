import { Outlet } from "react-router-dom";
import Navbar from "../MainPage/Navbar/Navbar";
import Banner from "../MainPage/Home/Banner/Banner";
import UserSection from "../MainPage/Home/UseSection/UserSection";


const MainLayout = () => {
  return (
    <div className="h-[100vh]">
      <Navbar></Navbar>
      <Banner></Banner>
      <UserSection></UserSection>
     {/* <Outlet></Outlet> */}
    </div>
  );
};

export default MainLayout;
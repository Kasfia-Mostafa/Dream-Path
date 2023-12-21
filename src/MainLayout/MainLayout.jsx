import { Outlet } from "react-router-dom";
import Navbar from "../MainPage/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div className="h-[100vh]">
      <Navbar></Navbar>
     <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
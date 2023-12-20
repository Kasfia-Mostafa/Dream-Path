import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div>
      <div>
        <img
          className="w-[100vw] h-[100vh]"
          src="https://i.ibb.co/7pKmbQP/fotor-ai-2023122022518.jpg"
          alt=""
        />
      </div>
      <div className="absolute top-5">
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Banner;

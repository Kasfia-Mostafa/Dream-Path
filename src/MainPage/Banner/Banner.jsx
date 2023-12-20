import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div>
      <div>
         <div>
        <img
          className="w-[100vw] h-[100vh]"
          src="https://i.ibb.co/7pKmbQP/fotor-ai-2023122022518.jpg"
          alt=""
        />
      </div>
      <div className="absolute text-9xl top-44  right-28 text-white font-extrabold ">
      <h2 >Dream <br /> Path</h2>
      <div>
        <div className="w-40 h-14 bg-white ml-3"></div>
        <h2 className="text-2xl font-bold absolute bottom-3 left-20 text-purple-700">Get Star<span className="text-white">ted</span></h2>
      </div>
      </div>

      {/* Navbar Section */}
      </div>
      <div className="absolute top-5">
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Banner;

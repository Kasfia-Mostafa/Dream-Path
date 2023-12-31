import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <img
            className="w-[100vw] h-[92vh]"
            src="https://i.ibb.co/7pKmbQP/fotor-ai-2023122022518.jpg"
            alt=""
          />
        </div>
        <div className="absolute text-9xl top-80 right-96 text-white font-extrabold ">
          <h2>Dream Path</h2>
          <div>
            <div className="w-40 h-14 bg-white ml-5 my-5"></div>
            <Link to='/login'>
            <h2 className="text-2xl font-bold absolute bottom-8 left-20 text-purple-700">
              Let's Exp<span className="text-white"> lore</span>
            </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

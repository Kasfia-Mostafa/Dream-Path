
const Navbar = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button p-8 text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-80 min-h-full bg-[#080202] text-base-content flex justify-center items-center">
            {/* Sidebar content here */}
           <p className="text-4xl text-black my-2 rounded-sm  bg-gradient-to-tr w-full from-blue-800 via-sky-300 to-violet-500 text-center">Home</p>
           <p className="text-4xl text-black my-2 rounded-sm bg-gradient-to-tr w-full from-blue-800 via-sky-300 to-violet-500 text-center">Home</p>
           <p className="text-4xl text-black my-2 rounded-sm bg-gradient-to-tr w-full from-blue-800 via-sky-300 to-violet-500 text-center">Home</p>
           <p className="text-4xl text-black my-2 rounded-sm bg-gradient-to-tr w-full from-blue-800 via-sky-300 to-violet-500 text-center">Home</p>
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Navbar;

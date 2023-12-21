
const Register = () => {
  return (
    <div className="h-[92vh] flex items-center w-full 
    bg-gradient-to-tr from-purple-950 via-black to-blue-950">
      <div className="w-1/3 mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign Up Now
        </h2>

        <form method="post" action="#">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              name="email"
              id="email"
              type="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              name="password"
              id="password"
              type="password"
            />
          </div>

         

          <div className="flex justify-end">
            <button
              className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
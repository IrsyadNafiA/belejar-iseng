import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-black">
        <h1 className="text-2xl font-bold text-white mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

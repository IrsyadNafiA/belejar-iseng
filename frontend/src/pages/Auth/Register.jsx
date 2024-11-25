import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [newData, setNewData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !newData.username ||
      !newData.displayName ||
      !newData.password ||
      !newData.role
    ) {
      alert("Semua field harus diisi!");
      return;
    }
    try {
      await axios.post("http://localhost:3000/api/register", newData);
      alert("Register Berhasil");
      window.location.href = "/login";
    } catch (error) {
      console.error("error register data: ", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-black">
        <h1 className="text-2xl font-bold text-white mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white font-bold mb-2"
            >
              Username
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
              htmlFor="displayName"
              className="block text-white font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
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
          <div className="mb-4">
            <label htmlFor="role" className="block text-white font-bold mb-2">
              Role
            </label>
            <select
              name="role"
              id="role"
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white rounded"
            >
              <option>Select</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Buat Akun
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

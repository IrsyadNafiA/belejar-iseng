import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/cek-login",
          {
            withCredentials: true,
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
        alert("Anda belum login");
        window.location.href = "/login";
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/logout",
        {},
        {
          withCredentials: true,
        }
      );
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(user);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Selamat datang, {user && user.displayName}</p>
      <p>Role: {user && user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;

import axios from "axios";
import { useEffect, useState } from "react";
import AlertComponent from "../../components/SweetAlert/AlertComponent";

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
        AlertComponent.error(
          "Anda belum login!",
          error.response?.data?.message || "Login terlebih dahulu!"
        );
        setTimeout(() => {
          window.location.href = error.response?.data?.redirect;
        }, 1500);
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
      AlertComponent.error(
        "Anda belum login!",
        error.response?.data?.message || "Login terlebih dahulu!"
      );
      setTimeout(() => {
        window.location.href = error.response?.data?.redirect;
      }, 1500);
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

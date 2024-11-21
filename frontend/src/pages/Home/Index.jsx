import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import BgKantin from "../../assets/images/kantin.jpg";
import Carousel from "../../components/Carousel";

const Home = () => {
  const [kantin, setKantin] = useState([]);

  // Fetch Data Kantin
  useEffect(() => {
    const fetchKantin = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const data = await response.json();
      setKantin(data);
    };
    fetchKantin();
  }, []);

  return (
    <div className="bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.25]"
        style={{ backgroundImage: `url(${BgKantin})` }}
      ></div>

      {/* Hero Section */}
      <div className="h-screen flex justify-center items-center max-w-7xl mx-auto">
        {/* Navbar */}
        <Navbar />
        {/* Overlay Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-6xl font-black">
            Selamat Datang
            <br />
            Di E-Kantin
          </h1>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto py-4 overflow-hidden">
        <h3 className="text-2xl font-bold text-white mb-4">
          List Kantin Sekarang
        </h3>
        <Carousel items={kantin} />
      </div>
    </div>
  );
};

export default Home;

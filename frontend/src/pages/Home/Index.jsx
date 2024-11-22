import { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import BgKantin from "../../assets/images/kantin.jpg";
import Carousel from "../../components/Carousel";
import HomeSection from "../../components/Home/Section";
import Faq from "../../components/Home/Faq";
import { topKantinData } from "../../api/kantinApi";

const Home = () => {
  const [kantin, setKantin] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch Data Kantin
  const topKantin = useCallback(async () => {
    const result = await topKantinData(apiUrl);
    setKantin(result);
  }, [apiUrl]);

  useEffect(() => {
    topKantin();
  }, [topKantin]);

  return (
    <div className="bg-black pb-4">
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
      <HomeSection title="Rekomendasi Kantin">
        <Carousel items={kantin} />
      </HomeSection>
      {/* FAQ Section */}
      <HomeSection title="Tanya Jawab Umum">
        <Faq />
      </HomeSection>
    </div>
  );
};

export default Home;

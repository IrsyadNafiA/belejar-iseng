import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigasi ke slide berikutnya
  function nextSlide() {
    if (currentIndex < items.length / 5 - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  // Navigasi ke slide sebelumnya
  function prevSlide() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <>
      {/* Carousel Container */}
      <div className="relative">
        {/* Track */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${100 * currentIndex}%)`,
          }}
        >
          {items.map((item, index) => (
            <a
              href="#"
              className="flex-none w-1/2 sm:w-1/3 md:w-1/5 p-4"
              key={index} // w-1/5 karena visibleCount = 5
            >
              <div className="bg-gray-200 w-full h-72 rounded-md overflow-hidden hover:scale-105 transition duration-500">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Navigasi */}
        <button
          onClick={prevSlide}
          className="bg-gray-700 text-white p-2 py-8 rounded-lg disabled:opacity-0 absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2"
          disabled={currentIndex === 0}
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-700 text-white px-2 py-8 rounded-lg disabled:opacity-0 absolute top-1/2 -right-4 transform -translate-x-1/2 -translate-y-1/2"
          disabled={currentIndex === items.length / 5 - 1}
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default Carousel;

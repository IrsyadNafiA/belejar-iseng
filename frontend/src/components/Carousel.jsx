import { useState } from "react";

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
            <div
              className="flex-none w-1/5 p-2"
              key={index} // w-1/5 karena visibleCount = 5
            >
              <div className="bg-gray-200 w-full h-64 rounded-md overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi */}
        <div className="absolute inset-x-0 bottom-0 flex justify-between items-center mt-4">
          <button
            onClick={prevSlide}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            ◀ Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            disabled={currentIndex === items.length / 5 - 1}
          >
            Next ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;

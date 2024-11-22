import { useState } from "react";
import faqData from "../../utils/faqObject";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  return (
    <div className="w-full flex flex-col items-start px-2 md:px-0">
      {faqData.map((data) => (
        <div key={data.id} className="w-full flex flex-col gap-2">
          <button
            className="w-full flex justify-between items-center text-white font-bold bg-gray-900 p-4 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out"
            onClick={() => toggleFaq(data.id)}
          >
            <span>{data.question}</span>
            <span className="float-right">
              {openFaq === data.id ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openFaq === data.id ? "max-h-96 mb-2" : "max-h-0"
            }`}
          >
            <p className="text-white font-bold bg-gray-900 p-4 rounded-md">
              {data.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;

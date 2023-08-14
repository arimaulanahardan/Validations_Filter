import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ButtonPath = () => {
  const [isRotated, setIsRotated] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsRotated(!isRotated);
    navigate('/');
  };

  return (
    <div className="mt-8 w-full flex">
      <div className="bg-white rounded-full shadow-lg px-2 py-2 text-gray-700 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200"
      onClick = {handleClick} >
        <div
          className="flex justify-between items-center">
          <div
            className={`transition-transform duration-300 ${isRotated ? "transform rotate-90" : ""
            }`}>
            <AiOutlineArrowLeft size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPath;

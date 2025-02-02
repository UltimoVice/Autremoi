import { useState } from "react";
import { Link } from "react-router-dom";

export const TwoGender = () => {
  const [hoverMale, setHoverMale] = useState(false);
  const [hoverFemale, setHoverFemale] = useState(false);

  const handleHoverMale = () => {
    setHoverMale(!hoverMale);
  };

  const handleHoverFemale = () => {
    setHoverFemale(!hoverFemale);
  };

  return (
    <Link to="/news">
      <div className="flex w-full overflow-hidden py-6">
        <div
          className="w-1/2 h-full p-2 relative mr-1"
          onMouseOver={handleHoverMale}
          onMouseOut={handleHoverMale}
        >
          <div
            className={`cursor-pointer absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black ${
              hoverMale ? "opacity-60" : "opacity-0"
            }`}
          ></div>
          <h2
            className={`text-white font-semibold w-full h-full cursor-pointer flex justify-center items-center absolute text-4xl ${
              hoverMale ? "opacity-100" : "opacity-0"
            }`}
          >
            Abbigliamento uomo
          </h2>
          <img src="src/assets/male.jpg" alt="male" className="w-full h-full" />
        </div>

        <div
          className="w-1/2 h-full p-2 relative ms-1"
          onMouseOver={handleHoverFemale}
          onMouseOut={handleHoverFemale}
        >
          <div
            className={`cursor-pointer absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black ${
              hoverFemale ? "opacity-60" : "opacity-0"
            }`}
          ></div>
          <h2
            className={`text-white font-semibold w-full h-full cursor-pointer flex justify-center items-center absolute text-4xl ${
              hoverFemale ? "opacity-100" : "opacity-0"
            }`}
          >
            Abbigliamento donna
          </h2>

          <img
            src="src/assets/female.jpg"
            alt="female"
            className="w-full h-full"
          />
        </div>
      </div>
    </Link>
  );
};

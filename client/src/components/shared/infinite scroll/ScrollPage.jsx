import Scroll from "./Scroll";
import "./scroll.css";
import { products } from "../../../data";
import { useEffect, useState } from "react";
// import useFetchServer from "../../../hooks/useFetchServer";

const ScrollPage = () => {
  const [speed, setSpeed] = useState(100000);
const [products] = useFetchServer()
//   const handleSpeed0 = () => {
//     setSpeed(0);
//   };

//   const handleSpeedMax = () => {
//     setSpeed(100000);
//   };

// useEffect(() => {
//   console.log(products)
// }, [])


  return (
    <div className="mb-20">
        <div className="text-4xl p-5">
            Prodotti in evidenza
        </div>
    
    <div
    //   onMouseOut={handleSpeedMax}
    //   onMouseOver={handleSpeed0}
      className="my-0 mx-auto px-5 relative max-w-full overflow-hidden"
    >
      <div className="flex flex-wrap relative mb-10">
        <Scroll products={products} speed={speed} setSpeed={setSpeed} />
      </div>
    </div>
    </div>
  );
};

export default ScrollPage;

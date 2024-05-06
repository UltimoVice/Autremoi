import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RightBar.css"


export const RightBar = ({ isBarOpen, setIsBarOpen, children }) => {
  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
  };

  useEffect(() => {
    // Imposta lo scroll del corpo del documento a "hidden" quando il menu è aperto
    if (isBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Ripristina lo scroll del corpo del documento quando il menu è chiuso
      document.body.style.overflow = "auto";
    }

    // Pulisce l'effetto quando il componente viene smontato
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBarOpen]);

  return (
    <>
      <div className={`${isBarOpen} w-10 h-10 absolute top-0 right-0`}>{children}</div>
    </>
    // <div
    //   id="cart"
    //   className={`h-[2000px] ${
    //     isBarOpen
    //       ? "left-0 pointer-events-auto translate-x-0 w-full bg-[rgba(0,0,0,0.6)]"
    //       : "-left-full pointer-events-none translate-x-full"
    //   } transition-all duration-500 absolute top-0 z-50`}
    // >
    //   <div className="transition-opacity duration-200 delay-200 ease-in">
    //     <div className="h-full flex flex-row">
    //       <div className="bg-white h-[2000px] relative pt-28 px-5 pb-10 w-80 z-[3]">
    //         <div className="block absolute top-1">
    //           <button
    //             onClick={toggleBar}
    //             className="cursor-pointer flex items-center h-12 justify-center "
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               fill="currentColor"
    //               className="bi bi-x-lg"
    //               viewBox="0 0 16 16"
    //             >
    //               <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    //             </svg>
    //           </button>
    //         </div>
    //         <div className="overflow-auto h-full">
    //           {children}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

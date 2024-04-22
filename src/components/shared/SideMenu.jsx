// import { useState } from "react";
// import { LiSideMenu } from "./LiSideMenu";
// import { LiSubMenu } from "./LiSubMenu";

// const subMenuElements = {
//   news: ["Novita Uomo", "Novità Donna", "Visualizza Tutto"],
//   man: ["Abbigliamento", "Borse", 'Scarpe', 'Gioielli', 'Accessori',"Visualizza Tutto" ],
//   woman: ["Abbigliamento", "Borse", 'Scarpe', 'Gioielli', 'Accessori',"Visualizza Tutto"],
//   giftIdea: ['Per Lei', 'Per Lui'],
//   collection: ['Autunno/Inverno 2024/25', 'Primavera/Estate 2024', 'Autunno/Inverno 2023/24'],
// };

// export const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
//   const [activeElement, setActiveElement] = useState(null);

//   const toggleSideMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     setActiveElement(null);
//   };

//   const liSubToggle = (elementKey) => {
//     setActiveElement(elementKey == activeElement ? null : elementKey);
//   };

//   return (
//     <div
//       id="sideMenu"
//       className={`h-full ${
//         isMenuOpen
//           ? "left-0 pointer-events-auto translate-x-0 w-full h-[2000px] bg-[rgba(0,0,0,0.6)]"
//           : "-left-full pointer-events-none translate-x-full"
//       } transition-all duration-500 absolute top-0 z-50`}
//     >
//       <div className="transition-opacity duration-200 delay-200 ease-in">
//         <div className="h-full flex flex-row">
//           {/* Primo Menù */}
//           <div className="bg-white h-[2000px] relative pt-28 px-5 pb-10 w-80 z-[3]">
//             <div className="block absolute top-1">
//               <button
//                 onClick={toggleSideMenu}
//                 className="cursor-pointer flex items-center h-12 justify-center "
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   className="bi bi-x-lg"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
//                 </svg>
//                 <span className="inline-block pl-2 text-sm font-medium">
//                   Menu
//                 </span>
//               </button>
//             </div>
//             <div className="overflow-auto h-full">
//               <div className=" flex flex-col h-full">
//                 <ul className="flex flex-col flex-grow">
//                   <LiSideMenu
//                     name={"Novità"}
//                     liSubToggle={liSubToggle}
//                     elementKey="news"
//                   />
//                   <LiSideMenu
//                     name={"Uomo"}
//                     liSubToggle={liSubToggle}
//                     elementKey="man"
//                   />
//                   <LiSideMenu name={"Donna"} liSubToggle={liSubToggle}
//                     elementKey="woman"/>
//                   <LiSideMenu name={"Idee Regalo"} liSubToggle={liSubToggle}
//                     elementKey="giftIdea" />
//                   <LiSideMenu name={"Collezioni"} liSubToggle={liSubToggle}
//                     elementKey="collection"/>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/* Secondo Menù */}
//           <LiSubMenu
//             elements={
//               activeElement !== null ? subMenuElements[activeElement] : []
//             }
//             isSubMenuOpen={activeElement !== null}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { LiSideMenu } from "./LiSideMenu";
import { LiSubMenu } from "./LiSubMenu";
import { Link } from "react-router-dom";

const subMenuElements = {
  news: ["Novita Uomo", "Novità Donna", "Visualizza Tutto"],
  man: [
    "Abbigliamento",
    "Borse",
    "Scarpe",
    "Gioielli",
    "Accessori",
    "Visualizza Tutto",
  ],
  woman: [
    "Abbigliamento",
    "Borse",
    "Scarpe",
    "Gioielli",
    "Accessori",
    "Visualizza Tutto",
  ],
  giftIdea: ["Per Lei", "Per Lui"],
  collection: [
    "Autunno/Inverno 2024/25",
    "Primavera/Estate 2024",
    "Autunno/Inverno 2023/24",
  ],
};

export const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const [activeElement, setActiveElement] = useState(null);

  const toggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveElement(null);
  };

  useEffect(() => {
    // Imposta lo scroll del corpo del documento a "hidden" quando il menu è aperto
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Ripristina lo scroll del corpo del documento quando il menu è chiuso
      document.body.style.overflow = "auto";
    }

    // Pulisce l'effetto quando il componente viene smontato
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const liSubToggle = (elementKey) => {
    setActiveElement(elementKey === activeElement ? null : elementKey);
  };

  return (
    <div
      id="sideMenu"
      className={`h-[2000px] ${
        isMenuOpen
          ? "left-0 pointer-events-auto translate-x-0 w-full bg-[rgba(0,0,0,0.6)]"
          : "-left-full pointer-events-none translate-x-full"
      } transition-all duration-500 absolute top-0 z-50`}
    >
      <div className="transition-opacity duration-200 delay-200 ease-in">
        <div className="h-full flex flex-row">
          {/* Primo Menù */}
          <div className="bg-white h-[2000px] relative pt-28 px-5 pb-10 w-80 z-[3]">
            <div className="block absolute top-1">
              <button
                onMo={toggleSideMenu}
                className="cursor-pointer flex items-center h-12 justify-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
                <span className="inline-block pl-2 text-sm font-medium">
                  Menu
                </span>
              </button>
            </div>
            <div className="overflow-auto h-full">
              <div className=" flex flex-col h-full">
                <ul className="flex flex-col flex-grow">
                  <LiSideMenu>
                    <Link to='/'>Home</Link>
                  </LiSideMenu>
                  <LiSideMenu
                    name={"Novità"}
                    liSubToggle={liSubToggle}
                    elementKey="news"
                  />
                  <LiSideMenu
                    name={"Uomo"}
                    liSubToggle={liSubToggle}
                    elementKey="man"
                  />
                  <LiSideMenu
                    name={"Donna"}
                    liSubToggle={liSubToggle}
                    elementKey="woman"
                  />
                  <LiSideMenu
                    name={"Idee Regalo"}
                    liSubToggle={liSubToggle}
                    elementKey="giftIdea"
                  />
                  <LiSideMenu
                    name={"Collezioni"}
                    liSubToggle={liSubToggle}
                    elementKey="collection"
                  />
                </ul>
              </div>
            </div>
          </div>
          {/* Secondo Menù */}
          <LiSubMenu
            elements={
              activeElement !== null ? subMenuElements[activeElement] : []
            }
            isSubMenuOpen={activeElement !== null}
          />
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiSideMenu } from "./LiSideMenu";

export const SearchMenu = ({ isSearchOpen, setIsSearchOpen }) => {
  const [activeElement, setActiveElement] = useState(null);

  const toggleSearchMenu = () => {
    setIsSearchOpen(!isSearchOpen);
    setActiveElement(null);
  };

  useEffect(() => {
    // Imposta lo scroll del corpo del documento a "hidden" quando il menu è aperto
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Ripristina lo scroll del corpo del documento quando il menu è chiuso
      document.body.style.overflow = "auto";
    }

    // Pulisce l'effetto quando il componente viene smontato
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen]);

  const liSubToggle = (elementKey) => {
    setActiveElement(elementKey === activeElement ? null : elementKey);
  };

  return (
    <div
      id="searchMenu"
      className={`h-[2000px] ${
        isSearchOpen
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
                onClick={toggleSearchMenu}
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
              </button>
            </div>
            <div className="overflow-auto h-full">
              <div className=" flex flex-col h-full">
                <form
                  className="appearance-none flex items-center relative w-full mb-7 pb-2 border-0 border-b-[1px] justify-between "
                  action=""
                  method="get"
                >
                  <input
                    className="appearance-none border-none w-full"
                    placeholder="Cerca"
                    type="text"
                  />
                  <button className="pl-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </form>

                <ul className="flex flex-col flex-grow">
                  <LiSideMenu>
                    <Link className='hover:underline' to="/">Home</Link>
                  </LiSideMenu>
                  <LiSideMenu>
                    <Link className='hover:underline' to="/">Novità</Link>
                  </LiSideMenu>
                  <LiSideMenu>
                    <Link className='hover:underline' to="/">Donna</Link>
                  </LiSideMenu>
                  <LiSideMenu>
                    <Link className='hover:underline' to="/">Informazioni sulle spedizioni</Link>
                  </LiSideMenu>

                  {/* <LiSideMenu name={"Novità"} elementKey="news" />
                  <LiSideMenu name={"Uomo"} elementKey="man" />
                  <LiSideMenu name={"Donna"} elementKey="woman" />
                  <LiSideMenu
                    name={"Informazioni sulle spedizioni"}
                    elementKey="infoShipments"
                  /> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { LiSideMenu } from "./LiSideMenu";

export const SideMenu = () => {
  return (
    <div className="translate-x-0 transition-all duration-500 ease-in min-h-full">
      <div className="transition-opacity duration-200 delay-200 ease-in">
        <div className="h-full">
          <div className="bg-white min-h-full relative pt-28 px-5 pb-10 w-80 z-[3]">
            <div className="block absolute top-1">
              <button className="cursor-pointer flex items-center h-12 justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                  <LiSideMenu name={"Novità"} />
                  <LiSideMenu name={"Uomo"} />
                  <LiSideMenu name={"Donna"} />
                  <LiSideMenu name={"Nuovi Arrivi"} />
                  <LiSideMenu name={"Ultime Collezioni"} />
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

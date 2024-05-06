import { useState } from "react";
import { SideMenu } from "./SideMenu";
import { SearchMenu } from "./SearchMenu";
import { Link } from "react-router-dom";
import { RightBar } from "../rightElements/RightBar";
import Cart from "../rightElements/Cart";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchMenu = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <div className="bg-transparent flex justify-between max-w-full w-full h-36 px-6 mb-5 font-sans bg-gradient-to-b from-[rgba(0,0,0,0.24)] to-transparent">
        <div className="flex items-center justify-start w-[50%]">
          <div className="">
            <button
              id="openSideMenu"
              className="h-9 cursor-pointer flex items-center justify-center"
              onClick={() => toggleSideMenu("sideMenu")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
              <span className="inline-block pl-2 text-sm font-medium">
                Menu
              </span>
            </button>
          </div>
          <div className="ml-4">
            <button onClick={() => toggleSearchMenu('searchMenu')} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
        </div>
        <Link to='/'>
          <div className="flex justify-center flex-col cursor-pointer">
            <img
              src="src\assets\logoSpesso.png"
              alt=""
              className="bg-transparent max-w-[100px] max-h-20 self-center"
            />
            <div className="flex">
              <span className="flex justify-center text-5xl items-center font-serif">
                Autremoi
              </span>
            </div>
          </div>
        </Link>
        <div className="flex justify-end w-[50%]">
          <div className="flex items-center">
            {/* login */}
            <div className="p-2">
              <Link
              to='/login'
                className="flex cursor-pointer items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </Link>
            </div>
            {/* wishlist */}
            <div className="p-2">
              <Link
                className="flex cursor-pointer items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </Link>
            </div>
            {/* cart */}
            <div className="p-2">
              <Link
              to='/cart'
                id="cart"
                href=""
                onClick={() => toggleCart("cart")}
                className="flex cursor-pointer items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SearchMenu isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <RightBar isBarOpen={isCartOpen} setIsBarOpen={setIsCartOpen}>

      </RightBar>
    </div>
  );
};

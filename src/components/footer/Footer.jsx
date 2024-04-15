import React from "react";
import { Link } from "react-router-dom";
import { FooterLinks } from "./FooterLinks";

const footer = {
  firstColumn: [
    {
      h3: "About Us",
      url: "",
    },
    {
      h3: "Privacy Policy",
      url: "",
    },
    {
      h3: "Terms of Service",
      url: "",
    },
  ],
};

const newsletter_input = [
  "appearance: none",
  "background: #fff",
  "border: 0",
  "border-bottom: 1px solid #dfdde3",
  "border-radius: 0",
  "color: #000",
  "cursor: text",
  "height: calc(48px - 16px)",
  "line-height: calc(48px - 16px)",
  "margin-top: 16px",
  "padding: 0",
];

const newsletter_button = {
  "align-items": "center",
  color: "#000",
  display: "flex",
  height: "48px",
  "justify-content": "flex-end",
  position: "absolute",
  right: "0",
  top: "0",
  width: "36px",
};

// classi

const footer_container = "flex max-w-6xl w-1/2 justify-between";

const footer_column = "w-1/2";

// const [showUnderline, setShowUnderline] = useState(false);

// const handleOverUnderline = () => {
//     setShowUnderline(true);
//   };
//   const handleOutUnderline = () => {
//     setShowUnderline(false);
//   };

const Footer = () => {
  return (
    <>
      <div className="flex max-w-full justify-center">
        <div className={footer_container}>
          <div className={footer_column}>
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
          </div>
          <div className={footer_column}>
            {footer.firstColumn.map((element, i) => (
              <FooterLinks key={i} name={element.h3} url={element.url} />
              // <a href={element.url} key={i}>
              //   <h3>{element.h3}</h3>
              // </a>
            ))}
          </div>
          <div className={footer_column}>
            <h3> Subscribe to our Newsletter</h3>
            <input
              className={newsletter_input}
              type="email"
              placeholder="Enter your email"
            />
            <button className={newsletter_button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

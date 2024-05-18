// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./features/userSlice";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const inputClass = "bg-white border-b-2 border-black w-full text-black";
//   const buttonClass = "bg-black text-white";

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const dispatch = useDispatch()

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(login({
//       email: email,
//       password:password,
//       loggedIn: true,
//     }))
//   };

//   return (
//     <div className="flex justify-center p-8">
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <div>
//           <label htmlFor="email">Indirizzo email</label>
//           <input
//             id="email"
//             className={inputClass}
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             className={inputClass}
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         {/* <div className="mb-6">
//           <input type="checkbox" />
//           <label htmlFor="">Ricordati di me</label>
//         </div> */}
//         <a  href="/payment" className="mb-6">
//           <button className="bg-black text-white h-[48px] px-5 w-max-[280px]">
//             Accedi
//           </button>
//         </a>
//       </form>
//     </div>
//   );
// };

// export default Login;

// src/components/Login.js

// src/components/Login.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from "../actions/authActions";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => {
    console.log("state:", state.isAuthenticated);
    return state.isAuthenticated;
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;

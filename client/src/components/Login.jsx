// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, logout } from "../actions/authActions";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => {
//     console.log("state:", state.isAuthenticated);
//     return state.isAuthenticated;
//   });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(credentials));
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("token");
//   };

//   return (
//     <div className="flex flex-col justify-center items-center ">
//       {isAuthenticated ? (
//         <button onClick={handleLogout}>Logout</button>
//       ) : (
//         <form
//           className="flex flex-col justify-center items-center "
//           onSubmit={handleSubmit}
//         >
//           <input
//             className="bg-white border-b-2 border-black w-full text-black"
//             type="text"
//             name="username"
//             value={credentials.username}
//             onChange={handleChange}
//             placeholder="Username"
//           />
//           <input
//             className="bg-white border-b-2 border-black w-full text-black"
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             placeholder="Password"
//           />
//           <button
//             className="bg-black text-white h-[48px] px-5 w-max-[280px] mt-5"
//             type="submit"
//           >
//             Login
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from "../actions/authActions";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  // Seleziona lo stato isAuthenticated dallo stato globale
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  if (isLoading) {
    // Mostra un loader o un messaggio di attesa durante l'inizializzazione dello stato
    return <div>Loading...</div>;
  }

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
    <div className="flex flex-col justify-center items-center ">
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form
          className="flex flex-col justify-center items-center "
          onSubmit={handleSubmit}
        >
          <input
            className="bg-white border-b-2 border-black w-full text-black"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            className="bg-white border-b-2 border-black w-full text-black"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button
            className="bg-black text-white h-[48px] px-5 w-max-[280px] mt-5"
            type="submit"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;

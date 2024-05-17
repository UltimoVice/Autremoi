import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputClass = "bg-white border-b-2 border-black w-full text-black";
  const buttonClass = "bg-black text-white";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(login({
      email: email,
      password:password,
      loggedIn: true,
    }))
  };

  return (
    <div className="flex justify-center p-8">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Indirizzo email</label>
          <input
            id="email"
            className={inputClass}
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className={inputClass}
            type="password" 
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {/* <div className="mb-6">
          <input type="checkbox" />
          <label htmlFor="">Ricordati di me</label>
        </div> */}
        <a class="" href="/payment" className="mb-6">
          <button class="bg-black text-white h-[48px] px-5 w-max-[280px]">
            Accedi
          </button>
        </a>      
      </form>
    </div>
  );
};

export default Login;

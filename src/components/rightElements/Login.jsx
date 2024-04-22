import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputClass = "background-color-[#fff] border-b-2 border-black w-full"
  const buttonClass = "background-color-[#fff] text-white"

  return (
    <div className="flex justify-center p-8">
      <form action="">
        <div>
          <label htmlFor="">Indirizzo email</label>
          <input className={inputClass} type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input className={inputClass} type="text" />
        </div>
        <button className={buttonClass}>
          Accedi
        </button>
      </form>
    </div>
  );
}

export default Login;

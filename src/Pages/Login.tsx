import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/svg/SoftDropLogo.svg";
import { useState, ChangeEvent, FormEvent } from "react";
// import useAuth from "../hooks/useAuth";
import useToken from "../hooks/useToken";
import React from "react";

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // Authentication removed
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { saveToken } = useToken();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill all the fields");
    } else {
      // Save a dummy token and redirect to dashboard
      saveToken("dummy_token_" + Date.now());
      navigate("/admin/dashboard");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* <img src={Logo} alt="SoftDrop Logo" /> */}
      <div className="border border-[#CACFD1] w-full max-w-sm rounded-xl p-6 mt-8 shadow bg-white">
        <div className="text-center mb-6">
          <h1 className="font-medium text-2xl">Admin Login</h1>
          <p className="text-sm text-gray-500">Welcome back</p>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4 w-full font-bold"
          onSubmit={handleOnSubmit}
        >
          <div className="flex flex-col items-center gap-2 w-full">
            <label htmlFor="email" className="font-bold self-start text-sm">
              Email
            </label>
            <input
              className="border border-black rounded px-3 py-2 text-black w-full text-base"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleOnChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-2 w-full mt-2">
            <label htmlFor="password" className="font-bold self-start text-sm">
              Password
            </label>
            <input
              className="border border-black rounded px-3 py-2 text-black w-full text-base"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <label htmlFor="remember" className="text-sm">
              <input
                id="remember"
                name="remember"
                className="mr-1"
                type="checkbox"
              />
              Remember Me
            </label>
            <Link to={"/password-reset"} className="text-sm text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <button
            className="bg-black py-3 rounded text-white w-full text-base mt-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;

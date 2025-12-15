import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import React from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  // TODO: use loading state when user sends request
  // const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Please fill all the fields");
    } else {
      console.log(email);
      // TODO: redirect user to password set up after sending reset link
      // navigate("/admin/dashboard")
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="border-2 border-[#CACFD1] w-[40%] rounded p-14 mt-10">
        <div className="text-center mb-6">
          <h1 className="font-medium text-[44px]">Password Reset</h1>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4 w-full font-bold"
          onSubmit={handleOnSubmit}
        >
          <div className="flex flex-col items-center gap-3 w-full">
            <label htmlFor="email" className="font-bold self-start">
              Email address
            </label>
            <input
              className="border-2 border-black rounded p-4 text-black w-full"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="Email address"
              required
            />
          </div>
          <button
            className="bg-black py-4 rounded text-white w-full"
            type="submit"
          >
            Send reset link
          </button>
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;

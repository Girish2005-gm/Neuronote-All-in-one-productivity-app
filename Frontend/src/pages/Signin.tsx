import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../config";
import { useAuth } from "../context/AuthContext";

function Signin() {
  const { setIsLoggedIn,updateAuthFromToken } = useAuth();

  const UsernameRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  async function signin() {
    const username = UsernameRef.current?.value;
    const password = PasswordRef.current?.value;

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
       updateAuthFromToken();
      setIsLoggedIn(true);
      toast.success("Login successful!");
      navigate("/dashboard");

    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        className="absolute top-6 left-6 text-gray-900 text-sm cursor-pointer"
        onClick={() => navigate("/")}
      >
        <svg
          className="inline-block"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
        >
          <path
            fill="#000"
            d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z"
          ></path>
        </svg>{" "}
        Back to home
      </div>

      <div className="bg-white shadow-md rounded-lg w-full max-w-sm p-7">
        <div className="flex justify-center py-5">
          <div className="w-10 h-10 bg-[#E85A5A] rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path fill="#FFFFFF" d="M9 4a2 2 0 0 1 2 2v6.827c-.894-.69-2.034-1.097-3.336-1.313l-.328 1.972c1.38.23 2.261.667 2.804 1.255c.53.574.86 1.426.86 2.759a2.5 2.5 0 0 1-5 0v-.35c.43.143.876.26 1.336.336l.328-1.972c-.743-.124-1.489-.4-2.235-.754A2.5 2.5 0 0 1 4 12.5c0-.835.208-1.492.559-1.974c.345-.476.883-.856 1.684-1.056L7 9.28V6a2 2 0 0 1 2-2m3-.646A4 4 0 0 0 5 6v1.774c-.851.342-1.549.874-2.059 1.575C2.292 10.242 2 11.335 2 12.5a4.49 4.49 0 0 0 2 3.742V17.5a4.5 4.5 0 0 0 8 2.829a4.5 4.5 0 0 0 8-2.829v-1.258a4.49 4.49 0 0 0 2-3.742c0-1.165-.292-2.258-.941-3.15c-.51-.702-1.208-1.234-2.059-1.576V6a4 4 0 0 0-7-2.646m6 13.795v.351a2.5 2.5 0 0 1-5 0c0-1.333.33-2.185.86-2.76c.543-.587 1.424-1.024 2.804-1.254l-.328-1.972c-1.302.216-2.442.623-3.336 1.313V6a2 2 0 1 1 4 0v3.28l.758.19c.8.2 1.338.58 1.683 1.056c.351.482.559 1.14.559 1.974c0 .999-.582 1.857-1.43 2.26c-.745.354-1.492.63-2.234.754l.328 1.972A9 9 0 0 0 18 17.149" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold text-center text-gray-900 mb-2">
          Welcome back
        </h2>
        <p className="text-center text-gray-700 mb-6 text-sm">
          Log in to your account
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-900 font-medium">Username</label>
            <input
              type="text"
              ref={UsernameRef}
              placeholder="Enter your Username"
              className="mt-1 p-[6px] text-sm w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-[#E85A5A]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-900 font-medium">Password</label>
            <div className="relative mt-1">
              <input
                type={show ? "text" : "password"}
                ref={PasswordRef}
                placeholder="Enter your password"
                className="p-[6px] text-sm w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-[#E85A5A]"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  // Close Eye
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 16 16"
                  >
                    <g fill="gray">
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"></path>
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"></path>
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12l.708-.708l12 12z"></path>
                    </g>
                  </svg>
                ) : (
                  // Open Eye
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 16 16"
                  >
                    <g fill="gray">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></path>
                    </g>
                  </svg>
                )}
              </span>
            </div>
          </div>

          <button
            onClick={signin}
            className="mt-2 bg-[#E85A5A] hover:bg-[#d25050] text-white font-semibold py-1 rounded-md transition duration-300"
          >
            Log in
          </button>
        </div>

        <p className="text-sm text-gray-800 mt-6 text-center">
          Don’t have an account?{" "}
          <span
            className="text-[#E85A5A] hover:underline cursor-pointer font-semibold"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;

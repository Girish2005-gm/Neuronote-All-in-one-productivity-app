import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E85A5A] rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
              <path
                fill="#FFFFFF"
                d="M9 4a2 2 0 0 1 2 2v6.827c-.894-.69-2.034-1.097-3.336-1.313l-.328 1.972c1.38.23 2.261.667 2.804 1.255c.53.574.86 1.426.86 2.759a2.5 2.5 0 0 1-5 0v-.35c.43.143.876.26 1.336.336l.328-1.972c-.743-.124-1.489-.4-2.235-.754A2.5 2.5 0 0 1 4 12.5c0-.835.208-1.492.559-1.974c.345-.476.883-.856 1.684-1.056L7 9.28V6a2 2 0 0 1 2-2m3-.646A4 4 0 0 0 5 6v1.774c-.851.342-1.549.874-2.059 1.575C2.292 10.242 2 11.335 2 12.5a4.49 4.49 0 0 0 2 3.742V17.5a4.5 4.5 0 0 0 8 2.829a4.5 4.5 0 0 0 8-2.829v-1.258a4.49 4.49 0 0 0 2-3.742c0-1.165-.292-2.258-.941-3.15c-.51-.702-1.208-1.234-2.059-1.576V6a4 4 0 0 0-7-2.646m6 13.795v.351a2.5 2.5 0 0 1-5 0c0-1.333.33-2.185.86-2.76c.543-.587 1.424-1.024 2.804-1.254l-.328-1.972c-1.302.216-2.442.623-3.336 1.313V6a2 2 0 1 1 4 0v3.28l.758.19c.8.2 1.338.58 1.683 1.056c.351.482.559 1.14.559 1.974c0 .999-.582 1.857-1.43 2.26c-.745.354-1.492.63-2.234.754l.328 1.972A9 9 0 0 0 18 17.149"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl">Neuronote</span>
            <span className="text-gray-700 text-xs sm:inline hidden font-semibold">
              All in one productivity app
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden block text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop nav buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/signin")}
                className="px-3 py-1 border text-sm text-gray-800 hover:bg-gray-100 transition font-semibold rounded-md"
              >
                Log in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-3 py-1 border text-sm bg-[#E85A5A] text-white hover:bg-[#d54848] transition font-semibold rounded-md"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-4 py-2 border text-sm text-gray-800 hover:bg-gray-100 transition font-semibold rounded-md"
              >
                Dashboard
              </button>
              <button
                onClick={logout}
                className="px-4 py-2 border text-sm bg-[#E85A5A] text-white hover:bg-[#d54848] transition font-semibold rounded-md"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden px-6 pb-4 flex flex-col gap-2">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  navigate("/signin");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-2 text-gray-700 font-medium border-b"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-2 text-[#E85A5A] font-medium border-b"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-2 text-gray-700 font-medium border-b"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-2 text-[#E85A5A] font-medium border-b"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

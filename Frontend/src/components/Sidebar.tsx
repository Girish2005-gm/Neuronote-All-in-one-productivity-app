import { Twitter } from "../icons/Twitter";
import { Youtube } from "../icons/Youtube";
import SidebarItem from "./SidebarItem";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Docicon from "../icons/Docicon";
import LinkIcon from "../icons/LinkIcon";
import Logouticon from "../icons/Logouticon";

function Sidebar({
  content,
  setFilter,
}: {
  content: any[];
  setFilter: (f: string) => void;
}) {
  const { setIsLoggedIn, username } = useAuth();
  const navigate = useNavigate();

  const [selected, setSelected] = useState("all");

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  const getCount = (type: string) =>
    content.filter((item: any) => item.type === type).length;

  const handleSelect = (type: string) => {
    setSelected(type);
    setFilter(type);
  };

  return (
    <div className="h-screen bg-white border-r w-64 fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b">
        <div className="w-9 h-9 bg-[#E85A5A] rounded-xl flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
            <path
              fill="#FFFFFF"
              d="M9 4a2 2 0 0 1 2 2v6.827c-.894-.69-2.034-1.097-3.336-1.313l-.328 1.972c1.38.23 2.261.667 2.804 1.255c.53.574.86 1.426.86 2.759a2.5 2.5 0 0 1-5 0v-.35c.43.143.876.26 1.336.336l.328-1.972c-.743-.124-1.489-.4-2.235-.754A2.5 2.5 0 0 1 4 12.5c0-.835.208-1.492.559-1.974c.345-.476.883-.856 1.684-1.056L7 9.28V6a2 2 0 0 1 2-2m3-.646A4 4 0 0 0 5 6v1.774c-.851.342-1.549.874-2.059 1.575C2.292 10.242 2 11.335 2 12.5a4.49 4.49 0 0 0 2 3.742V17.5a4.5 4.5 0 0 0 8 2.829a4.5 4.5 0 0 0 8-2.829v-1.258a4.49 4.49 0 0 0 2-3.742c0-1.165-.292-2.258-.941-3.15c-.51-.702-1.208-1.234-2.059-1.576V6a4 4 0 0 0-7-2.646m6 13.795v.351a2.5 2.5 0 0 1-5 0c0-1.333.33-2.185.86-2.76c.543-.587 1.424-1.024 2.804-1.254l-.328-1.972c-1.302.216-2.442.623-3.336 1.313V6a2 2 0 1 1 4 0v3.28l.758.19c.8.2 1.338.58 1.683 1.056c.351.482.559 1.14.559 1.974c0 .999-.582 1.857-1.43 2.26c-.745.354-1.492.63-2.234.754l.328 1.972A9 9 0 0 0 18 17.149"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl">Neuronote</span>
          <span className="text-gray-700 text-xs font-semibold">
            All in one productivity app
          </span>
        </div>
      </div>

      {/* User Info */}
      <div className="px-6 py-4 border-b flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#E85A5A] flex items-center justify-center text-white font-semibold text-sm">
          {username ? username.charAt(0).toUpperCase() : "U"}
        </div>
        <span className="font-medium">{username || "User"}</span>
      </div>

      {/* Menu Items */}
      <div className="p-4 flex flex-col gap-2">
        <SidebarItem
          text="All"
          icon={<Docicon />}
          count={content.length}
          selected={selected === "all"}
          onClick={() => handleSelect("all")}
        />
        <SidebarItem
          text="Tweets"
          icon={<Twitter />}
          count={getCount("twitter")}
          selected={selected === "twitter"}
          onClick={() => handleSelect("twitter")}
        />
        <SidebarItem
          text="Videos"
          icon={<Youtube />}
          count={getCount("youtube")}
          selected={selected === "youtube"}
          onClick={() => handleSelect("youtube")}
        />
        <SidebarItem
          text="Documents"
          icon={<Docicon />}
          count={getCount("document")}
          selected={selected === "document"}
          onClick={() => handleSelect("document")}
        />
        <SidebarItem
          text="Links"
          icon={<LinkIcon/>}
          count={getCount("link")}
          selected={selected === "link"}
          onClick={() => handleSelect("link")}
        />
      </div>

      {/* Logout */}
      <div onClick={logout} className="border flex justify-center gap-2 items-center cursor-pointer px-10 rounded-md mx-4 py-2 mt-20 text-red-600 font-semibold bg-red-50 hover:bg-red-200 transition-all">

        <Logouticon/>
        <button
        
      >
        Logout
      </button>
      </div>
      
    </div>
  );
}

export default Sidebar;
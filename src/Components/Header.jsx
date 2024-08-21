import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const [getAddress, setGetAddress] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedAddress = localStorage.getItem("userAddress");
    if (storedAddress) {
      setGetAddress(storedAddress);
    }
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    alert("Visit Again")
  };

  return (
    <div className="p-3 w-full shadow-md flex justify-between px-5 items-center">
      <div className="flex justify-center items-center gap-2">
        <h1 className="font-Teko text-5xl font-semibold cursor-pointer">
          <span className="text-orange-500" onClick={() => navigate("/Home")}>
            Tasty
          </span>
        </h1>
        <p className="w-[250px] line-clamp-1 font-medium">📌{getAddress}</p>
      </div>
      <ul className="flex gap-4 font-Teko font-medium text-2xl cursor-pointer">
        <li
          onClick={() => navigate("/Home")}
          className={
            location.pathname === "/Home"
              ? "text-orange-500 cursor-pointer"
              : "cursor-pointer"
          }>
          Home
        </li>
        <li className="hover:text-orange-500">Menu</li>
        <li className="hover:text-orange-500">Restaurants</li>
        <li className="hover:text-orange-500">Cart</li>
        <li className="hover:text-orange-500" onClick={handleLogout}>Log-Out</li>
      </ul>
    </div>
  );
};

export default Header;

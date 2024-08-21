import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedAddress = localStorage.getItem("userAddress");
    if (storedAddress) {
      setAddress(storedAddress);
    }

    if (userLocation) {
      reverseGeocode(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);

  const getUserLocation = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
        alert("Welcome 😊")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDj0lUV-8zun12iUwHxDt1kcYVUJyoxw0o`
      );
      const formattedAddress = response.data.results[0].formatted_address;
      setAddress(formattedAddress);

      localStorage.setItem("userAddress", formattedAddress);

      setTimeout(() => {
        navigate("/Home");
      }, 1500);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center items-center p-6 gap-3">
        <h1 className="font-Teko text-6xl font-semibold cursor-pointer">
          <span className="text-orange-500">Tasty</span>
        </h1>
        <p className="text-5xl font-black text-center font-Teko px-4 py-3">
          Experience the world's first multi-restaurant Buy 1 Get 1 FREE offer.
        </p>
        <p className="text-xl px-5 text-center font-Teko">
          Sign up for Sure Squad - our loyalty program and get exclusive benefits like free dish and free delivery!
        </p>
        <input
          className="p-2 text-center border-2 border-black w-full md:w-auto mb-4 md:mb-0"
          placeholder="Enter Your Location📌"
          value={address}
          readOnly
        />
        <button
          className="bg-orange-500 p-2 text-white rounded font-semibold w-full md:w-auto"
          onClick={getUserLocation}
        >
          ⌖ Locate Me
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          src="banners/bn2.jpg"
          className="bg-contain h-screen md:h-full w-full"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default LogInPage;

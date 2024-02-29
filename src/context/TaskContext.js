import React, { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../services/AxiosInstance";
import axios from "axios";

export const TaskContext = createContext({});

export function TaskContextProvider({ children }) {
  const [employeetasks, setEmployeetasks] = useState([]);
  const [cartNotific,setCartNotific]=useState()
  const [wishlist,setWishlist]=useState()

  const getallEmployeetasks = () => {
    const washmanID = "655e49bad160aea8372bde1d";

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/task/employee/${washmanID}/tasks`)
      .then((response) => {
        setEmployeetasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee tasks:", error);
      });
  };

  const cartNotification = () => {
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/cart/customer?customer_id=${userId._id}`)
      .then((response) => {
        setCartNotific(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee tasks:", error);
      });
  };

  const GetWishlist=()=>{
    const userId = JSON.parse(localStorage.getItem("softwashLoginUser"));
    axios
    .get(`${process.env.REACT_APP_BASE_URL}/wishlist/user/wishlist?user_id=${userId._id}`)
    .then((response) => {
        setWishlist(response.data);
        
    })
    .catch((error) => {
      console.error("Error fetching employee tasks:", error);
    });

  }

  useEffect(() => {
    getallEmployeetasks();
    cartNotification()
    GetWishlist()
  }, []);

  

  return (
    <TaskContext.Provider
      value={{
        employeetasks,
        getallEmployeetasks,
        cartNotification,
        cartNotific,
        wishlist
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

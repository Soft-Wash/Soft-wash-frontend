import React, { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../services/AxiosInstance";
import axios from "axios";

export const TaskContext = createContext({});

export function TaskContextProvider ({ children }) {
    
    const [employeetasks, setEmployeetasks] = useState([]);
    const [orders, setOrders] = useState([]);
    const targetBranchId = '655debc4ec7b0b6e0f591bf7';

    const getallEmployeetasks = () => {
        const washmanID =   "655e49bad160aea8372bde1d";
      
        // localStorage.getItem("branch_id");

        axios.get(`${process.env.REACT_APP_BASE_URL}/task/employee/${washmanID}/tasks`)
        .then(response => {
            // console.log(response.data);
            setEmployeetasks(response.data);
        })
        .catch(error => {
            console.error('Error fetching employee tasks:', error);
            
        });
    };

    const getAllOrders = () =>{
        axiosInstance.get("/order/").then((resp) => {
            const filteredOrders = resp.data.filter(item => item?.branch_id?._id === targetBranchId);
            console.log("Filtered Orders:", filteredOrders);
            setOrders(filteredOrders);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });

    }

    
    useEffect(() =>{
        getAllOrders();
    }, []);


    useEffect(() =>{
        getallEmployeetasks();
    }, []);

    return (
        <TaskContext.Provider value={{
             employeetasks, 
            //  getallEmployeetasks,
             setEmployeetasks,
             getAllOrders,
             orders, setOrders,

             
             }}>
            {children}
        </TaskContext.Provider>
    );
}

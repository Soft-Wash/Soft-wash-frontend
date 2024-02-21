import React, { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../services/AxiosInstance";
import axios from "axios";

export const TaskContext = createContext({});

export function TaskContextProvider ({ children }) {
    
    const [employeetasks, setEmployeetasks] = useState([]);

    const getallEmployeetasks = () => {
        const washmanID = "655e49bad160aea8372bde1d";

        axios.get(`${process.env.REACT_APP_BASE_URL}/task/employee/${washmanID}/tasks`)
        .then(response => {
            // console.log(response.data);
            setEmployeetasks(response.data);
        })
        .catch(error => {
            console.error('Error fetching employee tasks:', error);
            
        });
    };


    useEffect(() =>{
        getallEmployeetasks();
    }, []);

    return (
        <TaskContext.Provider value={{
             employeetasks, getallEmployeetasks,

             
             }}>
            {children}
        </TaskContext.Provider>
    );
}

import { useState } from "react";
import {createContext, useContext} from "react"

const DataContext = createContext({
  data:null,
  setValue:(value)=>{

  }
})

export const useData = ()=> useContext(DataContext)

function Data({children}){
const[data,setData]=useState(null)
const setDataEvent =(data)=>{
  setData(data)
}

const value = {data,setDataEvent}
return <DataContext.Provider value={value}>
  {children}
</DataContext.Provider>
}

export default Data;
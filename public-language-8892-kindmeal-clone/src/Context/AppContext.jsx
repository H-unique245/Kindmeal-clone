import { createContext, useState } from "react";

export const AppContext= createContext();

export default function AppContextProvider({children}){
    const [user,setUser]= useState({
        isAuth:false,
        userName:""
    })
    const handleLogin=(value)=>{
       setUser({...user,isAuth:true,userName:value})
    }
    const handleLogout=()=>{
        setUser({...user,isAuth:false,userName:""})
     }
return <AppContext.Provider value={{user,handleLogin,handleLogout}}>
    {children}
</AppContext.Provider>
}
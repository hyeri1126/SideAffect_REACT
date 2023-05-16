
import React, { useEffect, useState } from "react";

import { authService } from "./fbase";
import AppRouter from "./components/AppRouter";


function App() {
  const [init,setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[])
  console.log(authService.currentUser);
  setInterval(()=>{
    console.log(authService.currentUser);
  },2000);
  return (
    <>
   
      <AppRouter isLoggedIn={isLoggedIn}/>
       
    
    </>
  );
}

export default App;

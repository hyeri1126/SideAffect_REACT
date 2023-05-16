import React from "react";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContenet";
import HeaderLogout from "../components/HeaderLogout";
import HeaderLogin from "../components/HeaderLogin";


const Home = ({isLoggedIn}) => { 
    return (
        <>
           {isLoggedIn ? <HeaderLogin isLoggedIn={isLoggedIn}/> : <HeaderLogout />}
            <HomeContent />
           <Footer/>
        </>
    )
}

export default Home;
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signin from "../routes/Signin";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn}) => {
    return(
        <>
            <Router>
      
                <Routes>
                    <Route exact path="/signin" Component={Signin} />
                    <Route exact path="/" Component={Home} isLoggedIn={isLoggedIn}/>
                
                </Routes>
            
                
            </Router>
        </>
    )
}

export default AppRouter;
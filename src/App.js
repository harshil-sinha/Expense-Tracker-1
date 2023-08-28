import { Route,Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar2 from "./Navbar2";
import Home from "./Home";
const App = () =>{
    return (
        <>
            <Navbar2/>
            <Routes>
                <Route path="/*" element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    )
}
export default App;

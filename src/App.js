import { Route,Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar2 from "./Navbar2";
import Home from "./Home";
// import Form from "./Form";
import Forget from "./Forget";
const App = () =>{
    return (
        <>
            <Navbar2/>
            <Routes>
                <Route path="/*" element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/form" element={<Form/>}/> */}
                <Route path="/forget" element={<Forget/>}/>
            </Routes>
        </>
    )
}
export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHome from "../pages/home"
import Login from "../pages/login";
import AppLayout from "../components/navbar"
import MyProfile from "../pages/profile"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Login />}/>

                <Route path="/home" element={<AppHome />}/>
                <Route path="/profile" element={<AppLayout><MyProfile/></AppLayout>}/>
            </Routes>
        </Router>
    )
}


export default AppRouter;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import Home from "../pages/home"
import Profile from "../pages/profile"
import AppLayout from "../components/navbar"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/profile" element={<AppLayout><Profile/></AppLayout>}/>
            </Routes>
        </Router>
    )
}


export default AppRouter;
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import Home from "../pages/home"
import Profile from "../pages/profile"
import AppLayout from "../components/navbar"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>

                <Route path="/profile" element={<AppLayout><Profile /></AppLayout>}></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter;
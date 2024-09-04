import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";

const AppRouter = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
        </Routes> 
    </BrowserRouter>

    )
}

// const AppRouter = () => {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/home" element={<Home />}></Route>
//           <Route path="/profile" element={<Profile />}></Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   };


export default AppRouter;
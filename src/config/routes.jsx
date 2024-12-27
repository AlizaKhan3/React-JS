import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserProfile from "../pages/profile";
import SignupPage from "../pages/signup";
import LoginPage from "../pages/login";
import { useEffect, useState } from "react";
import { onAuthStateChanged, auth } from "../db/firebase.jsx"
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import PageNotFound from "../components/pageNotFound.jsx";
import Courses from "../pages/courses.jsx";
import LmsUsers from "../pages/Users.jsx";

function AppRouter() {
    const [myUser, setUserState] = useState(false);
    const [loader, setLoader] = useState(true);

    //Api call k liye UseEffect
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserState(true);
                console.log("My user---->", user)
            }
            else {
                setUserState(false);
            }
            setLoader(false)
        });
    }, [])
    return (
        <>
            {loader
                ?
                <Spin tip="Loading" size="large" style={{ fontSize: 100, marginTop: "200px" }} >
                    <div className="content"></div>
                </Spin>
                :

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={myUser ? <Navigate to={"/profile"} /> : <LoginPage />} />
                        <Route path="/profile" element={myUser ? <UserProfile /> : <Navigate to={"/"} />}>
                            <Route path="courses" element={<Courses />} />
                        </Route>
                        <Route path="/signup" element={myUser ? <Navigate to={"/profile"} /> : <SignupPage />} />
                        <Route path='*' element={<PageNotFound />} />
                        <Route path="/users" element={<LmsUsers />} />
                    </Routes>
                </BrowserRouter>
            }
        </>
    )
}

export default AppRouter;
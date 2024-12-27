import AppLayout from "../components/layout";
import { Link, Outlet } from "react-router-dom";
import { signOut, auth } from "../db//firebase.jsx"
import { useEffect } from "react";

function UserProfile() {
    // const handleSignOut = () => {
    //     signOut(auth).then(() => {
    //         // Sign-out successful.
    //         console.log("User signed out successfully.");
    //         window.location.pathname = "/"
    //     }).catch((error) => {
    //         // An error happened.
    //         console.error("Error signing out: ", error);
    //     });
    // }

    return (
        <div>
            <AppLayout>
                <h1>Profile page</h1>
                <button><Link to={"/"}>Logout</Link></button>
                {/* <button onClick={handleSignOut} ><Link to={"/"}>Logout</Link></button> */}
                <Outlet></Outlet>
            </AppLayout>
        </div>
    )
}

export default UserProfile;
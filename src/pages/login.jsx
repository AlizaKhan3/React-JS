import React from "react";
import LoginForm from "../components/loginForm.jsx"
import { Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../db/firebase.jsx";
import Example from "../components/loginTailwind.jsx";

function LoginPage() {

    const loginUser = (values) => {
        console.log("Login wali values", values)
        signInWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user Logged in!", user);
                window.location.pathname  = "/profile";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Could'nt Login, Please create account first!", errorMessage)
            
            });
    }
    return (
        <div className="container">
            <div className="row justify-content-center p-4">
                <div className="col-6 p-4">
                    <h1 className="mt-5 p-4">Login Form</h1>
                    <LoginForm loginUser={loginUser} />
                    <p>Don't havn an Account? <Link to="/signup" >Create Now</Link></p>
                </div>
            </div>
            {/* <div>
                <Example/>
            </div> */}
        </div>
    );
}

export default LoginPage;
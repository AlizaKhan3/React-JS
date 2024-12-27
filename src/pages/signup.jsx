import { Link } from "react-router-dom";
import SignupForm from "../components/signupForm.jsx";
import { auth, createUserWithEmailAndPassword } from "../db/firebase.jsx";
import Swal from "sweetalert2"

function SignupPage() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    //creating my own fucntion here to register new users 
    const registerUser = (values) => {
        // console.log("ye rahi values meri through prop", values)
        createUserWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("user in firebase--> ", user)
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                window.location.pathname = "/"
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error ", errorMessage)
            });

    }
    return (
        <div className="container">
            <div className="row justify-content-center p-4">
                <div className="col-6 p-4">
                    <h1 className="mt-5 p-4">Signup Form</h1>
                    <SignupForm registerUser={registerUser} />
                    <p>Already havn an Account? <Link to="/" >Login Now</Link></p>
                </div>
            </div>
        </div>
    );
}


export default SignupPage;
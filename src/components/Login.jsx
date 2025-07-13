import { useRef, useState } from "react";
import Header from "./Header";
import "../css/Login.css";
import { validateForm } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USER_LOGO } from "../utils/const";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header />

      <img
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: "-1",
        }}
        alt="bgc-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "0",
        }}
      />

      {/* Login Form Container */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: "60px 68px 40px",
          borderRadius: "4px",
          width: "450px",
          maxWidth: "450px",
          minHeight: "660px",
          zIndex: "1",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "28px",
              marginTop: "0",
            }}
          >
            {isSignIn ? "Sign In" : "Sign up"}
          </h1>

          <div style={{ marginBottom: "16px" }}>
            {!isSignIn && (
              <input
                type="text"
                ref={userName}
                placeholder="Full Name"
                style={{
                  width: "100%",
                  height: "50px",
                  padding: "16px 20px",
                  backgroundColor: "#333",
                  border: "1px solid white",
                  borderRadius: "4px",
                  color: "#FDFDFD",
                  fontSize: "16px",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            )}
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input
              ref={email}
              type="text"
              placeholder="Email or phone number"
              style={{
                width: "100%",
                height: "50px",
                padding: "16px 20px",
                backgroundColor: "#333",
                border: "1px solid white",
                borderRadius: "4px",
                color: "#FDFDFD",
                fontSize: "16px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                height: "50px",
                padding: "16px 20px",
                backgroundColor: "#333",
                border: "1px solid white",
                borderRadius: "4px",
                color: "white",
                fontSize: "16px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>
          <p
            style={{
              color: "#e50914",
              fontSize: "20px",
              alignContent: "center",
            }}
          >
            {errorMessage}
          </p>

          <button
            onClick={handleOnClick}
            style={{
              width: "100%",
              height: "48px",
              backgroundColor: "#e50914",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              marginTop: "24px",
              marginBottom: "12px",
            }}
          >
            {isSignIn ? "Sign In" : "Sign up"}
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <label
              style={{
                color: "#b3b3b3",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                style={{
                  marginRight: "8px",
                  transform: "scale(1.2)",
                }}
              />
              Remember me
            </label>
            <a
              href="#"
              style={{
                color: "#b3b3b3",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              Need help?
            </a>
          </div>

          <div style={{ marginTop: "80px" }}>
            <p
              onClick={() => setIsSignIn(!isSignIn)}
              style={{
                fontSize: "16px",
                marginBottom: "12px",
                color: "white",
                textDecoration: "none",
                marginLeft: "4px",
                cursor: "pointer",
              }}
            >
              {isSignIn
                ? "New to Netflix? . Sign up now ."
                : "Already registered . Login in"}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

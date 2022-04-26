import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../components/Toastify/Toastify";
import { ADMIN_EMAIL } from "../helpers/consts";
import { auth } from "../firebase";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    user: null,
    isAdmin: false,
    isLoged: false,
  });
  const navigate = useNavigate();

  const registerUser = async (email, password) => {
    try {
      let { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      let newUser = {
        user: user.email,
        isAdmin: user.email === ADMIN_EMAIL ? true : false,
        isLoged: true,
      };
      setCurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      notify("success", "You have successfully registered");
      navigate("/");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      switch (error.code) {
        case "auth/invalid-email":
          notify("error", "Invalid email");
          break;
        case "auth/email-already-in-use":
          notify("error", "This email address is already being used");
          break;
        case "auth/weak-password":
          notify("error", "Your password must be at least 6 characters long");
          break;
        default:
          notify("error", "Something get wrong!");
      }
    }
  };

  const logOutUser = async () => {
    try {
      await signOut(auth);
      let noUser = {
        user: null,
        isAdmin: false,
        isLogged: false,
      };
      setCurrentUser(noUser);
      localStorage.setItem("currentUser", JSON.stringify(noUser));
      notify("warning", "You logged out");
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async (email, password) => {
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);

      let newUser = {
        user: user.email,
        isAdmin: user.email === ADMIN_EMAIL ? true : false,
        isLogged: true,
      };
      setCurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      notify("success", "You have successfully logged in");
      navigate("/");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      switch (error.code) {
        case "auth/invalid-email":
          notify("error", "Email address is invalid");
          break;
        case "auth/user-not-found":
          notify("error", "This email address is already being used");
          break;
        case "auth/wrong-password":
          notify("error", "Your password is wrong");
          break;
        default:
          notify("error", "Something get wrong!");
      }
    }
  };

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          user: user.email,
          isAdmin: user.email === ADMIN_EMAIL ? true : false,
          isLogged: true,
        });
      } else {
        console.log("no user from authListener");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <authContext.Provider
      value={{
        currentUser,
        registerUser,
        logOutUser,
        loginUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

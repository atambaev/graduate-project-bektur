import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import Header from "../../components/Header/Header";
import { useAuth } from "../../contexts/AuthContextProvider";

const Register = () => {
  const { registerUser } = useAuth();
  return (
    <div className="back-img">
      <Header />
      <AuthForm
        title={"Register"}
        btnText={"Register"}
        link={"/login"}
        linkText={"Already have an account? Login!"}
        handleSave={registerUser}
      />
    </div>
  );
};

export default Register;

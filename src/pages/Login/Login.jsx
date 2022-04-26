import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import Header from "../../components/Header/Header";
import { useAuth } from "../../contexts/AuthContextProvider";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div className="back-img">
      <Header />
      <AuthForm
        title={"Login"}
        btnText={"Login"}
        link={"/register"}
        linkText={"Don't have an accoun? Register!"}
        handleSave={loginUser}
      />
    </div>
  );
};

export default Login;

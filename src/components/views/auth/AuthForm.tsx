"use client";
import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <Register isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default AuthForm;

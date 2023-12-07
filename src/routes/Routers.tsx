import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import QuestionCreate from "../pages/QuestionCreate";
import QuestionAnswer from "../pages/QuestionAnswer";
import My from "../pages/My";
import Nav from "../components/Nav";
import Login from "../components/Login";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/configure";
import { useRecoilValue } from "recoil";
import { loginModalState } from "../recoil/atom/loginModalState";

const Routers = () => {
  const loginState = useRecoilValue(loginModalState);
  const navigate = useNavigate();
  const location = useLocation();
  const showNav = location.pathname !== "/";
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(event, session);
      }
    );
  }, []);
  return (
    <>
      {showNav && loginState ? null : <Nav />}
      {loginState && <Login />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<QuestionAnswer />} />
        <Route path="/question/create" element={<QuestionCreate />} />
        <Route path="/question/:docId" element={<div>hi docid</div>} />
        <Route path="/my" element={<My />} />
      </Routes>
    </>
  );
};

export default Routers;

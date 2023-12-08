import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import QuestionCreate from "../pages/QuestionCreate";
import QuestionAnswer from "../pages/QuestionAnswer";
import My from "../pages/My";
import Nav from "../components/Nav";
import Login from "../components/Login";
import { useEffect } from "react";
import { supabase } from "../supabase/configure";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginModalState } from "../recoil/atom/loginModalState";
import { userState } from "../recoil/atom/userState";

const Routers = () => {
  const loginState = useRecoilValue(loginModalState);
  const location = useLocation();
  const showNav = location.pathname !== "/";
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const data = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          console.log("로그인!");
          break;
        case "SIGNED_OUT":
          console.log("로그아웃!");
          break;
        default:
      }
      setUser(session);
    });
    return () => {};
  }, []);

  return (
    <>
      {showNav && <Nav />}
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

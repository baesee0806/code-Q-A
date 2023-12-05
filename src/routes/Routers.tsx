import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../pages/Main";
import QuestionCreate from "../pages/QuestionCreate";
import QuestionAnswer from "../pages/QuestionAnswer";
import My from "../pages/My";
import Nav from "../components/Nav";

const Routers = () => {
  const location = useLocation();
  const showNav = location.pathname !== "/";

  return (
    <>
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<QuestionAnswer />} />
        <Route path="/question/create" element={<QuestionCreate />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </>
  );
};

export default Routers;

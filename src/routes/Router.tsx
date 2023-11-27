import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import QuestionCreate from "../pages/QuestionCreate";
import QuestionAnswer from "../pages/QuestionAnswer";
import My from "../pages/My";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<QuestionAnswer />} />
        <Route path="/question/create" element={<QuestionCreate />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

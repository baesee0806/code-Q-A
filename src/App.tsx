import { RecoilRoot } from "recoil";
import GlobalStyle from "./GlobalStyle";
import Routers from "./routes/Routers";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;

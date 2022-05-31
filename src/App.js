import "./App.css";
import Join from "./components/Login/Join";
import BootstrapLogin from "./components/Login/BootstrapLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main></Main>}></Route>
          <Route
            index
            path="/login"
            element={<BootstrapLogin></BootstrapLogin>}
          ></Route>
          <Route index path="/*" element={<Page404></Page404>}></Route>
          <Route index path="/join" element={<Join></Join>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

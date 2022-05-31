import "./App.css";
import Join from "./components/Join/Join";
import BootstrapLogin from "./components/Login/BootstrapLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ProfileBody from "./components/Profile/ProfileBody";
import Page404 from "./components/Page404";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<ProfileBody></ProfileBody>}></Route>
            <Route path="shopping" element={<Main></Main>}></Route>
          </Route>
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

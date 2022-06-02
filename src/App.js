import { useState } from "react";

import "./App.css";
import Join from "./components/Join/Join";
import BootstrapLogin from "./components/Login/BootstrapLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Profile from "./components/Profile/Profile";
import Page404 from "./components/Page404";
import { PostContext } from "./store/PostContext";
import { FollowContext } from "./store/FollowContext";
import { UserContext } from "./store/UserContext";

import { Users } from "./components/data/User";
import { Posts } from "./components/data/Post";
import { Follow } from "./components/data/Follow";
import Layout from "./components/Layout/Layout";

function App() {
  const [users, setUsers] = useState(Users);
  const insertUsers = (user) => {
    const newUser = { ...user, userId: user.id, id: users.length };
    setUsers([...users, newUser]);
  };
  const updateUsers = (user) => {
    const id = Number(localStorage.getItem("id"));
    const { img, name } = user;
    const findUsersIndex = users.findIndex((user) => user.id === id);
    if (findUsersIndex === -1) {
      console.error("not found");
      return;
    }
    const newUsers = [...users];
    newUsers.splice(findUsersIndex, 1, { ...users[findUsersIndex], name, img });
    setUsers(newUsers);
  };
  const [posts, setPosts] = useState(Posts);
  const insertPost = (post) => {
    const newPost = {
      ...post,
      userId: Number(localStorage.getItem("id")),
      id: posts.length,
    };
    setPosts([...posts, newPost]);
  };

  const [follows, setFollows] = useState(Follow);
  const insertFollow = (followerId) => {
    const newFollow = {
      following: Number(localStorage.getItem("id")),
      follower: followerId,
    };
    setFollows([...follows, newFollow]);
  };

  return (
    <UserContext.Provider value={{ users, insertUsers, updateUsers }}>
      <PostContext.Provider value={{ posts, insertPost }}>
        <FollowContext.Provider value={{ follows, insertFollow }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout></Layout>}>
                <Route index element={<Profile></Profile>}></Route>
                <Route path="shopping" element={<Main></Main>}></Route>
                <Route path="profile" element={<Profile></Profile>}></Route>
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
        </FollowContext.Provider>
      </PostContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

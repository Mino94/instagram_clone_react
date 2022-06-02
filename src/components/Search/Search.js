import { useContext, useState } from "react";
import { PostContext } from "../../store/PostContext";
import { UserContext } from "../../store/UserContext";
import SearchBar from "./SearchBar";
import Posts from "../Posts/Posts";
const Search = () => {
  const { users } = useContext(UserContext);
  const id = Number(localStorage.getItem("id"));
  const { posts } = useContext(PostContext);
  const otherPosts = () => {
    return posts.filter((post) => post.userId !== id);
  };
  const [searchPost, setSearchPost] = useState(otherPosts);
  const [searchKey, setSearchKey] = useState();
  const onSubmitSearch = (e) => {
    e.preventDefault();
    const reg = new RegExp(searchKey, "g");
    const findUser = users.find((user) => reg.test(user.name));
    const findPosts = posts.filter(
      (post) => findUser?.id === post.userId || reg.test(post.content)
    );
    setSearchPost(findPosts);
  };

  return (
    <div>
      <SearchBar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        onSubmitSearch={onSubmitSearch}
      ></SearchBar>
      <Posts posts={searchPost}></Posts>
    </div>
  );
};

export default Search;

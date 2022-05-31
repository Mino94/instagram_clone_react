import { createContext } from "react";

export const PostContext = createContext({
  posts: [],
  insertFollow: (post) => {},
});

import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  posts: null,
};

export const PostsContext = createContext(initialState);

export function PostsProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (!state.posts) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`)
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts)
        })
    }
  }, [state.posts]);

  function setPosts(posts) {
    dispatch({
      type: "SET_POSTS",
      payload: posts,
    });
  }

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

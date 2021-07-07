import { POSTS_UPDATE_LIST } from "..";

export const postsUpdateList = (posts) => {
  return {
    type: POSTS_UPDATE_LIST,
    payload: posts,
  }
}
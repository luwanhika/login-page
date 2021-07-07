import { USER_RESET, USER_UPDATE } from "..";

export const userUpdate = (user) => ({
  type:USER_UPDATE,
  payload: user,
});

export const userReset = () => {
  return {
    type: USER_RESET,
  };
};
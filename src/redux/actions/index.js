export const login = (value) => {
  return {
    type: "LOGIN",
    payload: value,
  };
};

export const logout = (value) => {
  return {
    type: "LOGOUT",
    payload: value,
  };
};

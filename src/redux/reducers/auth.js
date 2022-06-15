const authState = JSON.parse(localStorage.getItem("state"));
if (authState === null) {
  localStorage.setItem("state", JSON.stringify({ auth: false }));
}

let initialState = false;

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("state", JSON.stringify({ auth: true }));
      return { ...state };

    case "LOGOUT":
      localStorage.setItem("state", JSON.stringify({ auth: false }));
      return { ...state };

    default:
      return state;
  }
};

export default auth;

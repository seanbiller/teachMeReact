const INITIAL_STATE = {
  isSignedIn: "no",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: "yes" };
    case "SIGN_OUT":
      return { ...state, isSignedIn: "no" };
    default:
      return state;
  }
};

export const reducersIndexJsCode = `
const INITIAL_STATE = {
  isSignedIn: "no",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: "yes" };
    case "SIGN_OUT":
      return { ...state, isSignedIn: "no" };
    default:
      return state;
  }
};
`.trim();

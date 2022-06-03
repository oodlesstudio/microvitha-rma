const initialState = [
  {
    theme: "default",
  },
];

const themeChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "themeChange":
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeChangeReducer;

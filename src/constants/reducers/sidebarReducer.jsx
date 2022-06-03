const initialState = [{
    "sidebarReducer": {
        "sidebarOpen": true
    }
}];

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "sideBar":
      return {
        sidebarOpen: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;

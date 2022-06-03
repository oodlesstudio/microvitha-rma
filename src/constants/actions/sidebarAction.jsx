export const openSidebar = (data) => ({
  type: "sideBar",
  payload: data,
});

export const closeSidebar = {
  type: "sideBar",
  payload: false,
};

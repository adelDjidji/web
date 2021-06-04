const getToken = () => localStorage.getItem("token");

const isLoggedIn = () => !!localStorage.getItem("token"); // TODO check if token is valid

const UserService = {
  isLoggedIn,
  getToken,
};

export default UserService;

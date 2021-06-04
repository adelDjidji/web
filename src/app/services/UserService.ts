const getToken = () => typeof window !== 'undefined' && localStorage.getItem("token");

const isLoggedIn = () => typeof window !== 'undefined' && !!localStorage.getItem("token"); // TODO check if token is valid

const UserService = {
  isLoggedIn,
  getToken,
};

export default UserService;

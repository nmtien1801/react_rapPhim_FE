import customizeAxios from "../setup/customizeAxios";

const handleLoginApi = (valueLogin, password) => {
  return customizeAxios.post(`/api/login`, { valueLogin, password });
};

const registerNewUser = (email, phone, userName, password) => {
  console.log(">>>registerNewUser: ", email, phone, userName, password);
  return customizeAxios.post("/api/register", {
    email,
    phone,
    userName,
    password,
  });
};

const logoutUser = () => {
  return customizeAxios.post("/api/logout");
};

export { handleLoginApi, registerNewUser, logoutUser };

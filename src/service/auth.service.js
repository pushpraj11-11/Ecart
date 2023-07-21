import jwt_decode from "jwt-decode";
import xhrService from "./http.service";

const doAuth = async (email, password) => {
  let response = await xhrService.post("http://localhost:3001/api/v1/auth", {
    email,
    password,
  });

  localStorage.setItem("token", response.headers["x-auth-token"]);
  return response;
};

const isLoggedIn = () => {
  const data = localStorage.getItem("token");
  if (!data) {
    return false;
  }
  return data;
};

const getToken = () => {
  return localStorage.getItem("token");
};

const isAdmin = () => {
  return !getUser() ? false : getUser().isAdmin;
};

const getUser = () => {
  try {
    return jwt_decode(localStorage.getItem("token"));
  } catch (ex) {
    return null;
  }
};

const doLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location = "/login";
};

export default {
  doAuth,
  isLoggedIn,
  isAdmin,
  doLogout,
  getToken,
  getUser,
};

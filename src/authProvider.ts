import { AuthProvider } from "react-admin";
// ToDo перенести BASE_URL в .env
const BASE_URL = "https://connections-api.goit.global";

const authProvider: AuthProvider = {
  // login приймає параметри { username, password }
  login: async ({ username, password }) => {
    const request = new Request(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      // API приймає JSON такого формату
      // {
      //   "email": "user@mail.com",
      //   "password": "superDuperPassword"
      // }
      // тому вказуємо email: username
      body: JSON.stringify({ email: username, password }),
    });
    //console.log("request: ", request);

    const response = await fetch(request);
    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("token", token);
      return Promise.resolve();
    }
    return Promise.reject();
  },

  logout: async () => {
    const request = new Request(`${BASE_URL}/users/logout`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    });
    await fetch(request);
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  checkAuth: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: async () => {
    return Promise.resolve();
  },

  checkError: async (error) => {
    const { status } = error;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getUserIdentity: async () => {
    const request = new Request(`${BASE_URL}/users/current`, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    });
    const response = await fetch(request);
    if (response.ok) {
      const user = await response.json();
      return Promise.resolve(user);
    }
    return Promise.reject();
  },
};

//console.log("authProvider:", authProvider);

export default authProvider;

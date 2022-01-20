import { createContext } from "react";

export const AuthContext = createContext({
  isLoaded: false,
  user: null,
  token: null,
  role: null,
  setRole: () => {},
  setUser: () => {},
  setToken: () => {},
  logOut: () => {},
});
import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, Iuser } from "./types";
import {
  getUserLocalStorage,
  LoginResquest,
  setUserLocalStorage,
} from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<Iuser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticated(email: string, password: string) {
    const response = await LoginResquest(email, password);

    if (!response.token) {
      return;
    } else {
      const payload = { token: response.token, email };

      setUser(payload);
      setUserLocalStorage(payload);
    }
  }

  function loginCheck() {
    const json = localStorage.getItem("u");
    if (!json) {
      return null;
    }

    const user = JSON.parse(json);

    if(!user.token) {
      return false;
    }

    return true;
  }

  async function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticated, loginCheck, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

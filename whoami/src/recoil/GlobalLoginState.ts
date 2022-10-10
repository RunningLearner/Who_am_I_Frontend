import { atom } from "recoil";
import { getAuth } from "../cert/AuthStorage";

export interface userData {
  id: string;
  isLogin: boolean;
  isAdmin: boolean;
  profileUrl: string;
}

const value = getAuth()
  ? {
      isLogin: true,
      isAdmin: getAuth()["id"] === "tkim",
      id: getAuth()["id"],
      profileUrl: getAuth()["url"],
    }
  : {
      isLogin: false,
      isAdmin: false,
      id: "",
      profileUrl: "",
    };

const GlobalLoginState = atom<userData>({
  key: "GlobalLoginState",
  default: value,
});

export default GlobalLoginState;

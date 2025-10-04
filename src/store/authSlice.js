import { createSlice } from "@reduxjs/toolkit";

const TEN_MINUTES = 10 * 60 * 1000;

const loadUserFromLocalStorage = () => {
  try {
    const currentUserJSON = localStorage.getItem("currentUser");
    if (!currentUserJSON) return null;

    const currentUser = JSON.parse(currentUserJSON);
    const now = new Date().getTime();

    // 세션 만료 체크
    if (now - currentUser.loginTime > TEN_MINUTES) {
      localStorage.removeItem("currentUser");
      return null;
    }
    return currentUser;
  } catch (error) {
    console.error("Could not load user from local storage", error);
    return null;
  }
};

const user = loadUserFromLocalStorage();

const initialState = {
  user: user,
  isLoggedIn: !!user,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const now = new Date().getTime();
      const loginInfo = {
        ...action.payload,
        loginTime: now,
      };

      state.user = loginInfo;
      state.isLoggedIn = true;
      localStorage.setItem("currentUser", JSON.stringify(loginInfo));
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;

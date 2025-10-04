import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  logout as logoutAction,
} from "../store/authSlice";

/**
 * Redux store의 인증 상태를 가져오고, 관련 액션을 디스패치하는 커스텀 훅
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // 컴포넌트에서 사용할 로그아웃 함수
  const logout = () => {
    dispatch(logoutAction());
  };

  return { user, isLoggedIn, logout };
};

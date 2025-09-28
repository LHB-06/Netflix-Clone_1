import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * 사용자 인증 상태를 관리하는 커스텀 훅
 */
export const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  // 페이지 경로가 변경될 때마다 로그인 상태를 다시 확인
  useEffect(() => {
    const currentUserJSON = localStorage.getItem("currentUser");
    if (currentUserJSON) {
      const currentUser = JSON.parse(currentUserJSON);

      // 세션 만료 시간 체크 (10분)
      const now = new Date().getTime();
      const TEN_MINUTES = 10 * 60 * 1000;
      if (now - currentUser.loginTime > TEN_MINUTES) {
        // 세션이 만료되면 로그아웃 처리
        localStorage.removeItem("currentUser");
        setUser(null);
      } else {
        setUser(currentUser);
      }
    } else {
      setUser(null);
    }
  }, [location.pathname]);

  /**
   * 로그아웃을 처리하는 함수
   */
  const logout = useCallback(() => {
    localStorage.removeItem("currentUser");
    setUser(null);
    alert("로그아웃 되었습니다.");
    navigate("/");
  }, [navigate]);

  const login = useCallback(
    (email, password) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        return;
      }

      // 로그인 성공 시, 현재 시간과 함께 사용자 정보 저장
      const now = new Date();
      const loginInfo = {
        name: foundUser.name,
        email: foundUser.email,
        loginTime: now.getTime(),
      };
      localStorage.setItem("currentUser", JSON.stringify(loginInfo));
      setUser(loginInfo); // 내부 상태 업데이트

      navigate("/home"); // 홈으로 이동
    },
    [navigate]
  );

  const signup = useCallback(
    (name, email, password) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // 이메일 중복 확인
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        alert("이미 사용 중인 이메일입니다.");
        return;
      }

      // 새 사용자 정보 추가
      const newUser = { name, email, password };
      users.push(newUser);
      // localStorage에 업데이트된 사용자 정보 저장
      localStorage.setItem("users", JSON.stringify(users));

      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      // 회원가입 성공 후 로그인 페이지로 이동
      navigate("/login");
    },
    [navigate]
  );

  // 훅은 인증 상태와 로그아웃 함수를 반환합니다.
  return { user, isLoggedIn: !!user, login, logout, signup };
};

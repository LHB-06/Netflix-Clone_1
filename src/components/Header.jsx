import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  // useAuth 훅을 사용하여 인증 상태와 로그아웃 함수를 가져와서 사용
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-[#E50914] text-4xl font-bold tracking-wide font-[Bebas Neue]">
        NETFLIX
      </h1>
      <nav>
        {/* 로그인이 되있을 때와 안되있을 때 경로 설정 */}
        <Link to={isLoggedIn ? "/home" : "/"} className="mr-4">
          Home
        </Link>
        {/* 로그인이 되있는 상태와 안되있는 상태*/}
        {isLoggedIn ? (
          <>
            <span className="mr-4">{user.name}님, 환영합니다!</span>
            <button onClick={logout} className="mr-4 cursor-pointer">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/signup" className="mr-4">
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

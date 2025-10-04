import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/authSlice";

const Signup = () => {
  const navigate = useNavigate(); // 경로 설정
  const isLoggedIn = useSelector(selectIsLoggedIn); // Redux store에서 로그인 상태를 가져옵니다.
  const [email, setEmail] = useState(""); // 이메일 상태 관리
  const [password, setPassword] = useState(""); // 비밀번호 상태 관리
  const [passwordConfirm, setPasswordComfirm] = useState(""); // 패스워드 확인
  const [name, setName] = useState(""); // 이름 상태 관리

  // 회원가입 로직을 컴포넌트 내부로 이동시킵니다.
  const handleSignup = (name, email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // 이메일 중복 확인
      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        alert("이미 사용 중인 이메일입니다.");
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 처리 중 오류가 발생했습니다.", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // 이미 로그인한 사용자는 홈으로 리디렉션
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("이름을 입력해 주세요.");
      return;
    }

    if (!email) {
      alert("이메일 주소를 입력해주세요.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (!passwordConfirm) {
      alert("비밀번호를 한번 더 입력해 주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 이메일 형식 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("올바른 이메일 주소 형식이 아닙니다.");
      return;
    }

    // 컴포넌트 내의 회원가입 핸들러 함수 호출
    handleSignup(name, email, password);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl mb-4">회원가입</h2>
        <input
          type="text"
          placeholder="이름"
          className="w-full p-3 mb-4 bg-transparent text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="이메일 주소"
          className="w-full p-3 mb-4 bg-transparent text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full p-3 mb-4 bg-transparent text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="w-full p-3 mb-4 bg-transparent text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-600"
          value={passwordConfirm}
          onChange={(e) => setPasswordComfirm(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 p-2 rounded text-white font-semibold cursor-pointer"
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default Signup;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, selectIsLoggedIn } from "../store/authSlice";

const Login = () => {
  const navigate = useNavigate(); // 경로 이동 설정
  const location = useLocation(); // homepage 에서 입력한 이메일 주소를 자동으로 채워넣기 위해 필요
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn); // Redux store에서 로그인 상태를 가져옵니다.
  const [email, setEmail] = useState(""); // email 이라는 변수에 상태값을 저장하고, setEmail 이라는 함수로 상태값을 바꾸겠다.
  const [password, setPassword] = useState(""); // 비밀번호 상태

  // HomePage에서 전달받은 이메일이 있으면 자동으로 채워넣기
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  // 이미 로그인한 사용자는 홈으로 리디렉션
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일 입력을 안했을 때
    if (!email) {
      alert("이메일 주소를 입력해주세요.");
      return;
    }

    // 비밀번호를 입력 안했을 때
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    // 이메일 형식 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("올바른 이메일 주소 형식이 아닙니다.");
      return;
    }

    // localStorage에서 사용자 목록을 가져와 로그인 로직을 처리합니다.
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // 로그인 성공 시, Redux 액션을 디스패치합니다.
      // 보안을 위해 비밀번호는 제외하고 사용자 정보를 전달합니다.
      const { password, ...userToLogin } = foundUser;
      dispatch(loginSuccess(userToLogin));
    } else {
      alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };
  // handleSubmit 은 Onsubmit 이벤트가 발생할 때 실행되는 함수
  // 즉, 폼 제출 시 해야할 일을 담은 함수
  // Onsubmit 은 입력 완료 후 폼 제출할 때 (버튼을 누르거나 엔터를 누를 때 발생하는 함수)

  const notrealize = () => {
    alert("기능 미구현 상태입니다.");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-black/50 p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-3xl mb-6 font-semibold">로그인</h2>

        <input
          type="email"
          placeholder="이메일 주소 또는 휴대폰 번호"
          className="w-full p-3 mb-4 bg-transparent text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // OnChange 는 내가 입력을 바꿀 때 마다 실행되는 함수이고
          // e.target.value 는 입력창에 새로 입력된 값이며
          // setEmail 이라는 함수로 email value 을 상태에 저장하겠다.
          // ?? : 사용자가 이메일을 입혈할 때마다 상태값(email) 이 자동으로 업데이트 되도록 하기 위해서
        />

        <input
          type="password"
          placeholder="비밀번호"
          className="w-full p-3 mb-4 bg-transparent text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-semibold mb-4 cursor-pointer"
        >
          로그인
        </button>

        {/* '또는' 텍스트 */}
        <div className="flex justify-center items-center mb-4">
          <span className="text-gray-400 text-sm">또는</span>
        </div>

        {/* 로그인 코드 사용하기 버튼 */}
        <button
          type="button"
          className="w-full bg-gray-700 hover:bg-gray-600 p-3 rounded text-white font-semibold mb-4 cursor-pointer"
          onClick={notrealize}
        >
          로그인 코드 사용하기
        </button>

        {/* 비밀번호 잊으셨나요? */}
        <div className="text-center">
          <a
            href="#"
            className="text-sm text-white underline hover:text-gray-400"
            onClick={notrealize}
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;

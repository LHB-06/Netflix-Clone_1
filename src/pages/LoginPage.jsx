import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(""); // email 이라는 변수에 상태값을 저장하고, setEmail 이라는 함수로 상태값을 바꾸겠다.
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  // handleSubmit 은 Onsubmit 이벤트가 발생할 때 실행되는 함수
  // 즉, 폼 제출 시 해야할 일을 담은 함수
  // Onsubmit 은 입력 완료 후 폼 제출할 때 (버튼을 누르거나 엔터를 누를 때 발생하는 함수)

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
          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white font-semibold mb-4"
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
          className="w-full bg-gray-700 hover:bg-gray-600 p-3 rounded text-white font-semibold mb-4"
        >
          로그인 코드 사용하기
        </button>

        {/* 비밀번호 잊으셨나요? */}
        <div className="text-center">
          <a
            href="#"
            className="text-sm text-white underline hover:text-gray-400"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;

// export default function LoginPage() {
//   return <h2>안녕하세요! 여기는 로그인 페이지에요!</h2>;
// }

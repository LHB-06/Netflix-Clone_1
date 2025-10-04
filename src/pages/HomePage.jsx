import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../store/authSlice";

const Home = () => {
  const navigate = useNavigate(); // 경로 이동 설정
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [email, setEmail] = useState(""); // 이메일 상태 관리

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 것을 방지
    if (!email) {
      alert("이메일 주소를 입력해주세요.");
      return;
    }

    // 이메일 형식 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("올바른 이메일 주소 형식이 아닙니다.");
      return;
    }

    // 유효성 검사를 통과하면 페이지 이동
    navigate("/login", { state: { email: email } });
  };
  return (
    <div
      className="relative min-h-screen w-full bg-black bg-cover bg-center"
      style={{
        backgroundImage: !isLoggedIn
          ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://mblogthumb-phinf.pstatic.net/MjAyNDExMjhfMjMx/MDAxNzMyNzk4NTIyMDUz.gUnL4pMcAqUZdXi82u0pkxDSaDBjRevFXYSgr1KvvMwg.DdFUuKkciD4XCjZybRe7axmJRrj0bczybYLwabuRBAQg.JPEG/SE-fb6a33c4-0bfd-46fe-b68d-f0317a3fa3ea.jpg?type=w800")`
          : "none",
      }}
    >
      {/* 가운데 텍스트 & 입력 */}
      <div className="relative z-10 text-white">
        {isLoggedIn ? (
          <div className="flex flex-col items-center">
            {/* 1. 환영 문구 섹션 (중앙 정렬) */}
            <div className="flex flex-col items-center justify-center text-center px-4 py-20">
              <h1 className="text-5xl font-bold mb-6">
                {user?.name}님, 넷플릭스에 오신 것을 환영합니다.
              </h1>
              <p className="text-2xl">다양한 영화와 시리즈를 탐색해 보세요.</p>
            </div>

            {/* 2. 이미지 섹션 (좌우 꽉 채움) */}
            <img
              src="/movieList.png"
              alt="Netflix Contents"
              className="w-full"
            />
          </div>
        ) : (
          <div className="flex min-h-screen flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">영화, 시리즈 등을</h1>
            <h1 className="text-5xl font-bold mb-6">무제한으로</h1>
            <h2 className="text-2xl mb-6">
              7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.
            </h2>
            <p className="text-lg mb-4">
              시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
              주소를 입력하세요.
            </p>
            <form
              className="flex flex-col sm:flex-row items-center w-full max-w-xl"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="이메일 주소"
                className="sm:flex-1 px-4 py-3 mb-3 sm:mb-0 sm:mr-2 text-gray rounded border border-gray"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-lg font-semibold cursor-pointer"
              >
                시작하기
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat">
      {/* 어두운 배경(오버레이) */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* 가운데 텍스트 & 입력 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">영화, 시리즈 등을</h1>
        <h1 className="text-5xl font-bold mb-6">무제한으로</h1>
        <h2 className="text-2xl mb-6">
          7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.
        </h2>
        <p className="text-lg mb-4">
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
          주소를입력하세요
        </p>

        <form className="flex flex-col sm:flex-row items-center w-full max-w-xl">
          <input
            type="email"
            placeholder="이메일 주소"
            className="sm:flex-1 px-4 py-3 mb-3 sm:mb-0 sm:mr-2 text-gray rounded border border-gray"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-lg font-semibold">
            시작하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="relative text-white">
//       <img
//         src="/background.jpg"
//         alt="Netflix Background"
//         className="w-full h-screen object-cover"
//       />
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//         <h1 className="text-5xl font-bold">Welcome to Netflix</h1>
//         <p className="mt-4">Stream Movies, TV Shows, and More</p>
//       </div>
//     </div>
//   );
// };
// export default Home;

// export default function HomePage() {
//   return <h2>안녕하세요! 여기는 홈 페이지에요!</h2>;
// }

// default export 방식으로
// 함수 선언과 export를 축약형으로 작성했습니다.

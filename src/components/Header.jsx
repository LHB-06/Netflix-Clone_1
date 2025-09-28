import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
    <h1 className="text-[#E50914] text-4xl font-bold tracking-wide font-[Bebas Neue]">
      NETFLIX
    </h1>
    <nav>
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/login" className="mr-4">
        Login
      </Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  </header>
);

export default Header;

// function Header() {
//   return <header>헤더 component 입니다.</header>;
// }

// export default Header;

// export default function Header(){
//     return <header>위에랑 같은데 줄인거에요.</header>
// }

// 함수 선언 + default export 방식과
// import Header from './components/Header';

// 함수형 컴포넌트 + named export 방식
// import {Header} from './components/Header';

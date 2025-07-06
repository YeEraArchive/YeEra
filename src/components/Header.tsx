import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuButton from "./MenuButton";

const menuItems = [{ key: "/artworks", label: "Artworks" }];

interface HeaderProps {
  era?: string;
}

const Header: React.FC<HeaderProps> = ({ era }) => {
  const location = useLocation();

  // 현재 경로에 따라 약칭 결정
  const getPageShort = () => {
    if (location.pathname.startsWith("/artworks")) return "Artworks";
    return "";
  };

  // 페이지 이동 시 스크롤 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md border-b border-white/30 shadow-lg">
      <div className="w-full flex items-center justify-between px-6 py-6 relative">
        <h1 className="text-2xl font-bold tracking-wider select-none flex items-center min-h-[48px] bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          YeEra
          {getPageShort() && (
            <span className="ml-3 text-lg font-medium text-gray-500">
              / {getPageShort()}
            </span>
          )}
          {era && (
            <span className="ml-2 text-base font-normal text-gray-400">
              / {era}
            </span>
          )}
        </h1>
        <MenuButton menuItems={menuItems} aria-label="메뉴 열기" />
      </div>
    </header>
  );
};

export default Header;

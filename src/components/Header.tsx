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
    <header className={"fixed top-0 left-0 w-full z-30 bg-white border-b"}>
      <div className="w-full flex items-center justify-between px-4 py-6 relative">
        <h1 className="text-xl font-bold tracking-widest select-none flex items-center min-h-[48px]">
          YeEra
          {getPageShort() && (
            <span className="ml-2 text-base font-normal text-neutral-500">
              / {getPageShort()}
            </span>
          )}
          {era && (
            <span className="ml-2 text-sm font-normal text-neutral-400">
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

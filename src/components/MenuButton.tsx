import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  menuItems?: { key: string; label: string }[];
}

const MenuButton: React.FC<MenuButtonProps> = ({
  menuItems = [
    { key: "/tgfd", label: "Thank God For Drugs" },
    { key: "/yeezus", label: "Yeezus" },
    { key: "/yeezus2", label: "Yeezus 2" },
  ],
  "aria-label": ariaLabel = "메뉴 열기",
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownAnim, setDropdownAnim] = useState<"in" | "out">("in");
  const [dropdownLock, setDropdownLock] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // 바깥 클릭 시 닫힘
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // 드롭다운 열기/닫기 애니메이션 처리
  useEffect(() => {
    if (open) {
      setDropdownVisible(true);
      setDropdownAnim("in");
      setDropdownLock(false);
    } else if (dropdownVisible) {
      setDropdownAnim("out");
      const timeout = setTimeout(() => {
        setDropdownVisible(false);
        setDropdownLock(false);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const isPlaceholder = (key: string) => key.startsWith("/placeholder");

  return (
    <>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={() => {
          if (dropdownLock) return;
          if (open) {
            setOpen(false);
            setDropdownLock(true);
          } else if (!dropdownVisible) {
            setOpen(true);
          }
        }}
        className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 hover:scale-105 h-12 w-12 p-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-lg"
        {...props}
      >
        <span className="sr-only">{ariaLabel}</span>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {dropdownVisible && (
        <div
          ref={dropdownRef}
          className={
            "absolute left-0 top-full w-full rounded-2xl border border-white/30 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md shadow-2xl z-50 overflow-hidden " +
            (dropdownAnim === "in"
              ? "animate-dropdown-in"
              : "animate-dropdown-out")
          }
        >
          {menuItems.map((item) => (
            <div
              key={item.key}
              className={
                isPlaceholder(item.key)
                  ? "block w-full text-lg py-4 border-b last:border-b-0 border-gray-200/50 text-transparent cursor-default"
                  : ""
              }
            >
              {isPlaceholder(item.key) ? (
                <span className="block w-full text-center font-medium">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.key}
                  onClick={() => setOpen(false)}
                  className={
                    (location.pathname === item.key
                      ? "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800"
                      : "text-gray-600 hover:text-gray-800") +
                    " block w-full text-lg py-4 border-b last:border-b-0 border-gray-200/50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 text-center font-medium"
                  }
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuButton;

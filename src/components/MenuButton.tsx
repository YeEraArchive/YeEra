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
        className="inline-flex items-center justify-center rounded-md border border-black bg-white text-black hover:bg-black/5 h-10 w-10 p-0 transition focus:outline-none focus:ring-2 focus:ring-black/20"
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
            "absolute left-0 top-full w-full rounded-none border-b border-x-0 border-t-0 bg-white shadow-xl z-50 " +
            (dropdownAnim === "in"
              ? "animate-dropdown-in"
              : "animate-dropdown-out")
          }
        >
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              onClick={() => setOpen(false)}
              className={
                (location.pathname === item.key
                  ? "bg-primary text-primary-foreground"
                  : "") +
                " block w-full text-lg py-4 border-b last:border-b-0 border-border rounded-none hover:bg-muted transition text-center"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuButton;

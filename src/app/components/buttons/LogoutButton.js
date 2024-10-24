"use client";
 
import "./LogoutButton.css";
import { useRouter } from "next/navigation";
 
export default function LogoutButton() {
  const router = useRouter();
 
  const logoutHandler = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("accessToken");
    router.push("/login");
  };
 
  return (
    <div className="logout-btn" onClick={logoutHandler}>
      <svg
        className="header__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
      </svg>
    </div>
  );
}
 
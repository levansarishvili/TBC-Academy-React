"use client";

import { ReactElement, ReactEventHandler, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logout } from "../../app/[locale]/(dashboard)/logout/actions";

export default function ProfileToggle() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(() => !isOpen);
  }

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="account-wrapper w-12 h-12 rounded-full flex justify-center items-center text-2xl group"
      >
        <Image
          src={"../../assets/person.svg"}
          alt={"User"}
          className="rounded-full"
          width={100}
          height={100}
        ></Image>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`flex flex-col gap-2 absolute top-16 right-0  w-[14rem] bg-[#f1f3f5] dark:bg-[#313131] shadow-md rounded-lg p-6 border text-[1.4rem] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="/profile"
          className="w-full hover:bg-[#e5e7eb] dark:hover:bg-[#1b1b1b] dark:text-white duration-300 px-4 py-2 rounded-lg"
        >
          <button onClick={handleToggle}>My account</button>
        </Link>
        <Link
          href="/login"
          className="w-full hover:bg-[#e5e7eb] dark:hover:bg-[#1b1b1b] dark:text-white duration-300 px-4 py-2 rounded-lg"
        >
          <button onClick={handleToggle}>Sign in</button>
        </Link>
        <form
          action={logout}
          className="w-full text-red-600 hover:bg-[#e5e7eb] dark:hover:bg-[#1b1b1b] duration-300 px-4 py-2 rounded-lg"
        >
          <button onClick={handleToggle} type="submit">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}

import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b bg-amber-100">
      <div className=" flex items-center justify-between py-2 px-5">
        <Image
        src={'https://i.ibb.co.com/gM4HQc2V/cat-logo.avif'}
        alt="logo"
        width={100}
        height={10}
        ></Image>
        <Link href="/" className="text-2xl font-bold">
          Pet Adoption Platform
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/all-pets">All Pets</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href="/dashboard"><Avatar></Avatar></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

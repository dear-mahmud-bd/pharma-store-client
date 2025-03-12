"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { FaBagShopping } from "react-icons/fa6";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="shadow bg-gray-100 w-full sticky top-0 z-10">
      <div className="container flex justify-between items-center mx-auto h-16 px-5">
        <Link href="/">
          <h1 className="text-2xl font-black flex items-center">
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="Logo"
              className="w-10"
            />{" "}
            PHARMA
          </h1>
        </Link>
        <div className="max-w-md flex-grow flex gap-5 justify-center">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/store"}>
            <p>Store</p>
          </Link>
        </div>
        {/* <div className="max-w-md flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div> */}
        <nav className="flex gap-2">
          <Link href="/cart" className="relative">
            <Button
              variant="outline"
              className="cursor-pointer relative flex items-center justify-center gap-2 rounded-full p-3 border border-gray-300  hover:bg-gray-100 transition"
            >
              <FaBagShopping className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                0
              </span>
            </Button>
          </Link>
          <Link href="/login">
            <Button className="rounded-full text-white cursor-pointer">Log In</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-50 mr-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem>My Shop</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="bg-red-500 cursor-pointer">
                <LogOut />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

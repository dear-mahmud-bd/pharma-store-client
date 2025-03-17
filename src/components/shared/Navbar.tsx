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
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { orderedMedicinesSelector } from "@/redux/features/cartSlice";

export default function Navbar() {
  const medicines = useAppSelector(orderedMedicinesSelector);

  const { user, setIsLoading } = useUser();
  // console.log(user);
  const pathname = usePathname();
  const router = useRouter();
  const path = user?.role === "admin" ? "admin" : "user";

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };
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
          {[
            { name: "Home", path: "/" },
            { name: "Medicines", path: "/medicines" },
            { name: "About Us", path: "/about-us" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={
                pathname === link.path ? "text-green-600" : "text-gray-700"
              }
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        <nav className="flex gap-2">
          <Link href="/cart" className="relative">
            <Button
              variant="outline"
              className="cursor-pointer relative flex items-center justify-center gap-2 rounded-full p-3 border border-gray-300  hover:bg-gray-100 transition"
            >
              <FaBagShopping className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {medicines.length}
              </span>
            </Button>
          </Link>
          {user?.email ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer h-10 w-10">
                <Avatar>
                  <AvatarImage src="https://i.ibb.co.com/jD1GTj4/user.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-50 mr-5 border-gray-300">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/${path}/dashboard`}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogOut}
                  className="bg-red-500 cursor-pointer"
                >
                  <LogOut />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="rounded-full text-white cursor-pointer">
                Log In
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

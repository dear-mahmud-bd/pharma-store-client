import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-screen container mx-auto px-5">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;

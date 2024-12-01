import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="p-8 flex justify-between items-center">
      <Image
        src={"/postaify.png"}
        width={150}
        height={100}
        alt="Postaify logo"
        className="w-32 md:w-40"
      />

      <div className="hidden md:flex gap-4">
        <Button variant={"ghost"}>Register</Button>
        <Button>Book a demo</Button>
      </div>
    </div>
  );
};

export default Navbar;

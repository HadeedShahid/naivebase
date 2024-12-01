import React from "react";
import { Meteors } from "./ui/meteors";
import { Button } from "./ui/button";

export function CtaSection() {
  return (
    <div className="w-full h-80 relative mt-40 mb-20">
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden md:rounded-2xl flex flex-col justify-end items-start">
        <div className="m-auto text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary text-white mb-4 relative z-50">
            Ready to signup and join the waitlist?
          </h2>
          <p className="leading-7 text-primary text-base text-slate-500 mb-4 relative z-50">
            Get instant access to our state of the art project and join the
            waitlist.
          </p>
          <Button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Join Waitlist
          </Button>
          {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            
          </button> */}
        </div>

        <Meteors number={50} />
      </div>
    </div>
  );
}

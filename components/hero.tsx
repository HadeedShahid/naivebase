import React from "react";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import WaitlistForm from "./waitlist-form";
import Layout from "./ui/layout";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="absolute h-[60rem] md:h-[90rem] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.15] -z-10 left-0" />
      <Navbar />
      <div className="flex flex-col overflow-hidden md:pb-20">
        <ContainerScroll
          titleComponent={
            <div className="bg-transparent flex flex-col justify-center text-center gap-y-12 md:mt-24 mb-12 md:mb-20">
              <div className="flex flex-col mx-auto gap-y-5">
                <h1 className="title-hero">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    Supercharge{" "}
                  </span>
                  your Social Media with AI
                </h1>
                <h2 className="desc-hero max-w-2xl md:max-w-2xl  mx-auto">
                  Postaify makes social growth simple. Create, plan, and scale
                  your social media content effortlessly with just a click.
                </h2>
              </div>

              <WaitlistForm />
            </div>
          }
        >
          <Image
            src={"/hero-image.png"}
            width={1200}
            height={700}
            alt="hero-image"
            draggable={false}
            className="w-full h-full object-contain"
          />
        </ContainerScroll>
      </div>
    </div>
  );
};

export default Hero;

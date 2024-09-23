"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { sigmar, roboto } from "@/fonts";
import { AnimatedGithub, AnimatedTwitter } from "@/icons";

const company = null;

const ProfileBio: React.FC<{ className?: string }> = ({ className }) => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className={cn("mt-28 font-normal", sigmar.className, className)}>
      <Image
        src="https://avatars.githubusercontent.com/u/62158726?v=4"
        alt="profile image"
        width={150}
        height={150}
        onLoad={() => setAnimate(true)}
        className={`${
          animate ? "scale-100" : "scale-0"
        } my-4 rounded-full transition delay-200 ease-in`}
      />
      <h1 className={`my-2 text-5xl ${roboto.className}`}>
        Hi, I&apos;m Musa 👋
      </h1>
      <p className="text-4xl">Full stack developer, software engineer</p>
      {company && (
        <p className="text-3xl">
          Currently working{" "}
          <a
            href="https://devsinc.com/"
            className="font-bold text-discord-purple"
            target="_blank"
          >
            @{company}
          </a>
        </p>
      )}
      <div className="my-2 flex text-4xl">
        <a href="https://github.com/MusaGillani" target="_blank">
          <AnimatedGithub />
        </a>
        <a href="https://twitter.com/mosesdotgg" target="_blank">
          <AnimatedTwitter />
        </a>
      </div>
    </div>
  );
};

export default ProfileBio;

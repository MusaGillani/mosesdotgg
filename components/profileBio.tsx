"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { sigmar, roboto } from "@/fonts";
import {
  AnimatedGithub,
  AnimatedLinkedIn,
  AnimatedScroll,
  AnimatedTwitter,
} from "@/icons";
import { company, github, linkedIn, twitter } from "@/constants/info";

const ProfileBio: React.FC<{ className?: string }> = ({ className }) => {
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className={cn(
        "flex min-h-fit flex-col justify-end font-normal sm:min-h-lvh",
        sigmar.className,
        className,
      )}
    >
      <div className="flex min-h-dvh flex-col justify-end sm:min-h-fit">
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
          <p className={cn("text-2xl")}>
            Currently working{" "}
            <a
              href={company.website}
              className="text-discord-purple dark:text-discord-purple"
              target="_blank"
            >
              @{company.name}
            </a>
          </p>
        )}
        <div className="my-2 flex text-4xl">
          <AnimatedGithub href={`https://${github}`} />
          <AnimatedTwitter href={twitter} />
          <AnimatedLinkedIn href={linkedIn} />
          <AnimatedScroll href="/resume" target="_self" />
        </div>
      </div>
      <div className={cn("text-pretty text-xl", roboto.className)}>
        <p>
          I love to learn about software. Always on the hunt for new Open Source
          Projects to play around with. <br /> Eager to work in teams or solo.
        </p>
      </div>
    </div>
  );
};

export default ProfileBio;

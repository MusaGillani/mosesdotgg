import Image from "next/image";
import { VscGithubInverted } from "react-icons/vsc";
import { BsTwitter } from "react-icons/bs";
import { useState } from "react";

import { sigmar, roboto } from "@/fonts";

const ProfileBio: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className={`mt-10 font-normal ${sigmar.className}`}>
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
      <p className="text-3xl">
        Currently working{" "}
        <a
          href="https://devsinc.com/"
          className="font-bold text-discord-purple"
          target="_blank"
        >
          @Devsinc
        </a>
      </p>
      <div className="my-2 flex text-4xl">
        <a href="https://github.com/MusaGillani" target="_blank">
          <VscGithubInverted className="m-2 ml-0 transition delay-150 ease-in-out hover:rotate-12 hover:scale-150" />
        </a>
        <a href="https://twitter.com/mosesdotgg" target="_blank">
          <BsTwitter className="m-2 transition delay-150 ease-in-out hover:rotate-12 hover:scale-150" />
        </a>
      </div>
    </div>
  );
};

export default ProfileBio;

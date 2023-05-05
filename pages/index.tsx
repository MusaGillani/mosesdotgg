import NavBar from "@/components/navBar";
import Head from "next/head";
import Image from "next/image";
import { VscGithubInverted } from "react-icons/vsc";
import { BsTwitter } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moses.gg</title>
      </Head>
      <main
        className={`h-full min-h-screen bg-white px-10 py-10 dark:bg-black dark:text-white lg:px-60`}
      >
        <NavBar />
        <Image
          src="https://avatars.githubusercontent.com/u/62158726?v=4"
          alt="profile image"
          width={150}
          height={150}
          style={{
            borderRadius: 100,
          }}
        />
        <h1 className="text-3xl">Hi, I&apos;m Musa 👋</h1>
        <p>Full stack developer, software engineer</p>
        <p>
          Currently working{" "}
          <a
            href="https://devsinc.com/"
            className="font-bold text-discord-purple transition delay-150 ease-in-out hover:underline"
          >
            @Devsinc
          </a>
        </p>
        <div className="flex text-2xl">
          <a href="https://github.com/MusaGillani">
            <VscGithubInverted className="m-2 ml-0 transition delay-150 ease-in-out hover:rotate-12 hover:scale-150" />
          </a>
          <a href="https://twitter.com/mosesdotgg">
            <BsTwitter className="m-2 transition delay-150 ease-in-out hover:rotate-12 hover:scale-150" />
          </a>
        </div>
        <div>
          <p>
            I&apos;m an associate software engineer at Devsinc, graduated with a
            Bachelor&apos;s in Computer Engineering from GIK
          </p>
          <p>
            I love to learn about software and always on the hunt for new Open
            Source Projects to play around with. Eager to work in teams or solo.
          </p>
          <p>
            Currently working with{" "}
            <a
              href="https://nestjs.org"
              className="font-bold text-discord-purple "
            >
              @Next JS
            </a>{" "}
            and learning about React Server Components and Island Architecture
            paradigm
          </p>
        </div>
      </main>
    </>
  );
}

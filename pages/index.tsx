import Head from "next/head";
import Description from "@/components/description";
import NavBar from "@/components/navBar";
import ProfileBio from "@/components/profileBio";
import Skills from "@/components/skills";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moses.gg</title>
      </Head>
      <main
        className={`h-full min-h-screen bg-white px-10 py-10 dark:bg-black dark:text-white lg:px-48`}
      >
        <NavBar />
        <ProfileBio />
        <Description />
        <Skills />
        <Experience />
      </main>
    </>
  );
}

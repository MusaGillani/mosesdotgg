import Description from "@/components/description";
import NavBar from "@/components/navBar";
import ProfileBio from "@/components/profileBio";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Banner />
      <main className={`px-10 py-10 lg:px-48`}>
        <NavBar />
        <ProfileBio />
        <Description />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}

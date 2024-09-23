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
      <main className={`flex flex-col`}>
        <NavBar className="horizontal-spacing" />
        <ProfileBio className="horizontal-spacing" />
        <Description className="horizontal-spacing" />
        <Experience className="horizontal-spacing" />
        <Skills className={"mx-auto px-10 lg:px-40 xl:w-2/4 xl:px-0"} />
        <Projects className="horizontal-spacing" />
      </main>
    </>
  );
}

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
      <main className={`flex flex-col`}>
        <NavBar className="horizontal-spacing" />
        <ProfileBio className="horizontal-spacing" />
        <Description className="horizontal-spacing" />
        <Experience className="horizontal-spacing" />
        <Skills className={"horizontal-spacing"} />
        <Projects className="horizontal-spacing" />
      </main>
    </>
    // TODO add a footer
  );
}

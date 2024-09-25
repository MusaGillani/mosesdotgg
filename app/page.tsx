import NavBar from "@/components/navBar";
import ProfileBio from "@/components/profileBio";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className={`flex flex-col`}>
        <NavBar className="horizontal-spacing" />
        <ProfileBio className="horizontal-spacing" />
        <Experience className="horizontal-spacing" />
        <Skills className={"horizontal-spacing"} />
        <Projects className="horizontal-spacing" />
        <Footer className="horizontal-spacing" />
      </main>
    </>
  );
}

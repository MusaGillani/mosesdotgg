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
      <main
        className={`mx-auto flex flex-col px-10 py-10 lg:px-40 xl:w-2/4 xl:px-0`}
      >
        <NavBar className="order-1" />
        <ProfileBio className="order-2" />
        <Description className="order-3" />
        <Skills className="order-5 md:order-4" />
        <Experience className="order-4 md:order-5" />
        <Projects className="order-6" />
      </main>
    </>
  );
}

import Description from "@/components/description";
import NavBar from "@/components/navBar";
import ProfileBio from "@/components/profileBio";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Banner from "@/components/banner";
import AnimatedSection from "@/components/animatedSection";

export default function Home() {
  return (
    <>
      <Banner />
      <main className={`flex flex-col px-10 py-10`}>
        <NavBar className="order-1 mx-auto lg:w-[40vw]" />
        <ProfileBio className="order-2 mx-auto mt-44 lg:w-[40vw]" />
        <Description className="order-3 mx-auto lg:w-[40vw]" />
        <AnimatedSection className="order-5 mx-auto md:order-4 lg:w-[40vw]">
          <Skills />
        </AnimatedSection>
        <AnimatedSection className="order-4 mx-auto md:order-5 lg:w-[40vw]">
          <Experience />
        </AnimatedSection>
        <AnimatedSection className="order-6 mx-auto">
          <Projects className=" lg:w-[50vw]" />
        </AnimatedSection>
      </main>
    </>
  );
}

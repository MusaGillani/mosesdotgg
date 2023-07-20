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
        <NavBar className="order-1 mx-auto lg:w-[30vw]" />
        <ProfileBio className="order-2 mx-auto mt-44 lg:w-[30vw]" />
        <Description className="order-3 mx-auto lg:w-[30vw]" />
        <AnimatedSection className="order-5 mx-auto md:order-4 lg:w-[30vw]">
          <Skills />
        </AnimatedSection>
        <AnimatedSection className="order-4 mx-auto md:order-5 lg:w-[30vw]">
          <Experience />
        </AnimatedSection>
        <AnimatedSection className="order-6 mx-auto">
          <Projects className=" lg:w-[40vw]" />
        </AnimatedSection>
      </main>
    </>
  );
}

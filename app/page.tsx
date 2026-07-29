import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "@/components/About";
import Experience from "@/components/Experience";
import SkillMatrix from "@/components/SkillMatrix";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-6xl px-6">
        <Hero />
        <Section id="about" label="About" title="Profile">
          <About />
        </Section>
        <Section id="skills" label="Skills" title="Capabilities">
          <SkillMatrix />
          <Education />
        </Section>
        <Section id="experience" label="Experience" title="Experience">
          <Experience />
        </Section>
        <Section id="projects" label="Projects" title="Projects">
          <Projects />
        </Section>
        <Section id="contact" label="Contact" title="Get in touch">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Subjects from "@/components/sections/Subjects";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Subjects />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
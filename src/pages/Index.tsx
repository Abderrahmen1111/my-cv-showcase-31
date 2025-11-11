import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Ebdelli Abderrahmen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;

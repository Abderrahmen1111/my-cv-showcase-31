import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CV />
      <Contact />
      
      {/* Chatbot */}
      <Chatbot />
      
      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Ebdelli Abderrahmen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;

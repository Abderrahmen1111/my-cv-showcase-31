import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin, Facebook } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fadeIn">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src={profileImage} 
                alt="Abderrahmen Ebdelli - Software Engineer"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-glow"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            EBDELLI ABDERRAHMEN
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineering Student | Web Developer | AI Enthusiast
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button onClick={() => scrollToSection('projects')} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              View Projects
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-12">
            <a href="mailto:abderrahmenebdelli18@gmail.com" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/Abderrahmen1111" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abderrahmen-ebdelli-703ab6346/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/abderr.ahmen.780828/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

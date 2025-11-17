import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <Card className="p-8 bg-gradient-card border-border shadow-card">
          <p className="text-center text-muted-foreground mb-8 text-lg">
            I'm currently seeking an end-of-study internship opportunity. 
            Let's connect and discuss how I can contribute to your team!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a 
              href="mailto:abderrahmenebdelli18@gmail.com"
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground text-center">abderrahmenebdelli18@gmail.com</span>
            </a>
            
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-primary/5">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">+216 58 730 950</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-primary/5">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Medenine, 4100</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <a 
                href="https://github.com/Abderrahmen1111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abderrahmen-ebdelli-703ab6346/?locale=fr_FR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://www.facebook.com/abderr.ahmen.780828/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-6 h-6 text-primary" />
              </a>
            </div>
            
            <Button 
              onClick={() => window.location.href = 'mailto:abderrahmenebdelli18@gmail.com'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Send Message
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

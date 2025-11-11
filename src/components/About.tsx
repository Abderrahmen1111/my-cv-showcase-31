import { Card } from "@/components/ui/card";
import { GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all shadow-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">Objective</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about web development, connected systems, databases, and artificial intelligence. 
              I am seeking an end-of-study internship in Medenine to apply my technical skills, contribute to 
              innovative projects, and strengthen my professional experience in software development and intelligent systems.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all shadow-card">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="text-card-foreground font-semibold">
                Bachelor's in Software Engineering and Information Systems (LGLSI3)
              </p>
              <p className="text-muted-foreground">Faculty of Sciences of Gabès</p>
              <p className="text-primary text-sm">Expected 2026</p>
              <p className="text-muted-foreground text-sm mt-4">
                Specialization: Web Development, IoT and Intelligent Systems
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

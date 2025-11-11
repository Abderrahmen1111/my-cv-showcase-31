import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import recruithubImg from "@/assets/recruithub.png";
import medicalAiImg from "@/assets/medical-ai.png";
import talkbridgeImg from "@/assets/talkbridge.png";
import wasalniImg from "@/assets/wasalni.png";

const Projects = () => {
  const projects = [
    {
      title: "Recruithub",
      subtitle: "Intelligent HR Platform",
      year: "2025",
      image: recruithubImg,
      description: "Web application for recruitment management with an intelligent candidate pre-selection engine",
      technologies: ["React", "PHP", "MySQL", "PostgreSQL"],
      result: "Simplified and automated HR process"
    },
    {
      title: "MedicalAIService",
      subtitle: "Intelligent Medical Assistant",
      year: "2025",
      image: medicalAiImg,
      description: "Virtual assistant capable of analyzing symptoms and providing medical recommendations",
      technologies: ["Python", "NLP", "PostgreSQL"],
      result: "Functional prototype for academic demonstration"
    },
    {
      title: "TalkBridge",
      subtitle: "Conversational Agent Chatbot",
      year: "2025",
      image: talkbridgeImg,
      description: "Interactive chatbot for customer support with automatic request management",
      technologies: ["JavaScript", "Node.js", "NLP API", "PostgreSQL"],
      result: "Operational chatbot tested with users"
    },
    {
      title: "Wasalni eBooking",
      subtitle: "Car Rental Platform in Tunisia",
      year: "2025",
      image: wasalniImg,
      description: "Website and application for vehicle booking with search, reservation, and payment management",
      technologies: ["React", "PHP", "MySQL", "PostgreSQL"],
      result: "Fast and secure booking application"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
          Major Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={idx} 
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all hover:shadow-glow group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              
              {/* Project Image */}
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge 
                      key={techIdx} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-sm text-primary font-medium">
                  ✓ {project.result}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

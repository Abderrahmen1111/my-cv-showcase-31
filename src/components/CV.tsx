import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Briefcase, Calendar } from "lucide-react";

const CV = () => {
  const experiences = [
    {
      title: "Web Developer",
      organization: "Faculty of Sciences of Gabès",
      period: "2025 - Present",
      type: "University Project",
      description: "Development of a student club management website with account management, forums, and activity tracking",
      technologies: ["React", "PHP", "MySQL", "PostgreSQL"]
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/EBDELLI_ABDERRAHMEN_cv.docx';
    link.download = 'EBDELLI_ABDERRAHMEN_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
          Curriculum Vitae
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Download CV Card */}
          <Card className="md:col-span-1 p-8 bg-gradient-card border-border hover:border-primary/50 transition-all shadow-card flex flex-col items-center justify-center text-center">
            <div className="p-6 bg-primary/10 rounded-full mb-6">
              <FileText className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">Download CV</h3>
            <p className="text-muted-foreground mb-6">
              Get the complete PDF version of my curriculum vitae
            </p>
            <Button 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow w-full"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </Card>

          {/* Professional Summary */}
          <Card className="md:col-span-2 p-8 bg-gradient-card border-border hover:border-primary/50 transition-all shadow-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-2">Professional Profile</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Third-year Software Engineering student specializing in web development, IoT systems, 
                  databases, and artificial intelligence. Experienced in building full-stack applications 
                  with React, Django, and ASP.NET. Strong background in machine learning, NLP, and 
                  connected systems with Arduino. Seeking an end-of-study internship to apply technical 
                  skills in innovative projects and contribute to intelligent software solutions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">4+</p>
                <p className="text-sm text-muted-foreground">Major Projects</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">10+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">2026</p>
                <p className="text-sm text-muted-foreground">Graduation Year</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-card-foreground">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all shadow-card"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-card-foreground">{exp.title}</h4>
                      <span className="text-sm text-primary">{exp.period}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-1">{exp.organization}</p>
                    <p className="text-sm text-primary mb-3">{exp.type}</p>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Highlight */}
        <Card className="mt-8 p-8 bg-gradient-card border-border shadow-card">
          <h3 className="text-2xl font-semibold text-card-foreground mb-6 text-center">
            Academic Background
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Main Courses</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Computer Networks & Cisco Packet Tracer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Databases & Data Engineering (PostgreSQL)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Big Data & Machine Learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  SOA & ASP.NET Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Mobile Development (Android)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Specializations</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Web Development (Full Stack)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Internet of Things (IoT)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Intelligent Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Connected Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Natural Language Processing
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CV;

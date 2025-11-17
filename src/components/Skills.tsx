import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Network, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Development & Programming",
      skills: [
        { name: "Languages", items: "C, C++, C#, Python, JavaScript, PHP" },
        { name: "Web & Frameworks", items: "React, Django, ASP.NET, Bootstrap" },
        { name: "Mobile", items: "Android / Hybrid Applications" },
        { name: "Containers", items: "Docker" }
      ]
    },
    {
      icon: Database,
      title: "Databases & Big Data",
      skills: [
        { name: "Relational DB", items: "MySQL, PostgreSQL, PL/SQL" },
        { name: "Engineering", items: "Database modeling and optimization" },
        { name: "Big Data", items: "Large-scale data processing" }
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "Analysis", items: "Data analysis, predictive models" },
        { name: "NLP", items: "Natural Language Processing" },
        { name: "Chatbots", items: "Conversational AI development" }
      ]
    },
    {
      icon: Network,
      title: "Networks & Protocols",
      skills: [
        { name: "Network Design", items: "Packet Tracer, Cisco equipment" },
        { name: "Protocols", items: "TCP/IP, HTTP, DNS, DHCP" },
        { name: "Management", items: "Network services and administration" },
        { name: "Security", items: "Firewall configuration, VPN" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all hover:shadow-glow group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <p className="text-sm font-medium text-primary mb-1">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.items}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

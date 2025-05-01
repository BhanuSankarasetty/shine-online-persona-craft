
import { Card, CardContent } from '@/components/ui/card';
import { CodepenIcon, Code, PenTool, Layers, Database, Figma, Globe, Server } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      icon: <Code className="text-highlight" size={24} />,
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "Python"],
      icon: <Server className="text-highlight" size={24} />,
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL"],
      icon: <Database className="text-highlight" size={24} />,
    },
    {
      category: "UI/UX Design",
      items: ["Figma", "Wireframing", "Prototyping", "User Research", "Accessibility"],
      icon: <PenTool className="text-highlight" size={24} />,
    },
    {
      category: "DevOps",
      items: ["Docker", "Jenkins","Maven","CI/CD", "AWS", "Netlify", "Git/GitHub"],
      icon: <Layers className="text-highlight" size={24} />,
    },
    {
      category: "Other Skills",
      items: ["Agile Methodologies", "Technical Writing", "Testing (Jest/Cypress)", "Performance Optimization", "Responsive Design"],
      icon: <Globe className="text-highlight" size={24} />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-highlight mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I've spent years honing my skills across various technologies and disciplines.
            Here's an overview of my technical expertise and the tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-2 border-t-highlight overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-navy ml-3">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-highlight rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

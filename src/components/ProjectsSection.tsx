
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and secure checkout.",
      image: "bg-gray-200",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task tracker with real-time updates, drag-and-drop interfaces, and team workspaces.",
      image: "bg-gray-200",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for monitoring social media performance across multiple platforms.",
      image: "bg-gray-200",
      tech: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-first app for tracking workouts, nutrition, and progress with personalized insights.",
      image: "bg-gray-200",
      tech: ["React Native", "GraphQL", "AWS Amplify", "TypeScript"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Real Estate Listing Platform",
      description: "A property listing platform with advanced search features, virtual tours, and agent directories.",
      image: "bg-gray-200",
      tech: ["Angular", "Django", "PostgreSQL", "Google Maps API"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A clean, intuitive weather app with 7-day forecasts, location-based data, and severe weather alerts.",
      image: "bg-gray-200",
      tech: ["React", "OpenWeather API", "Styled Components", "PWA"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-highlight mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges
            and opportunities to learn and grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className={`h-48 ${project.image} flex items-center justify-center text-gray-500`}>
                Project Screenshot
              </div>
              <CardHeader>
                <CardTitle className="text-navy">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="bg-navy hover:bg-navy-light" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight hover:text-white" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

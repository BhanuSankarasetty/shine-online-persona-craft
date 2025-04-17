
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">About Me</h2>
          <div className="h-1 w-20 bg-highlight mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-navy-light mb-4">
              A passionate developer dedicated to crafting exceptional digital experiences
            </h3>
            <p className="text-gray-600 mb-6">
              With over 5 years of experience in web development, I specialize in building modern, 
              responsive, and user-friendly applications. My journey in tech started when I built my 
              first website at the age of 15, and I've been hooked ever since.
            </p>
            <p className="text-gray-600 mb-6">
              I believe in writing clean, maintainable code and creating intuitive user experiences. 
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting 
              with new recipes in the kitchen.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-navy hover:bg-navy-light" asChild>
                <a href="/resume.pdf" download>
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:you@example.com" aria-label="Email">
                    <Mail />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500 text-lg">
                  Your Photo Here
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-4">
                    <p className="font-medium text-navy">5+ Years Experience</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

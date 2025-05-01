
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
            Aspiring Software Development Engineer with a Vision to Build AI-Driven Systems and solutions that Solve Real-World Problems
            </h3>
            <p className="text-gray-600 mb-6">
            Driven by a deep passion for technology and problem-solving, I’m currently pursuing B.Tech in Computer Science Engineering and actively building the skills required to thrive as an SDE. My background in Mining Engineering gave me a unique perspective on large-scale systems, safety, and optimization—which I now combine with my love for coding and data structures.

I’m especially interested in leveraging AI to build impactful systems—like my current project: an AI-powered crowd monitoring and alert system to prevent stampedes in high-density areas across India. I’m also building a DevOps-enabled food delivery platform that empowers home cooks through tech.
            </p>
            <p className="text-gray-600 mb-6">
            With a strong grasp of C++, DSA (300+ LeetCode problems), and hands-on experience in full-stack development using React.js, Node.js, and MongoDB, I’m now expanding into system design, Docker, Terraform, Jenkins, and AWS. My goal is to join a top tech company (FAANG/MNC) and contribute to scalable, intelligent, and secure digital ecosystems.

When I'm not coding, you’ll find me dominating a chessboard, debating ideas, or reflecting on how tech can uplift lives in meaningful ways.


            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-navy hover:bg-navy-light" asChild>
                <a href="/Resume/resume.pdf" download>
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/BhanuSankarasetty" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/bhanumurari" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:bhanuchiru619@gmai.com" aria-label="Email">
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
                  <img src = "/images/Profile.jpeg"></img>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-4">
                    <p className="font-medium text-navy">Software Developer Engineer</p>
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

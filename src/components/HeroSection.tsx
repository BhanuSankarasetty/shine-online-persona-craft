
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 pt-16"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="animate-fade-in opacity-0 [animation-delay:200ms] text-4xl md:text-6xl font-bold text-navy mb-6">
            Hi, I'm <span className="text-highlight">Sankarasetty Bhanu Murari</span>
          </h1>
          <h2 className="animate-fade-in opacity-0 [animation-delay:400ms] text-xl md:text-2xl text-gray-700 mb-8">
          Devops Engineer | Software Developer Engineer
          </h2>
          <p className="animate-fade-in opacity-0 [animation-delay:600ms] text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            I create beautiful, functional, and user-friendly digital experiences and solutions
            that help businesses grow and succeed in the digital world.
          </p>
          <div className="animate-fade-in opacity-0 [animation-delay:800ms] flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-navy hover:bg-navy-light text-white" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

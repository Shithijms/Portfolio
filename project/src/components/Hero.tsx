import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Shithij M Salian</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Software Engineer & Full-Stack Developer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I build robust, scalable applications with modern technologies.
              Passionate about creating software that solves real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#projects"
                className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/resume.pdf" 
                className="flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
                target="_blank"
              >
                Download CV
                <Download className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-3xl transform scale-110"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-white shadow-lg w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="image.png" 
                  alt="Shithij M Salian" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
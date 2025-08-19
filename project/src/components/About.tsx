import React from 'react';
import { Code, Globe, BookOpen, Coffee } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            I'm a passionate software engineer with a passion in building modern web applications.
            I specialize in creating elegant solutions to complex problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Code className="w-6 h-6" />}
            title="Dev Ops"
            description="Deploying simple web applications on the server."
          />
          <FeatureCard 
            icon={<Globe className="w-6 h-6" />}
            title="Backend Systems"
            description="Designing scalable backend architectures and APIs that power robust applications."
          />
          <FeatureCard 
            icon={<BookOpen className="w-6 h-6" />}
            title="Continuous Learning"
            description="Always exploring new technologies and methodologies to improve my skill set."
          />
          <FeatureCard 
            icon={<Coffee className="w-6 h-6" />}
            title="Problem Solving"
            description="Approaching complex challenges with analytical thinking and creative solutions."
          />
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-8 bg-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="mb-4">
                My passion for programming began during my studies in BE Computer Science,
                 where I started exploring simple data analysis and gradually developed a deep interest in learning more about technology. Though I don’t have industry experience yet,
                  I’m a passionate and curious learner who enjoys building skills through self-study and academic projects.

              </p>
              <p>
Outside of my academic and technical pursuits, I enjoy drawing, playing sports, and engaging in creative activities that keep me inspired and balanced.              </p>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-32 flex-shrink-0 font-medium">2023 - Present</div>
                  <div>
                    <h4 className="font-semibold">Bachelor in Engineering </h4>
                    <p className="text-gray-600">Sahyadri College of Engineering and Management</p>
                  </div>

                </div>
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
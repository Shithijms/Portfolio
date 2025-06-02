import React from 'react';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            My professional journey and qualifications at a glance.
            Download my full resume for complete details.
          </p>
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            target="_blank"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="border-l-2 border-blue-200 pl-6 ml-3 space-y-8">
              {/* <div className="relative">
                <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="mb-1 text-sm text-blue-600 font-medium">2018 - Present</div>
                <h4 className="text-xl font-semibold mb-2">Senior Software Engineer</h4>
                <h5 className="text-gray-700 mb-2">TechCorp Inc.</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Led a team of 5 developers in building a cloud-based SaaS platform</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                  <li>Architected microservices infrastructure using Node.js and Docker</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div> */}
              
              {/* <div className="relative">
                <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="mb-1 text-sm text-blue-600 font-medium">2016 - 2018</div>
                <h4 className="text-xl font-semibold mb-2">Frontend Developer</h4>
                <h5 className="text-gray-700 mb-2">WebSolutions LLC</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Developed responsive web applications using React and Redux</li>
                  <li>Collaborated with UX designers to implement pixel-perfect interfaces</li>
                  <li>Optimized application performance and loading times</li>
                  <li>Built reusable component libraries for company projects</li>
                </ul>
              </div> */}
              
              {/* <div className="relative">
                <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="mb-1 text-sm text-blue-600 font-medium">2014 - 2016</div>
                <h4 className="text-xl font-semibold mb-2">Web Developer Intern</h4>
                <h5 className="text-gray-700 mb-2">Digital Creations</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Assisted in building websites for small businesses</li>
                  <li>Learned modern web development practices and tools</li>
                  <li>Participated in team code reviews and agile methodology</li>
                </ul>
              </div> */}
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="border-l-2 border-blue-200 pl-6 ml-3 space-y-8">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="mb-1 text-sm text-blue-600 font-medium">2023 - Present</div>
                  <h4 className="text-xl font-semibold mb-2">B.E. in Computer Science</h4>
                  <h5 className="text-gray-700 mb-2">Sahyadri College of Engineering and Management</h5>
                  <p className="text-gray-600">Pursuing Engineering in Computer Science. Specialized in software engineering and distributed systems.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="mb-1 text-sm text-blue-600 font-medium">2021-2023</div>
                  <h4 className="text-xl font-semibold mb-2">Pre University</h4>
                  <h5 className="text-gray-700 mb-2">Poorna Prajna Pre-University College</h5>
                  <p className="text-gray-600">Studied PCMB in Science Stream</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Certifications & Awards</h3>
              </div>
{/*               
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Google Cloud Certified Professional</h4>
                    <p className="text-gray-600 text-sm">2021</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">MongoDB Certified Developer</h4>
                    <p className="text-gray-600 text-sm">2020</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Hackathon Winner - Best Innovation</h4>
                    <p className="text-gray-600 text-sm">2019</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">React Advanced Certification</h4>
                    <p className="text-gray-600 text-sm">2018</p>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium text-gray-700">{name}</span>
      <span className="text-sm text-gray-500">{percentage}%</span>
    </div>
    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${percentage}%`, transform: 'translateX(-100%)', opacity: 0 }}
        data-animate="true"
      ></div>
    </div>
  </div>
);

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => (
  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default">
    {name}
  </span>
);

const Skills: React.FC = () => {
  // Animation for skill bars
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('[data-animate="true"]');
          bars.forEach((bar: Element) => {
            if (bar instanceof HTMLElement) {
              setTimeout(() => {
                bar.style.transform = 'translateX(0)';
                bar.style.opacity = '1';
              }, 200);
            }
          });
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            I've worked with a variety of technologies and frameworks, constantly expanding my skill set to stay current with industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <SkillBar name="JavaScript" percentage={60} color="bg-blue-600" />
            <SkillBar name="HTML/CSS" percentage={90} color="bg-orange-500" />
            <SkillBar name="Python" percentage={80} color="bg-yellow-500" />
            <SkillBar name="SQL" percentage={75} color="bg-purple-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <TechBadge name="Django" />
              <TechBadge name="MongoDB" />
              <TechBadge name="HTML" />
              <TechBadge name="CSS" />
              <TechBadge name="Docker" />
              <TechBadge name="Git" />
              <TechBadge name="Knime" />
              <TechBadge name="Figma" />
              <TechBadge name="Tailwind CSS" />
              <TechBadge name="Excel" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Communication</h4>
                <p className="text-gray-600 text-sm">Clear and effective communication with team members and clients.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-gray-600 text-sm">Analytical approach to complex technical challenges.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Team Collaboration</h4>
                <p className="text-gray-600 text-sm">Experience working in agile environments with diverse teams.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Adaptability</h4>
                <p className="text-gray-600 text-sm">Quick to learn and adapt to new technologies and methodologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
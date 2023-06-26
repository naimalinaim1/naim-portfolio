const Skills = () => {
  const technicalSkills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs",
  ];

  const frontendSkills = [
    "Responsive Web Layout Design",
    "CSS frameworks (e.g., Bootstrap, Tailwind CSS)",
    "Accessibility",
    "Version Control (Git)",
    "React Router",
    "Axios",
    "Responsive Images",
    "NPM Package",
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Abilities Showcase Space skills
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="px-28">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="text-gray-500 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-28">
            <h3 className="text-xl font-semibold mb-4">Frontend Skills</h3>
            <ul className="list-disc list-inside">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="text-gray-500 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

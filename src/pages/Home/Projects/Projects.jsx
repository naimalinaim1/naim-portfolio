import SingleProject from "./SingleProject";

const Projects = () => {
  const projectsData = [
    {
      title: "Project 1",
      description: "Project 1 description goes here.",
      image: "image.one",
      link: "https://firebase-auth-ecce.netlify.app/",
    },
    {
      title: "Project 2",
      description: "Project 2 description goes here.",
      image: "image.one",
      link: "/project2",
    },
    // Add more project objects
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

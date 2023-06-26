const SingleProject = ({ project }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <img
        src={project.image}
        alt={`Project not found`}
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-500 mb-4">{project.description}</p>
      <a href={project.link} className="text-blue-500 hover:text-blue-600">
        Learn More
      </a>
    </div>
  );
};

export default SingleProject;

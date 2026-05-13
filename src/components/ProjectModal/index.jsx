function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-black transition hover:bg-pink-100"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src={project.image}
            alt={project.title}
            className="h-72 w-full object-cover"
          />
        </div>

        <div className="pt-8">
          <h3 className="text-3xl font-extrabold text-black">
            {project.title}
          </h3>

          <p className="mt-5 leading-relaxed text-gray-600">
            {project.fullDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-semibold text-purple-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-purple-500 px-6 py-3 text-center font-semibold text-purple-700 transition hover:bg-purple-600 hover:text-white"
            >
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-center font-semibold text-white shadow-md transition hover:scale-105"
            >
              Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
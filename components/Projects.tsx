export default function Projects() {
  const projects: Array<{
    name: string
    tagline: string
    period: string
    status: string
    description: string
    technologies: string[]
    links: {
      website: string
      source: string
    }
    imageBg: string
    imageText: string
  }> = []

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base">My Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project, index) => (
            <div key={index} className="rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image/Top Section */}
              <div className={`${project.imageBg} h-48 flex flex-col items-center justify-center p-6`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.imageText}</h3>
                <p className="text-sm text-gray-700 text-center">{project.tagline}</p>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <span className="px-2 py-1 bg-gray-800 text-white rounded text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{project.period.replace(' - ', ' - ')}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <a href={project.links.website} className="text-sm text-gray-400 hover:text-white transition-colors">
                    Website
                  </a>
                  <a href={project.links.source} className="text-sm text-gray-400 hover:text-white transition-colors">
                    Source
                  </a>
                </div>
              </div>
            </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

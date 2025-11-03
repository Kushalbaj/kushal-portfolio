export default function Skills() {
  const skills = [
    'React',
    'MongoDB',
    'PostgreSQL',
    'Nextjs',
    'TypeScript',
    'TailwindCSS',
    'Node.js',
  ]

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-1 max-w-xl">
          {skills.map((skill, index) => (
            <div key={index} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary cursor-default transition-all duration-300 hover:scale-105">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


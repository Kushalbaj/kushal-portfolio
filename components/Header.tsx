'use client'

export default function Header() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-3xl space-y-8 py-4 md:p-4 lg:p-4">
        <div className="flex flex-col md:flex-row lg:justify-between items-start gap-4">
          <div className="flex flex-col gap-2 flex-grow">
            <div className="flex flex-col md:flex-row lg:flex-row items-start lg:items-end gap-2">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">Kushal Bajracharya</h1>
              <a className="bg-foreground hover:bg-opacity-50 transition-all duration-300 rounded-md text-secondary text-sm px-2 font-mono font-semibold tracking-tighter" href="mailto:bajrakus20@gmail.com">
                <span>Hire me!</span>
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="max-w-[450px] text-muted-foreground text-sm lg:text-base">
                Full-stack developer specializing in building scalable web applications and data-driven solutions. Experienced in developing real-time tracking systems, automated tariff calculations, and efficient algorithms for processing large datasets. Proficient in modern web technologies including React, Next.js, TypeScript, Node.js, and PostgreSQL, with a focus on creating high-performance software solutions that streamline business operations.
              </div>
              <div className="flex-shrink-0">
                <div className="w-[110px] h-[110px] rounded-lg overflow-hidden">
                  <img 
                    src="/img/photo.jpg" 
                    alt="Kushal Bajracharya" 
                    className="w-full h-full object-cover scale-150"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-3 w-3 md:h-4 md:w-4 lg:h-4 lg:w-4 text-muted-foreground">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <a className="text-muted-foreground transition-all duration-300 hover:underline" target="_blank" href="https://www.google.com/maps/place/Lalitpur/@27.6575387,85.2819523,13z/data=!3m1!4b1!4m6!3m5!1s0x39eb19d3cf18ca51:0xd10ec3d53656e18f!8m2!3d27.6587525!4d85.3247183!16zL20vMDRtX3h0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D">
                <span className="text-xs md:text-sm lg:text-sm font-mono">Nepal</span>
              </a>
            </div>
            <div className="flex gap-2 items-center mt-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground rounded-md hover:bg-muted-foreground hover:bg-opacity-10 transition-all"
                  aria-label={link.name}
                >
                  <div className="h-9 w-9 p-2 border-[1px] border-muted-foreground border-opacity-30 rounded-lg transition-all hover:text-primary hover:scale-105">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:bajrakus20@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Kushalbaj',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/kushalbaj',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  }
]


export default function Education() {
  return (
    <section id="education" className="space-y-3">
      <div className="w-full pt-4">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          <a className="cursor-pointer group" href="https://www.hcoe.edu.np/">
            <div className="flex flex-row justify-between">
              <div className="flex gap-4 items-center">
                <img 
                  alt="Himalaya College of Engineering" 
                  loading="lazy" 
                  width="40" 
                  height="40" 
                  className="shrink-0 w-10 h-10 rounded-full object-cover" 
                  src="/img/hcoe.jpg" 
                />
                <div className="flex flex-col">
                  <div className="cursor-pointer flex items-center">
                    <span className="text-lg font-semibold">Himalaya College of Engineering</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right size-4 transform transition-all duration-300 ease-out translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:lg:opacity-100 group-hover:md:opacity-100 rotate-0">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                  <div className="text-muted-foreground text-sm">Bachelor's Degree in Computer Science and Information Technology (BSc. CSIT)</div>
                </div>
              </div>
              <div className="text-muted-foreground text-xs md:text-sm lg:text-sm mt-2 md:mt-0 flex-shrink-0">2018 - 2022</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}


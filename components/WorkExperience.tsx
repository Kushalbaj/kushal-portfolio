'use client'

import { useState } from 'react'

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const experiences = [
    {
      company: 'PortPro',
      role: 'Software Engineer',
      period: 'May 2024 - Present',
      color: 'bg-purple-500',
      url: 'https://portpro.io/',
      description: 'Developed and maintained core features for PortPro TMS, specializing in tracking systems and tariff management. Built scalable solutions for real-time container tracking, automated tariff calculations, and data research. Implemented efficient algorithms to process large datasets, optimize route calculations, and ensure accurate pricing models. Collaborated with cross-functional teams to deliver high-performance software solutions that streamline drayage operations.',
      logo: (
        <img 
          src="/img/portpro.webp" 
          alt="Port Pro" 
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      company: 'Cloud Factory',
      role: 'Data Analyst',
      period: 'July 2023 - May 2024',
      color: 'bg-teal-500',
      url: 'https://www.cloudfactory.com/',
      description: 'Worked as a team leader in data analysis and quality assurance. Led a team to analyze and process large datasets, ensuring data accuracy and quality standards. Collaborated with cross-functional teams to deliver insights and improve operational efficiency through data-driven decision making.',
      logo: (
        <img 
          src="/img/Cloudfactory.png" 
          alt="Cloud Factory" 
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      company: 'AzrachIT',
      role: 'Customer Service Analyst',
      period: 'April 2022 - June 2023',
      color: 'bg-orange-500',
      url: 'https://www.azrachit.com/',
      description: 'Managed bill parsing and data extraction from supplier invoices and portals. Handled missing bills management, account switchovers by coordinating with retailers, and regular report preparation. Resolved client queries and provided customer service support through ad hoc data entry and account management tasks.',
      logo: (
        <img 
          src="/img/AzrachIT.png" 
          alt="AzrachIT" 
          className="w-full h-full object-cover"
        />
      ),
    },
  ]

  return (
    <section id="work">
      <div className="w-full pt-4">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index
            return (
              <div key={index} className="cursor-pointer group">
                <div 
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="flex flex-row justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <div className={`shrink-0 w-10 h-10 ${exp.color} rounded-full flex items-center justify-center overflow-hidden`}>
                      {exp.logo}
                    </div>
                    <div className="flex flex-col">
                      <div className="cursor-pointer flex items-center">
                        {exp.url ? (
                          <a 
                            href={exp.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-lg font-semibold hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="text-lg font-semibold">{exp.company}</span>
                        )}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className={`size-4 transition-transform duration-700 ease-in-out ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                      <div className="text-muted-foreground text-sm">{exp.role}</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground text-xs md:text-sm lg:text-sm mt-2 md:mt-0 flex-shrink-0">{exp.period}</div>
                </div>
                <div 
                  className={`grid transition-all duration-700 ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-sm text-muted-foreground pb-2">{exp.description}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

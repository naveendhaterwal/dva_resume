import { useState } from 'react';
import { MapPin, Mail, Smartphone, Link as LinkIcon, Book, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Google Play Store Data Pipeline',
    description: 'Built a robust data cleaning and transformation pipeline for a 2.3M-row dataset. Automated missing value imputation and type normalization.',
    modalDescription: 'Orchestrated a complete data quality audit and ELT workflow. Addressed edge cases like zero-ratings and date inconsistencies, laying the foundation for scalable downstream machine learning and BI tasks.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    repoLink: 'https://github.com/manjeet090223/Section-A_G-13_Google_Play_Store.git',
    tags: ['python', 'pandas', 'data-pipeline', 'data-quality'],
    language: 'Python',
    langColor: '#3572A5'
  },
  {
    id: 2,
    title: 'Housing Market Intelligence Dashboard',
    description: 'Analyzing Property Prices, Market Trends, and Buyer Behavior to Identify Key Investment Insights.',
    modalDescription: 'Interactive dashboard analyzing housing market trends, price drivers, and geographical opportunities. Developed comprehensive executive summaries and actionable investment insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    repoLink: 'https://docs.google.com/spreadsheets/d/1QU5AEmZaSJcBjNW9MoLuTMz_-Acxpx7rbuLUTRQnjZs/edit?gid=1285832976#gid=1285832976',
    tags: ['dashboard', 'data-analysis', 'market-research'],
    language: 'Excel',
    langColor: '#1d6f42'
  },
  {
    id: 3,
    title: 'Enterprise Data Analytics Capstone',
    description: 'End-to-end data processing workflow from raw ingestion to a final interactive business intelligence dashboard.',
    modalDescription: 'Implemented a structured data architecture including raw data staging, rigorous data cleaning, transformation logging, and analytical modeling, culminating in a comprehensive BI dashboard.',
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c',
    repoLink: '/DVA_Capstone (1).xlsx',
    tags: ['excel', 'data-visualization', 'analytics'],
    language: 'Excel',
    langColor: '#1d6f42'
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    // 1. Check Search Query
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 2. Check explicitly active tab filters against explicitly provided project standard language tag or its arrays
    const matchesFilter = 
      activeFilter === 'All' 
      || project.language.toLowerCase() === activeFilter.toLowerCase()
      || project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans antialiased relative">
      
      {/* MODAL OVERLAY */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl w-full max-w-[800px] shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#30363d]">
              <h2 className="text-lg font-semibold text-[#c9d1d9]">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-4 md:p-6 bg-[#0d1117]">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-[300px] object-cover rounded-lg border border-[#30363d] mb-4"
              />
              <p className="text-[#c9d1d9] text-[15px] leading-relaxed">
                {selectedProject.modalDescription}
              </p>
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-4 border-t border-[#30363d] bg-[#161b22]">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-sm font-medium text-[#c9d1d9] bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] hover:border-[#8b949e] transition-colors"
              >
                Cancel
              </button>
              <a 
                href={selectedProject.repoLink} 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-[#2da44e] border border-[#2ea043] rounded-md hover:bg-[#2c974b] transition-colors"
              >
                View Live Repository
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TOP NAVBAR */}
      <header className="py-4 px-6 bg-[#010409] border-b border-[#30363d] flex items-center">
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="text-white fill-current">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
      </header>

      <main className="max-w-[1280px] mx-auto px-4 md:px-6 pt-8 flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-[296px] shrink-0">
          <div className="relative mb-4">
            <img
              src="/ady.jpeg"
              alt="Profile"
              className="w-full h-auto max-w-[296px] aspect-square rounded-full object-cover z-10 relative"
            />
          </div>

          <div className="py-1 mb-4">
            <h1 className="text-2xl font-bold text-[#c9d1d9] leading-tight mb-1">Naveen Kumar</h1>
            <h2 className="text-xl text-[#8b949e] font-light">NaveenKumar</h2>
          </div>

          <div className="mb-4">
            <p className="text-[#c9d1d9] text-[15px] leading-snug">
              Data Science student and aspiring Data Engineer passionate about scalable data architecture, ETL workflows, and analytics infrastructure.
            </p>
          </div>

          <div className="mb-6">
            <a 
              href="https://github.com/NaveenKumar"
              target="_blank"
              rel="noreferrer"
              className="block text-center w-full py-[5px] rounded-md bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:border-[#8b949e] text-sm font-medium transition-colors text-[#c9d1d9]"
            >
              Follow
            </a>
          </div>

          <div className="flex flex-col gap-1.5 text-sm mb-6 text-[#c9d1d9]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8b949e]" />
              <span>India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#8b949e]" />
              <a href="mailto:naveen.kumar2024@nst.rishihood.edu.in" className="hover:text-blue-400 hover:underline">naveen.kumar2024@nst.rishihood.edu.in</a>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#8b949e]" />
              <span>+91 8302906048</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-[#8b949e]" />
              <a href="#" className="hover:text-[#58a6ff] hover:underline">linkedin.com/in/naveen-kumar</a>
            </div>
          </div>

          <div className="pt-6 border-t border-[#30363d]">
            <h3 className="font-semibold text-sm mb-3 text-[#c9d1d9]">Organizations</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "Jupyter", "Excel", "Tableau", "Scikit-learn"].map((org) => (
                <span
                  key={org}
                  className="px-3 py-1 bg-transparent border border-[#30363d] rounded-full text-xs font-medium text-[#c9d1d9] hover:bg-[#21262d] cursor-pointer"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 w-full mt-4 md:mt-0">
          
          {/* TABS */}
          <nav className="flex items-center gap-4 border-b border-[#30363d] mb-6">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-[#f78166] text-[#c9d1d9] font-medium text-sm px-2 cursor-pointer">
              <Book className="w-5 h-5 text-[#8b949e]" />
              Repositories
              <span className="bg-[#30363d] text-[#c9d1d9] text-xs py-0.5 px-2 rounded-full ml-1 font-semibold">{projects.length}</span>
            </div>
          </nav>

          {/* SEARCH & FILTERS */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6 pt-2 items-center">
            <input
              type="text"
              placeholder="Find a repository..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 w-full lg:max-w-xs bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-[5px] text-sm focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] placeholder-[#8b949e]"
            />
            <div className="flex flex-wrap gap-2">
              {["All", "Python", "SQL", "Excel", "Tableau"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-[5px] rounded-full text-sm font-medium border ${
                    activeFilter === filter
                      ? "bg-[#1f6feb] border-transparent text-white"
                      : "bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="border border-[#30363d] rounded-xl overflow-hidden bg-[#0d1117] relative flex flex-col cursor-pointer hover:border-[#8b949e] transition-colors"
                onClick={() => setSelectedProject(project)}
              >
                
                {/* IMAGE */}
                <div className="w-full border-b border-[#30363d]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                
                {/* CONTENT */}
                <div className="p-4 md:p-5 flex-1 flex flex-col">
                  
                  <div className="flex items-center justify-between mb-1 text-[#8b949e]">
                    <div className="flex items-center gap-2">
                      <Book className="w-4 h-4 text-[#8b949e]" />
                      <a href="#" className="text-lg font-semibold text-[#58a6ff] hover:underline line-clamp-1">{project.title}</a>
                    </div>
                    <span className="text-xs font-medium text-[#8b949e] border border-[#30363d] rounded-full px-2 py-0.5 shrink-0">
                      Public
                    </span>
                  </div>

                  <p className="text-[#8b949e] text-sm mb-4 leading-relaxed mt-2 flex-1">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-[6px] mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-[#58a6ff] bg-[#1f6feb]/10 px-[10px] py-[4px] rounded-full cursor-pointer hover:bg-[#1f6feb]/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center gap-4 text-xs text-[#8b949e] mt-auto pt-2">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span 
                        className="w-2.5 h-2.5 rounded-full border border-black/10" 
                        style={{ backgroundColor: project.langColor }}
                      ></span>
                      {project.language}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}

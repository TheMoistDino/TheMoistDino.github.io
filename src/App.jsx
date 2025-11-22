import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  Code, 
  Cpu, 
  Wrench, 
  Award, 
  BookOpen, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  MapPin
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'skills', 'awards'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
        activeSection === id ? 'text-blue-400' : 'text-slate-400'
      }`}
    >
      {label}
    </button>
  );

  const MobileNavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`block w-full text-left px-4 py-3 text-lg font-medium border-l-4 transition-all duration-300 ${
        activeSection === id 
          ? 'border-blue-500 bg-blue-900/20 text-blue-400' 
          : 'border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
      }`}
    >
      {label}
    </button>
  );

  const SectionTitle = ({ children, icon: Icon }) => (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-blue-900/30 rounded-lg text-blue-400">
        {Icon && <Icon size={24} />}
      </div>
      <h2 className="text-3xl font-bold text-slate-100">{children}</h2>
      <div className="h-px bg-slate-700 flex-grow ml-4 opacity-50"></div>
    </div>
  );

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50 h-16">
        <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="text-xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-800 rounded flex items-center justify-center text-white font-bold">DL</div>
            <span>Darren Luu</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="About" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="projects" label="Projects" />
            <NavLink id="education" label="Education" />
            <NavLink id="skills" label="Skills" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-16 left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[80vh]' : 'max-h-0'}`}>
          <div className="py-2">
            <MobileNavLink id="home" label="Home" />
            <MobileNavLink id="about" label="About" />
            <MobileNavLink id="experience" label="Experience" />
            <MobileNavLink id="projects" label="Projects" />
            <MobileNavLink id="education" label="Education" />
            <MobileNavLink id="skills" label="Skills" />
            <MobileNavLink id="awards" label="Awards" />
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-slate-700/10 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-blue-400 uppercase bg-blue-900/20 rounded-full border border-blue-900/50">
              Computer Engineering Student
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
              Building the Future with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">Code & Hardware</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              UCLA Computer Engineering Undergraduate. Valedictorian. <br className="hidden md:block"/>
              Passionate about robotics, quantum computing, and software engineering.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:darrenluu2025@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/20">
                <Mail size={18} /> Contact Me
              </a>
              <a href="https://www.linkedin.com/in/dwluu/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-200 rounded-lg font-medium hover:bg-slate-700 border border-slate-700 transition-all hover:-translate-y-0.5">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>

            <div className="mt-20 animate-bounce text-slate-600">
              <button onClick={() => scrollToSection('about')}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <SectionTitle icon={FileText}>About Me</SectionTitle>
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-slate-300">
                <p>
                  I am currently a first-year <strong>Computer Engineering</strong> student at <strong>UCLA</strong> with a strong foundation in both software and hardware principles. My academic journey began at Paloma Valley High School where I graduated as Valedictorian with a 4.0 GPA.
                </p>
                <p>
                  My passion lies at the intersection of innovation and engineering. From programming autonomous robots for the <strong>FIRST Tech Challenge</strong> to developing quantum randomness applications during hackathons, I thrive on solving complex technical problems.
                </p>
                <p>
                  Beyond technical skills, I have extensive leadership experience as a Club President and Project Lead, where I've mentored peers, managed build cycles, and fostered collaborative environments.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
                <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Quick Info</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-blue-400 mt-1" />
                    <span>Los Angeles, CA 90024</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="text-blue-400 mt-1" />
                    <span className="break-all">darrenluu2025@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen size={16} className="text-blue-400 mt-1" />
                    <span>4.0 GPA @ UCLA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionTitle icon={Wrench}>Experience</SectionTitle>
            
            <div className="space-y-12">
              {/* Job 1 */}
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[147px] top-0 bottom-0 w-px bg-slate-800"></div>
                <div className="md:flex gap-12 group">
                  <div className="md:w-32 md:text-right pt-1">
                    <span className="text-sm font-bold text-blue-400 block">Aug 2022 - May 2025</span>
                    <span className="text-xs text-slate-500">Menifee, CA</span>
                  </div>
                  <div className="hidden md:block absolute left-[142px] top-2 w-3 h-3 rounded-full bg-blue-500 border-4 border-slate-950"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Club President & Lead Programmer</h3>
                    <h4 className="text-lg text-slate-400 mb-4">FIRST Tech Challenge (FTC) Robotics</h4>
                    <ul className="space-y-2 list-disc list-inside text-slate-400 marker:text-slate-600">
                      <li>Engineered 100% of the team's robot code in <strong>Java</strong> using Android Studio, creating complex algorithms for autonomous and tele-operated periods.</li>
                      <li>Spearheaded 400% club growth (5 to 20 students) and established two competitive teams (6373 & 6374).</li>
                      <li>Directed all phases of robot build cycle: <strong>CAD modeling in Onshape</strong>, 3D printing, and soldering.</li>
                      <li>Led team to Finalist Alliance (2023) and won 3rd Place Think and Innovate Award (2024).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[147px] top-0 bottom-0 w-px bg-slate-800"></div>
                <div className="md:flex gap-12 group">
                  <div className="md:w-32 md:text-right pt-1">
                    <span className="text-sm font-bold text-blue-400 block">Feb 2024 - Mar 2024</span>
                    <span className="text-xs text-slate-500">Remote</span>
                  </div>
                  <div className="hidden md:block absolute left-[142px] top-2 w-3 h-3 rounded-full bg-slate-700 border-4 border-slate-950"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Online Peer Tutor</h3>
                    <h4 className="text-lg text-slate-400 mb-4">Schoolhouse.world (SAT Math)</h4>
                    <ul className="space-y-2 list-disc list-inside text-slate-400 marker:text-slate-600">
                      <li>Led a 4-week SAT Math Bootcamp for a diverse cohort of 9 students from 4 countries.</li>
                      <li>Designed personalized curricula based on weekly practice quiz data analysis.</li>
                      <li>Fostered a collaborative global learning environment via Zoom.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job 3 */}
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[147px] top-0 bottom-0 w-px bg-slate-800"></div>
                <div className="md:flex gap-12 group">
                  <div className="md:w-32 md:text-right pt-1">
                    <span className="text-sm font-bold text-blue-400 block">Aug 2023 - Jun 2024</span>
                    <span className="text-xs text-slate-500">Menifee, CA</span>
                  </div>
                  <div className="hidden md:block absolute left-[142px] top-2 w-3 h-3 rounded-full bg-slate-700 border-4 border-slate-950"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">High School Peer Tutor</h3>
                    <h4 className="text-lg text-slate-400 mb-4">AP Calculus AB</h4>
                    <ul className="space-y-2 list-disc list-inside text-slate-400 marker:text-slate-600">
                      <li>Mentored 50+ juniors and seniors in complex topics (derivatives, integrals, limits).</li>
                      <li>Analyzed 500+ student quizzes to identify misconceptions and tailor instructional material.</li>
                      <li>Produced comprehensive review videos and worksheets for AP exam preparation.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <SectionTitle icon={Code}>Projects</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Project 1 */}
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-700 rounded-lg text-blue-400 group-hover:bg-blue-900/30 group-hover:text-blue-300 transition-colors">
                      <Cpu size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">Oct 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Quantum Casino</h3>
                  <p className="text-slate-400 mb-4 text-sm flex-grow">
                    A Qiskit Fall Fest Hackathon project. Co-developed an application demonstrating quantum principles for games of chance using Python.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded">Python</span>
                      <span className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded">Qiskit</span>
                    </div>
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-xs text-slate-500 italic">
                        Implemented quantum randomness by applying Hadamard gates to qubits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-700 rounded-lg text-blue-400 group-hover:bg-blue-900/30 group-hover:text-blue-300 transition-colors">
                      <Wrench size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">Sep 2023 - Apr 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">MESA Machine: Wind-Powered Car</h3>
                  <p className="text-slate-400 mb-4 text-sm flex-grow">
                    Engineered a Rube-Goldberg-style machine from recyclable materials. Served as project lead and troubleshooter during competitions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded">Engineering</span>
                      <span className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded">Fabrication</span>
                    </div>
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-xs text-green-400 font-semibold">
                        Won 1st Place in SoCal Regional (Highest Division).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-700 rounded-lg text-blue-400 group-hover:bg-blue-900/30 group-hover:text-blue-300 transition-colors">
                      <FileText size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">Mar 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Seaperch: Underwater ROV Report</h3>
                  <p className="text-slate-400 mb-4 text-sm flex-grow">
                    Authored a comprehensive Technical Design Report translating engineering processes into professional documentation.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded">Google Sheets</span>
                      <span className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded">Data Viz</span>
                    </div>
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-xs text-green-400 font-semibold">
                        5th Place (Technical Design Report) at Inland Empire Regional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionTitle icon={BookOpen}>Education</SectionTitle>
            <div className="space-y-6">
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-slate-800 transition-colors">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-slate-100">University of California, Los Angeles (UCLA)</h3>
                    <span className="text-blue-400 font-mono text-sm whitespace-nowrap bg-blue-900/20 px-3 py-1 rounded-full border border-blue-900/50">Exp. Jun 2029</span>
                  </div>
                  <div className="text-lg text-slate-300 mb-2">B.S. in Computer Engineering</div>
                  <div className="text-slate-400 mb-4">GPA: 4.0</div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Relevant Coursework</div>
                    <div className="flex flex-wrap gap-2">
                      {['Intro to CS (COM SCI 31)', 'Differential Equations (MATH 33B)'].map((course, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-slate-300 border border-slate-700">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-colors">
                  <h3 className="text-lg font-bold text-slate-100 mb-1">Mt. San Jacinto Community College</h3>
                  <p className="text-blue-400 text-sm mb-2">Concurrent Enrollment | Jun 2024 - Jun 2025</p>
                  <p className="text-slate-400 text-sm mb-4">GPA: 4.0</p>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>• Multivariable Calculus (MATH 213)</p>
                    <p>• Linear Algebra (MATH 218)</p>
                  </div>
                </div>

                <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-colors">
                  <h3 className="text-lg font-bold text-slate-100 mb-1">Paloma Valley High School</h3>
                  <p className="text-blue-400 text-sm mb-2">High School Diploma | Aug 2021 - Jun 2025</p>
                  <p className="text-slate-400 text-sm mb-4">GPA: 4.0 | Valedictorian</p>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p>• AP Physics C: Mechanics (5)</p>
                    <p>• AP Calculus AB & BC (5)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <SectionTitle icon={Cpu}>Technical Skills</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">Programming</h3>
                <ul className="space-y-2">
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Java</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Python</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Qiskit</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">Software</h3>
                <ul className="space-y-2">
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Onshape (CAD)</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Google Workspace</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Microsoft Office</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Android Studio</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">Fabrication</h3>
                <ul className="space-y-2">
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> 3D Printing</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Soldering</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Prototyping</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">Languages</h3>
                <ul className="space-y-2">
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> English (Native)</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Spanish</li>
                  <li className="text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Cantonese</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionTitle icon={Award}>Awards & Honors</SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
              
              <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50 flex items-start gap-3 hover:bg-slate-800 transition-colors">
                <Award className="text-yellow-500 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-slate-200 font-bold">Valedictorian</h3>
                  <p className="text-sm text-slate-500">Paloma Valley High School</p>
                </div>
              </div>

              <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50 flex items-start gap-3 hover:bg-slate-800 transition-colors">
                <Award className="text-blue-400 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-slate-200 font-bold">AP Scholar with Distinction</h3>
                  <p className="text-sm text-slate-500">Academic Excellence</p>
                </div>
              </div>

              <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50 flex items-start gap-3 hover:bg-slate-800 transition-colors">
                <Award className="text-blue-400 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-slate-200 font-bold">California State Seal of Biliteracy</h3>
                  <p className="text-sm text-slate-500">Language Proficiency</p>
                </div>
              </div>

              <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50 flex items-start gap-3 hover:bg-slate-800 transition-colors">
                <Award className="text-purple-400 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-slate-200 font-bold">Riverside Cty Exceptional Graduate</h3>
                  <p className="text-sm text-slate-500">Honoree 2025</p>
                </div>
              </div>

              <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50 flex items-start gap-3 hover:bg-slate-800 transition-colors md:col-span-2">
                <Award className="text-green-400 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-slate-200 font-bold">Robotics & Engineering Awards</h3>
                  <ul className="text-sm text-slate-500 mt-1 grid md:grid-cols-2 gap-x-4">
                    <li>• 1st Place MESA Machine: Wind-Powered Car</li>
                    <li>• 2nd Place Innovate Award 2025 (FTC)</li>
                    <li>• 3rd Place Think and Innovate Award 2024 (FTC)</li>
                    <li>• Finalist Alliance 2023 (FTC)</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center text-slate-500 text-sm">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Darren Luu. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:darrenluu2025@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/dwluu/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
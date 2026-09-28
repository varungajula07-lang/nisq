export const services = [
  { icon: 'ShieldCheck', title: 'Cybersecurity', description: 'Defend critical systems with resilient architecture, threat intelligence, and security operations.', tags: ['Zero Trust', 'SOC', 'Risk'] },
  { icon: 'BrainCircuit', title: 'Artificial Intelligence', description: 'Turn complex data into intelligent products that anticipate needs and accelerate decisions.', tags: ['LLMs', 'NLP', 'Vision'] },
  { icon: 'Cpu', title: 'Quantum Computing', description: 'Explore the frontier of post-classical computation through applied NISQ research.', tags: ['NISQ', 'Algorithms', 'QML'] },
  { icon: 'Code2', title: 'Software Development', description: 'Build reliable, human-centered digital products ready for the next decade.', tags: ['Web', 'Cloud', 'Systems'] },
  { icon: 'CloudCog', title: 'Cloud & DevOps', description: 'Ship faster and operate smarter with scalable cloud-native foundations.', tags: ['AWS', 'Kubernetes', 'SRE'] },
  { icon: 'GraduationCap', title: 'Training & Education', description: 'Upskill ambitious teams and learners through practical, future-ready programs.', tags: ['Courses', 'Labs', 'Mentorship'] },
]
export const projects = [
  { title: 'Sentinel Nexus', category: 'Cybersecurity', description: 'A unified threat intelligence workspace for faster, clearer incident response.', tags: ['Python', 'AI', 'Security'], status: 'In development' },
  { title: 'Qubit Forge', category: 'Research', description: 'Open research into practical quantum machine learning workflows.', tags: ['Qiskit', 'QML', 'Research'], status: 'Active research' },
  { title: 'Atlas Vision', category: 'Artificial Intelligence', description: 'Edge-ready computer vision for high-stakes industrial environments.', tags: ['Vision', 'Edge AI', 'MLOps'], status: 'Pilot program' },
  { title: 'Aegis Cloud', category: 'Cloud Platform', description: 'A secure cloud control plane built around identity-first operations.', tags: ['Cloud', 'Zero Trust', 'Go'], status: 'Production' },
]
export const internships = [
  { title: 'Security Engineering Fellow', domain: 'Cybersecurity', duration: '12 weeks', eligibility: 'Undergraduate / Graduate', skills: ['Linux', 'Networking', 'Python'], description: 'Work alongside our security team to model threats and build defensive tooling.' },
  { title: 'Quantum Research Intern', domain: 'Quantum Computing', duration: '16 weeks', eligibility: 'Physics / CS students', skills: ['Linear Algebra', 'Python', 'Qiskit'], description: 'Contribute to experiments at the edge of quantum and classical computing.' },
  { title: 'AI Product Apprentice', domain: 'Artificial Intelligence', duration: '12 weeks', eligibility: 'All backgrounds', skills: ['Python', 'ML basics', 'Curiosity'], description: 'Turn research prototypes into delightful, useful intelligence products.' },
]
export const courses = [
  { title: 'Foundations of Cybersecurity', category: 'Security', difficulty: 'Beginner', duration: '6 weeks', description: 'Build the mental models and practical skills to secure modern systems.', skills: ['Threat modeling', 'Networks', 'IAM'] },
  { title: 'Practical Machine Learning', category: 'AI & ML', difficulty: 'Intermediate', duration: '8 weeks', description: 'From dataset to deployed model: a hands-on path through the ML lifecycle.', skills: ['Python', 'Modeling', 'MLOps'] },
  { title: 'Quantum Computing Primer', category: 'Quantum', difficulty: 'Intermediate', duration: '4 weeks', description: 'Understand qubits, circuits, and the problems quantum computers may unlock.', skills: ['Qubits', 'Circuits', 'Qiskit'] },
]
export const events = [
  { title: 'Vanguard Summit 2026', date: 'Oct 18, 2026', location: 'Hybrid · Lagos + Online', description: 'A one-day gathering for builders exploring the next era of secure intelligence.', status: 'Registration open' },
  { title: 'Quantum Frontiers Lab', date: 'Nov 06, 2026', location: 'Online workshop', description: 'An interactive introduction to quantum algorithms with our research team.', status: 'Coming soon' },
  { title: 'Security Builders Meetup', date: 'Dec 03, 2026', location: 'Innovation Hub, Abuja', description: 'Peer-led talks and practical sessions for the region’s security community.', status: 'Save the date' },
]
export const labs = [
  { title: 'Threat Modeling Simulator', category: 'Cyber Defense', level: 'Beginner', description: 'Map attack surfaces and test defensive decisions in a safe environment.', live: true },
  { title: 'Qubit Circuit Studio', category: 'Quantum', level: 'Intermediate', description: 'Compose circuits and visualize the mechanics of quantum gates.', live: false },
  { title: 'Model Bias Observatory', category: 'Responsible AI', level: 'Intermediate', description: 'Explore how data and design choices shape model behavior.', live: false },
]
export const researchAreas = ['Post-quantum cryptography', 'Quantum machine learning', 'Responsible AI', 'Autonomous security', 'Human-centered computing', 'Edge intelligence']
export const researchProjects = [{ title: 'Post-quantum readiness', text: 'Helping organizations prepare their cryptographic infrastructure for a quantum future.', tag: 'Security' }, { title: 'Trustworthy intelligence', text: 'Designing AI systems that are explainable, robust, and accountable.', tag: 'AI' }, { title: 'Edge of possibility', text: 'Investigating where quantum methods can create practical advantage.', tag: 'Quantum' }]
export const navItems = [['About', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['Internships', '/internships'], ['Courses', '/courses'], ['Events', '/events'], ['Research', '/research'], ['Labs', '/labs'], ['Contact', '/contact'], ['AI Co-Pilot', '/copilot']] as const
export const footerGroups = [{ title: 'Explore', links: [['About', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['Labs', '/labs']] }, { title: 'Learn', links: [['Internships', '/internships'], ['Courses', '/courses'], ['Events', '/events'], ['Research', '/research']] }, { title: 'Connect', links: [['Contact', '/contact'], ['AI Co-Pilot', '/copilot'], ['Login', '/login'], ['Admin portal', '/admin']] }]
export const iconMap: Record<string, string> = { ShieldCheck: '◈', BrainCircuit: '✦', Cpu: '◉', Code2: '</>', CloudCog: '⌁', GraduationCap: '△' }
export const pageMeta: Record<string, { eyebrow: string; title: string; description: string }> = { about: { eyebrow: 'The Vanguard', title: 'Building what comes after', description: 'NISQ Vanguard is a research and technology organization exploring the intersection of secure systems, intelligent machines, and human potential.' }, services: { eyebrow: 'Capabilities', title: 'Complex problems. Clear momentum.', description: 'We bring research depth and product discipline to the technologies shaping the future.' }, projects: { eyebrow: 'Selected work', title: 'Proof of possibility', description: 'A living catalogue of tools, experiments, and platforms built at the frontier.' }, internships: { eyebrow: 'Join the Vanguard', title: 'Start with a question', description: 'Our fellowships are for curious builders who want to learn by doing meaningful work.' }, courses: { eyebrow: 'Vanguard Academy', title: 'Learn at the edge', description: 'Practical programs for people preparing to shape the next wave of technology.' }, events: { eyebrow: 'Gatherings', title: 'Ideas are stronger together', description: 'Join a growing community of researchers, builders, and leaders making the future tangible.' }, research: { eyebrow: 'Research & innovation', title: 'The frontier is a team sport', description: 'We investigate hard problems with openness, rigor, and a bias toward real-world impact.' }, labs: { eyebrow: 'Interactive labs', title: 'Learn by exploring', description: 'Safe, practical environments for developing intuition around frontier technologies.' }, contact: { eyebrow: 'Start a conversation', title: 'Let’s make the next move', description: 'Tell us what you’re working on. The right first step often starts with a good question.' }, copilot: { eyebrow: 'NISQ / Intelligence', title: 'Ask the Vanguard', description: 'A grounded guide to NISQ Vanguard research, services, learning programs, projects, events, and labs.' } }
export const stats = [{ value: '18', label: 'Active initiatives' }, { value: '06', label: 'Research domains' }, { value: '24', label: 'Community partners' }, { value: '∞', label: 'Questions ahead' }]
export const homePillars = [{ number: '01', title: 'Secure by design', text: 'We make resilience a first principle, not a feature added later.' }, { number: '02', title: 'Research to reality', text: 'We translate ambitious ideas into tools people can trust and use.' }, { number: '03', title: 'Open by default', text: 'We grow the ecosystem by sharing knowledge, access, and opportunity.' }]
export const aboutValues = [{ title: 'Curiosity', text: 'We ask better questions before reaching for familiar answers.' }, { title: 'Rigor', text: 'We make ideas stronger through evidence, testing, and honest critique.' }, { title: 'Stewardship', text: 'We design with the long view: people, systems, and the planet.' }]
export const aboutTechnology = ['Cybersecurity', 'Artificial intelligence', 'Quantum computing', 'Cloud infrastructure', 'Data science', 'Developer education']
export const contactDetails = [{ label: 'Email', value: 'hello@nisqvanguard.org' }, { label: 'Base', value: 'Lagos · Abuja · Online' }, { label: 'Availability', value: 'Mon–Fri · 09:00–17:00 WAT' }]
export const adminStats = [{ label: 'Total users', value: '1,284', delta: '+12.5%' }, { label: 'Applications', value: '86', delta: '+8.2%' }, { label: 'Active projects', value: '14', delta: '+2.1%' }, { label: 'Open messages', value: '23', delta: '-4.3%' }]
export const adminRows = [{ name: 'Amina Yusuf', type: 'Internship application', date: 'Today, 09:42', status: 'New' }, { name: 'Dr. N. Okafor', type: 'Research inquiry', date: 'Yesterday, 16:20', status: 'Review' }, { name: 'Samuel Ade', type: 'Course registration', date: 'Sep 18, 12:05', status: 'Processed' }]
export const adminNav = ['Dashboard', 'Users', 'Services', 'Projects', 'Internships', 'Courses', 'Events', 'Research', 'Labs', 'Contact submissions']
export const api = { auth: '/api/auth', users: '/api/users', projects: '/api/projects', courses: '/api/courses', internships: '/api/internships', events: '/api/events', research: '/api/research', labs: '/api/labs', contact: '/api/contact' }
export const siteName = 'NISQ Vanguard'
export const siteDescription = 'A research and technology organization building secure, intelligent, quantum-ready futures.'
export const getIcon = (name: string) => iconMap[name] ?? '•'
export const getPageMeta = (slug: string) => pageMeta[slug] ?? pageMeta.about
export const allNavRoutes = [{ label: 'Home', href: '/' }, ...navItems.map(([label, href]) => ({ label, href })), { label: 'Login', href: '/login' }]
export const footerNote = 'NISQ Vanguard · Frontend prototype · Task 1'
export const contactSocials = ['LinkedIn', 'X / Twitter', 'GitHub']
export const statusColors: Record<string, string> = { Production: 'green', 'Registration open': 'green', 'Active research': 'cyan', 'In development': 'violet', 'Pilot program': 'amber', 'Coming soon': 'violet', 'Save the date': 'cyan' }
export const dashboardActivity = [{ label: 'New internship application', meta: 'Amina Yusuf · 8 min ago', color: 'cyan' }, { label: 'Research inquiry received', meta: 'Dr. N. Okafor · 2 hr ago', color: 'violet' }, { label: 'Course registration', meta: 'Samuel Ade · Yesterday', color: 'green' }]
export const categoryOptions = ['All', 'Cybersecurity', 'Artificial Intelligence', 'Research', 'Cloud Platform']
export const courseCategories = ['All', 'Security', 'AI & ML', 'Quantum']
export const legal = ['Privacy', 'Terms']
export const versionLabel = 'NISQ / 01'
export const pageRoutes = ['/about', '/services', '/projects', '/internships', '/courses', '/events', '/research', '/labs', '/contact', '/login', '/register', '/admin']
export const frontendOnly = true
export const readyForBackend = true
export const task = 'Task 1 Frontend'
export const currentYear = 2026
export const siteTagline = 'Frontier technology. Human purpose.'
export const heroKicker = 'A frontier technology collective'
export const footerBrand = 'NISQ'
export const location = 'West Africa / Global'
export const contactEmail = 'hello@nisqvanguard.org'
export const buildStatus = 'Ready for backend integration'
export const colorSystem = ['#0f172a', '#1e293b', '#00f5ff', '#a855f7', '#f1f5f9']
export const accessibility = ['Semantic HTML', 'Labels', 'Focus states', 'Keyboard navigation']
export const supported = ['Desktop', 'Laptop', 'Tablet', 'Mobile']
export const adminRoute = '/admin'
export const authRoutes = ['/login', '/register']
export const noBackend = 'Frontend only'
export const founderProfile = {
  name: 'Varun Gajula',
  role: 'Founder & Lead Architect',
  title: 'Founder & Lead Architect, NISQ Vanguard',
  bio: 'Systems architect and researcher specializing in post-quantum cryptography, threat surface modeling, and autonomous cybersecurity intelligence. Dedicated to advancing resilient cyber defenses across distributed enterprise environments.',
  quote: 'We make resilience a first principle, not a feature added later. Real-time visibility into the cyber threat surface transforms uncertainty into decisive security advantage.',
  focus: ['Cybersecurity Architecture', 'Post-Quantum Resilience', 'Autonomous Threat Modeling'],
  location: 'West Africa · Global',
  contact: 'hello@nisqvanguard.org',
}

export const teamMembers = [
  {
    name: 'Varun Gajula',
    role: 'Founder & Lead Architect',
    focus: 'Quantum-Safe Defense & Strategic Architecture',
    bio: 'Directing the architecture and research trajectory of NISQ Vanguard across autonomous cyber systems.',
    badge: 'Leadership',
  },
  {
    name: 'Dr. N. Okafor',
    role: 'Lead Research Fellow',
    focus: 'Quantum Machine Learning & Cryptographic Protocols',
    bio: 'Investigating practical post-quantum cryptography and high-dimensional anomaly detection.',
    badge: 'Research',
  },
  {
    name: 'Amina Yusuf',
    role: 'Security Engineering Lead',
    focus: 'Zero Trust Perimeter & Incident Response',
    bio: 'Architecting continuous telemetry ingestion pipelines and automated vulnerability isolation.',
    badge: 'Engineering',
  },
  {
    name: 'Samuel Ade',
    role: 'Platform & Labs Director',
    focus: 'Hands-on Learning Simulators & Ecosystem Architecture',
    bio: 'Overseeing interactive cyber defense labs, challenge validation, and builder fellowships.',
    badge: 'Ecosystem',
  },
]

export const closeFile = true
export const endOfFile = true
export const fileMarker = 'END'


export const mockResumeData = {
  name: "John Doe",
  role: "Software Developer",
  template: "standard",
  style: {
    primary_color: "#007CFF",
    secondary_color: "#0077B5",
  },
  professional_summary: `Results-driven Senior Software Engineer with 8+ years of experience in full-stack development and technical leadership. Specialized in building scalable distributed systems and microservices architectures. Proven track record of improving application performance, mentoring junior developers, and delivering high-impact solutions that drive business growth.
  
Skilled in creating dynamic, user-friendly applications and collaborating within agile teams.
     `,
  photo_url:
    "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600",
  location: "San Francisco, CA",
  email: "johndoe@example.com",
  phone_number: "+1 (555) 123-4567",
  website_url: "https://johndoeportfolio.com",
  linkedin_url: "https://linkedin.com/in/johndoe",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML",
    "CSS",
    "TypeScript",
    "Git",
    "Agile Methodologies",
  ],
  hobbies: ["Hiking", "Photography", "Cooking"],
  languages: ["English", "Spanish"],
  experience: [
    {
      id: 1,
      position: "Frontend Developer",
      company: "Tech Solutions Inc.",
      description:
        "Developed responsive web applications using React and JavaScript. Collaborated with designers to create seamless UI experiences.",
      duration: "Jan 2021 - Present",
    },
    {
      id: 2,
      position: "Backend Developer",
      company: "Innovatech Corp.",
      description:
        "Built and maintained REST APIs using Node.js and Express. Improved application performance and data handling.",
      duration: "Aug 2019 - Dec 2020",
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      duration: "2015 - 2019",
    },
  ],
};

export const analyticsData = [
  {
    name: "TechCorpInc",
    action: "Shared",
    date: "2023-11-09T23:32:00",
  },
  {
    name: "InnovateCo",
    action: "Saved",
    date: "2023-11-09T23:32:00",
  },
  {
    name: "Anonymous",
    action: "Downloaded",
    date: new Date(),
  },
];

export const mockApplicationData = [
  {
    job_role: "Frontend Developer",
    company: { name: "TechInc", location: "San Francisco, CA" },
    resume_name: "React Developer",
    date: new Date("2023-12-01"),
    status: "interviewing",
    match_score: 87,
    ai: true,
  },
  {
    job_role: "Backend Developer",
    company: { name: "CodeCore", location: "Remote" },
    resume_name: "Node.js Engineer",
    date: new Date("2023-11-20"),
    status: "applied",
    match_score: 74,
    ai: false,
  },
  {
    job_role: "Full Stack Developer",
    company: { name: "InnovateX", location: "Austin, TX" },
    resume_name: "Software Engineer",
    date: new Date("2023-11-25"),
    status: "offered",
    match_score: 92,
    ai: true,
  },
  {
    job_role: "Data Scientist",
    company: { name: "DataFlow", location: "Seattle, WA" },
    resume_name: "Machine Learning Specialist",
    date: new Date("2023-12-03"),
    status: "rejected",
    match_score: 65,
    ai: false,
  },
  {
    job_role: "UI/UX Designer",
    company: { name: "CreativeWorks", location: "New York, NY" },
    resume_name: "Visual Designer",
    date: new Date("2023-11-15"),
    status: "accepted",
    match_score: 89,
    ai: true,
  },
  {
    job_role: "DevOps Engineer",
    company: { name: "CloudSync", location: "Remote" },
    resume_name: "Infrastructure Engineer",
    date: new Date("2023-12-05"),
    status: "interviewing",
    match_score: 81,
    ai: false,
  },
  {
    job_role: "Mobile App Developer",
    company: { name: "Appify", location: "Chicago, IL" },
    resume_name: "React Native Developer",
    date: new Date("2023-11-28"),
    status: "applied",
    match_score: 78,
    ai: true,
  },
  {
    job_role: "Cybersecurity Analyst",
    company: { name: "SecureNet", location: "Washington, DC" },
    resume_name: "Security Specialist",
    date: new Date("2023-11-10"),
    status: "offered",
    match_score: 85,
    ai: false,
  },
  {
    job_role: "Cloud Architect",
    company: { name: "SkyHighTech", location: "Denver, CO" },
    resume_name: "Cloud Engineer",
    date: new Date("2023-12-08"),
    status: "rejected",
    match_score: 59,
    ai: true,
  },
  {
    job_role: "AI Researcher",
    company: { name: "ThinkAI", location: "Boston, MA" },
    resume_name: "AI Specialist",
    date: new Date("2023-11-18"),
    status: "accepted",
    match_score: 94,
    ai: true,
  },
];

export const interviewTipsData = [
  {
    title: "Pre-Interview Preparation",
    content: [
      {
        header: "Research Tech Innovation Inc",
        pointers: [
          "Visit the [company website](#) to understand their products, mission, and values.",
          "Read recent news articles about the company to stay updated on their latest developments.",
          "Review the company's presence on social media and note their key achievements.",
        ],
      },
      {
        header: "Understand the Role of a Software Engineer",
        pointers: [
          "Carefully review the job description and required qualifications.",
          "Understand the core responsibilities and expectations for the position.",
          "Research common tools and technologies used in the role.",
        ],
      },
    ],
  },
  {
    title: "Common Interview Questions",
    content: [
      {
        header: "Practice Behavioral Questions",
        pointers: [
          "Prepare answers for common behavioral questions such as 'Tell me about yourself.'",
          "Use the STAR method (Situation, Task, Action, Result) to structure your answers.",
          "Reflect on past experiences to highlight your skills and accomplishments.",
        ],
      },
      {
        header: "Technical Questions",
        pointers: [
          "Review fundamental algorithms, data structures, and coding problems.",
          "Practice coding problems on platforms like LeetCode or HackerRank.",
          "Brush up on key programming languages relevant to the role.",
        ],
      },
    ],
  },
  {
    title: "Personal Presentation",
    content: [
      {
        header: "Dress Appropriately",
        pointers: [
          "Choose attire that aligns with the company's culture and professionalism.",
          "Ensure your clothing is clean, pressed, and fits well.",
        ],
      },
      {
        header: "Body Language and Communication",
        pointers: [
          "Maintain good posture and consistent eye contact.",
          "Speak clearly and confidently.",
          "Use a firm but friendly handshake if meeting in person.",
        ],
      },
    ],
  },
  {
    title: "During the Interview",
    content: [
      {
        header: "Be Engaged and Responsive",
        pointers: [
          "Listen carefully to questions and respond thoughtfully.",
          "Ask clarifying questions if you're unsure about something.",
          "Take a moment to think before answering complex questions.",
        ],
      },
      {
        header: "Showcase Your Skills",
        pointers: [
          "Provide specific examples from past experiences.",
          "Relate your skills to the job requirements.",
          "Demonstrate enthusiasm and interest in the role.",
        ],
      },
    ],
  },
  {
    title: "Post-Interview Follow-Up",
    content: [
      {
        header: "Send a Thank-You Note",
        pointers: [
          "Express gratitude for the opportunity to interview.",
          "Mention specific topics discussed during the interview.",
          "Reaffirm your enthusiasm for the role and the company.",
        ],
      },
      {
        header: "Reflect and Plan",
        pointers: [
          "Take notes on what went well and areas for improvement.",
          "Prepare for potential next steps, such as further interviews or assessments.",
        ],
      },
    ],
  },
  {
    title: "Offer Received",
    content: [
      {
        header: "Evaluate the Offer",
        pointers: [
          "Consider the salary, benefits, and other perks.",
          "Think about the role's alignment with your career goals.",
          "Review the company's culture and growth opportunities.",
        ],
      },
      {
        header: "Negotiate if Necessary",
        pointers: [
          "Be clear about your priorities and what matters most to you.",
          "Use market data to support your negotiation points.",
          "Stay professional and polite during the negotiation process.",
        ],
      },
    ],
  },
];

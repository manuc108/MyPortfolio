import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const education = [
    {
        degree: "Bachelor of Technology in Computer Science and Artificial Intelligence",
        institution: "Newton School of Technology, Rishihood University",
        date: "2023 - 2027",
        icon: "path/to/education_icon.png", 
        iconBg: "#8AC7DB", 
        points: [
          "Relevant coursework: Data Structures, Algorithms, Front-end Tech, AI, DBMS.",
          "Proficient in Java, Python, JavaScript, and React.",
          "Developed projects in web development, AI, and database management.",
          "Active member of the university's software and coding club."
        ]
    }  
      ,
    {
        degree: "High School",
        institution: "Roots International School",
        date: "2020 - 2022",
        icon: "path/to/school_icon.png", 
        iconBg: "#FF7F7F", 
        points: [
          "Completed Matriculation (Class X) with distinction.",
          "Completed Intermediate (Class XII) in 2022 with a focus on PCM (Physics, Chemistry, Mathematics).",
          "Active participant in extracurricular activities, including sports, music, and volunteering."
        ]
      }
      
  ];
  

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    }
];

export const experiences = [

    {
        title: "Web Developer",
        company_name: "NOVAAUTOMATA INNOVATIONS PVT. LTD.",
        // icon: shopify,
        iconBg: "#b7e4c7",
        date: "Aug 2024 - September 2024",
        points: [
            "Designing and developing the company website",
            "Generative AI for Business growth.",
            "Handling front-end tasks.",
            "Testing and deploying the website."
        ],
    },

    {
        title: "Event Coordinator",
        company_name: "Rishihood University",
        iconBg: "#FF7F7F",
        date: "March 2024",
        points: [
            "Coordinated Alumni Reunion 2024.",
            "Managed logistics and event timelines.",
            "Facilitated collaboration with alumni, industry professionals, and staff.",
            "Organized Industry Collaboration Meet for networking and partnerships."
        ]
    }
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/manuc108',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/manu108/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'V-Meet',
        description: ' A platform enabling seamless virtual meetings with secure login, real-time controls, scheduling, recording, and a responsive, user-friendly interface across devices.',
        codeLink: 'https://github.com/manuc108/v-meet',
        link: 'https://v-meet-xi.vercel.app/'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Aura Music',
        description: 'Built with JavaScript, React, and Tailwind CSS. A Seamless music streaming App with personalized playlists',
        codeLink: 'https://github.com/manuc108/End-Sem-Apple-Music-Clone---EndSem-Project-Apple-Music-Clone---s19ukuv25f91',
        link: 'https://664d557ea70573758b8fab50--profound-kitsune-600163.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Grocery app',
        description: 'Built with HTML, CSS, JavaScript. Track items you need to buy and those you already have with ease.',
        codeLink: 'https://github.com/manuc108/GroceryApp',
        link: 'https://comforting-chaja-d829db.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Twitter',
        description: 'Built with HTML and CSS. A Twitter Clone',
        codeLink: 'https://github.com/manuc108/Twiter',
        link: 'https://dashing-yeot-f3e69f.netlify.app/',
    },

];

export const resume = [ 
    {
        resumeDownloadLink: '',
    }
];
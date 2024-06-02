import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Audio Automation",
    description:
      "I have developed a audio automation tool for adding the desirable Ads in the audios on the desirable time. I created the tool using Python and FFMPEG. The tool supports multiple audio formats. I have also build and Docker Image for that tool.",
    tools: ["Python", "FFMPEG", "Docker"],
    role: "Python Developer",
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "Real Estate Backend",
    description:
      "Built an backend of real estate app NestJS & Microservices. To develop the API, I used NestJS, Docker, RabbitMQ, Typescript, Stripe, and Mongoose. For the UI, we utilized NextJS, TailwindCSS, and other npm libraries. I added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "Microservices",
      "RabbitMQ",
      "JWT",
    ],
    code: "",
    role: "Backend Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 3,
    name: "Tetrament (Notion Clone)",
    description:
      "I developed Notion Clone Collaborating application called Tetrament. As a Backend & Frontend developer, I worked on creating the dashboard using NextJS, Shadcn-ui, drizzle, Supabase, Socket, and other necessary npm libraries.I used Socket.io for real-time collaboration and Syncing Functionality.",
    tools: [
      "NextJS",
      "Shadcn-ui",
      "drizzle",
      "Quill Editor",
      "Supabase",
      "Socket.io",
      "PostgreSQL",
      "JWT",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
  {
    id: 4,
    name: "PDF to Audio Converter Using ML",
    description:
      "I have developed a PDF to Audio Converter tool using Python. Though there are many tools available for this, And I myself used some of them. I used Surya Package for Converting the PDF to Text using OCR and then I used IIT Madras Text to Speech Model name FastSpeech2_HS for converting the text to Audio.",
    tools: [
      "Python",
      "https://github.com/VikParuchuri/surya/",
      "https://github.com/smtiitm/Fastspeech2_HS",
      "Docker",
      "FFMPEG",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Python Developer, Machine Learning, AI Developer",
  },
  {
    id: 5,
    name: "ncertpdf.com",
    description:
      "I have Build a Website for NCERT PDFs. I have used React for the Frontend and NodeJS for the Backend.",
    tools: ["React", "NodeJS", "Express", "NextJS", "TailwindCSS"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },

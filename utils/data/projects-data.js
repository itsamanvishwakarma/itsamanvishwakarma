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
    name: "TTS (PDF to Audio Converter) Using ML",
    description:
      "I have developed a PDF to Audio Converter tool using Python. Though there are many tools available for this, And I myself used some of them. I used Surya Package for Converting the PDF to Text using OCR and then I used IIT Madras Text to Speech Model name FastSpeech2_HS for converting the text to Audio.",
    tools: [
      "Python",
      "https://github.com/VikParuchuri/surya/",
      "https://github.com/smtiitm/Fastspeech2_HS",
      "Docker",
      "FFMPEG",
    ],
    role: "Python Developer, Machine Learning, AI Developer",
    code: "",
    demo: "",
  },
  {
    id: 5,
    name: "Ncertpdf.com",
    description:
      "I have Build a Website for NCERT PDFs. I have used React for the Frontend and NodeJS for the Backend.",
    tools: ["React", "NodeJS", "Express", "NextJS", "TailwindCSS"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
  },
  {
    id: 6,
    name: "Vidyaly.com",
    description:
      "Built this School ERP Website for Schools to manage their infrastructure, Using PHP, Laravel, VueJS, SQL, jQuery. I also have given schools to build their own CMS/Frontend Website.",
    tools: ["PHP", "Laravel", "VueJS", "SQL", "jQuery"],
    role: "Full Stack developer",
    code: "",
    demo: "",
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

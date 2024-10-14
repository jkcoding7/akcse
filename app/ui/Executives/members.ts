export interface Executive {
  icon: string;
  label: string;
  names: string[];
  images: {};
}

export const executiveMembers = [
  {
    icon: "🍅",
    label: "Co-Presidents",
    names: ["Jinwon Lee", "Ahreum Lee"],
    images: {},
    info: {
      jinwon: {
        major: "Computer Science",
        mbti: "ENTJ",
        intro:
          "Hiii! I'm a U3 student at McGill U. I enjoy web development and 3D modeling because it lets me be creative. When I'm not doing projects, I play music and shred the slopes :)",
      },
      ahreum: {
        major: "Computer Science & AI",
        mbti: "INTJ",
        intro:
          "Hello, I am a CS student interested in NLP, bioinformatics and AI. I dont have any hobbies at this point of life, but I am trying to do some sports with our fellow execs",
      },
    },
  },
  {
    icon: "🥬",
    label: "VP Communications",
    names: ["Minseo Park", "Dowoo Kim"],
    images: {},
    info: {
      minseo: {
        major: "Biochemistry",
        mbti: "ENFJ",
        intro:
          "Hello! I'm a U2 Biochemistry student at McGill. I am still exploring my future paths of different options, both research and industry. I am currently looking into forensic toxicology/science and environmental engineering. I love taking a walk to explore new places and trying new things I like (squash, watching soccer, singing at this point!).",
      },
      dowoo: {
        major: "Statistics & Computer Science",
        mbti: "(I/E)NTP",
        intro:
          "Hi, i'm a U2 Statistics and Computer Science student at Mcgill and I'm mostly interested in Applied Mathematics/Statistics and Machine Learning. During my free time, I do Muay-Thai, watch soccer games or just chill out.",
      },
    },
  },
  {
    icon: "🧀",
    label: "VP Finance",
    names: ["Taewon Hwang", "Sungji Song"],
    images: {},
    info: {
      taewon: {
        major: "Computer Science",
        mbti: "ISTP",
        intro:
          "Hello, I'm a U3 Computer science student at McGill. I'm interested in machine learning. I like to play games and watch sports during free time.",
      },
      sungji: {
        major: "Chemical Engineering",
        mbti: "ENTJ",
        intro:
          "Hi, I'm a U2 Chemecial engineering student at McGill University. While I am still exploring which specific areas of research I will be most interested in, I am excited to contribute to new discoveries in science. I enjoy listening to music and playing piano.",
      },
    },
  },
  {
    icon: "🥕",
    label: "VP Events",
    names: ["Dana Lee", "Allison Kim"],
    images: {},
    info: {
      dana: {
        major: "Computer Science",
        mbti: "ENTJ",
        intro:
          "Hello! I am a U3 Computer Science(ex Biochem) student at Mcgill. I look forward to pursuing a career on web development and technical development for visual graphics! I enjoy playing instruments, cooking, drawing and crafting in my free time!",
      },
      allison: {
        major: "Computer Science",
        mbti: "I(N/S)TJ",
        intro:
          "Hello, I am a U1 Computer Science student at McGill University. I am looking to pursue a career in the data science field and am looking forward to learning more about it. In my free time, I enjoy playing video games and listening to music.",
      },
    },
  },
  {
    icon: "🍌",
    label: "VP External",
    names: ["ChaeYoung Kim"],
    images: {},
    info: {
      chaeyoung: {
        major: "Anatomy & Cell Biology",
        mbti: "ESTP",
        intro:
          "Hi! I am a U3 student at McGill University, majoring in Anatomy and Cell Biology, with aspirations to pursue a career in medicine. I also love to sing and play guitar.",
      },
    },
  },
  {
    icon: "🫐",
    label: "VP Internal",
    names: ["KangHyu Lee", "Chaeyeon Kang"],
    images: {},
    info: {
      kanghyu: {
        major: "Computer Science",
        mbti: "INTP",
        intro:
          "Hello, I'm a U2 CS student at McGill. I tend to stay home in my bed unless I have no choice!! I'm a Arts student still trying to figure out where to go when it comes to my career. ",
      },
      chaeyeon: {
        major: "Cognitive Science",
        mbti: "INFJ",
        intro: "Hello! I'm a second-year Cognitive Science student at McGill with a strong interest in biopharmaceuticals and the field of neuroscience. In my free time, I enjoy playing games and watching sports.",
      },
    },
  },
  {
    icon: "🥂",
    label: "First Year Representative",
    names: ["Joongi Lee"],
    images: {},
    info: {
      joongi: {
        major: "Biomedical Sciences",
        mbti: "ESTP",
        intro:
          "Hi, I'm a McGill U0 Biomedical Science student. I'm currently interested in pursuing the field of medicine. I like to play and listen to classical music, play games like TFT, and explore Montreal during my spare time. ",
      },
    },
  },
];

function loadImagesForMember(executiveMembers: Executive[]) {
  executiveMembers.forEach((position) => {
    position.names.forEach((name) => {
      const firstName = name.split(" ")[0].toLowerCase(); // Use first name as key
      const images: string[] = [];

      // Example: Assume there are 3 images per member, adjust as needed
      for (let i = 1; i <= 3; i++) {
        const imagePath = `/executives/${firstName}/image${i}.jpg`;
        images.push(imagePath);
      }

      // Store images in the dictionary with the member's first name as the key
      position.images[name] = images;
    });
  });
}

loadImagesForMember(executiveMembers);

const [pres, communications, finance, events, external, internal, fyr] =
  executiveMembers;
export const initialTabs = [
  pres,
  communications,
  finance,
  events,
  external,
  internal,
  fyr,
];

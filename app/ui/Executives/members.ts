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
  },
  {
    icon: "🥬",
    label: "VP Communications",
    names: ["Minseo Park", "Dowoo Kim"],
    images: {},
  },
  {
    icon: "🧀",
    label: "VP Finance",
    names: ["Taewon Hwang", "Sungji Song"],
    images: {},
  },
  {
    icon: "🥕",
    label: "VP Events",
    names: ["Dana Lee", "Allison Kim"],
    images: {},
  },
  { icon: "🍌", label: "VP External", names: ["ChaeYoung Kim"], images: {} },
  {
    icon: "🫐",
    label: "VP Internal",
    names: ["KangHyu Lee", "Chaeyeon Kang"],
    images: {},
  },
  {
    icon: "🥂",
    label: "First Year Representative",
    names: ["Joongi Lee"],
    images: {},
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

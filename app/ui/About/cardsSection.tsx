"use client";

import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CardsSection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(1);

  const cards = [
    {
      id: 1,
      title: "AKCSE",
      icon: <Image src="/headquarter.png" width={80} height={70} alt="AKCSE" />,
      content_title: "What is AKCSE?",
      content:
      "The Association of Korean-Canadian Scientists and Engineers (AKCSE) is a non-profit organization established in 1986. It serves mainly as a grounds for networking between Korean-Canadians in the field to develop their full career potential. AKCSE consists of 17 university school chapters and 12 local chapters across the provinces of Canada, with its headquarters based in Ontario. The chapters divide based on different stages in one's career, notably the undergraduate Young Generation (YG),  the Young Professionals (YP), and the local chapter. AKCSE is affiliated with The Ministry of Science and ICT of the Korean Government, the Korean Federation of Science & Technology Societies and many different organizations. With these partnerships formed with reliable science and engineering institutions in Korea, AKCSE is proud to provide member with experience in conferences and research/networking forums held annually. Additionally, students can apply for the KCSSF Scholarship, granting 12 students scholarships valued up to $3000.",
    },
    {
      id: 2,
      title: "Young Generation",
      icon: <Image src="/yg.png" width={80} height={70} alt="AKCSE" />,
      content_title: "YG School Chapter in AKCSE",
      content:
        "The Young Generation National (YGN) School Chapter under AKCSE (Association of Korean-Canadian Scientists and Engineers) aims to build a close-knit community among undergraduate students across Canada. YG chapters foster a collaborative environment, providing Korean-Canadian students with networking opportunities, support for personal and professional growth, and inter-chapter cooperation between university branches. As of January 2023, the YG School Chapter includes 17 branches across major universities in Canada.\n\nThe AKCSE McGill Chapter is part of the YG School Chapter network, dedicated to connecting Korean-Canadian students at McGill University. The McGill Chapter provides opportunities for members to engage in networking, personal development, and a variety of social and professional activities, supporting a vibrant and cohesive community.",
    },
    {
      id: 3,
      title: "Young Professionals",
      icon: <Image src="/yp.png" width={80} height={70} alt="AKCSE" />,
      content_title: "Young Professionals in AKCSE",
      content:
        "The Young Professionals (YP) division of AKCSE serves as a platform for Korean-Canadian professionals in science, engineering, and related fields to connect, collaborate, and share knowledge and experiences. It fosters the development of social networks among members, creating opportunities for both personal and professional growth. The YP division provides a space where members can promote their expertise in science and engineering, and engage in continuous collaboration with university chapters and regional branches across Canada.\n\nAs of January 2023, the YP division consists of 8 regional branches, including locations like Atlantic, Manitoba, Quebec, and Greater Toronto and Lake Ontario. The YP division aims to create a broad network of support and opportunities for members throughout the country, promoting mentorship, career advancement, and collaboration in a variety of initiatives and projects. By bridging the gap between early professionals and more experienced mentors, YP helps young professionals grow into future leaders in their fields.",
    },
    {
      id: 4,
      title: "Local Chapter",
      icon: <Image src="/local.png" width={80} height={70} alt="AKCSE" />,
      content_title: "Local Chapter in AKCSE",
      content:
      "The Local Chapter of AKCSE covers each participating province in Canada, allowing members all around the province to join AKCSE, regardless of their education level or career stage. On top of university students and professionals in their early career stages, the Local Chapter welcomes members that have further progressed in their career, including professors, researchers and senior-level professionals. These members are the foundation to the mentoring that AKCSE provides for its members, as they can share countless years of expertise and foresight with YP and YG members. Members among the local chapters can network with each other, as well as with other members in different provinces, allowing an exchange of information that benefits both sides in terms of culture, education and career.",
    },
  ];

  return (
    <div className="lg:flex lg:flex-col w-full h-full items-center gap-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="w-full p-4 bg-white rounded-lg shadow-lg cursor-pointer"
            onClick={() =>
              setSelectedCard(card.id === selectedCard ? null : card.id)
            }
            initial={{ y: 0 }}
            animate={{
              y: selectedCard === card.id ? -10 : 0,
              boxShadow:
                selectedCard === card.id
                  ? "0px 8px 15px rgba(0, 0, 0, 0.2)"
                  : "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            whileHover={{
              y: -10,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <p className="flex justify-center">{card.icon}</p>
            <h3 className="text-xl font-bold mb-2 text-center hidden sm:block">
              {card.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {selectedCard && (
        <motion.div
          key={selectedCard}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="lg:w-full p-5 mt-4 bg-white rounded-lg shadow-lg"
        >
          <div className="w-full h-full text-left">
            <Label className="text-2xl">
              {cards.find((card) => card.id === selectedCard)?.content_title}
            </Label>
          </div>
          <br />
          <div className="w-full h-full text-left">
            {cards
              .find((card) => card.id === selectedCard)
              ?.content.split("\n")
              .map((line, index) => (
                <Label key={index}>
                  {line}
                  <br />
                </Label>
              ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

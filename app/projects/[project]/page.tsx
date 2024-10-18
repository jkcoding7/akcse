"use client";

import { Label } from "@/components/ui/label";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LiaGithub } from "react-icons/lia";

const projectsInfo = {
  AKCSE_McGill_Website: {
    image: "/AKCSE_McGill.png",
    projectName: "AKCSE McGill Website",
    contributers: "Jinwon Lee, Taewon Hwang, Dana Lee, Ahreum Lee",
    purpose:
      "It aims to provide an platform where members can be easily updated with AKCSE events. It also encourages the members to contribute to the website to familiarize them with GitHub and web development. This project will ultimately create a community where members can learn to collaborate and improve their skill sets.",
    achievements:
      "The launch of AKCSE McGill enabled the successful development of a functional website, providing students with updates on events. As an evolving project, it creates an environment that fosters a community where individuals can contribute their inputs to the development of AKCSE McGill.",
    description:
      "AKCSE McGill is a website that students within the student body collaboratively create. The website serves as a space where individuals can be informed about events, intitiatives, and updates within AKCSE; this platform also offers hands-on experiences for members to gain learning opportunities through web development and GitHub Collaboration both within and outside the club.",
    link: "https://github.com/jinleevv/akcse",
  },
  Ed_Block: {
    image: "/projects/edblock/image1.jpg",
    projectName: "Ed Block",
    contributers: "Taewon Hwang, Ahreum Lee, Chaeyeon Kang, Seol Han",
    purpose:
      "Eating disorders (EDs) are a growing public health concern, significantly impacting individuals' physical, psychological, and emotional well-being. Studies show a rise in ED prevalence, particularly among younger demographics, with media playing a critical role in exacerbating these disorders. This project aims to address this issue by developing censoring tool that limits media content related to extreme diets, creating a safer online environment for vulnerable individuals, especially young audiences.",
    achievements:
      "We used different methods of preprocessing and machine learning models to test and compare results. Stop word removal along with Naive Bayes classifier proved to be the most effective. It achieved a maximum accuracy of 90% with the Naive Bayes classifier.",
    description:
      "As one of the biggest platforms for various groups to consume media, YouTube has one solution for censoring potentially harmful content: manual flagging by users. Taking one step further, the AKCSE Life Science (LS) and Computer Science (CS) divisions collaborated to develop a Chrome extension powered by machine learning (ML), specifically to automatically moderate YouTube content and help prevent ED-triggering videos.",
    link: "https://github.com/TaewonHwang02/Akcse_project2024",
  },
  Orally: {
    image: "/projects/orally/image1.jpg",
    projectName: "Orally",
    contributers:
      "Emma Sihyun Lee, Yoon Choi, Minhui Roh, Taewon Hwang, Tevin Choi",
    purpose: "",
    achievements: "",
    description:
      "Orally is an app designed to address the oral health disparities that exist in our society and promote oral health equity. Many individuals hesitate to visit the dentist due to dentophobia or the high cost of treatments, resulting in inadequate oral health management. This app aims to empower users by providing them with a reliable assessment tool for orofacial pain and related conditions.",
    link: "https://github.com/emshlee/orally",
  },
};

export default function ProjectDetail({
  params,
}: {
  params: { project: string };
}) {
  const project = params.project;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="lg:flex w-full h-full gap-2 p-2"
    >
      <div className="w-full lg:w-1/2 h-full">
        <Image
          src={projectsInfo[project].image}
          width={400}
          height={400}
          alt={project}
          className="w-full h-full rounded-lg border shadow-lg p-1 mb-2"
        />
      </div>
      <div className="block w-full lg:w-1/2 h-full items-center justify-center">
        <div className="mb-1">
          <Label className="text-2xl">
            {projectsInfo[project].projectName}
          </Label>{" "}
        </div>
        <Label className="font-bold">Contributers: </Label>
        <Label className="font-normal">
          {projectsInfo[project].contributers}
        </Label>
        <br />
        <br />
        <Label className="font-bold">Purpose: </Label>
        <Label className="font-normal">{projectsInfo[project].purpose}</Label>
        <br />
        <br />
        <Label className="font-bold">Achievements: </Label>
        <Label className="font-normal">
          {projectsInfo[project].achievements}
        </Label>
        <br />
        <br />
        <Label className="font-bold">Description: </Label>
        <Label className="font-normal">
          {projectsInfo[project].description}
        </Label>{" "}
        <div>
          <br />
          <a
            href={projectsInfo[project].link}
            className="flex w-full justify-end"
          >
            <Button variant="outline">
              <LiaGithub size={25} />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

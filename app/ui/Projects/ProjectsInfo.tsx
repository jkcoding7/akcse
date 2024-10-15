"use client";

import { Label } from "@/components/ui/label";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsInfo() {
  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full lg:w-1/2 h-full"
      >
        <Label className="text-lg">AKCSE McGill Website</Label> <br />
        <Image
          src="/projects/akcseWebsite/image1.jpg"
          width={400}
          height={400}
          alt="AKCSE Website"
          className="w-full h-80 rounded-lg border shadow-lg p-1 mb-2"
        />
        <Label className="font-bold">Project Lead: </Label>
        <Label className="font-normal">Jinwon Lee</Label> <br />
        <Label className="font-bold">Contributers: </Label> <br />
        <Label className="font-bold">Purpose: </Label>
        <Label className="font-normal">
          It aims to provide an platform where members can be easily updated
          with AKCSE events. It also encourages the members to contribute to the
          website to familiarize them with GitHub and web development. This
          project will ultimately create a community where members can learn to
          collaborate and improve their skill sets.
        </Label>
        <br />
        <Label className="font-bold">Achievements: </Label>
        <Label className="font-normal">
          The launch of AKCSE McGill enabled the successful development of a
          functional website, providing students with updates on events. As an
          evolving project, it creates an environment that fosters a community
          where individuals can contribute their inputs to the development of
          AKCSE McGill.
        </Label>
        <br />
        <Label className="font-bold">Description: </Label>
        <Label className="font-normal">
          AKCSE McGill is a website that students within the student body
          collaboratively create. The website serves as a space where
          individuals can be informed about events, intitiatives, and updates
          within AKCSE; this platform also offers hands-on experiences for
          members to gain learning opportunities through web development and
          GitHub Collaboration both within and outside the club.
        </Label>{" "}
        <br />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
        className="w-full lg:w-1/2 h-full mt-7 lg:mt-0"
      >
        <Label className="text-lg">AKCSE McGill Website</Label> <br />
        <Image
          src="/projects/akcseWebsite/image1.jpg"
          width={400}
          height={400}
          alt="AKCSE Website"
          className="w-full h-80 rounded-lg border shadow-lg p-1 mb-2"
        />
        <Label className="font-bold">Project Lead: </Label>
        <Label className="font-normal">Jinwon Lee</Label> <br />
        <Label className="font-bold">Contributers: </Label> <br />
        <Label className="font-bold">Purpose: </Label>
        <Label className="font-normal">
          It aims to provide an platform where members can be easily updated
          with AKCSE events. It also encourages the members to contribute to the
          website to familiarize them with GitHub and web development. This
          project will ultimately create a community where members can learn to
          collaborate and improve their skill sets.
        </Label>
        <br />
        <Label className="font-bold">Achievements: </Label>
        <Label className="font-normal">
          The project successfully developed and launched AKCSE McGill website.
          It provides information about the events.
        </Label>
        <br />
        <Label className="font-bold">Description: </Label>
        <Label className="font-normal">
          AKCSE McGill is a website that students within the student body
          collaboratively create. The website serves as a space where
          individuals can be informed about events, intitiatives, and updates
          within AKCSE; this platform also offers hands-on experiences for
          members to gain learning opportunities through web development and
          GitHub Collaboration both within and outside the club.
        </Label>{" "}
        <br />
      </motion.div>
    </>
  );
}

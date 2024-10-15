"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ActivityPictures from "./ActivitiesPics";

const events = {
  "Orientation Night": {
    event: "Orientation Night",
    date: "September 20th 2024",
    description:
      "The purpose of an orientation is to introduce new members and students to an organization or environment. It helps individuals understand key policies, procedures, expectations, and the resources available to them. Orientation typically involves familiarizing participants with the physical layout, organizational culture, team dynamics, and specific roles or responsibilities. It's also an opportunity for networking and getting answers to questions, which helps individuals transition smoothly into their new roles or settings, ultimately fostering a positive, supportive, and informed experience.",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
  "Mini CKC": {
    event: "Mini CKC",
    date: "November 2nd 2024",
    description:
      "Beyond Boundaries: Exploring Prospects in STEM is an exciting research symposium organized by AKCSE YP chapters, including YP Greater Toronto, Quebec, and Ottawa. The event aims to connect students and early-career professionals from Eastern Canada to explore innovative research, showcase projects, and exchange transformative ideas shaping the future of STEM. It will take place at the University of Toronto, Sidney Smith Hall. Participants can expect accommodation, food, and travel support, with the opportunity to network and collaborate in a dynamic environment",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
  Ideathon: {
    event: "Ideathon",
    date: "TBD",
    description:
      "Ideathon is a preparatory event designed to generate ideas and plans for future Hackathons. During this event, AKCSE members collaborate to brainstorm innovative project ideas and present them through proposals using tools like PowerPoint or Figma. Each proposal outlines the purpose of the idea, the tools required to implement it, and the expected outcomes or benefits. Ideathon aims to provide participants with a platform to explore creative concepts and develop structured plans that could later be transformed into full-scale projects during Hackathons.",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
  "Christmas Party": {
    event: "Christmas Party",
    date: "TBD",
    description:
      "Christmas Event is a festive celebration marking the end of the semester for AKCSE members. The event aims to foster camaraderie and provide an opportunity for networking among members in a relaxed and joyful atmosphere. With the pressures of exams behind them, participants can unwind, release stress, and enjoy quality time together. Through various activities, games, and shared moments, the Christmas event strengthens the bonds within the community, making it a perfect way to close the semester on a high note.",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
};

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] =
    useState<string>("Orientation Night");

  function eventTimeline(value: string) {
    setSelectedEvent(value);
  }
  return (
    <section>
      <div className="flex pt-16">
        <div className="w-full h-full">
          <div className="flex w-5/6 rounded-lg ml-auto mr-auto justify-between">
            <div>
              <Button
                onClick={() => eventTimeline("Orientation Night")}
                variant="outline"
                className="border-red-600 shadow-lg"
                value={selectedEvent}
              >
                Orientation Night
              </Button>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
            </div>
            <div>
              <Button
                onClick={() => eventTimeline("Ideathon")}
                variant="outline"
                className="border-black"
              >
                Ideathon
              </Button>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
            </div>{" "}
            <div>
              <Button
                onClick={() => eventTimeline("Ideathon")}
                variant="outline"
                className="border-black"
              >
                Ideathon
              </Button>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
            </div>{" "}
            <div>
              <Button
                onClick={() => eventTimeline("Ideathon")}
                variant="outline"
                className="border-black"
              >
                Amazing
              </Button>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
            </div>
          </div>
          <div className="w-5/6 border-2 border-black ml-auto mr-auto rounded-lg"></div>
          <div className="flex w-3/5 rounded-lg ml-auto mr-auto justify-between">
            <div>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
              <Button
                onClick={() => eventTimeline("Mini CKC")}
                variant="outline"
                className="border-black"
              >
                Mini CKC
              </Button>
            </div>
            <div>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
              <Button
                onClick={() => eventTimeline("Christmas Party")}
                variant="outline"
                className="border-black"
              >
                Christmas Party
              </Button>
            </div>
            <div>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
              <Button
                onClick={() => eventTimeline("Ideathon")}
                variant="outline"
                className="border-black"
              >
                Hackathon
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-12">
        <div className="grid w-full h-full">
          <Label className="text-3xl">{events[selectedEvent].event}</Label>
          <Label className="text-lg">{events[selectedEvent].date}</Label>
        </div>
        <div className="grid grid-cols-2 w-full h-full">
          <div className="mt-5">
            <Label>{events[selectedEvent].description}</Label>
            <br />
            <br />
            <Label>Registration Form: </Label>
            <br />
            <Label>Registration Deadline: </Label>
            <Label className="underline">September 20th 2024</Label>
          </div>
          <div className="w-full h-full p-3 -mt-20">
            <ActivityPictures
              image1={events[selectedEvent].image1}
              image2={events[selectedEvent].image2}
              image3={events[selectedEvent].image3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

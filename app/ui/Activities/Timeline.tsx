"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ActivityPictures from "./ActivitiesPics";

const events = {
  "MTL Korean Youth Camp": {
    event: "MTL Korean Youth Camp",
    date: "August 31 - September 1st 2024",
    description:
      "The Fondation Communautaire Canadienne-Coréenne du Québec (FCCCQ) has proudly partnered with the AKCSE Quebec YP and YG chapters to host an annual mentorship event. Over the course of two days, 60 participants engaged in mentor presentations and Q&A sessions. This event aims to provide guidance to any students that are uncertain about their career choices or future directions. With the support of 32 mentors, students gain a new perspective on how to navigate their professional journeys.",
    image1: "/activities/Youth Camp/image1.jpg",
    image2: "/activities/Youth Camp/image2.jpg",
    image3: "/activities/Youth Camp/image3.jpg",
  },
  "Orientation Night": {
    event: "Orientation Night",
    date: "September 20th 2024",
    description:
      "The AKCSE McGill Chapter hosts annual orientations aimed at connecting new and returning members of the Korean-Canadian McGill community. The event serves as an opportunity to introduce the AKCSE Team, and outline any initiatives for the upcoming academic year. Through fun activities and games, participants engage in the community and build a network of students that are in similar fields of study. This is an excellent opportunity to start off the school year and to welcome any new members of the YG School Chapter community.",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
  "Beyond Boundaries 2024": {
    event: "Beyond Boundaries 2024",
    date: "November 2nd 2024",
    description:
      "Beyond Boundaries aims to bring together some of the brightest students and early-career professionals from across Eastern Canada (GTLO, Ottawa, Montreal) to explore cutting edge research, showcase innovative projects, and exchange ideas that shape the future of STEM. The 2024 event is held at the University of Toronto.",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
  "Ideathon": {
    event: "Ideathon",
    date: "TBD",
    description:
      "As preparation for hackathon events, students from diverse programs in McGill unleash their creativity and technical skills during a brainstorming of clever applications and websites, which can eventually become an AKCSE summer project. As opposed to hackathons, the event is open to all faculties and majors. Students have the opportunity to gain valuable feedback from professionals in YP Quebec and experience practical tools such as Figma. ",
    image1: "/activities/Ideathon/image1.jpg",
    image2: "/activities/Ideathon/image2.jpg",
    image3: "/activities/Ideathon/image3.jpg",
  },
  "Christmas Party": {
    event: "Christmas Party",
    date: "TBD",
    description:
      "Christmas Event is a festive celebration marking the end of the semester for AKCSE members. This event aims to provide AKCSE members a way to unwind and relax after a stressful semester. This is a fantastic opportunity to bond with fellow AKCSE members and meet new faces as we prepare for an exciting upcoming semester. ",
    image1: "/activities/Christmas/image1.jpg",
    image2: "/activities/Christmas/image2.jpg",
    image3: "/activities/Christmas/image3.jpg",
  },
  "YG Seminar": {
    event: "YG Seminar",
    date: "TBD",
    description:
      "The YG seminar invites professionals from different STEM fields such as medicine, IT, engineering, and natural sciences. This is a great opportunity for students to gain a bigger picture of what it’s like to be in research or industry by listening to their journey and firsthand experience over the years. This is also a great chance for students to directly ask presenters in a more approachable environment. ",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
  "Meet Your Mentor": {
    event: "Meet Your Mentor",
    date: "TBD",
    description:
      "Every year, Korean clubs at McGill MECA x KSS x AKCSE hold a mentoring event, aimed at creating a networking space between our Korean students and esteemed individuals from various fields, including management, medicine and health sciences, engineering, law, IT and others. The purpose of this gathering is to foster connections, share experiences, and provide our students with insights into different career paths. ",
    image1: "/activities/MYM/image1.jpg",
    image2: "/activities/MYM/image2.jpg",
    image3: "/activities/MYM/image3.jpg",
  },
};

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] =
    useState<string>("MTL Korean Youth Camp");

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
                onClick={() => eventTimeline("MTL Korean Youth Camp")}
                variant="outline"
                className={`shadow-lg ${
                  selectedEvent === "MTL Korean Youth Camp"
                    ? "border-red-600"
                    : "border-black"
                }`}
                value={selectedEvent}
              >
                MTL Korean Youth Camp
              
              
              </Button>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
            </div>
            <div>
              <Button
                onClick={() => eventTimeline("YG Seminar")}
                variant="outline"
                className={`shadow-lg ${
                  selectedEvent === "YG Seminar"
                    ? "border-red-600"
                    : "border-black"
                }`}
              >
                YG Seminar
              </Button>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
            </div>{" "}
            <div>
              <Button
                onClick={() => eventTimeline("Ideathon")}
                variant="outline"
                className={`shadow-lg ${
                  selectedEvent === "Ideathon"
                    ? "border-red-600"
                    : "border-black"
                }`}
              >
                Ideathon
              </Button>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
            </div>{" "}
            <div>
              <Button
                onClick={() => eventTimeline("Meet Your Mentor")}
                variant="outline"
                className={`shadow-lg ${
                  selectedEvent === "Meet Your Mentor"
                    ? "border-red-600"
                    : "border-black"
                }`}
              >
                Meet Your Mentor
              
              </Button>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
            </div>
          </div>
          <div className="w-5/6 border-2 border-black ml-auto mr-auto rounded-lg"></div>
          <div className="flex w-3/5 rounded-lg ml-auto mr-auto justify-between">
            <div>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
              <Button
                onClick={() => eventTimeline("Orientation Night")}
                variant="outline"
                className={`shadow-lg ${
                  selectedEvent === "Orientation Night"
                    ? "border-red-600"
                    : "border-black"
                }`}
              >
                Orientation Night
              </Button>
            </div>
            <div>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
              <Button
                onClick={() => eventTimeline("Beyond Boundaries 2024")}
                variant="outline"
                className={`shadow-lg ${
                  selectedEvent === "Beyond Boundaries 2024"
                    ? "border-red-600"
                    : "border-black"
                }`}
              >
                Beyond Boundaries 2024
              </Button>
            </div>
            <div>
              <div className="flex w-1 h-10 border-l-2 border-black rounded-lg m-auto"></div>
              <Button
                onClick={() => eventTimeline("Christmas Party")}
                variant="outline"
                className={`shadow-lg ${
                  selectedEvent === "Christmas Party"
                    ? "border-red-600"
                    : "border-black"
                }`}
              >
                Christmas Party
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

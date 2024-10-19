"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollAnimation from 'react-animate-on-scroll';

const events = {
  "MTL Korean Youth Camp": {
    event: "MTL Korean Youth Camp",
    date: "August 31 - September 1st 2024",
    description:
      "The annual mentorship event brought together 60 participants and 32 mentors to provide guidance on how to navigate their professional journeys.",
    image1: "/activities/Youth Camp/image1.jpg",
    image2: "/activities/Youth Camp/image2.jpg",
    image3: "/activities/Youth Camp/image3.jpg",
  },
  "Orientation Night": {
    event: "Orientation Night",
    date: "September 20th 2024",
    description:
      "Great opportunity for new and returning students to connect with fellow comrades through fun activities.",
    image1: "/activities/ot/image1.jpg",
    image2: "/activities/ot/image2.jpg",
    image3: "/activities/ot/image3.jpg",
  },
  "Beyond Boundaries 2024": {
    event: "Beyond Boundaries 2024",
    date: "November 2nd 2024",
    description:
      "Networking opportunity for participants from across Eastern Canada to showcase projects and exchange ideas.",
    image1: "/activities/minickc/image1.jpg",
    image2: "/activities/minickc/image2.jpg",
    image3: "/activities/minickc/image3.jpg",
  },
  "Ideathon": {
    event: "Ideathon",
    date: "TBD",
    description:
      "Students unleash their creativity and technical skills during a brainstorming of clever applications and websites. ",
    image1: "/activities/Ideathon/image1.jpg",
    image2: "/activities/Ideathon/image2.jpg",
    image3: "/activities/Ideathon/image3.jpg",
  },
  "Christmas Party": {
    event: "Christmas Party",
    date: "TBD",
    description:
      "Celebration marking the end of the semester for AKCSE members. Unwind and relax after a stressful semester.  ",
    image1: "/activities/Christmas/image1.jpg",
    image2: "/activities/Christmas/image2.jpg",
    image3: "/activities/Christmas/image3.jpg",
  },
  "YG Seminar": {
    event: "YG Seminar",
    date: "TBD",
    description:
      "Opportunity for students to gain an image of what it’s like to be in research or industry by listening to their journey. ",
    image1: "/activities/Seminar/image1.jpg",
    image2: "/activities/Seminar/image3.jpg",
    image3: "/activities/Seminar/image3.jpg",
  },
  "Meet Your Mentor": {
    event: "Meet Your Mentor",
    date: "TBD",
    description:
      "Mentoring event aimed at creating a networking space between students and professionals from various fields.",
    image1: "/activities/MYM/image1.jpg",
    image2: "/activities/MYM/image2.jpg",
    image3: "/activities/MYM/image3.jpg",
  },
};


export default function MobileTimeline() {
  const {ref,inView} = useInView({
    triggerOnce:true,
  });
 
  
  return (
    <section className="mt-3" >
      <VerticalTimeline lineColor="black" animate={false}  >
    
        {Object.keys(events).map((eventKey) => {
           const event = events[eventKey];
         
          return (
            <ScrollAnimation animateIn="fadeInRight">
            <VerticalTimelineElement
           
            
              key={eventKey}
              date={event.date}
              iconStyle={{ background: "#000000", color: "#fff" }} // Customize icon styles
              className="vertical-timeline-element"
              style={{ margin: '60px 0' }}
           
            >
              
              <h3 className="vertical-timeline-element-title">{event.event}</h3>
              <p>{event.description}</p>
              <div className="grid grid-cols-2 gap-1 h-44 w-full overflow-hidden">
                <Image
                  src={event.image2}
                  alt={"image"}
                  width={500}
                  height={240}
                  className="object-cover rounded-lg w-full h-full"
                />
                <Image
                  src={event.image3}
                  alt={"image"}
                  width={500}
                  height={240}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            
            </VerticalTimelineElement>
            </ScrollAnimation>
      
          );
          
        })}
           
        
      </VerticalTimeline>
      
    </section>
  );
}

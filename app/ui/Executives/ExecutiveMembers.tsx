"use client";

import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./members";
import { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";

export default function ExecutiveMembers() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col w-full h-full rounded-lg shadow-lg">
      <div>
        <ul className="flex w-full list-none p-0 m-0 text-[14px] font-medium">
          {tabs.map((item) => (
            <li
              key={item.label}
              className="relative flex items-center justify-between cursor-pointer px-4 py-2 flex-1 min-w-0 rounded-t-lg hover:bg-gray-200"
              onClick={() => setSelectedTab(item)}
            >
              <span className="truncate">{`${item.icon} ${item.label}`}</span>
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <main className="flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ x: 100, opacity: 0 }} // Start from the right
            animate={{ x: 0, opacity: 1 }} // Move to its position with full opacity
            exit={{ x: -100, opacity: 0 }} // Fade out to the left
            transition={{ duration: 0.5 }}
            className="grid grid-cols-4 gap-4 p-4 w-full h-auto"
          >
            {Object.entries(selectedTab.images).map(([name, images]) => {
              return (
                <>
                  <div className="w-full h-full grid">
                    <div className="grid grid-cols-2 gap-1 h-70 w-full overflow-hidden">
                      <Image
                        src={images[0]}
                        alt={"image"}
                        width={200}
                        height={200}
                        className="object-cover rounded-lg w-full h-full"
                      />
                      <Image
                        src={images[1]}
                        alt={"image"}
                        width={200}
                        height={200}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>
                    <div className="mt-1 col-span-2 h-60 w-full overflow-hidden">
                      <Image
                        src={images[2]}
                        alt={"image"}
                        width={200}
                        height={200}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-lg font-bold">
                      {selectedTab.label}
                    </Label>
                    <br />
                    <Label className="text-md">{name}</Label>
                    <br />
                    <div className="mt-2">
                      <Label className="text-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam non erat bibendum, fringilla diam eu, consequat
                        nulla. Mauris suscipit iaculis semper. Cras porttitor et
                        urna ac mollis. Nullam in urna quis diam pharetra
                        vehicula. Sed elit orci, malesuada eget pellentesque
                        nec, finibus in lorem. In lobortis enim in metus
                        pretium, a tincidunt lorem ullamcorper. Nunc dapibus
                        odio a arcu tempus vulputate. Maecenas volutpat erat et
                        velit pharetra, et tincidunt dolor feugiat.
                      </Label>
                    </div>
                  </div>
                </>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

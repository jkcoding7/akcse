"use client";

import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "./Navigation";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 600) => ({
    clipPath: `circle(${height}px at 90% 40px)`, // Aligns with toggle button position
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 90% 40px)", // Initial size matches the button
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MobileNav() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav
        className={`${isOpen ? "fixed inset-0 z-40" : "hidden"}`} // Only render the overlay when open
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="absolute inset-0 bg-gray-900" // Sidebar background color
          variants={sidebar}
        />
        <div className="absolute top-0 right-0 p-6">
          <MenuToggle toggle={() => toggleOpen()} />
        </div>
        <div className="absolute top-1/4 right-6 flex flex-col gap-4">
          <Navigation toggleOpen={toggleOpen} />
        </div>
      </motion.nav>
      <motion.nav className="absolute top-0 right-0 z-30">
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
}

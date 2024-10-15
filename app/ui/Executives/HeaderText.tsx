"use client";

import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function HearderText() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Label className="text-3xl">AKCSE McGill Executives</Label> <br />
      <Label className="text-lg">2024-2025 Executive Members</Label>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Culture({ culture }: { culture: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Culture</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {culture.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                  },
                },
              }}
            >
              <Star className="h-5 w-5 text-yellow-500" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </CardContent>
    </Card>
  );
}

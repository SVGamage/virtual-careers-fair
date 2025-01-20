"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Position {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
}

export default function OpenPositions({ positions }: { positions: Position[] }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Open Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {positions.map((position) => (
            <motion.div
              key={position.id}
              className="border-b pb-4 last:border-b-0 last:pb-0"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                  },
                },
              }}
            >
              <h3 className="text-lg font-semibold">{position.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge>{position.department}</Badge>
                <Badge variant="outline">{position.location}</Badge>
                <Badge variant="outline">{position.type}</Badge>
                <Badge variant="outline">{position.experience}</Badge>
              </div>
              <p className="mt-2 text-muted-foreground">{position.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}


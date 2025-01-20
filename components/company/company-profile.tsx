"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bell,
  Building2,
  MessageSquare,
  MapPin,
  Users,
  Globe,
  Briefcase,
  Star,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import OpenPositions from "./open-positions";
import Benefits from "./benifits-section";
import Culture from "./culture-section";

export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  size: string;
  founded: string;
  website: string;
  description: string;
  logo: string;
  coverImage: string;
  openPositions: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
  }[];
  benefits: string[];
  culture: string[];
}

interface CompanyProfileClientProps {
  company: Company;
}

export default function CompanyProfileView({
  company,
}: CompanyProfileClientProps) {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="relative h-48 md:h-64">
              <Image
                src={company.coverImage || "/placeholder.svg"}
                alt={`${company.name} cover`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <motion.div
                className="flex items-center space-x-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-bold">{company.name}</h1>
                  <p className="text-muted-foreground">{company.industry}</p>
                </div>
              </motion.div>
              <motion.div
                className="mt-4 space-y-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p>
                  <strong>Location:</strong> {company.location}
                </p>
                <p>
                  <strong>Size:</strong> {company.size}
                </p>
                <p>
                  <strong>Founded:</strong> {company.founded}
                </p>
                <p className="mt-4">{company.description}</p>
                <Button variant="outline" asChild>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <OpenPositions positions={company.openPositions} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Benefits benefits={company.benefits} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Culture culture={company.culture} />
      </motion.div>
    </motion.div>
  );
}

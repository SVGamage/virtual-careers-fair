"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Briefcase,
  Search,
  Building2,
  MapPin,
  Clock,
  Filter,
  ChevronDown,
  MessageSquare,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

// This would typically come from an API
const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp",
    companyLogo:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop&crop=faces",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $180,000",
    experience: "5+ years",
    posted: "2 days ago",
    description:
      "We're looking for a Senior Software Engineer to join our core platform team. You'll be working on building scalable infrastructure and implementing new features.",
    requirements: [
      "5+ years of experience with modern JavaScript frameworks",
      "Experience with cloud platforms (AWS, GCP)",
      "Strong understanding of system design and architecture",
    ],
    tags: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    id: 2,
    title: "Product Manager",
    company: "FinanceHub",
    companyLogo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=128&h=128&fit=crop&crop=faces",
    location: "New York, NY",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    experience: "3+ years",
    posted: "1 week ago",
    description:
      "Join our product team to help shape the future of our enterprise solutions. You'll be responsible for driving product strategy and execution.",
    requirements: [
      "3+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
    ],
    tags: ["Product Strategy", "Agile", "Analytics", "FinTech"],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "HealthTech Solutions",
    companyLogo:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=128&h=128&fit=crop&crop=faces",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    experience: "2+ years",
    posted: "3 days ago",
    description:
      "Help us build the next generation of AI-powered healthcare solutions. You'll be working with large datasets and developing machine learning models.",
    requirements: [
      "MS/PhD in Computer Science, Statistics, or related field",
      "Experience with machine learning frameworks",
      "Strong programming skills in Python",
    ],
    tags: ["Python", "Machine Learning", "Healthcare", "AI"],
  },
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      locationFilter === "all" || job.location.includes(locationFilter);
    const matchesType = typeFilter === "all" || job.type === typeFilter;
    const matchesExperience =
      experienceFilter === "all" || job.experience.includes(experienceFilter);

    return matchesSearch && matchesLocation && matchesType && matchesExperience;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Card className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  className="pl-10"
                  placeholder="Search jobs, companies, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Boston">Boston</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={experienceFilter}
                onValueChange={setExperienceFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="0-2">0-2 years</SelectItem>
                  <SelectItem value="2-5">2-5 years</SelectItem>
                  <SelectItem value="5+">5+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold">{job.title}</h2>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                          <span className="flex items-center">
                            <Building2 className="h-4 w-4 mr-1" />
                            {job.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Posted {job.posted}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" asChild>
                          <Link href={`/messages?company=${job.company}`}>
                            Message
                          </Link>
                        </Button>
                        <Button asChild>
                          <Link
                            href={`/companies/${job.company.toLowerCase()}`}
                          >
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {job.description}
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Requirements:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        {job.requirements.map((req) => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

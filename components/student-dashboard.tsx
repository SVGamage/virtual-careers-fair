"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Building2,
  Calendar,
  MessageSquare,
  Search,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const companies = [
  {
    name: "TechCorp",
    industry: "Technology",
    positions: ["Software Engineer", "Product Manager"],
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop&crop=faces",
  },
  {
    name: "FinanceHub",
    industry: "Finance",
    positions: ["Financial Analyst", "Investment Banking"],
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=128&h=128&fit=crop&crop=faces",
  },
];

const upcomingInterviews = [
  {
    company: "TechCorp",
    position: "Software Engineer",
    date: "Tomorrow at 2:00 PM",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop&crop=faces",
  },
  {
    company: "FinanceHub",
    position: "Financial Analyst",
    date: "Next Week",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=128&h=128&fit=crop&crop=faces",
  },
];
export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Search for companies or positions..."
              className="flex-1"
            />
            <Button asChild>
              <Link href="/companies/browse">
                <Search className="h-4 w-4 mr-2" />
                Browse All
              </Link>
            </Button>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Recommended Companies</h2>
            <div className="space-y-4">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{company.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {company.industry}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {company.positions.map((position) => (
                        <span
                          key={position}
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full"
                        >
                          {position}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href={`/companies/${company.name.toLowerCase()}`}>
                      View Profile
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Career Fairs</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">
                      Spring Tech Career Fair 2024
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      March 15, 2024 • Virtual Event
                    </p>
                  </div>
                  <Button>Register</Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Interviews</h2>
          <div className="space-y-4">
            {upcomingInterviews.map((interview, index) => (
              <motion.div
                key={interview.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <img
                  src={interview.logo}
                  alt={interview.company}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{interview.company}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {interview.position}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    {interview.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/companies/browse">
                <Building2 className="h-4 w-4 mr-2" />
                Browse Companies
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/messages">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Interview
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

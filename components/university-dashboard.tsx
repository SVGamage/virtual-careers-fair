"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Building2,
  Calendar,
  ChartBar,
  GraduationCap,
  MessageSquare,
  Search,
  Users,
  BookOpen,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function UniversityDashboard() {
  const upcomingFairs = [
    {
      name: "Spring Tech Career Fair 2024",
      date: "March 15, 2024",
      companies: 45,
      students: 320,
    },
    {
      name: "Finance & Consulting Expo",
      date: "April 2, 2024",
      companies: 28,
      students: 180,
    },
  ];

  const topCompanies = [
    {
      name: "TechCorp",
      industry: "Technology",
      hires: 12,
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop&crop=faces",
    },
    {
      name: "FinanceHub",
      industry: "Finance",
      hires: 8,
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=128&h=128&fit=crop&crop=faces",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Total Students
                  </p>
                  <p className="text-2xl font-bold">1,245</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <Building2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Partner Companies
                  </p>
                  <p className="text-2xl font-bold">85</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <ChartBar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Placement Rate
                  </p>
                  <p className="text-2xl font-bold">92%</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Upcoming Career Fairs</h2>
              <Button>
                <Calendar className="h-4 w-4 mr-2" />
                Schedule New Fair
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingFairs.map((fair, index) => (
                <motion.div
                  key={fair.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{fair.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {fair.date}
                      </p>
                      <div className="mt-2 flex space-x-4">
                        <p className="text-sm">
                          <Building2 className="inline h-4 w-4 mr-1" />
                          {fair.companies} Companies
                        </p>
                        <p className="text-sm">
                          <Users className="inline h-4 w-4 mr-1" />
                          {fair.students} Students
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Top Recruiting Companies</h2>
            <div className="space-y-4">
              {topCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{company.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {company.industry}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{company.hires}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Hires
                    </p>
                  </div>
                </motion.div>
              ))}
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
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium">TechCorp joined as partner</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  2 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium">25 new students registered</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  5 hours ago
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Users className="h-4 w-4 mr-2" />
              Manage Students
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Building2 className="h-4 w-4 mr-2" />
              Partner Companies
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="h-4 w-4 mr-2" />
              View Reports
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageSquare className="h-4 w-4 mr-2" />
              Send Announcements
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

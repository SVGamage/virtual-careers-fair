"use client"

import { motion } from "framer-motion"
import {
  Bell,
  BookOpen,
  Calendar,
  Clock,
  MessageSquare,
  Search,
  Star,
  Users,
  Building2,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function CompanyDashboard() {
  const candidates = [
    {
      name: "Sarah Johnson",
      university: "MIT",
      degree: "Computer Science",
      position: "Software Engineer",
      rating: 4.5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces",
    },
    {
      name: "Michael Chen",
      university: "Stanford",
      degree: "Data Science",
      position: "Data Analyst",
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=faces",
    },
  ]

  const interviews = [
    {
      candidate: "Sarah Johnson",
      position: "Software Engineer",
      time: "Today at 3:00 PM",
      status: "Upcoming",
    },
    {
      candidate: "Michael Chen",
      position: "Data Analyst",
      time: "Tomorrow at 11:00 AM",
      status: "Scheduled",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-black">
      <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Company Dashboard
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <p className="text-sm text-gray-600 dark:text-gray-300">Total Candidates</p>
                        <p className="text-2xl font-bold">156</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                        <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Active Jobs</p>
                        <p className="text-2xl font-bold">12</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                        <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Interviews Today</p>
                        <p className="text-2xl font-bold">8</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Top Candidates</h2>
                  <div className="space-y-4">
                    {candidates.map((candidate, index) => (
                      <motion.div
                        key={candidate.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={candidate.avatar}
                            alt={candidate.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold">{candidate.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {candidate.degree} • {candidate.university}
                            </p>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                              {candidate.position}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{candidate.rating}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Job Postings</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Input
                        placeholder="Search job postings..."
                        className="max-w-sm"
                        icon={<Search className="h-4 w-4" />}
                      />
                      <Button>
                        <Briefcase className="h-4 w-4 mr-2" />
                        Post New Job
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 border rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">Senior Software Engineer</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Full-time • Remote
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm">
                            <BookOpen className="inline h-4 w-4 mr-1" />
                            42 applications
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-4 border rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">Product Manager</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Full-time • On-site
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm">
                            <BookOpen className="inline h-4 w-4 mr-1" />
                            28 applications
                          </p>
                        </div>
                      </motion.div>
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
                  {interviews.map((interview) => (
                    <div
                      key={`${interview.candidate}-${interview.position}`}
                      className="flex items-center space-x-4"
                    >
                      <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium">{interview.candidate}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {interview.position}
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          {interview.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    View All Candidates
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Interview
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message Center
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
"use client"

import { motion } from "framer-motion"
import { Bell, Building2, Calendar, MessageSquare, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function StudentDashboard() {
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
    // Add more companies as needed
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-black">
      <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <User className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Student Dashboard
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
                <div className="flex items-center space-x-4">
                  <Input
                    placeholder="Search companies, positions..."
                    className="flex-1"
                    icon={<Search className="h-4 w-4" />}
                  />
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>

                <h2 className="text-2xl font-bold">Featured Companies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {companies.map((company, index) => (
                    <motion.div
                      key={company.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="p-6">
                        <div className="flex items-center space-x-4">
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-lg font-semibold">{company.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {company.industry}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium">Open Positions:</p>
                          <ul className="mt-2 space-y-1">
                            {company.positions.map((position) => (
                              <li
                                key={position}
                                className="text-sm text-gray-600 dark:text-gray-300"
                              >
                                • {position}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full mt-4">View Profile</Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
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
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium">TechCorp Interview</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Tomorrow at 2:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium">FinanceHub Interview</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Friday at 11:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Building2 className="h-4 w-4 mr-2" />
                    Browse Companies
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
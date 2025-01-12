"use client"

import { motion } from "framer-motion"
import { Building2, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-black">
      <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Virtual Careers Fair
              </span>
            </motion.div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Welcome to the Future of{" "}
            <span className="text-blue-600 dark:text-blue-400">Career Fairs</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Connect with top companies, showcase your talents, and find your dream job
            - all from the comfort of your home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "For Students",
                description: "Create your profile, browse companies, and schedule interviews",
                href: "/students/get-started",
              },
              {
                icon: Building2,
                title: "For Companies",
                description: "Post opportunities, review candidates, and conduct virtual interviews",
                href: "/companies/get-started",
              },
              {
                icon: GraduationCap,
                title: "For Universities",
                description: "Organize virtual career fairs and track student participation",
                href: "/universities/get-started",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.description}
                </p>
                <Button asChild className="w-full">
                  <Link href={item.href}>Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-blue-600 dark:bg-blue-800 text-white rounded-lg p-8 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">
              Join thousands of students and companies already using our platform.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/register">Register Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
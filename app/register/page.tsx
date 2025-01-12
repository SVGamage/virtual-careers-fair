"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Building2, GraduationCap, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function Register() {
  const [userType, setUserType] = useState<
    "student" | "company" | "university"
  >("student");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const type = searchParams.get("type") as typeof userType;
    if (type && ["student", "company", "university"].includes(type)) {
      setUserType(type);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically make an API call to register the user
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Account created successfully!",
        description: "Redirecting to your dashboard...",
      });

      // Redirect to the appropriate dashboard
      setTimeout(() => {
        switch (userType) {
          case "student":
            router.push("/students");
            break;
          case "company":
            router.push("/companies");
            break;
          case "university":
            router.push("/universities");
            break;
        }
      }, 1000);
    } catch (error) {
      toast({
        title: "Error creating account",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-black">
      <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Virtual Careers Fair
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Create Your Account
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                type: "student",
                icon: User,
                title: "Student",
                description: "Looking for career opportunities",
              },
              {
                type: "company",
                icon: Building2,
                title: "Company",
                description: "Hiring new talent",
              },
              {
                type: "university",
                icon: GraduationCap,
                title: "University",
                description: "Organizing career fairs",
              },
            ].map((item) => (
              <motion.div
                key={item.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-6 cursor-pointer ${
                    userType === item.type
                      ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500 dark:ring-blue-400"
                      : ""
                  }`}
                  onClick={() => setUserType(item.type as typeof userType)}
                >
                  <div className="flex justify-center mb-4">
                    <item.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-center mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {userType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    {userType === "student" && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="university">University</Label>
                          <Input
                            id="university"
                            placeholder="Enter your university"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="degree">Degree Program</Label>
                          <Input
                            id="degree"
                            placeholder="e.g., Computer Science"
                            required
                          />
                        </div>
                      </>
                    )}

                    {userType === "company" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input
                            id="companyName"
                            placeholder="Enter company name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tech">Technology</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="healthcare">
                                Healthcare
                              </SelectItem>
                              <SelectItem value="education">
                                Education
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="companySize">Company Size</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-50">
                                1-50 employees
                              </SelectItem>
                              <SelectItem value="51-200">
                                51-200 employees
                              </SelectItem>
                              <SelectItem value="201-1000">
                                201-1000 employees
                              </SelectItem>
                              <SelectItem value="1000+">
                                1000+ employees
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    {userType === "university" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="universityName">
                            University Name
                          </Label>
                          <Input
                            id="universityName"
                            placeholder="Enter university name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">
                            Career Services Department
                          </Label>
                          <Input
                            id="department"
                            placeholder="Enter department name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            placeholder="City, Country"
                            required
                          />
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        required
                        minLength={8}
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    size="lg"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>

                  <div className="text-center mt-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </form>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

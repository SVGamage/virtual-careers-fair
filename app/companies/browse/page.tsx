"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Building2,
  MessageSquare,
  Search,
  Briefcase,
  Users,
  MapPin,
  Filter,
  GraduationCap,
  ArrowLeft,
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
import CompanyCard from "@/components/company/company-card";

const companies = [
  {
    id: 1,
    name: "TechCorp",
    industry: "Technology",
    location: "San Francisco, CA",
    size: "1000+ employees",
    positions: ["Software Engineer", "Product Manager", "Data Scientist"],
    description:
      "Leading technology company focused on innovative solutions in AI and cloud computing.",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop&crop=faces",
    openPositions: 12,
    rating: 4.5,
  },
  {
    id: 2,
    name: "FinanceHub",
    industry: "Finance",
    location: "New York, NY",
    size: "500-1000 employees",
    positions: [
      "Financial Analyst",
      "Investment Banking Associate",
      "Risk Manager",
    ],
    description:
      "Global financial services firm providing innovative solutions in investment banking and asset management.",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=128&h=128&fit=crop&crop=faces",
    openPositions: 8,
    rating: 4.2,
  },
  {
    id: 3,
    name: "HealthTech Solutions",
    industry: "Healthcare",
    location: "Boston, MA",
    size: "201-500 employees",
    positions: [
      "Medical Device Engineer",
      "Clinical Data Analyst",
      "Healthcare Consultant",
    ],
    description:
      "Innovative healthcare technology company developing cutting-edge medical devices and solutions.",
    logo: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=128&h=128&fit=crop&crop=faces",
    openPositions: 5,
    rating: 4.7,
  },
  {
    id: 4,
    name: "GreenEnergy Corp",
    industry: "Energy",
    location: "Austin, TX",
    size: "51-200 employees",
    positions: ["Renewable Energy Engineer", "Sustainability Analyst"],
    description:
      "Sustainable energy company focused on renewable energy solutions and environmental sustainability.",
    logo: "https://images.unsplash.com/photo-1532635246-0b7f3a6e1b97?w=128&h=128&fit=crop&crop=faces",
    openPositions: 3,
    rating: 4.9,
  },
];

export default function BrowseCompanies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.positions.some((position) =>
        position.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesIndustry =
      industryFilter === "all" || company.industry === industryFilter;
    const matchesSize = sizeFilter === "all" || company.size === sizeFilter;

    return matchesSearch && matchesIndustry && matchesSize;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <Card className="sticky z-5 top-16 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* <Button asChild>
              <Link href={`/students`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button> */}
            <div className="flex-1 flex-row">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  className="pl-10"
                  placeholder="Search companies, positions, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sizeFilter} onValueChange={setSizeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Company Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  <SelectItem value="1-50 employees">1-50 employees</SelectItem>
                  <SelectItem value="51-200 employees">
                    51-200 employees
                  </SelectItem>
                  <SelectItem value="201-500 employees">
                    201-500 employees
                  </SelectItem>
                  <SelectItem value="500-1000 employees">
                    500-1000 employees
                  </SelectItem>
                  <SelectItem value="1000+ employees">
                    1000+ employees
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-6">
          {filteredCompanies.map((company, index) => (
            <CompanyCard key={company.id} index={index} company={company} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

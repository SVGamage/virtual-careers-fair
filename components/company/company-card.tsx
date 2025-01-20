import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Briefcase, Building2, MapPin, Users } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Company } from "@/types/company";

interface ICompanyCardProps {
  index: number;
  company: Company;
}

export default function CompanyCard({ index, company }: ICompanyCardProps) {
  return (
    <motion.div
      key={company.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={company.logo}
              alt={company.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">{company.name}</h2>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="flex items-center">
                    <Building2 className="h-4 w-4 mr-1" />
                    {company.industry}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {company.location}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {company.size}
                  </span>
                  <span className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {company.openPositions} open positions
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href={`/messages?company=${company.id}`}>Message</Link>
                </Button>
                <Button asChild>
                  <Link href={`/companies/${company.id}`}>View Profile</Link>
                </Button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {company.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {company.positions.map((position) => (
                <span
                  key={position}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                >
                  {position}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

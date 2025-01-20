import { Button } from "@/components/ui/button";
import Link from "next/link";
import CompanyProfileView, {
  Company,
} from "@/components/company/company-profile";

// This would typically come from an API or database
const companiesData: Record<string, Company> = {
  techcorp: {
    id: "techcorp",
    name: "TechCorp",
    industry: "Technology",
    location: "San Francisco, CA",
    size: "1000+ employees",
    founded: "2010",
    website: "https://techcorp.example.com",
    description:
      "Leading technology company focused on innovative solutions in AI and cloud computing. We're building the future of enterprise software with cutting-edge technology and world-class talent.",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop&crop=faces",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop",
    openPositions: [
      {
        id: 1,
        title: "Senior Software Engineer",
        department: "Engineering",
        location: "San Francisco, CA",
        type: "Full-time",
        experience: "5+ years",
        description:
          "We're looking for a Senior Software Engineer to join our core platform team...",
      },
      {
        id: 2,
        title: "Product Manager",
        department: "Product",
        location: "Remote",
        type: "Full-time",
        experience: "3+ years",
        description:
          "Join our product team to help shape the future of our enterprise solutions...",
      },
      {
        id: 3,
        title: "Data Scientist",
        department: "Data",
        location: "New York, NY",
        type: "Full-time",
        experience: "2+ years",
        description:
          "Help us build the next generation of AI-powered features...",
      },
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Remote work options",
      "Professional development budget",
      "401(k) matching",
    ],
    culture: [
      "Innovation-driven environment",
      "Diverse and inclusive workplace",
      "Regular team events and hackathons",
      "Mentorship programs",
      "Work-life balance",
    ],
  },
  financehub: {
    id: "financehub",
    name: "FinanceHub",
    industry: "Finance",
    location: "New York, NY",
    size: "500-1000 employees",
    founded: "2015",
    website: "https://financehub.example.com",
    description:
      "Global financial services firm providing innovative solutions in investment banking and asset management. We combine traditional financial expertise with cutting-edge technology.",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=128&h=128&fit=crop&crop=faces",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop",
    openPositions: [
      {
        id: 1,
        title: "Investment Banking Analyst",
        department: "Investment Banking",
        location: "New York, NY",
        type: "Full-time",
        experience: "1-3 years",
        description:
          "Join our investment banking team to work on high-profile M&A deals...",
      },
      {
        id: 2,
        title: "Quantitative Trader",
        department: "Trading",
        location: "London, UK",
        type: "Full-time",
        experience: "3+ years",
        description:
          "Develop and implement trading strategies using advanced mathematical models...",
      },
    ],
    benefits: [
      "Competitive base salary + bonus",
      "Comprehensive health coverage",
      "Annual performance bonus",
      "Gym membership",
      "Transportation benefits",
      "Retirement planning",
    ],
    culture: [
      "Fast-paced environment",
      "Global opportunities",
      "Continuous learning",
      "Team collaboration",
      "Performance-driven culture",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(companiesData).map((id) => ({
    id: id,
  }));
}

export default async function CompanyProfile({
  params,
}: {
  params: { id: string };
}) {
  const param = await params;
  const companyId = param.id.toLowerCase();
  const company = companiesData[companyId];

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
          <Button asChild>
            <Link href="/companies/browse">Back to Companies</Link>
          </Button>
        </div>
      </div>
    );
  }

  return <CompanyProfileView company={company} />;
}

import CompanyDashboard from "@/components/company-dashboard";
import StudentDashboard from "@/components/student-dashboard";
import UniversityDashboard from "@/components/university-dashboard";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* <StudentDashboard /> */}
      {/* <CompanyDashboard /> */}
      <UniversityDashboard />
    </div>
  );
}

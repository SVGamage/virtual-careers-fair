"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Header from "./header";

// Define the routes where the sidebar should be hidden
const noSidebarRoutes = [
  "/",
  "/login",
  "/register",
  "/students/get-started",
  "/companies/get-started",
  "/universities/get-started",
];

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldShowSidebar = !noSidebarRoutes.includes(pathname);

  if (!shouldShowSidebar) return children;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-black">
          <Header />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

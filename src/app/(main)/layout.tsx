import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/header";
import { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex justify-center items-center">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

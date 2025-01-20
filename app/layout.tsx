import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarWrapper } from "@/components/sidebar-wrapper"; // Import the new client component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual Careers Fair",
  description: "Connect with top companies and find your dream job",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarWrapper children={children} />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prasanna | AI-Focused Full Stack Engineer",
  description: "Portfolio of a senior full stack engineer specializing in AI workflows and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          jetbrainsMono.variable,
          geist.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

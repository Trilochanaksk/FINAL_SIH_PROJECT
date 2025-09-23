
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Menu, Bot, Workflow, FileText, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AutoLoginDialog from "@/components/auth/auto-login-dialog";

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");
  const { setTheme } = useTheme();

  return (
    <div className="w-full min-h-screen bg-background">
       <AutoLoginDialog />
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
             <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <Logo className="size-8 text-white" />
                <span className="text-2xl font-bold tracking-tight text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>AyuLink</span>
              </Link>
               <nav className="hidden md:flex items-center gap-6">
                <Link href="#" className="text-lg font-medium text-white/90 hover:text-white transition-colors" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>Home</Link>
                <Link href="#features" className="text-lg font-medium text-white/90 hover:text-white transition-colors" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>Features</Link>
                <Link href="#contact" className="text-lg font-medium text-white/90 hover:text-white transition-colors" style={{ textShadow: '1px 1_px 4px rgba(0,0,0,0.7)' }}>Contact</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
               <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Link href="/login?role=doctor">Login</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
               <div className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="size-6"/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative h-[80vh] flex items-center justify-center text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-4 text-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                Bridging Traditional & Modern Medicine
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-balance" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                AyuLink provides seamless integration between NAMASTE and ICD-11 coding systems, empowering healthcare professionals with a unified, intelligent solution for diagnosis and reporting.
              </p>
               <div className="mt-8 flex justify-center gap-4">
                  <Button asChild size="lg">
                    <Link href="/login?role=doctor">Get Started</Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Key Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">Our platform simplifies medical coding and reporting in three easy steps.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-card border rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Bot className="size-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Intelligent Search</h3>
                <p className="text-muted-foreground">Instantly find dual-code suggestions for any diagnosis from both NAMASTE and ICD-11 TM2 systems.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card border rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="p-4 bg-secondary/10 rounded-full mb-4">
                  <Workflow className="size-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Seamless Integration</h3>
                <p className="text-muted-foreground">Convert patient files and diagnoses between coding standards with a single click, ensuring interoperability.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card border rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  <FileText className="size-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Unified Reporting</h3>
                <p className="text-muted-foreground">Generate comprehensive morbidity reports for the Ministry of Ayush, formatted for compliance and clarity.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
       <footer id="contact" className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
             <Logo className="size-8" />
             <span className="text-2xl font-bold">AyuLink</span>
          </div>
          <nav className="flex justify-center gap-6 mb-4">
              <Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </nav>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} AyuLink. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

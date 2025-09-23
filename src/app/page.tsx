
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FileText, Phone, Mail, MapPin, Stethoscope, Workflow, Menu } from "lucide-react";

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Phone className="size-4" /> +91 98765 43210</span>
              <span className="hidden md:flex items-center gap-1"><Mail className="size-4" /> contact@ayulink.com</span>
            </div>
            <Button size="sm" asChild>
              <Link href="/login?role=doctor">Login</Link>
            </Button>
          </div>
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="size-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">AyuLink</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="#" className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link href="#" className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
            <div className="md:hidden">
              <Menu className="size-6"/>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
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
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                Bridging Traditional & Modern Medicine
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl text-balance">
                AyuLink provides seamless integration between NAMASTE and ICD-11 coding systems, empowering healthcare professionals with a unified, intelligent solution for diagnosis and reporting.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/login?role=doctor">Doctor Login</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <Link href="/login?role=patient">Patient Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">Our platform simplifies medical coding and reporting in three easy steps.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-card border rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Stethoscope className="size-10 text-primary" />
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
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Logo className="size-9" />
                <span className="text-2xl font-bold">AyuLink</span>
              </Link>
              <p className="text-gray-400 max-w-md">Empowering healthcare professionals with a unified solution for diagnosis, reporting, and patient management by integrating traditional and modern medical coding systems.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/login?role=doctor" className="text-gray-400 hover:text-white">Doctor Login</Link></li>
                <li><Link href="/login?role=patient" className="text-gray-400 hover:text-white">Patient Login</Link></li>
                <li><Link href="/search" className="text-gray-400 hover:text-white">Diagnosis Search</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="size-5" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-5" />
                  <span className="text-gray-400">contact@ayulink.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="size-5 mt-1 shrink-0" />
                  <span className="text-gray-400">123 Health St, MedCity, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} AyuLink. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

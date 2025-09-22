
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Mail, MapPin, Phone, Stethoscope, Users, Workflow } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  const landingImage = PlaceHolderImages.find(p => p.id === "login-hero");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      
      {/* Top Bar */}
      <div className="bg-primary/90 text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between h-12 px-4 md:px-6 text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone className="size-4" /> +91 98765 43210</span>
            <span className="hidden md:flex items-center gap-2"><Mail className="size-4" /> info@ayulink.com</span>
          </div>
          <Button variant="secondary" size="sm" asChild>
            <Link href="/login?role=doctor">Login / Register</Link>
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-3">
            <Logo className="size-9 text-primary" />
            <span className="text-2xl font-bold tracking-tight">AyuLink</span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
                  Bridging Traditional & Modern Medicine
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our platform provides seamless integration between NAMASTE and ICD-11 coding systems, empowering healthcare professionals with a unified solution for diagnosis and reporting.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/login?role=doctor">Doctor Portal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/login?role=patient">Patient Portal</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center relative">
                {landingImage && (
                  <Image
                    src={landingImage.imageUrl}
                    alt={landingImage.description}
                    width={600}
                    height={600}
                    className="rounded-full object-cover aspect-square shadow-strong z-10"
                    data-ai-hint={landingImage.imageHint}
                    priority
                  />
                )}
                 <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-28 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="max-w-2xl text-muted-foreground md:text-lg">
                AyuLink simplifies the process of integrating traditional and modern medical coding in three easy steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-medium hover:shadow-strong transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary-soft p-4 rounded-full w-fit">
                    <Stethoscope className="size-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-2xl">Intelligent Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Utilize our AI-powered search to find diagnosis codes from both NAMASTE and ICD-11 systems instantly.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-medium hover:shadow-strong transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-secondary-soft p-4 rounded-full w-fit">
                    <Workflow className="size-10 text-secondary" />
                  </div>
                  <CardTitle className="mt-4 text-2xl">Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seamlessly integrate dual-coded data into electronic medical records, ensuring comprehensive patient files.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-medium hover:shadow-strong transition-shadow duration-300">
                <CardHeader>
                   <div className="mx-auto bg-accent-soft p-4 rounded-full w-fit">
                    <FileText className="size-10 text-accent" />
                  </div>
                  <CardTitle className="mt-4 text-2xl">Unified Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Generate compliant morbidity reports for the Ministry of Ayush with just a few clicks, saving time and reducing errors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

       {/* Footer */}
       <footer id="contact" className="bg-foreground text-background">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-4 md:px-6">
            <div className="space-y-4">
              <Link href="#" className="flex items-center gap-3">
                <Logo className="size-9 text-primary" />
                <span className="text-2xl font-bold">AyuLink</span>
              </Link>
                <p className="text-sm text-muted-foreground">Connecting traditional and modern medicine for a healthier future.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-primary transition-colors">Platform Features</Link></li>
                <li><Link href="/login?role=doctor" className="hover:text-primary transition-colors">Doctor Portal</Link></li>
                <li><Link href="/login?role=patient" className="hover:text-primary transition-colors">Patient Portal</Link></li>
              </ul>
            </div>
             <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Contact Info</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-1 shrink-0" /> <span>123 Medical Center Dr, Innovation City, Healthland</span></li>
                <li className="flex items-center gap-3"><Phone className="h-5 w-5" /> +91 98765 43210</li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5" /> info@ayulink.com</li>
              </ul>
            </div>
          </div>
          <div className="bg-black/20">
            <div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
              <p>© 2024 AyuLink. All rights reserved.</p>
            </div>
          </div>
      </footer>
    </div>
  );
}

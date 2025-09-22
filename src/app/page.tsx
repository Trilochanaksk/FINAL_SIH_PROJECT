
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, ChevronLeft, ChevronRight, FileText, HeartPulse, LifeBuoy, Mail, MapPin, Phone, ShieldCheck, Stethoscope, Users, Workflow } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function LandingPage() {
  const landingImage = PlaceHolderImages.find(p => p.id === "landing-hero");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
        <Link href="#" className="flex items-center gap-3">
          <Logo className="size-9 text-primary" />
          <span className="text-2xl font-bold">AyuLink</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
           <Button asChild>
              <Link href="/login?role=doctor">Login</Link>
            </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-primary font-semibold">AyuLink Platform</p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Bridging Traditional & Modern Medicine
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our platform provides seamless integration between NAMASTE and ICD-11 coding systems, empowering healthcare professionals with a unified solution for diagnosis and reporting.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/login?role=doctor">Login as Doctor</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/login?role=patient">Login as Patient</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {landingImage && (
                  <Image
                    src={landingImage.imageUrl}
                    alt={landingImage.description}
                    width={600}
                    height={400}
                    className="object-contain"
                    data-ai-hint={landingImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full bg-blue-500 text-white">
          <div className="container relative grid grid-cols-1 md:grid-cols-3 gap-0 px-4 md:px-6">
            <div className="bg-muted text-foreground p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
              <h3 className="text-2xl font-bold mb-2">Step 1: Search</h3>
              <p className="text-muted-foreground">
                Utilize our AI-powered intelligent search to find diagnosis codes from both NAMASTE and ICD-11 systems instantly.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Step 2: Integrate</h3>
              <p>
                Seamlessly integrate dual-coded data into electronic medical records, ensuring comprehensive patient files.
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Step 3: Report</h3>
              <p>
                Generate compliant morbidity reports for the Ministry of Ayush with just a few clicks, saving time and reducing errors.
              </p>
            </div>
          </div>
           <div className="container px-4 md:px-6 pb-8 flex justify-end gap-2">
                <Button variant="outline" size="icon" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white">
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                 <Button variant="outline" size="icon" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white">
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
        </section>
      </main>

       <footer id="contact" className="bg-muted py-8 md:py-12">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@ayulink.com</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Medical Center Dr</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:underline">Platform Features</Link></li>
                <li><Link href="/login?role=doctor" className="hover:underline">Find a Doctor</Link></li>
                <li><Link href="/search?role=doctor" className="hover:underline">Health Resources</Link></li>
              </ul>
            </div>
             <div className="space-y-2">
              <h3 className="text-lg font-semibold">Patient Portal</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><Link href="/login?role=patient" className="hover:underline">Login</Link></li>
                <li><Link href="#" className="hover:underline">Register</Link></li>
                <li><Link href="#" className="hover:underline">Support</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">AyuLink</h3>
                <p className="text-sm text-muted-foreground">Connecting traditional and modern medicine for a healthier future.</p>
            </div>
          </div>
          <div className="container mx-auto mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
            <p>© 2024 AyuLink. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}

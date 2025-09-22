
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-2xl font-semibold tracking-tight">AyuLink</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <Link href="/login?role=patient">Patient Login</Link>
          </Button>
          <Button asChild>
            <Link href="/login?role=doctor">Doctor Login</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1 text-center">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unifying Traditional & Modern Medicine
                  </h1>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    AyuLink provides a seamless EMR integration platform for NAMASTE and ICD-11 coding, empowering healthcare professionals with unified patient data.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/login?role=doctor">
                      Get Started as a Clinician
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built for Modern Healthcare</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed to streamline workflows, improve accuracy, and bridge the gap between different medical coding systems.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-y-16 py-12">
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold">Dual-Code Conversion</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Instantly convert patient diagnoses between NAMASTE and ICD-11 codes with our intelligent, AI-powered search and conversion tool. Ensure compliance and accurate reporting across systems.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold">Unified Patient Records</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                 Access comprehensive patient files with detailed reports, vitals, and notes. A single source of truth for both doctors and patients, with role-based access control.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold">Ministry of Ayush Reporting</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Generate real-time morbidity data reports for compliance with the Ministry of Ayush. Our AI-driven reporting tool simplifies data aggregation and formatting.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 AyuLink. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

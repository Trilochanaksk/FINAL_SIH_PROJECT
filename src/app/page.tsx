
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "landing-hero");
  const feature1Image = PlaceHolderImages.find((p) => p.id === "feature-1");
  const feature2Image = PlaceHolderImages.find((p) => p.id === "feature-2");
  const feature3Image = PlaceHolderImages.find((p) => p.id === "feature-3");

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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
               {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unifying Traditional & Modern Medicine
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
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
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
               {feature1Image && (
                <Image
                  src={feature1Image.imageUrl}
                  alt={feature1Image.description}
                  width={300}
                  height={300}
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  data-ai-hint={feature1Image.imageHint}
                />
              )}
              <div className="flex flex-col justify-center space-y-4 lg:col-span-2">
                <h3 className="text-2xl font-bold">Dual-Code Conversion</h3>
                <p className="text-muted-foreground">
                  Instantly convert patient diagnoses between NAMASTE and ICD-11 codes with our intelligent, AI-powered search and conversion tool. Ensure compliance and accurate reporting across systems.
                </p>
              </div>
            </div>
             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 lg:col-span-2 lg:order-last">
                <h3 className="text-2xl font-bold">Unified Patient Records</h3>
                <p className="text-muted-foreground">
                 Access comprehensive patient files with detailed reports, vitals, and notes. A single source of truth for both doctors and patients, with role-based access control.
                </p>
              </div>
               {feature2Image && (
                <Image
                  src={feature2Image.imageUrl}
                  alt={feature2Image.description}
                  width={300}
                  height={300}
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  data-ai-hint={feature2Image.imageHint}
                />
              )}
            </div>
             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
               {feature3Image && (
                <Image
                  src={feature3Image.imageUrl}
                  alt={feature3Image.description}
                  width={300}
                  height={300}
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                  data-ai-hint={feature3Image.imageHint}
                />
              )}
              <div className="flex flex-col justify-center space-y-4 lg:col-span-2">
                <h3 className="text-2xl font-bold">Ministry of Ayush Reporting</h3>
                <p className="text-muted-foreground">
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

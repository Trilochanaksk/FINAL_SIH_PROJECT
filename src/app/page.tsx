
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-background");

  return (
    <div className="relative w-full h-screen">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/20 shadow-strong">
            <Link href="/" className="flex justify-center items-center gap-3 mb-6">
                <Logo className="size-12 text-primary" />
                <h1 className="text-5xl font-bold tracking-tight">AyuLink</h1>
            </Link>
            <p className="text-xl md:text-2xl font-light text-primary-foreground/80 max-w-2xl mx-auto">
                Bridging Traditional & Modern Medicine
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/70">
                Our platform provides seamless integration between NAMASTE and ICD-11 coding systems, empowering healthcare professionals with a unified solution for diagnosis and reporting.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center mt-8">
                <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
                <Link href="/login?role=doctor">Doctor Login</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/50 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6">
                <Link href="/login?role=patient">Patient Login</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}

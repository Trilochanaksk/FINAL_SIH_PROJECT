
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FileText, Phone, Mail, MapPin, Stethoscope, Workflow, Menu, ShieldCheck, Zap, Bot } from "lucide-react";

export default function LandingPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

  const testimonials = [
    {
      name: "Dr. Anya Sharma",
      role: "Ayurvedic Practitioner",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "AyuLink has revolutionized my practice. The seamless integration of NAMASTE and ICD-11 codes has saved me hours of administrative work, allowing me to focus more on my patients. The AI-powered search is incredibly accurate and intuitive."
    },
    {
      name: "John Doe",
      role: "Patient",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "As a patient, having access to my unified health records has been empowering. I feel more involved in my healthcare journey, and it's reassuring to know my doctors have a complete picture of my health history."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background">
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
                <Link href="#" className="text-lg font-medium text-white/90 hover:text-white transition-colors" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>Features</Link>
                <Link href="#" className="text-lg font-medium text-white/90 hover:text-white transition-colors" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>Contact</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
               <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Link href="/login?role=doctor">Login</Link>
              </Button>
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
        <section className="relative h-[75vh] flex items-center justify-center text-center">
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
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 container mx-auto px-4 text-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                Bridging Traditional & Modern Medicine
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-balance" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                AyuLink provides seamless integration between NAMASTE and ICD-11 coding systems, empowering healthcare professionals with a unified, intelligent solution for diagnosis and reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-muted/50">
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

         {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose AyuLink?</h2>
                <p className="text-muted-foreground text-lg mb-8">AyuLink is more than just a tool; it's a complete ecosystem designed to bridge the gap between traditional wisdom and modern efficiency.</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Zap className="size-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Unmatched Efficiency</h4>
                      <p className="text-muted-foreground">Reduce administrative overhead and manual coding errors. Our AI-powered platform automates and streamlines your workflow.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <ShieldCheck className="size-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Compliance & Security</h4>
                      <p className="text-muted-foreground">Built with the highest security standards to ensure data privacy and compliance with healthcare regulations.</p>
                    </div>
                  </li>
                   <li className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Stethoscope className="size-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Holistic Patient View</h4>
                      <p className="text-muted-foreground">Gain a complete, unified view of your patient's health history, integrating both traditional and modern diagnostic data.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-strong">
                <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" alt="Doctor using a tablet" layout="fill" objectFit="cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Professionals</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">Hear what our users have to say about the impact of AyuLink on their daily practice.</p>
            <Carousel opts={{ loop: true }} className="max-w-3xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none bg-transparent shadow-none">
                      <CardContent className="p-6 text-center">
                        <Avatar className="mx-auto mb-4 size-20 border-2 border-primary">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-lg italic text-foreground mb-4">&quot;{testimonial.quote}&quot;</p>
                        <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-50px]" />
              <CarouselNext className="right-[-50px]" />
            </Carousel>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">Have questions? We've got answers. Here are some of the most common inquiries we receive.</p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Is AyuLink secure and HIPAA compliant?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Yes, security is our top priority. AyuLink is built on a secure infrastructure and adheres to all necessary healthcare data protection standards, including HIPAA, to ensure patient data is always safe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Which EMR systems does AyuLink integrate with?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  AyuLink is designed for broad compatibility. We offer seamless integration with most major EMR systems and are constantly expanding our list of supported platforms. Please contact our support team for specific integration queries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">How does the AI-powered search work?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Our intelligent search uses advanced natural language processing (NLP) and machine learning models. It understands clinical terminology and context to provide highly accurate dual-code suggestions from both NAMASTE and ICD-11 databases in real-time.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">Is there a mobile app available?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  AyuLink is fully responsive and works beautifully on all devices, including desktops, tablets, and smartphones, directly through your web browser. A dedicated mobile app is also on our development roadmap.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

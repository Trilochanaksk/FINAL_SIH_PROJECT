import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ArrowRight, BookOpen, Calendar, FileText, HeartPulse, Mail, Phone, MapPin, ShieldCheck, Stethoscope, User, Users, Workflow, Heart, File, Hospital, LifeBuoy } from "lucide-react";
import { Logo } from "@/components/icons/logo";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
        <Link href="#" className="flex items-center gap-3">
             <Logo className="size-9 text-primary" />
            <span className="text-2xl font-bold">AyuLink</span>
        </Link>
        <div className="flex items-center gap-3">
            <Phone className="size-5 text-muted-foreground" />
            <span className="text-lg font-medium text-muted-foreground">+91 98765 43210</span>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Bridging Traditional and Modern Medicine
              </h1>
              <p className="max-w-[700px] text-lg md:text-xl">
                Streamlined access for patients, doctors, and healthcare professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30" asChild>
                      <Link href="#features"><Hospital className="mr-2" /> Emergency Services</Link>
                  </Button>
                  <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30" asChild>
                     <Link href="/login?role=patient"><File className="mr-2" /> Health Records</Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="access" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Choose Your Portal
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Select the appropriate interface for your role to get started.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 py-12 sm:grid-cols-2">
              <Card className="text-center hover:shadow-strong transition-shadow">
                <CardHeader>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mt-4">Patient Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access your medical records, appointments, and health information.
                  </p>
                  <Button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white" asChild>
                    <Link href="/login?role=patient">Login as Patient</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-strong transition-shadow">
                <CardHeader>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100">
                    <Stethoscope className="h-8 w-8 text-cyan-600" />
                  </div>
                  <CardTitle className="mt-4">Doctor Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage patients, access medical records, and clinical tools.
                  </p>
                  <Button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
                     <Link href="/login?role=doctor">Login as Doctor</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="translator" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Medical Code Translator
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Convert between Namaste and ICD-11 codes instantly.
              </p>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Workflow className="h-5 w-5" /> Code Translation Tool
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                     <p className="text-muted-foreground mb-4">
                        Our powerful AI-driven search tool helps you find and translate diagnosis codes seamlessly.
                      </p>
                      <Button asChild>
                          <Link href="/search">
                            Go to Diagnosis Search <ArrowRight className="ml-2" />
                          </Link>
                      </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Platform Features
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardHeader>
                  <Calendar className="mx-auto h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Appointment Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Easy online booking</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <FileText className="mx-auto h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Digital Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Secure health records</p>
                </CardContent>
              </Card>
               <Card className="text-center">
                <CardHeader>
                  <ShieldCheck className="mx-auto h-8 w-8 mb-2 text-primary" />
                  <CardTitle>HIPAA Compliant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Protected health data</p>
                </CardContent>
              </Card>
               <Card className="text-center">
                <CardHeader>
                  <HeartPulse className="mx-auto h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Real-time Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Live health tracking</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

       <footer className="bg-muted py-8 md:py-12">
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
                <li><Link href="#translator" className="hover:underline">Health Resources</Link></li>
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

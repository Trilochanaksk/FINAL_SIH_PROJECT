import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ArrowRight, BookOpen, Calendar, FileText, HeartPulse, Mail, Phone, MapPin, ShieldCheck, Stethoscope, User, Users, Workflow } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Select the appropriate interface for your role
              </h1>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Patient Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access your medical records, appointments, and health information
                  </p>
                  <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white" asChild>
                    <Link href="/login?role=patient">Login as Patient</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <Stethoscope className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle>Doctor Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage patients, access medical records, and clinical tools
                  </p>
                  <Button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
                     <Link href="/login?role=doctor">Login as Doctor</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>General Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Public health information, resources, and general inquiries
                  </p>
                  <Button className="mt-4">General Access</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Medical Code Translator
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Convert between Namaste and ICD codes
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
                  <Tabs defaultValue="namaste-icd">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="namaste-icd">Namaste → ICD</TabsTrigger>
                      <TabsTrigger value="icd-namaste">ICD → Namaste</TabsTrigger>
                    </TabsList>
                    <TabsContent value="namaste-icd" className="mt-4">
                      <div className="space-y-4">
                        <Input placeholder="Enter Namaste code" />
                        <Button className="w-full">Translate Code</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="icd-namaste" className="mt-4">
                      <div className="space-y-4">
                        <Input placeholder="Enter ICD code" />
                        <Button className="w-full">Translate Code</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@ayulink.com</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Medical Center Dr</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:underline">Emergency Services</Link></li>
                <li><Link href="#" className="hover:underline">Find a Doctor</Link></li>
                <li><Link href="#" className="hover:underline">Health Resources</Link></li>
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
            <p>© 2024 AyuLink Portal. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}
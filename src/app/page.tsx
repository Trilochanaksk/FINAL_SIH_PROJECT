
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/icons/logo";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("doctor.anya@ayulink.com");
  const [password, setPassword] = useState("password");
  const [role, setRole] = useState<"doctor" | "patient">("doctor");
  const loginImage = PlaceHolderImages.find(p => p.id === "login-hero");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'doctor' && email === "doctor.anya@ayulink.com" && password === "password") {
       toast({
        title: "Login Successful",
        description: `Welcome back, Dr. Sharma!`,
      });
      router.push(`/dashboard?role=${role}`);
    } else if (role === 'patient' && email === "patient.john@ayulink.com" && password === "password") {
      toast({
        title: "Login Successful",
        description: `Welcome back, John!`,
      });
      router.push(`/dashboard?role=${role}`);
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid credentials for the selected role.",
      });
    }
  };

  const handleRoleChange = (value: string) => {
    const newRole = value as "doctor" | "patient";
    setRole(newRole);
    if (newRole === 'patient') {
      setEmail("patient.john@ayulink.com");
    } else {
      setEmail("doctor.anya@ayulink.com");
    }
  }

  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <div className="flex justify-center items-center gap-2 mb-2">
               <Logo className="size-8 text-primary" />
                <h1 className="text-3xl font-bold tracking-tight">AyuLink</h1>
            </div>
            <p className="text-balance text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <form onSubmit={handleLogin} className="grid gap-4">
             <div className="grid gap-2">
                <Label htmlFor="role">Your Role</Label>
                 <Select value={role} onValueChange={handleRoleChange}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="doctor">Doctor</SelectItem>
                        <SelectItem value="patient">Patient</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {loginImage && (
            <Image
            src={loginImage.imageUrl}
            alt={loginImage.description}
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
            data-ai-hint={loginImage.imageHint}
            />
        )}
      </div>
    </div>
  );
}

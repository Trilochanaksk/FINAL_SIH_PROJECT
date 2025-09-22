
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("doctor.anya@ayulink.com");
  const [password, setPassword] = useState("password");
  const [role, setRole] = useState<"doctor" | "patient">("doctor");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'doctor' && email === "doctor.anya@ayulink.com" && password === "password") {
       toast({
        title: "Login Successful",
        description: `Welcome back, Dr. Sharma!`,
      });
      // In a real app, you'd manage session state here.
      // We'll use a simple query param to simulate the role.
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
    <div className="flex items-center justify-center min-h-screen bg-muted/30">
      <Card className="w-full max-w-md shadow-2xl">
        <form onSubmit={handleLogin}>
          <CardHeader className="text-center space-y-2 py-8">
            <div className="flex justify-center items-center gap-3 mb-4">
               <Logo className="size-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">Welcome to AyuLink</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Bridging Traditional and Modern Medicine
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 p-6">
             <div className="grid gap-2">
                <Label htmlFor="role">Your Role</Label>
                 <Select value={role} onValueChange={handleRoleChange}>
                    <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="doctor">Doctor</SelectItem>
                        <SelectItem value="patient">Patient</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 text-base"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 text-base"
              />
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button type="submit" className="w-full h-12 text-lg font-semibold">
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

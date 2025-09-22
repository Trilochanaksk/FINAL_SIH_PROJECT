
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

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("doctor.anya@ayulink.com");
  const [password, setPassword] = useState("password"); // Dummy password

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would validate credentials against a backend.
    if (email === "doctor.anya@ayulink.com" && password === "password") {
       toast({
        title: "Login Successful",
        description: "Welcome back, Dr. Sharma!",
      });
      router.push("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid email or password.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-sm shadow-lg">
        <form onSubmit={handleLogin}>
          <CardHeader className="text-center space-y-4 py-8">
            <div className="flex justify-center items-center gap-3 mb-2">
               <Logo className="size-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold">Welcome to AyuLink</CardTitle>
            <CardDescription className="text-base">
              Your EMR Integration Platform
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 p-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
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
                className="h-11"
              />
            </div>
          </CardContent>
          <CardFooter className="p-6">
            <Button type="submit" className="w-full h-11 text-lg">
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

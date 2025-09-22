
"use client";

import { Suspense } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PatientFilesWrapper, { PatientFilesSkeleton } from '@/components/patients/patient-files-wrapper';

export default function PatientDashboard() {
    return (
         <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold tracking-tight">My Health Dashboard</h1>
            <Card>
                <CardHeader>
                    <CardTitle>My Reports</CardTitle>
                    <CardDescription>A list of your personal medical reports.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Suspense fallback={<PatientFilesSkeleton />}>
                        <PatientFilesWrapper query="PAT-001" />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    )
}

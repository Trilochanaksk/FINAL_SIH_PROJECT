// /src/app/(main)/dashboard/page.tsx
"use client";

import { Suspense } from "react";
import DoctorDashboard from "./doctor-dashboard";
import PatientDashboard from "./patient-dashboard";
import { samplePatientFiles } from "@/lib/patient-data";

type DashboardPageProps = {
  searchParams?: {
    role?: "doctor" | "patient";
  };
};

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardContent searchParams={searchParams} />
    </Suspense>
  );
}

// Client-only component to safely handle dynamic dashboard rendering
function DashboardContent({ searchParams }: DashboardPageProps) {
  const role = searchParams?.role || "doctor";

  if (role === "patient") {
    const patientFiles = samplePatientFiles.filter((file) => file.id === "PAT-001");
    return <PatientDashboard files={patientFiles} />;
  }

  const files = samplePatientFiles.filter(
    (file) =>
      file.id.toLowerCase().includes("") ||
      file.patientName.toLowerCase().includes("")
  );

  return <DoctorDashboard files={files} />;
}

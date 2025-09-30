// /src/app/(main)/dashboard/page.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DoctorDashboard from "./doctor-dashboard";
import PatientDashboard from "./patient-dashboard";
import { samplePatientFiles } from "@/lib/patient-data";

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

// Client-only content
function DashboardContent() {
  const searchParams = useSearchParams();
  const role = searchParams?.get("role") === "patient" ? "patient" : "doctor";

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

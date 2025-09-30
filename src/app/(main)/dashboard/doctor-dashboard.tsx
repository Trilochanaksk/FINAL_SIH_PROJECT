// /src/app/(main)/dashboard/doctor-dashboard-wrapper.tsx
"use client";

import DoctorDashboard from "./doctor-dashboard";
import { samplePatientFiles } from "@/lib/patient-data";

export default function DoctorDashboardWrapper() {
  // You can safely use useSearchParams() or any client hook here if needed
  const files = samplePatientFiles.filter(
    (file) =>
      file.id.toLowerCase().includes("") ||
      file.patientName.toLowerCase().includes("")
  );

  return <DoctorDashboard files={files} />;
}

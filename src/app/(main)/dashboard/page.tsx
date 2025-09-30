// /src/app/(main)/dashboard/page.tsx
import { Suspense } from "react";
import DoctorDashboardWrapper from "./doctor-dashboard-wrapper";
import PatientDashboardWrapper from "./patient-dashboard-wrapper";

type DashboardPageProps = {
  searchParams?: {
    role?: "doctor" | "patient";
  };
};

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const role = searchParams?.role || "doctor";

  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      {role === "patient" ? (
        <PatientDashboardWrapper />
      ) : (
        <DoctorDashboardWrapper />
      )}
    </Suspense>
  );
}

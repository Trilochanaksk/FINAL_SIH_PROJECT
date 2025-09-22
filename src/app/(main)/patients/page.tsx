import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import PatientSearch from "@/components/patients/patient-search";
import PatientFiles from "@/components/patients/patient-files";

type PatientsPageProps = {
  searchParams: {
    query?: string;
  };
};

export default function PatientsPage({ searchParams }: PatientsPageProps) {
  const query = searchParams?.query || "";

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patient Records</h1>
          <p className="text-muted-foreground">
            Search, view, and manage patient files.
          </p>
        </div>
        <PatientSearch placeholder="Search by Patient ID..." />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Files</CardTitle>
          <CardDescription>
            A list of all patient files in the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense key={query} fallback={<PatientFilesSkeleton />}>
            <PatientFiles query={query} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}

function PatientFilesSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-6 w-24" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20 mt-1" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

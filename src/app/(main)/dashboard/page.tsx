import DoctorDashboard from './doctor-dashboard';
import PatientDashboard from './patient-dashboard';
import { samplePatientFiles } from '@/lib/patient-data';

type DashboardPageProps = {
  searchParams?: {
    role?: 'doctor' | 'patient';
  };
};

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const role = searchParams?.role || 'doctor';

  if (role === 'patient') {
    // In a real app, fetch data based on the logged-in user
    const patientFiles = samplePatientFiles.filter(file => file.id === "PAT-001");
    return <PatientDashboard files={patientFiles} />;
  }

  // In a real app, fetch this data from a database
  const files = samplePatientFiles.filter(
    (file) =>
      file.id.toLowerCase().includes("") ||
      file.patientName.toLowerCase().includes("")
  );

  return <DoctorDashboard files={files} />;
}

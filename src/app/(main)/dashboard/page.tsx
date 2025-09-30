import DoctorDashboard from './doctor-dashboard';
import PatientDashboard from './patient-dashboard';
import { samplePatientFiles } from '@/lib/patient-data';

type DashboardPageProps = {
  searchParams?: {
    role?: 'doctor' | 'patient';
  };
};

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const role = searchParams?.role ?? 'doctor';

  if (role === 'patient') {
    // In a real app, fetch data based on the logged-in patient
    const patientFiles = samplePatientFiles.filter((file) => file.id === 'PAT-001');
    return <PatientDashboard files={patientFiles} />;
  }

  // In a real app, fetch data from a database
  return <DoctorDashboard files={samplePatientFiles} />;
}

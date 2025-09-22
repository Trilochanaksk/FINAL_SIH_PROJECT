
import DoctorDashboard from './doctor-dashboard';
import PatientDashboard from './patient-dashboard';

type DashboardPageProps = {
  searchParams: {
    role?: 'doctor' | 'patient';
  };
};

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const role = searchParams?.role || 'doctor';

  if (role === 'patient') {
    return <PatientDashboard />;
  }
  
  return <DoctorDashboard />;
}

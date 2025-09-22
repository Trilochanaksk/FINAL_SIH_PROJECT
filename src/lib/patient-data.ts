
export type PatientFile = {
  id: string;
  patientName: string;
  dob: string;
  gender: "Male" | "Female" | "Other";
  reportType: "ICD-11" | "Namaste";
  chiefComplaint: string;
  vitals: {
    bloodPressure: string;
    heartRate: string;
    temperature: string;
    respiratoryRate: string;
  };
  diagnoses: {
    code: string;
    description: string;
  }[];
  notes: string;
};

export const samplePatientFiles: PatientFile[] = [
  {
    id: "PAT-001",
    patientName: "John Doe",
    dob: "1985-05-15",
    gender: "Male",
    reportType: "ICD-11",
    chiefComplaint: "Severe joint pain, swelling, and stiffness, especially in the wrists and hands.",
    vitals: {
      bloodPressure: "130/85 mmHg",
      heartRate: "80 bpm",
      temperature: "37.2°C",
      respiratoryRate: "18 breaths/min",
    },
    diagnoses: [
      { code: "M65", description: "Rheumatoid Arthritis" },
    ],
    notes:
      "Patient reports that the pain is worse in the morning. Physical examination reveals inflammation in multiple joints. Suspected Amavata. Recommending further tests and a follow-up.",
  },
  {
    id: "PAT-002",
    patientName: "Jane Smith",
    dob: "1992-11-20",
    gender: "Female",
    reportType: "Namaste",
    chiefComplaint: "Lower back pain radiating down the left leg.",
    vitals: {
      bloodPressure: "110/70 mmHg",
      heartRate: "68 bpm",
      temperature: "36.8°C",
      respiratoryRate: "16 breaths/min",
    },
    diagnoses: [
      { code: "NAM-AY-101", description: "Gridhrasi (Sciatica)" },
    ],
    notes:
      "Symptoms are consistent with Gridhrasi. Recommended herbal formulations, specific yoga asanas, and lifestyle modifications. Advised to avoid heavy lifting.",
  },
  {
    id: "PAT-003",
    patientName: "Aarav Sharma",
    dob: "1978-01-30",
    gender: "Male",
    reportType: "Namaste",
    chiefComplaint: "Recurrent episodes of running nose, sneezing, and nasal congestion.",
    vitals: {
      bloodPressure: "125/80 mmHg",
      heartRate: "72 bpm",
      temperature: "37.0°C",
      respiratoryRate: "16 breaths/min",
    },
    diagnoses: [
        { code: "NAM-UN-112", description: "Nazla (Common Cold)" }
    ],
    notes: "Patient reports high susceptibility to catching colds. Advised steam inhalation, herbal decoctions, and dietary adjustments to boost immunity.",
  },
   {
    id: "PAT-004",
    patientName: "Priya Patel",
    dob: "2001-07-12",
    gender: "Female",
    reportType: "ICD-11",
    chiefComplaint: "Painful, swollen joints with significant morning stiffness.",
    vitals: {
      bloodPressure: "115/75 mmHg",
      heartRate: "85 bpm",
      temperature: "37.5°C",
      respiratoryRate: "18 breaths/min",
    },
    diagnoses: [
        { code: "M15", description: "Polyarthritis" }
    ],
    notes: "Clinical presentation suggests Waja-ul-Mafasil. Patient has a family history of autoimmune disorders. Ordered blood tests to confirm diagnosis and will start on Unani treatment protocol.",
  },
];

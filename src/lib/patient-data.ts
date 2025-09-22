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
    chiefComplaint: "Persistent cough and shortness of breath for 2 weeks.",
    vitals: {
      bloodPressure: "120/80 mmHg",
      heartRate: "72 bpm",
      temperature: "37.0°C",
      respiratoryRate: "18 breaths/min",
    },
    diagnoses: [
      { code: "JB44.0", description: "Chronic obstructive pulmonary disease" },
      { code: "BA00.0", description: "Essential hypertension" },
    ],
    notes:
      "Patient is a long-term smoker. Prescribed bronchodilators and advised on smoking cessation. Follow-up in 4 weeks.",
  },
  {
    id: "PAT-002",
    patientName: "Jane Smith",
    dob: "1992-11-20",
    gender: "Female",
    reportType: "Namaste",
    chiefComplaint: "Joint pain and stiffness, particularly in the mornings.",
    vitals: {
      bloodPressure: "110/70 mmHg",
      heartRate: "68 bpm",
      temperature: "36.8°C",
      respiratoryRate: "16 breaths/min",
    },
    diagnoses: [
      { code: "NAM-AY-123", description: "Amavata (Rheumatoid Arthritis)" },
      { code: "NAM-AY-101", description: "Gridhrasi (Sciatica)" },
    ],
    notes:
      "Symptoms are consistent with Amavata. Recommended herbal formulations and dietary changes. Advised to practice gentle yoga.",
  },
  {
    id: "PAT-003",
    patientName: "Aarav Sharma",
    dob: "1978-01-30",
    gender: "Male",
    reportType: "Namaste",
    chiefComplaint: "Recurrent headaches and feeling of pressure in the head.",
    vitals: {
      bloodPressure: "130/85 mmHg",
      heartRate: "75 bpm",
      temperature: "37.1°C",
      respiratoryRate: "17 breaths/min",
    },
    diagnoses: [
        { code: "A-2.1", description: "Shaqīqa Ḥārra (Acute migraine)" }
    ],
    notes: "Patient reports high stress levels from work. Pain is unilateral and throbbing. Advised Shirodhara therapy and stress management techniques.",
  },
   {
    id: "PAT-004",
    patientName: "Priya Patel",
    dob: "2001-07-12",
    gender: "Female",
    reportType: "ICD-11",
    chiefComplaint: "Acute abdominal pain in the lower right quadrant, nausea, and low-grade fever.",
    vitals: {
      bloodPressure: "115/75 mmHg",
      heartRate: "95 bpm",
      temperature: "38.2°C",
      respiratoryRate: "20 breaths/min",
    },
    diagnoses: [
        { code: "DC70", description: "Acute appendicitis" }
    ],
    notes: "Physical examination shows tenderness at McBurney's point. Blood tests show elevated white blood cell count. Referred for surgical consultation for appendectomy.",
  },
];

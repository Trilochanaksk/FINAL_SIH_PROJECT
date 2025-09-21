"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";

const chartData = [
  { month: "January", ayurveda: 186, siddha: 80, unani: 50 },
  { month: "February", ayurveda: 305, siddha: 200, unani: 120 },
  { month: "March", ayurveda: 237, siddha: 120, unani: 190 },
  { month: "April", ayurveda: 73, siddha: 190, unani: 40 },
  { month: "May", ayurveda: 209, siddha: 130, unani: 160 },
  { month: "June", ayurveda: 214, siddha: 140, unani: 180 },
];

const chartConfig = {
  ayurveda: {
    label: "Ayurveda",
    color: "hsl(var(--chart-1))",
  },
  siddha: {
    label: "Siddha",
    color: "hsl(var(--chart-2))",
  },
  unani: {
    label: "Unani",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const recentDiagnoses = [
  {
    patient: "Patient-001",
    diagnosis: "Amavata",
    namasteCode: "NAM-AY-123",
    icd11Code: "M65",
    practitioner: "Dr. Sharma",
    system: "Ayurveda",
  },
  {
    patient: "Patient-002",
    diagnosis: "Vali Azhal Keel Vayu",
    namasteCode: "NAM-SI-456",
    icd11Code: "M05",
    practitioner: "Dr. Kumar",
    system: "Siddha",
  },
  {
    patient: "Patient-003",
    diagnosis: "Waja-ul-Mafasil",
    namasteCode: "NAM-UN-789",
    icd11Code: "M15",
    practitioner: "Dr. Khan",
    system: "Unani",
  },
  {
    patient: "Patient-004",
    diagnosis: "Gridhrasi",
    namasteCode: "NAM-AY-101",
    icd11Code: "M54.3",
    practitioner: "Dr. Sharma",
    system: "Ayurveda",
  },
  {
    patient: "Patient-005",
    diagnosis: "Nazla",
    namasteCode: "NAM-UN-112",
    icd11Code: "J00",
    practitioner: "Dr. Khan",
    system: "Unani",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Diagnoses</CardTitle>
            <CardDescription>
              Total diagnoses recorded in the system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">12,543</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>NAMASTE Codes</CardTitle>
            <CardDescription>Unique NAMASTE codes utilized.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">2,890</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ICD-11 TM2 Codes</CardTitle>
            <CardDescription>Unique ICD-11 TM2 codes utilized.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1,721</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Diagnosis Trends</CardTitle>
            <CardDescription>Monthly diagnosis trends by system</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Bar
                  dataKey="ayurveda"
                  fill="var(--color-ayurveda)"
                  radius={4}
                />
                <Bar dataKey="siddha" fill="var(--color-siddha)" radius={4} />
                <Bar dataKey="unani" fill="var(--color-unani)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Diagnoses</CardTitle>
            <CardDescription>
              A list of the most recent diagnoses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Diagnosis</TableHead>
                  <TableHead>System</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentDiagnoses.map((dx) => (
                  <TableRow key={dx.patient}>
                    <TableCell className="font-medium">{dx.patient}</TableCell>
                    <TableCell>{dx.diagnosis}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          dx.system === "Ayurveda"
                            ? "default"
                            : dx.system === "Siddha"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {dx.system}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

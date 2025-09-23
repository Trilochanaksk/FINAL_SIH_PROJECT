"use client";

import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import type { GenerateMinistryOfAyushReportOutput } from "@/ai/flows/generate-ministry-of-ayush-report";
import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";
import MarkdownRenderer from "@/components/markdown-renderer";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FileText, Syringe, Users, Download, Loader2 } from "lucide-react";

type ReportDisplayProps = {
  report: GenerateMinistryOfAyushReportOutput;
};

const chartColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export default function ReportDisplay({ report }: ReportDisplayProps) {
  const { summary, namasteBreakdown, icd11Breakdown, systemDistribution, narrative } = report;
  const reportRef = useRef<HTMLDivElement>(null);
  const [isSaving, setIsSaving] = React.useState(false);

  const handleSavePdf = () => {
    if (!reportRef.current) return;
    setIsSaving(true);
    html2canvas(reportRef.current, {
      scale: 2, // Increase resolution for better quality
      useCORS: true, 
      backgroundColor: document.documentElement.classList.contains('dark') ? '#020817' : '#FFFFFF',
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const canvasAspectRatio = canvasWidth / canvasHeight;
      const pdfAspectRatio = pdfWidth / pdfHeight;

      let imgWidth = pdfWidth;
      let imgHeight = pdfWidth / canvasAspectRatio;
      let y = 0;
      
      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = imgHeight * canvasAspectRatio;
      }

      pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
      pdf.save(`Ayush-Report-${new Date().toISOString().split('T')[0]}.pdf`);
      setIsSaving(false);
    });
  };

  const pieData = systemDistribution.map((item) => ({
    name: item.system,
    value: item.count,
  }));

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={handleSavePdf} disabled={isSaving}>
          {isSaving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Download className="mr-2 h-4 w-4" />
          )}
          Save as PDF
        </Button>
      </div>

      <div ref={reportRef} className="space-y-8 animate-fade-in p-4 bg-background">
        <Card>
            <CardHeader>
              <CardTitle>Report Summary</CardTitle>
              <CardDescription>
                An overview of the key metrics from the generated report.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Diagnoses</CardTitle>
                          <Syringe className="h-5 w-5 text-secondary" />
                      </CardHeader>
                      <CardContent>
                          <div className="text-4xl font-bold">{summary.totalDiagnoses}</div>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Unique Patients</CardTitle>
                          <Users className="h-5 w-5 text-primary" />
                      </CardHeader>
                      <CardContent>
                          <div className="text-4xl font-bold">{summary.uniquePatients}</div>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Top System</CardTitle>
                          <FileText className="h-5 w-5 text-accent" />
                      </CardHeader>
                      <CardContent>
                          <div className="text-4xl font-bold">{summary.topSystem}</div>
                      </CardContent>
                  </Card>
              </div>
            </CardContent>
          </Card>

        <div className="grid gap-8 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>System Distribution</CardTitle>
              <CardDescription>
                Breakdown of diagnoses by medical system.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);
                      return (
                        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                          {`${(percent * 100).toFixed(0)}%`}
                        </text>
                      );
                    }}
                    outerRadius={120}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Narrative Summary</CardTitle>
              <CardDescription>
                AI-generated insights and trends.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <MarkdownRenderer content={narrative} />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top 5 NAMASTE Diagnoses</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {namasteBreakdown.map((dx) => (
                    <TableRow key={dx.code}>
                      <TableCell>
                        <Badge variant="default">{dx.code}</Badge>
                      </TableCell>
                      <TableCell>{dx.description}</TableCell>
                      <TableCell className="text-right font-medium">{dx.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top 5 ICD-11 Diagnoses</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {icd11Breakdown.map((dx) => (
                    <TableRow key={dx.code}>
                      <TableCell>
                        <Badge variant="secondary">{dx.code}</Badge>
                      </TableCell>
                      <TableCell>{dx.description}</TableCell>
                      <TableCell className="text-right font-medium">{dx.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

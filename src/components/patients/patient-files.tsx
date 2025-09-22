import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FilePlus2, FileText, User } from "lucide-react";
import PatientReportView from "./patient-report-view";
import { samplePatientFiles } from "@/lib/patient-data";
import { Badge } from "../ui/badge";

export default async function PatientFiles({ query }: { query: string }) {
  // In a real app, you would fetch this data from a database
  const files = samplePatientFiles.filter(
    (file) =>
      file.id.toLowerCase().includes(query.toLowerCase()) ||
      file.patientName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="flex flex-col items-center justify-center text-center p-6 border-dashed hover:border-primary hover:text-primary transition-colors cursor-pointer">
            <FilePlus2 className="h-12 w-12 text-muted-foreground" />
            <CardTitle className="mt-4">Upload New File</CardTitle>
            <CardDescription className="mt-1">
              Add a new patient report to the system.
            </CardDescription>
          </Card>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Patient File</DialogTitle>
            <DialogDescription>
              Select a file to upload. This feature is a placeholder for a real
              file upload implementation.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground text-center">
              File upload functionality would be implemented here.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {files.map((file) => (
        <Dialog key={file.id}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  {file.patientName}
                </CardTitle>
                <FileText className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Patient ID: {file.id}
                </div>
                <div className="text-sm text-muted-foreground">
                  DOB: {file.dob}
                </div>
              </CardContent>
              <CardFooter>
                <Badge variant={file.reportType === 'ICD-11' ? 'secondary' : 'default'}>{file.reportType} Report</Badge>
              </CardFooter>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <PatientReportView report={file} />
          </DialogContent>
        </Dialog>
      ))}
       {files.length === 0 && (
        <p className="col-span-full text-center text-muted-foreground">
          No patient files found for &quot;{query}&quot;.
        </p>
      )}
    </div>
  );
}

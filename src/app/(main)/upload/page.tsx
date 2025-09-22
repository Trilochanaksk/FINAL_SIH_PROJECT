
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileUp } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upload Report</h1>
        <p className="text-muted-foreground">
          Add a new patient report to the system.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Patient File</CardTitle>
          <CardDescription>
            This is a placeholder for a real file upload implementation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-muted rounded-lg text-center">
            <FileUp className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              Drag and drop files here or click to browse.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              (File upload functionality would be implemented here)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileUp, Upload, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

export default function PatientUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<"success" | "error" | "idle">("idle");
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setUploadStatus("idle");
      setUploadProgress(0);
    }
  };

  const handleUpload = async () => {
    if (!file) {
       toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select a file to upload.",
      });
      return;
    }

    setIsUploading(true);
    setUploadStatus("idle");

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 5;
      });
    }, 100);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    clearInterval(progressInterval);
    setUploadProgress(100);

    // Simulate a random success or failure
    const isSuccess = Math.random() > 0.2; 
    
    if (isSuccess) {
      setUploadStatus("success");
      toast({
        title: "Upload Successful",
        description: `File "${file.name}" has been uploaded.`,
      });
    } else {
      setUploadStatus("error");
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: "There was an error uploading your file. Please try again.",
      });
    }
    
    setIsUploading(false);
    // Do not reset the file so user can see what was uploaded
    // setFile(null); 
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upload My Report</h1>
        <p className="text-muted-foreground">
          Add a personal medical report to your file.
        </p>
      </div>

       <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>File Format Reminder</AlertTitle>
        <AlertDescription>
          Please ensure your file is in one of the accepted formats: PDF, JPG, or PNG.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Medical File</CardTitle>
          <CardDescription>
            Select a file from your device and click upload.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-muted rounded-lg text-center space-y-4">
            <FileUp className="h-16 w-16 text-muted-foreground" />
             <Input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="w-full max-w-sm"
              disabled={isUploading}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            {file && <p className="text-sm text-muted-foreground">Selected file: {file.name}</p>}
          </div>

           <Button onClick={handleUpload} disabled={isUploading || !file} className="w-full">
            {isUploading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload File
              </>
            )}
          </Button>

          {isUploading && (
             <Progress value={uploadProgress} className="w-full" />
          )}

          {uploadStatus === 'success' && (
            <div className="flex items-center p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>File uploaded successfully!</span>
            </div>
          )}
           {uploadStatus === 'error' && (
            <div className="flex items-center p-4 bg-red-100 dark:bg-red-900/30 text-destructive dark:text-red-300 rounded-md">
                <AlertCircle className="mr-2 h-5 w-5" />
                <span>File upload failed. Please try again.</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

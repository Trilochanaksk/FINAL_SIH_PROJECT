"use server";

import { generateMinistryOfAyushReport, GenerateMinistryOfAyushReportOutput } from "@/ai/flows/generate-ministry-of-ayush-report";
import { chat } from "@/ai/flows/chatbot-flow";

export async function getAyushReport(
  startDate: Date,
  endDate: Date
): Promise<{ report: GenerateMinistryOfAyushReportOutput } | { error: string }> {
  try {
    const start = startDate.toISOString().split("T")[0];
    const end = endDate.toISOString().split("T")[0];
    
    // The AI flow now returns the entire report object directly.
    const reportData = await generateMinistryOfAyushReport({
      startDate: start,
      endDate: end,
    });

    // Return the full structured report object.
    return { report: reportData };
  } catch (e) {
    console.error("Error in getAyushReport:", e);
    // It's helpful to return a more specific error message if possible.
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { error: `Failed to generate report. Details: ${errorMessage}` };
  }
}

export async function getChatbotResponse(history: {role: "user" | "model", content: string}[], question: string): Promise<{ response: string } | { error: string }> {
    try {
        const response = await chat({ history, question });
        return { response };
    } catch (e) {
        console.error("Error in getChatbotResponse:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        return { error: `Failed to get response. Details: ${errorMessage}` };
    }
}

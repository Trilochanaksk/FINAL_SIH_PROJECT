"use server";

import { generateMinistryOfAyushReport } from "@/ai/flows/generate-ministry-of-ayush-report";

export async function getAyushReport(
  startDate: Date,
  endDate: Date
): Promise<{ report: string } | { error: string }> {
  try {
    const start = startDate.toISOString().split("T")[0];
    const end = endDate.toISOString().split("T")[0];
    const result = await generateMinistryOfAyushReport({
      startDate: start,
      endDate: end,
    });
    return { report: result.report };
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate report. Please try again." };
  }
}

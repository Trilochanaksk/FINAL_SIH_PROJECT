import type { GenerateMinistryOfAyushReportOutput } from "@/ai/flows/generate-ministry-of-ayush-report";
import React from "react";

type MarkdownRendererProps = {
  content: string;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content || typeof content !== 'string') {
    return null;
  }
  const lines = content.split("\n");

  const renderLine = (line: string, index: number) => {
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl font-semibold mt-4 mb-2">
          {line.substring(4)}
        </h3>
      );
    }
    if (line.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 border-b pb-2">
          {line.substring(3)}
        </h2>
      );
    }
    if (line.startsWith("# ")) {
      return (
        <h1 key={index} className="text-3xl font-bold mt-8 mb-4 border-b pb-2">
          {line.substring(2)}
        </h1>
      );
    }
    if (line.startsWith("- ")) {
      // Check if previous and next lines are also list items to group them
      const isList =
        (lines[index - 1] && lines[index - 1].startsWith("- ")) ||
        (lines[index + 1] && lines[index + 1].startsWith("- "));
      if (isList && !(lines[index - 1] && lines[index - 1].startsWith("- "))) {
        // Start of a list
        let i = index;
        const listItems = [];
        while (lines[i] && lines[i].startsWith("- ")) {
          listItems.push(
            <li key={i} className="mb-1">
              {lines[i].substring(2)}
            </li>
          );
          i++;
        }
        return (
          <ul key={index} className="list-disc list-inside space-y-1 my-4 pl-4">
            {listItems}
          </ul>
        );
      }
      if (lines[index - 1] && lines[index - 1].startsWith("- ")) {
        return null; // Already rendered as part of a list
      }
      return (
        <ul key={index} className="list-disc list-inside space-y-1 my-4 pl-4">
          <li className="mb-1">{line.substring(2)}</li>
        </ul>
      );
    }
    if (line.trim() === "") {
      return null;
    }
    return (
      <p key={index} className="leading-relaxed my-2">
        {line}
      </p>
    );
  };

  return <div className="prose dark:prose-invert max-w-none">{lines.map(renderLine)}</div>;
};

export default MarkdownRenderer;

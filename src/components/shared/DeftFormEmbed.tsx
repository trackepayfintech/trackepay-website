"use client";

import { useEffect, useRef } from "react";

interface DeftFormEmbedProps {
  formId: string;
}

export default function DeftFormEmbed({ formId }: DeftFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the deftform div
    const formDiv = document.createElement("div");
    formDiv.className = "deftform";
    formDiv.setAttribute("data-form-id", formId);
    formDiv.setAttribute("data-form-width", "100%");
    formDiv.setAttribute("data-form-align", "center");
    formDiv.setAttribute("data-form-auto-height", "1");
    containerRef.current.appendChild(formDiv);

    // Load the script
    const script = document.createElement("script");
    script.src = "https://cdn.deftform.com/embed.js";
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [formId]);

  return <div ref={containerRef} className="min-h-[400px]" />;
}

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

export type Certification = {
  title: string;
  description: string;
  image: string;
};

export default function CertificationGallery({
  certs,
}: {
  certs: Certification[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i + 1) % certs.length
      ),
    [certs.length]
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + certs.length) % certs.length
      ),
    [certs.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, next, prev]);

  const top = certs.slice(0, 3);
  const rest = certs.slice(3);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {top.map((cert, i) => (
          <CertCard
            key={cert.title}
            cert={cert}
            onOpen={() => setOpenIndex(i)}
          />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {rest.map((cert, i) => (
            <div
              key={cert.title}
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <CertCard
                cert={cert}
                onOpen={() => setOpenIndex(top.length + i)}
              />
            </div>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={certs[openIndex].title}
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/85 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <X className="h-6 w-6" />
          </button>

          {certs.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous certificate"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/85 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                aria-label="Next certificate"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/85 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[78vh]">
              <Image
                src={certs[openIndex].image}
                alt={certs[openIndex].title}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-base sm:text-lg font-semibold">
                {certs[openIndex].title}
              </p>
              <p className="text-xs text-white/60 mt-1">
                {openIndex + 1} of {certs.length} · Esc to close · ← → to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CertCard({
  cert,
  onOpen,
}: {
  cert: Certification;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${cert.title}`}
      className="group bg-white rounded-2xl p-8 shadow-md border border-slate-200 text-left w-full hover:shadow-xl hover:-translate-y-2 transition cursor-zoom-in"
    >
      <div className="relative w-full h-72 bg-slate-50 rounded-xl flex items-center justify-center p-4 mb-6 overflow-hidden">
        <Image
          src={cert.image}
          alt={cert.title}
          width={600}
          height={500}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/85 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="h-3 w-3" />
          View
        </span>
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3 text-center">
        {cert.title}
      </h3>
      <p className="text-slate-600 text-sm text-center">{cert.description}</p>
    </button>
  );
}

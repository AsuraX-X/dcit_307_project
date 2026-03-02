"use client";

import { useRouter } from "next/navigation";

export default function PortfolioError() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
      <p className="text-muted text-sm tracking-widest uppercase">
        Could not load styles
      </p>
      <button
        onClick={() => router.refresh()}
        className="btn border border-primary text-primary hover:bg-primary hover:text-white"
      >
        Try Again
      </button>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";

type Status = "idle" | "copied" | "failed";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const textRef = useRef<HTMLSpanElement>(null);

  const selectFallback = () => {
    const node = textRef.current;
    if (!node) return;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
      selectFallback();
    }
    window.setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex items-center gap-3 rounded-md border border-line px-5 py-3 font-mono text-text transition-colors duration-150 hover:border-line-strong hover:bg-surface-1 focus-visible:border-line-strong focus-visible:bg-surface-1 active:scale-[0.98]"
      aria-live="polite"
    >
      <span ref={textRef}>{email}</span>
      <span className="text-text-muted">
        {status === "copied" && (
          <span className="flex items-center gap-1 text-accent">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Copied
          </span>
        )}
        {status === "failed" && <span className="text-text-muted">Select to copy</span>}
        {status === "idle" && <span className="transition-colors duration-150 group-hover:text-text">Copy</span>}
      </span>
    </button>
  );
}

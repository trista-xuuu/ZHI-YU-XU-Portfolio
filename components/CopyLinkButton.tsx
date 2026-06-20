"use client";

import { useState } from "react";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    const link = window.location.href;

    try {
      await navigator.clipboard.writeText(link);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = link;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      className="copy-link-icon"
      type="button"
      aria-label={copied ? "作品連結已複製" : "複製作品連結"}
      title={copied ? "Copied" : "Copy link"}
      onClick={copyLink}
    >
      {copied ? (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12.5L9.5 17L19 7.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9.5 14.5L14.5 9.5" />
          <path d="M7.5 17.5L5.5 19.5C3.57 21.43.57 18.43 2.5 16.5L6.5 12.5C8.43 10.57 11.57 10.57 13.5 12.5" />
          <path d="M16.5 6.5L18.5 4.5C20.43 2.57 23.43 5.57 21.5 7.5L17.5 11.5C15.57 13.43 12.43 13.43 10.5 11.5" />
        </svg>
      )}
    </button>
  );
}

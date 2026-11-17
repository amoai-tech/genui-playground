"use client";

import { useState } from "react";
import { Download, LoaderCircle } from "lucide-react";
import { toBlob } from "html-to-image";

/** Save just one generated A2UI surface, not the chat, code pane or browser viewport. */
export function DownloadScreenshot({
  getTarget,
  name,
}: {
  getTarget: () => HTMLElement | null;
  name: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const download = async () => {
    const target = getTarget();
    if (!target || busy) return;
    setBusy(true);
    setError("");
    try {
      await document.fonts.ready;
      const width = Math.ceil(Math.max(target.scrollWidth, target.getBoundingClientRect().width));
      const height = Math.ceil(Math.max(target.scrollHeight, target.getBoundingClientRect().height));
      if (!width || !height) throw new Error("The generated design is empty.");
      // Canvas implementations have size limits: never silently download a blank/truncated PNG.
      const scale = Math.min(2, 16000 / width, 16000 / height);
      if (scale < 0.5) throw new Error("This design is too large for one browser PNG. Export the JSON instead.");
      const blob = await toBlob(target, {
        width,
        height,
        pixelRatio: scale,
        skipAutoScale: true,
        backgroundColor: getComputedStyle(document.body).backgroundColor || "#ffffff",
        style: { overflow: "visible", maxHeight: "none", height: `${height}px` },
        filter: (element) => !("hasAttribute" in element && element.hasAttribute("data-link-box")),
      });
      if (!blob || blob.size === 0) throw new Error("Browser could not render this design as an image.");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${name.replace(/[^a-z0-9_-]/gi, "-").slice(0, 64) || "a2ui-surface"}-full.png`;
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 30_000);
    } catch (reason) {
      console.error("A2UI screenshot export failed", reason);
      setError("Could not export PNG. Try the JSON export; external images or large charts may restrict browser screenshots.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <span className="inline-flex min-w-0 items-center gap-2">
      <button
        type="button"
        data-download-full-screenshot
        onClick={() => void download()}
        disabled={busy}
        aria-label="Download Full Screenshot"
        className="inline-flex h-7 items-center gap-1.5 rounded-full border border-[var(--pg-line)] px-2.5 text-[12px] font-medium text-foreground hover:border-[var(--pg-line-strong)] disabled:opacity-50"
      >
        {busy ? <LoaderCircle className="size-3.5 animate-spin" /> : <Download className="size-3.5" />}
        <span className="max-[640px]:hidden">{busy ? "Capturing…" : "Download Full Screenshot"}</span>
        <span className="hidden max-[640px]:inline">{busy ? "…" : "PNG"}</span>
      </button>
      {error ? <span role="alert" className="max-w-[220px] text-xs text-red-600">{error}</span> : null}
    </span>
  );
}

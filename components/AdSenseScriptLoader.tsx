"use client";

import { useEffect } from "react";

const ADSENSE_SRC =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4817529592769049";

function injectAdSenseScript() {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${ADSENSE_SRC}"]`);
  if (existing) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = ADSENSE_SRC;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

export default function AdSenseScriptLoader() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    const idleCallbackSupported = "requestIdleCallback" in window;
    if (idleCallbackSupported) {
      const id = window.requestIdleCallback(() => injectAdSenseScript(), { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(() => injectAdSenseScript(), 2000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}

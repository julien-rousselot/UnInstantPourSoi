import { useEffect, useState } from "react";

export interface PriceEntry {
  key: string;
  amountCents: number;
  prefix: string | null;
  suffix: string | null;
}

const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;

const money = (cents: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "eur" }).format(cents / 100);

/**
 * Fetches every site price once and returns a key → formatted-string map.
 * `fallback` is shown immediately and while the fetch is in flight, so a
 * slow/failed request never leaves a blank price on the page — it just
 * keeps showing the value the page shipped with until the real one loads.
 */
export function usePrices() {
  const [prices, setPrices] = useState<Record<string, PriceEntry>>({});

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/api/prices`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: { prices: PriceEntry[] }) => {
        if (cancelled) return;
        const map: Record<string, PriceEntry> = {};
        for (const entry of data.prices) map[entry.key] = entry;
        setPrices(map);
      })
      .catch(() => {
        // Prices are a progressive enhancement here — the fallback text
        // already shown in the page is a perfectly valid price to display.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const formatPrice = (key: string, fallback: string) => {
    const entry = prices[key];
    if (!entry) return fallback;
    return `${entry.prefix ?? ""}${money(entry.amountCents)}${entry.suffix ?? ""}`;
  };

  return { formatPrice };
}

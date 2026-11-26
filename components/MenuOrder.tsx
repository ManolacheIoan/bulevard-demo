"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, menu, site, formatPrice, TBD, type CategoryId } from "@/content/site";

type Cart = Record<string, number>;

const norm = (s: string) => s.toLocaleLowerCase("ro-RO").normalize("NFD").replace(/[̀-ͯ]/g, "");

export default function MenuOrder() {
  const [cat, setCat] = useState<CategoryId | "toate">("toate");
  const [q, setQ] = useState("");
  const [cart, setCart] = useState<Cart>({});
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const visible = useMemo(() => {
    const nq = norm(q.trim());
    return menu.filter(
      (m) => (cat === "toate" || m.category === cat) && (!nq || norm(m.name + " " + m.description).includes(nq)),
    );
  }, [cat, q]);

  const lines = menu.filter((m) => cart[m.id]).map((m) => ({ item: m, qty: cart[m.id] }));
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const missingPrice = lines.some((l) => l.item.price == null);
  const total = lines.reduce((s, l) => s + (l.item.price ?? 0) * l.qty, 0);

  const change = (id: string, d: number) => {
    if (d > 0) setBump((b) => b + 1);
    setCart((c) => {
      const n = Math.max(0, (c[id] ?? 0) + d);
      const next = { ...c };
      if (n) next[id] = n;
      else delete next[id];
      return next;
    });
  };

  const message = [
    `Bună ziua! Aș dori să comand de la ${site.name}:`,
    ...lines.map((l) => `• ${l.qty} × ${l.item.name}${l.item.price != null ? ` (${formatPrice(l.item.price * l.qty)})` : ""}`),
    missingPrice ? "Total: de confirmat la telefon" : `Total: ${formatPrice(total)}`,
    "Nume: ",
    "Adresă de livrare (sau ridic din local): ",
  ].join("\n");

  return (
    <section id="meniu" aria-labelledby="meniu-titlu" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Meniu</p>
          <h2 id="meniu-titlu" className="h2">Ce poftești azi?</h2>
        </div>
        <p className="max-w-sm text-sm text-cream/75">
          Alege, adaugă în coș și trimite comanda în câteva secunde. Produsele marcate <span className="tbd">{TBD}</span> sunt exemple.
        </p>
      </div>

      <div className="sticky top-16 z-20 -mx-4 mt-6 border-b border-ember/70 bg-ink/95 px-4 py-3">
        <div className="relative">
          <label htmlFor="cauta" className="sr-only">Caută în meniu</label>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cream/50" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input
            id="cauta"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Caută: shaorma, pizza, cartofi…"
            className="w-full rounded-2xl border border-ember bg-coal py-3.5 pl-12 pr-4 text-base text-cream shadow-sm placeholder:text-cream/55 focus:border-flame focus:outline-none focus:ring-4 focus:ring-flame/10"
          />
        </div>
        <div role="group" aria-label="Filtrează după categorie" className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
          {[{ id: "toate" as const, label: "Toate", emoji: "✦" }, ...categories].map((c) => {
            const active = cat === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCat(c.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active ? "border-flame bg-flame text-white shadow-md shadow-flame/20" : "border-ember bg-coal text-cream hover:border-cream/30"
                }`}
              >
                <span aria-hidden="true" className="text-base leading-none">{c.emoji}</span>
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">{visible.length} produse afișate</p>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-cream/75">Niciun produs găsit pentru „{q}”.</p>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((m) => {
            const c = categories.find((x) => x.id === m.category)!;
            const qty = cart[m.id] ?? 0;
            return (
              <li key={m.id} className="card group flex gap-4 p-3 sm:flex-col sm:gap-0 sm:p-0">
                <div
                  className="tile relative flex aspect-square w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:aspect-[16/9] sm:w-full sm:rounded-b-none sm:rounded-t-[1.25rem]"
                  style={{ "--tone": c.tone } as React.CSSProperties}
                  role="img"
                  aria-label={`Fotografie ${m.name} ${TBD}`}
                >
                  <span className="text-5xl transition duration-300 group-hover:scale-110 sm:text-6xl" aria-hidden="true">{c.emoji}</span>
                  <span className="absolute bottom-2 right-2 hidden rounded-full bg-white/90 px-2 py-0.5 text-[0.65rem] font-semibold text-cream sm:block" aria-hidden="true">foto {TBD}</span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col py-1 sm:p-5 sm:pt-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-amber">{c.label}</span>
                    {m.example && <span className="tbd">{TBD}</span>}
                  </div>
                  <h3 className="mt-1 text-[1.05rem] font-bold leading-snug">{m.name}</h3>
                  <p className="mt-0.5 line-clamp-2 text-sm text-cream/70">{m.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                    <span className={m.price == null ? "text-sm font-semibold text-cream/65" : "text-lg font-extrabold"}>{formatPrice(m.price)}</span>
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => change(m.id, 1)}
                        className="flex items-center gap-1.5 rounded-full bg-amber px-4 py-2 text-sm font-bold text-white shadow-md shadow-amber/25 transition hover:bg-amber-dark active:scale-95"
                        aria-label={`Adaugă în coș: ${m.name}`}
                      >
                        <span aria-hidden="true" className="text-base leading-none">+</span> Adaugă
                      </button>
                    ) : (
                      <Stepper name={m.name} qty={qty} onChange={(d) => change(m.id, d)} />
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {count > 0 && (
        <button
          key={bump}
          type="button"
          onClick={() => setOpen(true)}
          className="pop fixed inset-x-3 bottom-[4.75rem] z-40 flex items-center justify-between rounded-2xl bg-cream px-5 py-3.5 text-left text-white shadow-2xl shadow-cream/30 md:inset-x-auto md:bottom-6 md:right-6 md:min-w-80"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-sm font-extrabold">{count}</span>
            <span className="font-bold">Vezi comanda</span>
          </span>
          <span className="text-sm font-semibold text-white/85">{missingPrice ? "total la confirmare" : formatPrice(total)} →</span>
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-cream/50 md:items-center" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cos-titlu"
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-[1.75rem] bg-coal p-6 shadow-2xl md:rounded-[1.75rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-ember md:hidden" aria-hidden="true" />
            <div className="flex items-center justify-between">
              <h2 id="cos-titlu" className="text-2xl font-extrabold">Comanda ta</h2>
              <button type="button" autoFocus onClick={() => setOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-bold" aria-label="Închide coșul">✕</button>
            </div>
            {lines.length === 0 ? (
              <p className="mt-6 text-cream/75">Coșul e gol.</p>
            ) : (
              <>
                <ul className="mt-4 divide-y divide-ember">
                  {lines.map((l) => (
                    <li key={l.item.id} className="flex items-center justify-between gap-3 py-3">
                      <div className="min-w-0">
                        <p className="truncate font-semibold">{l.item.name}</p>
                        <p className="text-sm text-cream/65">{l.item.price == null ? TBD : formatPrice(l.item.price * l.qty)}</p>
                      </div>
                      <Stepper name={l.item.name} qty={l.qty} onChange={(d) => change(l.item.id, d)} />
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-baseline justify-between rounded-2xl bg-ink px-4 py-3">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-extrabold">{missingPrice ? "de confirmat" : formatPrice(total)}</span>
                </div>
                {missingPrice && <p className="mt-2 text-xs text-cream/65">Unele prețuri sunt încă {TBD}; totalul se confirmă la telefon.</p>}
                <div className="mt-5 grid gap-2.5">
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#167a3e] px-5 py-4 text-lg font-extrabold text-white hover:bg-[#11632f]"
                  >
                    <WaIcon /> Trimite pe WhatsApp
                  </a>
                  <a href={`tel:${site.phoneE164}`} className="rounded-2xl border-2 border-cream px-5 py-3.5 text-center font-extrabold hover:bg-cream hover:text-white">
                    Sună și dictează comanda · {site.phoneDisplay}
                  </a>
                  <details className="rounded-2xl bg-ink px-4 py-3 text-sm">
                    <summary className="cursor-pointer font-semibold">Vezi textul comenzii</summary>
                    <pre className="mt-3 whitespace-pre-wrap font-sans text-cream/85">{message}</pre>
                  </details>
                  <p className="text-center text-xs text-cream/65">Fără cont, fără plată online — plătești la livrare sau în local.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function Stepper({ name, qty, onChange }: { name: string; qty: number; onChange: (d: number) => void }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-ember bg-coal p-1">
      <button type="button" onClick={() => onChange(-1)} className="h-8 w-8 rounded-full bg-ink text-lg font-bold" aria-label={`Scade cantitatea: ${name}`}>−</button>
      <span className="w-6 text-center text-sm font-bold" aria-live="polite">{qty}</span>
      <button type="button" onClick={() => onChange(1)} className="h-8 w-8 rounded-full bg-amber text-lg font-bold text-white" aria-label={`Crește cantitatea: ${name}`}>+</button>
    </div>
  );
}

export function WaIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

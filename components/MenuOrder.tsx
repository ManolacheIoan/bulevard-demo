"use client";

import { useMemo, useState } from "react";
import { categories, menu, site, formatPrice, TBD, type CategoryId } from "@/content/site";

type Cart = Record<string, number>;

const norm = (s: string) => s.toLocaleLowerCase("ro-RO").normalize("NFD").replace(/[̀-ͯ]/g, "");

export default function MenuOrder() {
  const [cat, setCat] = useState<CategoryId | "toate">("toate");
  const [q, setQ] = useState("");
  const [cart, setCart] = useState<Cart>({});
  const [open, setOpen] = useState(false);

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

  const change = (id: string, d: number) =>
    setCart((c) => {
      const n = Math.max(0, (c[id] ?? 0) + d);
      const next = { ...c };
      if (n) next[id] = n;
      else delete next[id];
      return next;
    });

  const message = [
    `Bună ziua! Aș dori să comand de la ${site.name}:`,
    ...lines.map((l) => `• ${l.qty} × ${l.item.name}${l.item.price != null ? ` (${formatPrice(l.item.price * l.qty)})` : ""}`),
    missingPrice ? "Total: de confirmat la telefon" : `Total: ${formatPrice(total)}`,
    "Nume: ",
    "Adresă de livrare (sau ridic din local): ",
  ].join("\n");

  return (
    <section id="meniu" aria-labelledby="meniu-titlu" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold uppercase tracking-widest text-amber">Meniu</p>
          <h2 id="meniu-titlu" className="text-3xl font-extrabold md:text-5xl">Ce poftești azi?</h2>
        </div>
        <p className="max-w-md text-sm text-cream/80">
          Produsele și prețurile de mai jos sunt <strong>exemple marcate {TBD}</strong>, până la confirmarea meniului real.
        </p>
      </div>

      <div className="sticky top-0 z-20 -mx-4 mt-6 bg-ink/95 px-4 py-3 backdrop-blur">
        <label htmlFor="cauta" className="sr-only">Caută în meniu</label>
        <input
          id="cauta"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută: shaorma, pizza, cartofi…"
          className="w-full rounded-xl border-2 border-ember bg-coal px-4 py-3 text-base text-cream placeholder:text-cream/60 focus:border-amber focus:outline-none"
        />
        <div role="group" aria-label="Filtrează după categorie" className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {[{ id: "toate" as const, label: "Toate", emoji: "⭐" }, ...categories].map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                cat === c.id ? "bg-amber text-ink" : "bg-coal text-cream hover:bg-ember"
              }`}
            >
              <span aria-hidden="true">{c.emoji}</span> {c.label}
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">{visible.length} produse afișate</p>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-cream/80">Niciun produs găsit pentru „{q}”.</p>
      ) : (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((m) => {
            const c = categories.find((x) => x.id === m.category)!;
            const qty = cart[m.id] ?? 0;
            return (
              <li key={m.id} className="flex flex-col overflow-hidden rounded-2xl bg-coal shadow-lg shadow-black/30">
                <div className="photo relative flex aspect-[16/10] items-center justify-center" role="img" aria-label={`Fotografie ${TBD}`}>
                  <span className="text-7xl drop-shadow-lg" aria-hidden="true">{c.emoji}</span>
                  <span className="absolute bottom-2 left-2 rounded bg-ink/80 px-2 py-0.5 text-xs" aria-hidden="true">Foto {TBD}</span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber">{c.label}</p>
                  <h3 className="text-lg font-bold leading-snug">{m.name}</h3>
                  <p className="text-sm text-cream/80">{m.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="font-extrabold text-amber">{formatPrice(m.price)}</span>
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => change(m.id, 1)}
                        className="rounded-full bg-flame px-5 py-2.5 font-bold text-white hover:bg-flame-dark"
                        aria-label={`Adaugă în coș: ${m.name}`}
                      >
                        Adaugă
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
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full bg-amber px-5 py-3 font-extrabold text-ink shadow-xl md:bottom-6"
        >
          🛒 Coșul meu <span className="rounded-full bg-ink px-2 text-sm text-amber">{count}</span>
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 md:items-center" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cos-titlu"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-coal p-6 md:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          >
            <div className="flex items-center justify-between">
              <h2 id="cos-titlu" className="text-2xl font-extrabold">Comanda ta</h2>
              <button type="button" autoFocus onClick={() => setOpen(false)} className="rounded-full bg-ember px-3 py-1 font-bold" aria-label="Închide coșul">✕</button>
            </div>
            {lines.length === 0 ? (
              <p className="mt-6 text-cream/80">Coșul e gol.</p>
            ) : (
              <>
                <ul className="mt-4 divide-y divide-ember">
                  {lines.map((l) => (
                    <li key={l.item.id} className="flex items-center justify-between gap-3 py-3">
                      <div>
                        <p className="font-semibold">{l.item.name}</p>
                        <p className="text-sm text-amber">{l.item.price == null ? TBD : formatPrice(l.item.price * l.qty)}</p>
                      </div>
                      <Stepper name={l.item.name} qty={l.qty} onChange={(d) => change(l.item.id, d)} />
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex justify-between text-lg font-extrabold">
                  <span>Total</span>
                  <span className="text-amber">{missingPrice ? "de confirmat" : formatPrice(total)}</span>
                </p>
                {missingPrice && <p className="mt-1 text-xs text-cream/70">Unele prețuri sunt încă {TBD}; totalul se confirmă la telefon.</p>}
                <div className="mt-6 grid gap-3">
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#1f7a43] px-5 py-4 text-center text-lg font-extrabold text-white hover:bg-[#186336]"
                  >
                    Trimite comanda pe WhatsApp
                  </a>
                  <a href={`tel:${site.phoneE164}`} className="rounded-xl bg-flame px-5 py-4 text-center text-lg font-extrabold text-white hover:bg-flame-dark">
                    Sună și citește comanda · {site.phoneDisplay}
                  </a>
                  <details className="rounded-xl bg-ink p-4 text-sm">
                    <summary className="cursor-pointer font-semibold">Vezi textul comenzii</summary>
                    <pre className="mt-3 whitespace-pre-wrap font-sans text-cream/90">{message}</pre>
                  </details>
                  <p className="text-center text-xs text-cream/70">Fără plată online — plătești la livrare sau în local.</p>
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
    <div className="flex items-center gap-1 rounded-full bg-ink p-1">
      <button type="button" onClick={() => onChange(-1)} className="h-9 w-9 rounded-full bg-ember text-lg font-bold" aria-label={`Scade cantitatea: ${name}`}>−</button>
      <span className="w-7 text-center font-bold" aria-live="polite">{qty}</span>
      <button type="button" onClick={() => onChange(1)} className="h-9 w-9 rounded-full bg-flame text-lg font-bold text-white" aria-label={`Crește cantitatea: ${name}`}>+</button>
    </div>
  );
}

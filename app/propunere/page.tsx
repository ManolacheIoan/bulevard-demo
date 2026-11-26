import type { Metadata } from "next";
import { site, proposal, formatPrice, TBD } from "@/content/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: `Propunere site — ${site.name}`,
  robots: { index: false, follow: false },
};

const wins = [
  ["Mai multe comenzi, fără telefon ocupat", "Clientul își face singur coșul și trimite comanda scrisă pe WhatsApp — fără greșeli la notat, fără „mai repetați o dată”."],
  ["Vă găsesc mai ușor cei care caută „fast food Tecuci”", "Site rapid, cu date structurate pentru Google (adresă, telefon, tip local) — exact ce caută Google pentru rezultatele locale."],
  ["Vă folosiți reputația deja câștigată", `Nota ${site.google.rating} din ${site.google.reviewsLabel} și cei ${site.facebook.followers} urmăritori devin argumente vizibile din prima secundă.`],
  ["Meniul se schimbă în 2 minute", "Prețuri, produse, oferta zilei — totul dintr-un singur loc, fără programator pentru fiecare modificare."],
];

const stats = [
  ["100", "Viteză pe mobil (Google Lighthouse)"],
  ["100", "Accesibilitate"],
  ["0 lei", "Comision pe comenzi"],
  ["24/7", "Meniul disponibil online"],
];

export default function Propunere() {
  return (
    <main className="min-h-screen">
      <header className="mosaic text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-sm font-semibold tracking-wide text-white/85">Manotek · propunere</span>
          <a href={`${base}/`} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20">← Vezi site-ul demo</a>
        </div>
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-6">
          <p className="eyebrow !text-peach">Pentru {site.name}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            Un site care transformă vizitatorii în comenzi.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Demo-ul e construit pe identitatea localului vostru — albastrul fațadei, teracota firmei, scaunele colorate din sală. Mai lipsesc doar meniul real, prețurile și câteva poze.
          </p>
        </div>
        <div className="chairs" aria-hidden="true" />
      </header>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <li key={l} className="card p-5 text-center hover:translate-y-0">
              <span className="block text-3xl font-extrabold text-flame">{n}</span>
              <span className="mt-1 block text-xs font-medium text-cream/70">{l}</span>
            </li>
          ))}
        </ul>

        <h2 className="h2 mt-12">Ce câștigați</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {wins.map(([t, d], i) => (
            <li key={t} className="card flex gap-4 p-6 hover:translate-y-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber font-extrabold text-white">{i + 1}</span>
              <span>
                <h3 className="font-bold">{t}</h3>
                <p className="mt-1 text-sm text-cream/75">{d}</p>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-coal py-12">
        <div className="mx-auto max-w-5xl px-4">
          <p className="eyebrow">Pachete</p>
          <h2 className="h2">Alegeți cât de mult vreți să ne ocupăm noi</h2>
          <ul className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
            {proposal.packages.map((p) => (
              <li
                key={p.name}
                className={`relative flex flex-col rounded-[1.5rem] p-6 ${p.recommended ? "mosaic text-white shadow-2xl shadow-flame/30 md:-my-3 md:py-9" : "border border-ember bg-ink"}`}
              >
                {p.recommended && <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Recomandat</span>}
                <h3 className="text-lg font-extrabold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.recommended ? "text-white/80" : "text-cream/70"}`}>{p.tagline}</p>
                <p className={`mt-5 text-3xl font-extrabold ${p.recommended ? "text-peach" : ""}`}>{formatPrice(p.price)}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><span aria-hidden="true" className={p.recommended ? "text-peach" : "text-amber"}>✓</span>{f}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6 hover:translate-y-0">
            <h2 className="text-xl font-extrabold">Ce ne trebuie de la voi</h2>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {["Meniul complet cu prețuri", "Programul și condițiile de livrare", "Confirmarea numărului de WhatsApp", "Câteva poze cu produsele (sau le facem noi)", "Link-ul paginii de Facebook"].map((x) => (
                <li key={x} className="flex gap-2"><span aria-hidden="true" className="text-amber">•</span>{x}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6 hover:translate-y-0">
            <h2 className="text-xl font-extrabold">Cum continuăm</h2>
            <ol className="mt-4 space-y-3 text-sm text-cream/80">
              {["Alegeți pachetul", "Ne trimiteți meniul și pozele", "Lansăm site-ul pe domeniul vostru", `Termen de livrare ${TBD}`].map((x, i) => (
                <li key={x} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame text-xs font-bold text-white">{i + 1}</span>{x}</li>
              ))}
            </ol>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-cream/70">Demo realizat de Manotek. Datele publice (adresă, telefon, notă Google) sunt reale; meniul și prețurile sunt exemple.</p>
      </section>
    </main>
  );
}

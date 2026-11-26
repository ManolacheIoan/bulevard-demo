import type { Metadata } from "next";
import { ArrowLeft, Check, Gauge, MessageCircle, PencilLine, Search, Star } from "lucide-react";
import Logo from "@/components/Logo";
import { site, proposal, formatPrice, TBD } from "@/content/site";
import { base } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Propunere site",
  description: `Propunerea Manotek pentru site-ul ${site.name}: comenzi online prin formular și WhatsApp, meniu editabil, SEO local.`,
  robots: { index: false, follow: false },
};

const wins = [
  [MessageCircle, "Comenzi fără telefon ocupat", "Clientul își face singur coșul și trimite comanda scrisă — fără greșeli la notat, fără „mai repetați o dată”."],
  [Search, "Mai ușor de găsit pe Google", "Site rapid, cu date structurate (adresă, telefon, tip de local), exact ce folosește Google pentru rezultatele locale."],
  [Star, "Reputația voastră, pusă în față", `Nota ${site.google.rating} din ${site.google.reviewsLabel} și cei ${site.facebook.followers} urmăritori devin argumente din prima secundă.`],
  [PencilLine, "Meniul se schimbă în două minute", "Prețuri, produse, oferta zilei — totul dintr-un singur fișier, fără programator pentru fiecare modificare."],
] as const;

const stats = [
  ["90+", "Scor Google Lighthouse pe mobil"],
  ["0 lei", "Comision pe comenzi"],
  ["24/7", "Meniu disponibil online"],
  ["3 pași", "De la meniu la comandă"],
];

export default function Propunere() {
  return (
    <main>
      <header className="mosaic on-dark text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
          <Logo />
          <a href={`${base}/`} className="btn btn-outline-light !px-4 !py-2.5 text-sm"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Vezi site-ul</a>
        </div>
        <div className="mx-auto max-w-5xl px-4 pb-14 pt-8 sm:px-6">
          <p className="eyebrow">Propunere Manotek pentru {site.name}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">Un site care transformă vizitatorii în comenzi.</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Demo-ul pornește de la identitatea localului — albastrul fațadei, teracota firmei, scaunele colorate din sală. Mai lipsesc meniul real, prețurile și pozele voastre.
          </p>
        </div>
        <div className="chairs" aria-hidden="true" />
      </header>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <li key={l} className="card card-static p-5 text-center">
              <span className="block font-display text-3xl font-bold text-navy">{n}</span>
              <span className="mt-1 block text-xs text-ink-soft">{l}</span>
            </li>
          ))}
        </ul>

        <h2 className="h2 mt-14">Ce câștigați</h2>
        <ul className="mt-7 grid gap-4 md:grid-cols-2">
          {wins.map(([Icon, t, d]) => (
            <li key={t} className="card card-static flex gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber/10 text-amber"><Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} /></span>
              <span>
                <h3 className="font-display font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{d}</p>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="eyebrow">Pachete</p>
          <h2 className="h2">Alegeți cât de mult vreți să ne ocupăm noi</h2>
          <ul className="mt-10 grid items-stretch gap-4 md:grid-cols-3">
            {proposal.packages.map((p) => (
              <li key={p.name} className={`relative flex flex-col rounded-[1.5rem] p-7 ${p.recommended ? "mosaic on-dark text-white shadow-2xl shadow-night/30 md:-my-4 md:py-11" : "border border-line bg-cream"}`}>
                {p.recommended && <span className="absolute -top-3 left-7 rounded-full bg-amber px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white">Recomandat</span>}
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.recommended ? "text-white/75" : "text-ink-soft"}`}>{p.tagline}</p>
                <p className="mt-6">{p.price == null ? <span className="tbd">{TBD}</span> : <span className="font-display text-3xl font-bold">{formatPrice(p.price)}</span>}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5"><Check aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${p.recommended ? "text-peach" : "text-amber"}`} />{f}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card card-static p-7">
            <h2 className="font-display text-xl font-bold">Ce ne trebuie de la voi</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              {["Meniul complet, cu prețuri", "Programul și condițiile de livrare", "Confirmarea numărului de WhatsApp", "Poze cu localul și produsele", "Linkul paginii de Facebook"].map((x) => (
                <li key={x} className="flex gap-2.5"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-amber" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="card card-static p-7">
            <h2 className="font-display text-xl font-bold">Cum continuăm</h2>
            <ol className="mt-4 space-y-3 text-sm text-ink-soft">
              {["Alegeți pachetul", "Ne trimiteți meniul și pozele", "Lansăm site-ul pe domeniul vostru"].map((x, i) => (
                <li key={x} className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-night text-xs font-bold text-white">{i + 1}</span>{x}</li>
              ))}
              <li className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-night text-white"><Gauge aria-hidden="true" className="h-3.5 w-3.5" /></span>Termen de livrare: <span className="tbd">{proposal.deliveryTime}</span></li>
            </ol>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">{site.demo.text}. Datele publice (adresă, telefon, nota Google) sunt reale; meniul, prețurile și pozele sunt exemple.</p>
      </section>
    </main>
  );
}

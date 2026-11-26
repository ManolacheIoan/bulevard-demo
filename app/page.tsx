import MenuOrder, { WaIcon } from "@/components/MenuOrder";
import { site, formatPrice, TBD } from "@/content/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-2xl bg-amber px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-amber/30 transition hover:-translate-y-0.5 hover:bg-amber-dark sm:text-lg";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-2xl border border-cream/15 bg-coal px-6 py-4 text-base font-extrabold text-cream shadow-sm transition hover:-translate-y-0.5 hover:border-cream/40 sm:text-lg";

const Phone = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
  </svg>
);
const Star = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor"><path d="m10 1.5 2.6 5.5 6 .7-4.4 4.1 1.1 5.9L10 14.8l-5.3 2.9 1.1-5.9L1.4 7.7l6-.7L10 1.5Z" /></svg>
);

export default function Home() {
  const { offer, delivery } = site;
  const tel = `tel:${site.phoneE164}`;

  return (
    <>
      <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:text-white">
        Sari la conținut
      </a>

      {site.demo.enabled && (
        <div className="bg-cream px-4 py-1.5 text-center text-xs font-medium text-white/85">
          {site.demo.text} · <a href={`${base}/propunere/`} className="font-semibold text-peach underline-offset-2 hover:underline">vezi propunerea</a>
        </div>
      )}

      <header className="mosaic sticky top-0 z-30 text-white shadow-lg shadow-flame/20">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#" className="flex flex-col leading-none" aria-label="Fast Food Bulevard — început">
            <span className="sign text-[1.35rem] font-bold text-peach">BULEVARD</span>
            <span className="mt-1 rounded-[3px] bg-amber px-1.5 py-[3px] text-[0.58rem] font-semibold tracking-[0.22em] text-white">FOOD SHOP &amp; BISTRO</span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-7 text-sm font-medium text-white/90 md:flex [&_a:hover]:text-peach">
            <a href="#meniu">Meniu</a>
            <a href="#oferta">Oferta zilei</a>
            <a href="#livrare">Livrare</a>
            <a href="#local">Localul</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={tel} className="flex items-center gap-2 rounded-full bg-amber px-4 py-2 text-sm font-bold text-white shadow-md shadow-black/20 transition hover:bg-amber-dark">
            <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{site.phoneDisplay}</span><span className="sm:hidden">Sună</span>
          </a>
        </div>
        <div className="chairs" aria-hidden="true" />
      </header>

      <main id="continut">
        {/* HERO */}
        <section className="grain relative">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-8 md:grid-cols-[1.1fr_1fr] md:gap-12 md:pb-16 md:pt-14">
            <div className="rise">
              <p className="eyebrow">{site.address.street} · {site.city}</p>
              <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
                Fast food pe <span className="text-amber">Bulevardul</span> <span className="text-flame">Victoriei</span>
              </h1>
              <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-cream/75 sm:text-lg">
                Shaorma, burgeri, pizza și cartofi, pregătite pe loc, în centrul Tecuciului. Comanzi în câteva secunde — la telefon sau pe WhatsApp.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={tel} className={btnPrimary}><Phone /> Comandă la telefon</a>
                <a href="#meniu" className={btnGhost}>Vezi meniul <span aria-hidden="true">→</span></a>
              </div>

              <dl className="mt-8 grid max-w-lg grid-cols-3 divide-x divide-ember rounded-2xl border border-ember bg-coal/80 py-3 shadow-sm">
                <div className="px-3 text-center sm:px-4">
                  <dt className="sr-only">Nota pe Google</dt>
                  <dd className="flex items-center justify-center gap-1 text-xl font-extrabold sm:text-2xl">{site.google.rating}<span className="text-chair-yellow"><Star /></span></dd>
                  <dd className="text-[0.7rem] font-medium text-cream/65 sm:text-xs">nota pe Google</dd>
                </div>
                <div className="px-3 text-center sm:px-4">
                  <dt className="sr-only">Recenzii</dt>
                  <dd className="text-xl font-extrabold sm:text-2xl">720+</dd>
                  <dd className="text-[0.7rem] font-medium text-cream/65 sm:text-xs">recenzii Google</dd>
                </div>
                <div className="px-3 text-center sm:px-4">
                  <dt className="sr-only">Urmăritori Facebook</dt>
                  <dd className="text-xl font-extrabold sm:text-2xl">{site.facebook.followers}</dd>
                  <dd className="text-[0.7rem] font-medium text-cream/65 sm:text-xs">pe Facebook</dd>
                </div>
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="absolute -inset-3 -z-0 rotate-2 rounded-[2.25rem] bg-flame/10" aria-hidden="true" />
              <img
                src={`${base}/img/fatada.jpg`}
                alt="Fațada localului Bulevard Food Shop & Bistro, pe Bd. Victoriei din Tecuci"
                width={449}
                height={445}
                fetchPriority="high"
                className="relative aspect-[4/4.2] w-full rounded-[2rem] object-cover shadow-2xl shadow-flame/25"
              />
              <a href={site.google.url} target="_blank" rel="noopener noreferrer" className="absolute -right-2 top-6 flex items-center gap-3 rounded-2xl bg-coal px-4 py-3 shadow-xl transition hover:-translate-y-0.5 sm:-right-5">
                <span className="text-3xl font-extrabold leading-none">{site.google.rating}</span>
                <span className="leading-tight">
                  <span className="flex text-chair-yellow" aria-hidden="true"><Star /><Star /><Star /><Star /><span className="opacity-30"><Star /></span></span>
                  <span className="text-xs font-medium text-cream/70">{site.google.reviewsLabel}</span>
                </span>
              </a>
              <div className="absolute -bottom-4 left-4 rounded-2xl bg-cream px-4 py-3 text-white shadow-xl sm:-left-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-peach">Food shop · Bistro · Cofetărie</p>
                <p className="text-sm font-bold">Chiar pe bulevard, în centru</p>
              </div>
            </div>
          </div>
        </section>

        {/* AVANTAJE */}
        <section aria-label="De ce să comanzi de la noi" className="border-y border-ember bg-coal">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-ember md:grid-cols-4">
            {[
              ["⚡", "Comanzi în secunde", "Coș pe site, trimis pe WhatsApp"],
              ["💵", "Plătești la final", "La livrare sau în local"],
              ["📱", "Fără cont, fără aplicație", "Doar telefonul tău"],
              ["📍", "În centrul Tecuciului", site.address.street],
            ].map(([i, t, d]) => (
              <li key={t} className="flex items-center gap-3 bg-coal px-4 py-4 md:py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-lg" aria-hidden="true">{i}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold leading-tight">{t}</span>
                  <span className="block truncate text-xs text-cream/65">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* OFERTA ZILEI */}
        {offer.enabled && (
          <section id="oferta" aria-labelledby="oferta-titlu" className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
            <div className="mosaic relative grid items-center overflow-hidden rounded-[1.75rem] text-white shadow-xl shadow-flame/25 md:grid-cols-[1fr_auto]">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-amber" aria-hidden="true" />
              <div className="p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-amber px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]">{offer.label}</span>
                  <span className="text-xs font-medium text-white/75">valabilitate {TBD}</span>
                </div>
                <h2 id="oferta-titlu" className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight md:text-[2.1rem]">{offer.title}</h2>
                <p className="mt-2 max-w-xl text-white/80">{offer.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <span className="text-3xl font-extrabold text-peach">{formatPrice(offer.price)}</span>
                  {offer.oldPrice != null && <s className="text-white/60">{formatPrice(offer.oldPrice)}</s>}
                  <a href={tel} className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-extrabold text-cream transition hover:-translate-y-0.5">
                    <Phone className="h-4 w-4" /> Comandă oferta
                  </a>
                </div>
              </div>
              <div className="relative hidden h-full items-center justify-center px-14 md:flex" aria-hidden="true">
                <div className="absolute h-56 w-56 rounded-full bg-amber/25" />
                <span className="relative text-[8.5rem]">{offer.emoji}</span>
              </div>
            </div>
          </section>
        )}

        <MenuOrder />

        {/* CUM COMANZI */}
        <section aria-labelledby="pasi-titlu" className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
          <div className="rounded-[1.75rem] border border-ember bg-coal p-6 md:p-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Simplu</p>
                <h2 id="pasi-titlu" className="h2">Comanda ta, în 3 pași</h2>
              </div>
              <a href="#meniu" className="text-sm font-bold text-amber hover:underline">Începe cu meniul →</a>
            </div>
            <ol className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                ["Alegi din meniu", "Filtrezi pe categorii sau cauți direct ce ai poftă."],
                ["Trimiți comanda", "Pe WhatsApp, cu mesajul gata scris, sau o citești la telefon."],
                ["Mănânci cald", "Ridici din local sau primești acasă și plătești la final."],
              ].map(([t, d], i) => (
                <li key={t} className="relative rounded-2xl bg-ink p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flame text-sm font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-3 font-bold">{t}</h3>
                  <p className="mt-1 text-sm text-cream/70">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* LOCALUL */}
        <section id="local" aria-labelledby="local-titlu" className="bg-coal py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Localul</p>
                <h2 id="local-titlu" className="h2">Stai la masă sau iei la pachet</h2>
              </div>
              <p className="max-w-md text-sm text-cream/70">Sală luminoasă, scaune colorate, vitrină cu preparate și cofetărie — la parterul clădirii albastre de pe bulevard.</p>
            </div>
            <div className="mt-7 grid gap-3 md:h-[26rem] md:grid-cols-[1.5fr_1fr] md:grid-rows-2">
              <figure className="relative overflow-hidden rounded-[1.5rem] md:row-span-2">
                <img src={`${base}/img/interior.jpg`} alt="Interiorul localului: mese, vitrina cu preparate și raftul cu produse" width={516} height={387} loading="lazy" className="h-full w-full object-cover" />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-cream">Vitrină și cofetărie</figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-[1.5rem] md:row-span-2">
                <img src={`${base}/img/sala.jpg`} alt="Sala de mese cu scaune roșii, verzi, galbene și portocalii" width={500} height={958} loading="lazy" className="aspect-[4/3] h-full w-full object-cover md:aspect-auto" />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-cream">Sala de mese</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* LIVRARE + PROGRAM */}
        <section id="livrare" aria-labelledby="livrare-titlu" className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-[1.3fr_1fr] md:py-16">
          <div className="card p-6 hover:translate-y-0 md:p-8">
            <p className="eyebrow">Livrare</p>
            <h2 id="livrare-titlu" className="h2">Cald, la ușa ta</h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                ["Zonă", delivery.zone],
                ["Comandă minimă", delivery.minOrder],
                ["Taxă", delivery.fee],
                ["Timp estimat", delivery.time],
              ].map(([k, v]) => (
                <li key={k} className="rounded-xl bg-ink px-4 py-3">
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cream/60">{k}</span>
                  <span className="text-sm font-medium">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-sm text-cream/75"><span aria-hidden="true">💵</span> {delivery.payment}</p>
          </div>
          <div className="mosaic rounded-[1.25rem] p-6 text-white md:p-8">
            <p className="eyebrow !text-peach">Program</p>
            <h2 className="h2">Când ne găsești</h2>
            <dl className="mt-6 divide-y divide-white/15">
              {site.hours.map((h) => (
                <div key={h.days} className="flex items-center justify-between py-3">
                  <dt className="font-semibold">{h.days}</dt>
                  <dd className="text-sm text-white/80">{h.time}</dd>
                </div>
              ))}
            </dl>
            <a href={tel} className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-amber px-5 py-3.5 font-extrabold transition hover:bg-amber-dark">
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
          </div>
        </section>

        {/* RECENZII */}
        <section aria-labelledby="recenzii-titlu" className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
          <div className="grid items-center gap-6 rounded-[1.75rem] border border-ember bg-coal p-6 md:grid-cols-[auto_1fr_auto] md:gap-10 md:p-10">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-extrabold tracking-tight md:text-7xl">{site.google.rating}</span>
              <span>
                <span className="flex text-chair-yellow" aria-hidden="true"><Star /><Star /><Star /><Star /><span className="opacity-30"><Star /></span></span>
                <span className="mt-1 block text-sm font-semibold">din 5 pe Google</span>
              </span>
            </div>
            <div>
              <p className="eyebrow">Recenzii</p>
              <h2 id="recenzii-titlu" className="mt-1 text-xl font-extrabold md:text-2xl">Peste 720 de clienți și-au spus părerea</h2>
              <p className="mt-1 text-sm text-cream/70">Citește-le direct pe Google sau urmărește-ne pe Facebook, alături de {site.facebook.followers} de oameni.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
              <a href={site.google.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-cream px-5 py-3 text-center text-sm font-bold text-white hover:bg-flame">Vezi recenziile pe Google</a>
              <a href={site.facebook.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-ember px-5 py-3 text-center text-sm font-bold hover:border-cream/40">Facebook</a>
            </div>
          </div>
        </section>

        {/* CTA FINAL + CONTACT */}
        <section id="contact" aria-labelledby="contact-titlu" className="mosaic text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
            <div>
              <p className="eyebrow !text-peach">Ți-e foame?</p>
              <h2 id="contact-titlu" className="h2">Sună acum. Te așteptăm pe bulevard.</h2>
              <address className="mt-6 space-y-3 not-italic">
                <a href={tel} className="flex items-center gap-3 text-3xl font-extrabold tracking-tight text-peach hover:underline md:text-4xl">
                  <Phone className="h-7 w-7" /> {site.phoneDisplay}
                </a>
                <p className="text-white/85">{site.address.street}, {site.city}, jud. {site.address.region}</p>
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#167a3e] px-5 py-3.5 font-extrabold hover:bg-[#11632f]">
                  <WaIcon /> Scrie pe WhatsApp
                </a>
                <a href={site.google.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-5 py-3.5 font-extrabold hover:bg-white/10">
                  Deschide în Google Maps
                </a>
              </div>
            </div>
            <iframe
              title={`Hartă: ${site.name}, ${site.address.street}, ${site.city}`}
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full rounded-[1.5rem] border-4 border-white/10 md:h-80"
            />
          </div>
          <div className="chairs" aria-hidden="true" />
        </section>
      </main>

      <footer className="bg-cream px-4 pb-28 pt-8 text-white/75 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <span className="sign font-bold text-peach">BULEVARD</span>
            <span>© {new Date().getFullYear()} {site.name} · {site.address.street}, {site.city}</span>
          </div>
          {site.demo.enabled && <a href={`${base}/propunere/`} className="text-white/75 hover:text-peach">{site.demo.text}</a>}
        </div>
      </footer>

      {/* Bară fixă pe mobil */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-ember bg-coal/95 p-2.5 shadow-[0_-8px_24px_-12px_rgb(30_42_56/.25)] md:hidden">
        <a href={tel} className="flex items-center justify-center gap-2 rounded-xl bg-flame py-3.5 font-extrabold text-white"><Phone className="h-4 w-4" /> Sună</a>
        <a href="#meniu" className="flex items-center justify-center gap-2 rounded-xl bg-amber py-3.5 font-extrabold text-white">Comandă</a>
      </div>
    </>
  );
}

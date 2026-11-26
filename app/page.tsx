import MenuOrder from "@/components/MenuOrder";
import { site, formatPrice } from "@/content/site";

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-2xl bg-flame px-7 py-4 text-lg font-extrabold text-white shadow-lg shadow-flame/30 hover:bg-flame-dark";
const btnSecondary = "inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-amber px-7 py-4 text-lg font-extrabold text-amber hover:bg-amber hover:text-ink";

export default function Home() {
  const { offer, delivery } = site;
  return (
    <>
      <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:text-ink">
        Sari la conținut
      </a>

      {site.demo.enabled && (
        <div className="bg-amber px-4 py-2 text-center text-sm font-semibold text-ink">{site.demo.text}</div>
      )}

      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          <span aria-hidden="true">🍔 </span>Fast Food <span className="text-amber">Bulevard</span>
        </a>
        <nav aria-label="Principal" className="hidden gap-6 text-sm font-semibold md:flex">
          <a href="#meniu" className="hover:text-amber">Meniu</a>
          <a href="#oferta" className="hover:text-amber">Oferta zilei</a>
          <a href="#livrare" className="hover:text-amber">Livrare</a>
          <a href="#contact" className="hover:text-amber">Contact</a>
        </nav>
        <a href={`tel:${site.phoneE164}`} className="hidden rounded-full bg-flame px-4 py-2 text-sm font-bold text-white hover:bg-flame-dark md:inline-block">
          {site.phoneDisplay}
        </a>
      </header>

      <main id="continut">
        {/* HERO */}
        <section className="hero relative overflow-hidden">
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:grid-cols-[1.2fr_1fr] md:pt-16">
            <div>
              <p className="inline-block rounded-full bg-coal px-4 py-1.5 text-sm font-semibold text-amber">
                {site.address.street}, {site.city}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                Fast food pe <span className="text-amber">Bulevardul</span> <span className="text-flame-light">Victoriei</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-cream/85">{site.hero.subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${site.phoneE164}`} className={btnPrimary}>📞 Comandă la telefon</a>
                <a href="#meniu" className={btnSecondary}>Vezi meniul</a>
              </div>
              <a href={site.google.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-cream/85 hover:text-amber">
                <span className="text-amber" aria-hidden="true">★★★★☆</span>
                <strong className="text-cream">{site.google.rating}</strong> pe Google, din {site.google.reviewsLabel}
              </a>
            </div>
            <div className="photo relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-[2.5rem] shadow-2xl shadow-flame/30" role="img" aria-label="Fotografie produse [de completat]">
              <span className="text-[9rem]" aria-hidden="true">🍔</span>
              <span className="absolute bottom-4 left-4 rounded bg-ink/80 px-2 py-1 text-xs" aria-hidden="true">Foto [de completat]</span>
            </div>
          </div>
        </section>

        {/* OFERTA ZILEI */}
        {offer.enabled && (
          <section id="oferta" aria-labelledby="oferta-titlu" className="mx-auto max-w-6xl px-4">
            <div className="grid overflow-hidden rounded-3xl bg-gradient-to-br from-flame to-flame-dark md:grid-cols-[1fr_auto]">
              <div className="p-8 md:p-10">
                <p className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber">{offer.label}</p>
                <h2 id="oferta-titlu" className="mt-4 text-2xl font-extrabold text-white md:text-4xl">{offer.title}</h2>
                <p className="mt-3 text-white/90">{offer.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="text-3xl font-extrabold text-white">{formatPrice(offer.price)}</span>
                  {offer.oldPrice != null && <s className="text-white/80">{formatPrice(offer.oldPrice)}</s>}
                  <a href={`tel:${site.phoneE164}`} className="rounded-2xl bg-ink px-6 py-3 font-extrabold text-amber hover:bg-coal">Comandă oferta</a>
                </div>
              </div>
              <div className="hidden items-center justify-center p-10 text-[8rem] md:flex" aria-hidden="true">{offer.emoji}</div>
            </div>
          </section>
        )}

        <MenuOrder />

        {/* LIVRARE + PROGRAM */}
        <section id="livrare" aria-labelledby="livrare-titlu" className="bg-coal py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-widest text-amber">Livrare</p>
              <h2 id="livrare-titlu" className="text-3xl font-extrabold md:text-4xl">Livrăm cald, la ușa ta</h2>
              <ul className="mt-6 space-y-3">
                {[delivery.zone, delivery.minOrder, delivery.fee, delivery.time, delivery.payment].map((t) => (
                  <li key={t} className="flex gap-3 rounded-xl bg-ink p-4">
                    <span aria-hidden="true">🛵</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-widest text-amber">Program</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Când ne găsești</h2>
              <dl className="mt-6 divide-y divide-ember rounded-xl bg-ink">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between p-4">
                    <dt className="font-semibold">{h.days}</dt>
                    <dd className="text-amber">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* RECENZII */}
        <section aria-labelledby="recenzii-titlu" className="mx-auto max-w-6xl px-4 py-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-amber">Recenzii</p>
          <h2 id="recenzii-titlu" className="text-3xl font-extrabold md:text-4xl">
            {site.google.rating} din 5 pe Google
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/85">
            Din {site.google.reviewsLabel}. Citește ce spun clienții direct pe Google, sau lasă-ne și tu o părere.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.google.url} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Vezi recenziile pe Google</a>
            <a href={site.facebook.url} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
              Facebook · {site.facebook.followers} urmăritori
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-titlu" className="bg-coal py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-widest text-amber">Contact</p>
              <h2 id="contact-titlu" className="text-3xl font-extrabold md:text-4xl">Hai pe Bulevard</h2>
              <address className="mt-6 space-y-4 not-italic">
                <p className="text-lg">
                  <span aria-hidden="true">📍 </span>{site.address.street}, {site.city}
                </p>
                <p>
                  <a href={`tel:${site.phoneE164}`} className="text-2xl font-extrabold text-amber hover:underline">
                    <span aria-hidden="true">📞 </span>{site.phoneDisplay}
                  </a>
                </p>
              </address>
              <a href={site.google.url} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} mt-6`}>Deschide în Google Maps</a>
            </div>
            <iframe
              title={`Hartă: ${site.name}, ${site.address.street}, ${site.city}`}
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-2xl border-0 md:h-full md:min-h-80"
            />
          </div>
        </section>
      </main>

      <footer className="px-4 pb-28 pt-10 text-center text-sm text-cream/75 md:pb-10">
        <p>© {new Date().getFullYear()} {site.name} · {site.address.street}, {site.city}</p>
        {site.demo.enabled && <p className="mt-1">{site.demo.text}</p>}
      </footer>

      {/* Buton fix pe mobil */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-ember bg-ink/95 p-3 md:hidden">
        <a href={`tel:${site.phoneE164}`} className="rounded-xl bg-flame py-3 text-center font-extrabold text-white">📞 Sună</a>
        <a href="#meniu" className="rounded-xl bg-amber py-3 text-center font-extrabold text-ink">🛒 Comandă</a>
      </div>
    </>
  );
}

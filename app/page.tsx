import MenuOrder from "@/components/MenuOrder";
import { site, formatPrice } from "@/content/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-2xl bg-amber px-7 py-4 text-lg font-extrabold text-white shadow-lg shadow-amber/25 hover:bg-[#963a15]";
const btnSecondary = "inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-flame bg-coal px-7 py-4 text-lg font-extrabold text-flame hover:bg-flame hover:text-white";

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

      <header className="mosaic text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex flex-col leading-none" aria-label="Fast Food Bulevard — început">
          <span className="sign text-2xl font-bold text-[#ffb37a]">BULEVARD</span>
          <span className="mt-1 rounded-sm bg-amber px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-[0.2em] text-white">FOOD SHOP &amp; BISTRO</span>
        </a>
        <nav aria-label="Principal" className="hidden gap-6 text-sm font-semibold md:flex [&_a:hover]:text-[#ffb37a]">
          <a href="#meniu" >Meniu</a>
          <a href="#oferta" >Oferta zilei</a>
          <a href="#livrare" >Livrare</a>
          <a href="#contact" >Contact</a>
        </nav>
        <a href={`tel:${site.phoneE164}`} className="hidden rounded-full bg-amber px-4 py-2 text-sm font-bold text-white hover:bg-[#963a15] md:inline-block">
          {site.phoneDisplay}
        </a>
        </div>
        <div className="chairs" aria-hidden="true" />
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
                Fast food pe <span className="text-amber">Bulevardul</span> <span className="text-flame">Victoriei</span>
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
            <div className="relative mx-auto w-full max-w-md">
              <img src={`${base}/img/fatada.jpg`} alt="Fațada localului Bulevard Food Shop & Bistro de pe Bd. Victoriei, Tecuci" width={449} height={445} fetchPriority="high" className="aspect-square w-full rounded-[2rem] object-cover shadow-2xl shadow-flame/25 ring-8 ring-coal" />
              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-coal px-4 py-3 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-flame">Food shop · Bistro · Cofetărie</p>
                <p className="font-extrabold">Pe Bd. Victoriei nr. 8</p>
              </div>
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

        {/* LOCALUL */}
        <section aria-labelledby="local-titlu" className="mx-auto max-w-6xl px-4 py-16">
          <p className="font-semibold uppercase tracking-widest text-amber">Localul</p>
          <h2 id="local-titlu" className="text-3xl font-extrabold md:text-4xl">Stai la masă sau iei la pachet</h2>
          <p className="mt-3 max-w-2xl text-cream/85">Sală luminoasă cu scaune colorate, vitrină cu preparate și cofetărie, la parterul clădirii de pe bulevard.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <img src={`${base}/img/interior.jpg`} alt="Interiorul localului: mese, vitrina cu preparate și raftul de produse" width={516} height={387} loading="lazy" className="h-full w-full rounded-3xl object-cover" />
            <img src={`${base}/img/sala.jpg`} alt="Sala de mese cu scaune roșii, verzi, galbene și portocalii" width={535} height={958} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover md:aspect-auto md:h-full" />
          </div>
          <div className="chairs mt-8 rounded-full" aria-hidden="true" />
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

      <footer className="mosaic text-white/90 [&_*]:text-white/90 px-4 pb-28 pt-10 text-center text-sm md:pb-10">
        <p>© {new Date().getFullYear()} {site.name} · {site.address.street}, {site.city}</p>
        {site.demo.enabled && <p className="mt-1">{site.demo.text}</p>}
      </footer>

      {/* Buton fix pe mobil */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-ember bg-ink/95 p-3 md:hidden">
        <a href={`tel:${site.phoneE164}`} className="rounded-xl bg-flame py-3 text-center font-extrabold text-white">📞 Sună</a>
        <a href="#meniu" className="rounded-xl bg-amber py-3 text-center font-extrabold text-white">🛒 Comandă</a>
      </div>
    </>
  );
}

/**
 * TOT conținutul site-ului se editează aici.
 * Orice text care conține „[de completat]” trebuie confirmat de proprietar înainte de lansare.
 * Prețurile: pune un număr (ex. 22) în loc de `null` când prețul e confirmat.
 */

export const TBD = "[de completat]";

export const site = {
  name: "Fast Food Bulevard",
  city: "Tecuci",
  address: {
    street: "Bd. Victoriei nr. 8",
    locality: "Tecuci",
    region: "Galați",
    country: "RO",
  },
  phoneDisplay: "0729 883 195",
  phoneE164: "+40729883195",
  /** Număr WhatsApp pentru comenzi, fără „+”. [de completat] — confirmă că 0729 883 195 are WhatsApp. */
  whatsapp: "40729883195",
  /**
   * Endpoint Formspree pentru comenzile trimise din site (ex. "https://formspree.io/f/abcdwxyz").
   * Gol = formularul afișează un mesaj clar și propune WhatsApp / telefon. [de completat]
   */
  formspreeEndpoint: "",
  google: {
    rating: "4,1",
    ratingValue: 4.1,
    reviews: "720+",
    reviewsLabel: "peste 720 de recenzii",
    url: "https://www.google.com/maps/search/?api=1&query=Fast+Food+Bulevard+Bd.+Victoriei+8+Tecuci",
  },
  facebook: {
    followers: "3.000+",
    followersText: "peste 3.000 de oameni",
    /** [de completat] link direct către pagina de Facebook. Gol = butonul nu apare. */
    url: "",
  },
  mapEmbed: "https://maps.google.com/maps?q=Bd.+Victoriei+8,+Tecuci&z=16&output=embed",
  siteUrl: "https://manolacheioan.github.io/bulevard-demo",

  /** Bandă de demo — pune `false` la lansare. */
  demo: {
    enabled: true,
    text: "Demo realizat de Manotek — propunere pentru Fast Food Bulevard",
  },

  seo: {
    title: "Fast Food Bulevard Tecuci — shaorma, burgeri, pizza | Comenzi 0729 883 195",
    description:
      "Fast food pe Bd. Victoriei nr. 8, în centrul Tecuciului. Shaorma, burgeri, pizza și cartofi, la pachet sau cu livrare. Comandă la 0729 883 195 sau pe WhatsApp.",
  },

  hero: {
    eyebrow: "Bd. Victoriei nr. 8 · Tecuci",
    titleA: "Fast food pe",
    titleB: "Bulevardul Victoriei",
    subtitle: "Shaorma, burgeri, pizza și cartofi, făcute pe loc, în centrul Tecuciului. Alegi din meniu și comanzi în câteva secunde.",
  },

  offer: {
    enabled: true,
    label: "Oferta zilei",
    title: "Shaorma + cartofi + băutură",
    description: "Meniul complet, la un preț bun. Conținutul ofertei se schimbă zilnic.",
    /** true = ofertă-exemplu, afișată cu eticheta „[de completat]”. */
    example: true,
    price: null as number | null,
    oldPrice: null as number | null,
    validity: TBD,
  },

  delivery: {
    zone: TBD,
    minOrder: TBD,
    fee: TBD,
    time: TBD,
    payment: "Plătești la livrare sau în local. Fără plată online.",
  },

  hours: [
    { days: "Luni – Vineri", time: TBD },
    { days: "Sâmbătă", time: TBD },
    { days: "Duminică", time: TBD },
  ],
} as const;

export type CategoryId = "shaorma" | "burgeri" | "pizza" | "cartofi" | "bauturi" | "sosuri";

/** `image` = numele fișierului din public/images (fără -640/-1280). `null` = placeholder premium. */
export const categories: { id: CategoryId; label: string; image: string | null }[] = [
  { id: "shaorma", label: "Shaorma", image: "shaorma" },
  { id: "burgeri", label: "Burgeri", image: "burgeri" },
  { id: "pizza", label: "Pizza", image: "pizza" },
  { id: "cartofi", label: "Cartofi", image: "cartofi" },
  { id: "bauturi", label: "Băuturi", image: null },
  { id: "sosuri", label: "Sosuri", image: "sosuri" },
];

export type MenuItem = {
  id: string;
  category: CategoryId;
  name: string;
  description: string;
  /** Preț în lei; `null` = „[de completat]”. */
  price: number | null;
  /** true = produs-exemplu, afișat cu eticheta „[de completat]”. Șterge când e produs real. */
  example?: boolean;
};

/** Produse-EXEMPLU. Înlocuiește cu meniul real al localului. */
export const menu: MenuItem[] = [
  { id: "sh-pui", category: "shaorma", name: "Shaorma de pui", description: `Ingrediente ${TBD}`, price: null, example: true },
  { id: "sh-mixta", category: "shaorma", name: "Shaorma mixtă", description: `Ingrediente ${TBD}`, price: null, example: true },
  { id: "sh-farfurie", category: "shaorma", name: "Shaorma la farfurie", description: `Ingrediente ${TBD}`, price: null, example: true },
  { id: "bg-clasic", category: "burgeri", name: "Burger clasic", description: `Ingrediente ${TBD}`, price: null, example: true },
  { id: "bg-cheese", category: "burgeri", name: "Cheeseburger", description: `Ingrediente ${TBD}`, price: null, example: true },
  { id: "bg-crispy", category: "burgeri", name: "Burger crispy de pui", description: `Ingrediente ${TBD}`, price: null, example: true },
  { id: "pz-marg", category: "pizza", name: "Pizza Margherita", description: `Ingrediente și mărime ${TBD}`, price: null, example: true },
  { id: "pz-quattro", category: "pizza", name: "Pizza Quattro Stagioni", description: `Ingrediente și mărime ${TBD}`, price: null, example: true },
  { id: "pz-casei", category: "pizza", name: "Pizza casei", description: `Ingrediente și mărime ${TBD}`, price: null, example: true },
  { id: "cf-mici", category: "cartofi", name: "Cartofi prăjiți, porție mică", description: `Gramaj ${TBD}`, price: null, example: true },
  { id: "cf-mari", category: "cartofi", name: "Cartofi prăjiți, porție mare", description: `Gramaj ${TBD}`, price: null, example: true },
  { id: "cf-wedges", category: "cartofi", name: "Cartofi wedges", description: `Gramaj ${TBD}`, price: null, example: true },
  { id: "bt-cola", category: "bauturi", name: "Băutură răcoritoare 0,5 l", description: `Sortimente ${TBD}`, price: null, example: true },
  { id: "bt-apa", category: "bauturi", name: "Apă plată sau minerală", description: `Mărime ${TBD}`, price: null, example: true },
  { id: "ss-usturoi", category: "sosuri", name: "Sos de usturoi", description: `Gramaj ${TBD}`, price: null, example: true },
  { id: "ss-ketchup", category: "sosuri", name: "Ketchup dulce sau picant", description: `Gramaj ${TBD}`, price: null, example: true },
];

export const formatPrice = (p: number | null) => (p == null ? TBD : `${p.toLocaleString("ro-RO")} lei`);

/** Pagina /propunere — pentru proprietar. Prețurile pachetelor le stabilește Manotek. */
export const proposal = {
  deliveryTime: TBD,
  packages: [
    {
      name: "Prezentare",
      price: null as number | null,
      tagline: "Site rapid, pe telefon, cu meniu și contact.",
      features: ["Site pe domeniul vostru", "Meniu pe categorii, editabil", "Buton „Sună” și hartă", "SEO local de bază"],
      recommended: false,
    },
    {
      name: "Comenzi",
      price: null as number | null,
      tagline: "Tot ce vedeți în demo: clienții comandă singuri.",
      features: ["Tot din Prezentare", "Coș de comandă: formular + WhatsApp", "Oferta zilei, schimbată oricând", "Pozele voastre, prelucrate profesional", "Configurare Google Business", "Suport 3 luni"],
      recommended: true,
    },
    {
      name: "Comenzi + Administrare",
      price: null as number | null,
      tagline: "Noi ne ocupăm de site, voi de mâncare.",
      features: ["Tot din Comenzi", "Actualizăm meniul și prețurile la cerere", "Oferta zilei postată de noi", "Raport lunar de vizite și apeluri", "Suport 12 luni"],
      recommended: false,
    },
  ],
};

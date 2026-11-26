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
    postalCode: "", // [de completat]
    country: "RO",
  },
  phoneDisplay: "0729 883 195",
  phoneE164: "+40729883195",
  /** Număr WhatsApp pentru comenzi, fără „+”. [de completat] — confirmă că 0729 883 195 are WhatsApp. */
  whatsapp: "40729883195",
  google: {
    rating: "4,1",
    reviewsLabel: "peste 720 de recenzii",
    url: "https://www.google.com/maps/search/?api=1&query=Fast+Food+Bulevard+Bd.+Victoriei+8+Tecuci",
  },
  facebook: {
    label: "Fast Food Bulevard",
    followers: "3.000+",
    url: "https://www.facebook.com/search/top?q=Fast%20Food%20Bulevard%20Tecuci", // [de completat] link direct către pagină
  },
  mapEmbed:
    "https://maps.google.com/maps?q=Bd.+Victoriei+8,+Tecuci&z=16&output=embed",
  siteUrl: "https://manolacheioan.github.io/bulevard-demo/",

  /** Bandă de demo — pune `false` la lansare. */
  demo: {
    enabled: true,
    text: "Demo realizat de Manotek — propunere pentru Fast Food Bulevard",
  },

  hero: {
    title: "Fast food pe Bulevardul Victoriei",
    subtitle:
      "Shaorma, burgeri, pizza și cartofi, pregătite pe loc în centrul Tecuciului. Alege din meniu și comandă la telefon sau pe WhatsApp.",
  },

  offer: {
    enabled: true,
    label: "Oferta zilei",
    title: `Meniu shaorma + cartofi + băutură ${TBD}`,
    description: `Descrierea ofertei ${TBD}. Se schimbă din content/site.ts.`,
    price: null as number | null,
    oldPrice: null as number | null,
    emoji: "🌯",
  },

  delivery: {
    zone: `Zona de livrare ${TBD} (ex. Tecuci, cartierele din jur)`,
    minOrder: `Comandă minimă ${TBD}`,
    fee: `Taxă de livrare ${TBD}`,
    time: `Timp estimat ${TBD}`,
    payment: "Plata se face la livrare sau în local. Nu există plată online.",
  },

  hours: [
    { days: "Luni – Vineri", time: TBD },
    { days: "Sâmbătă", time: TBD },
    { days: "Duminică", time: TBD },
  ],
} as const;

export type CategoryId = "shaorma" | "burgeri" | "pizza" | "cartofi" | "bauturi" | "sosuri";

export const categories: { id: CategoryId; label: string; emoji: string }[] = [
  { id: "shaorma", label: "Shaorma", emoji: "🌯" },
  { id: "burgeri", label: "Burgeri", emoji: "🍔" },
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "cartofi", label: "Cartofi", emoji: "🍟" },
  { id: "bauturi", label: "Băuturi", emoji: "🥤" },
  { id: "sosuri", label: "Sosuri", emoji: "🥫" },
];

export type MenuItem = {
  id: string;
  category: CategoryId;
  name: string;
  description: string;
  /** Preț în lei; `null` = „[de completat]”. */
  price: number | null;
};

/** Produse-EXEMPLU. Înlocuiește cu meniul real al localului. */
export const menu: MenuItem[] = [
  { id: "sh-pui", category: "shaorma", name: "Shaorma de pui [de completat]", description: `Ingrediente ${TBD}`, price: null },
  { id: "sh-mixta", category: "shaorma", name: "Shaorma mixtă [de completat]", description: `Ingrediente ${TBD}`, price: null },
  { id: "sh-farfurie", category: "shaorma", name: "Shaorma la farfurie [de completat]", description: `Ingrediente ${TBD}`, price: null },
  { id: "bg-clasic", category: "burgeri", name: "Burger clasic [de completat]", description: `Ingrediente ${TBD}`, price: null },
  { id: "bg-cheese", category: "burgeri", name: "Cheeseburger [de completat]", description: `Ingrediente ${TBD}`, price: null },
  { id: "bg-crispy", category: "burgeri", name: "Burger crispy de pui [de completat]", description: `Ingrediente ${TBD}`, price: null },
  { id: "pz-marg", category: "pizza", name: "Pizza Margherita [de completat]", description: `Ingrediente și mărime ${TBD}`, price: null },
  { id: "pz-quattro", category: "pizza", name: "Pizza Quattro Stagioni [de completat]", description: `Ingrediente și mărime ${TBD}`, price: null },
  { id: "pz-casei", category: "pizza", name: "Pizza casei [de completat]", description: `Ingrediente și mărime ${TBD}`, price: null },
  { id: "cf-mici", category: "cartofi", name: "Cartofi prăjiți porție mică [de completat]", description: `Gramaj ${TBD}`, price: null },
  { id: "cf-mari", category: "cartofi", name: "Cartofi prăjiți porție mare [de completat]", description: `Gramaj ${TBD}`, price: null },
  { id: "cf-wedges", category: "cartofi", name: "Cartofi wedges [de completat]", description: `Gramaj ${TBD}`, price: null },
  { id: "bt-cola", category: "bauturi", name: "Băutură răcoritoare 0,5 l [de completat]", description: `Sortimente ${TBD}`, price: null },
  { id: "bt-apa", category: "bauturi", name: "Apă plată / minerală [de completat]", description: `Mărime ${TBD}`, price: null },
  { id: "ss-usturoi", category: "sosuri", name: "Sos de usturoi [de completat]", description: `Gramaj ${TBD}`, price: null },
  { id: "ss-ketchup", category: "sosuri", name: "Ketchup dulce / picant [de completat]", description: `Gramaj ${TBD}`, price: null },
];

export const formatPrice = (p: number | null) => (p == null ? TBD : `${p.toLocaleString("ro-RO")} lei`);

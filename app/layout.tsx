import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import "./globals.css";

const description = `${site.name} — fast food pe ${site.address.street}, ${site.city}. Shaorma, burgeri, pizza, cartofi. Comenzi la ${site.phoneDisplay}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: `${site.name} — Fast food în ${site.city}`,
  description,
  openGraph: { title: site.name, description, locale: "ro_RO", type: "website" },
  // Demo: nu indexăm până nu aprobă proprietarul. La lansare, pune site.demo.enabled = false.
  robots: site.demo.enabled ? { index: false, follow: false } : { index: true, follow: true },
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍔</text></svg>" },
};

export const viewport: Viewport = { themeColor: "#140d0b", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: site.name,
  url: site.siteUrl,
  telephone: site.phoneE164,
  servesCuisine: ["Fast food", "Shaorma", "Burgeri", "Pizza"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

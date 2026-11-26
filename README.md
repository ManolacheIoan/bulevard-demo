# Fast Food Bulevard — site demo

Propunere de site pentru Fast Food Bulevard (Bd. Victoriei nr. 8, Tecuci). Demo realizat de Manotek.

- Next.js (App Router) + TypeScript + Tailwind 4, export static pe GitHub Pages (`.github/workflows/pages.yml`).
- **Tot conținutul se editează în `content/site.ts`**: meniu, prețuri, ofertă, livrare, program, linkuri.
- Tot ce e marcat `[de completat]` trebuie confirmat de proprietar.
- Comenzi: formular trimis prin **Formspree** (`site.formspreeEndpoint`) + variantă WhatsApp cu mesaj precompletat.
- Imagini: `public/images` (WebP 640/1280). Surse și autori în `CREDITS.md`.
- La lansare: `site.demo.enabled = false` (scoate banda demo) și completează `formspreeEndpoint`, `facebook.url`.

```bash
npm install
npm run dev        # local
npm run lint && npm run typecheck
npm run build      # export static în out/
```

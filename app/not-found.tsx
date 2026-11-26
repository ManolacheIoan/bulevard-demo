const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <span className="sign text-3xl font-bold text-amber">BULEVARD</span>
      <h1 className="mt-4 text-3xl font-extrabold">Pagina nu există</h1>
      <p className="mt-2 text-cream/75">Dar meniul e la un click distanță.</p>
      <a href={`${base}/`} className="mt-6 rounded-2xl bg-amber px-6 py-3.5 font-extrabold text-white hover:bg-amber-dark">Înapoi la meniu</a>
    </main>
  );
}
